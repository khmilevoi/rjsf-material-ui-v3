import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ArrayFieldTemplateItemType } from '@rjsf/utils';

export default function ArrayFieldItemTemplate(props: ArrayFieldTemplateItemType) {
  const {
    children,
    className,
    disabled,
    hasToolbar,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    hasCopy,
    index,
    onCopyIndexClick,
    onDropIndexClick,
    onReorderClick,
    readonly,
    registry,
    uiSchema,
  } = props;
  const ButtonTemplates = registry.templates.ButtonTemplates;

  return (
    <Grid container spacing={1} alignItems="center" className={className}>
      <Grid item xs>
        {children}
      </Grid>
      {hasToolbar && (
        <Grid item>
          {hasMoveUp && (
            <ButtonTemplates.MoveUpButton
              title="Move up"
              disabled={disabled || readonly}
              onClick={onReorderClick(index, index - 1)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {hasMoveDown && (
            <ButtonTemplates.MoveDownButton
              title="Move down"
              disabled={disabled || readonly}
              onClick={onReorderClick(index, index + 1)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {hasCopy && (
            <ButtonTemplates.CopyButton
              title="Copy"
              disabled={disabled || readonly}
              onClick={onCopyIndexClick(index)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {hasRemove && (
            <ButtonTemplates.RemoveButton
              title="Remove"
              disabled={disabled || readonly}
              onClick={onDropIndexClick(index)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
        </Grid>
      )}
    </Grid>
  );
}
