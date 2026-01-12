import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ArrayFieldTemplateProps, getUiOptions } from '@rjsf/utils';

export default function ArrayFieldTemplate(props: ArrayFieldTemplateProps) {
  const {
    items,
    canAdd,
    onAddClick,
    title,
    required,
    uiSchema,
    disabled,
    readonly,
    description,
    schema,
    registry,
  } = props;
  const uiOptions = getUiOptions(uiSchema);
  const titleText = uiOptions.label === false ? undefined : title;
  const addable = uiOptions.addable !== false;
  const orderable = uiOptions.orderable !== false;
  const removable = uiOptions.removable !== false;
  const copyable = uiOptions.copyable !== false;
  const ButtonTemplates = registry.templates.ButtonTemplates;
  const examples = Array.isArray(schema.examples) ? schema.examples : undefined;
  const addButtonLabel = uiOptions.addButtonLabel ?? uiOptions.addText ?? 'Add Item';
  const getAddClickHandler = (example?: unknown) => {
    if (example === undefined) {
      return onAddClick;
    }
    return (event: React.MouseEvent) => {
      const result = (onAddClick as unknown as (value?: unknown) => unknown)(example);
      if (typeof result === 'function') {
        result(event);
        return;
      }
      (onAddClick as unknown as (evt: React.MouseEvent) => void)(event);
    };
  };

  return (
    <Grid container spacing={2}>
      {titleText && (
        <Grid item xs={12}>
          <strong>
            {titleText}
            {required ? ' *' : null}
          </strong>
        </Grid>
      )}
      {description && (
        <Grid item xs={12}>
          {description}
        </Grid>
      )}
      {items.map((item) => (
        <Grid item xs={12} key={item.key}>
          <Paper elevation={0} style={{ padding: 8 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs>
                {item.children}
              </Grid>
              {item.hasToolbar && (orderable || removable || copyable) && (
                <Grid item>
                  {orderable && item.hasMoveUp && (
                    <ButtonTemplates.MoveUpButton
                      title="Move up"
                      onClick={item.onReorderClick(item.index, item.index - 1)}
                      disabled={disabled || readonly}
                    />
                  )}
                  {orderable && item.hasMoveDown && (
                    <ButtonTemplates.MoveDownButton
                      title="Move down"
                      onClick={item.onReorderClick(item.index, item.index + 1)}
                      disabled={disabled || readonly}
                    />
                  )}
                  {copyable && item.hasCopy && (
                    <ButtonTemplates.CopyButton
                      title="Copy"
                      onClick={item.onCopyIndexClick(item.index)}
                      disabled={disabled || readonly}
                    />
                  )}
                  {removable && item.hasRemove && (
                    <ButtonTemplates.RemoveButton
                      title="Remove"
                      onClick={item.onDropIndexClick(item.index)}
                      disabled={disabled || readonly}
                    />
                  )}
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
      ))}
      {canAdd && addable && (
        <Grid item xs={12}>
          {examples && examples.length > 0 ? (
            examples.map((example, index) => {
              const exampleLabel =
                typeof example === 'string' || typeof example === 'number'
                  ? String(example)
                  : addButtonLabel;
              return (
                <ButtonTemplates.AddButton
                  key={`example-${index}`}
                  title={exampleLabel}
                  onClick={getAddClickHandler(example)}
                  disabled={disabled || readonly}
                  uiSchema={uiSchema}
                >
                  {exampleLabel}
                </ButtonTemplates.AddButton>
              );
            })
          ) : (
            <ButtonTemplates.AddButton
              title={addButtonLabel}
              onClick={getAddClickHandler()}
              disabled={disabled || readonly}
              uiSchema={uiSchema}
            >
              {addButtonLabel}
            </ButtonTemplates.AddButton>
          )}
        </Grid>
      )}
    </Grid>
  );
}
