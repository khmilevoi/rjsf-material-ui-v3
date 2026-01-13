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
    <Grid container spacing={8} alignItems="center" className={className}>
      <Grid item xs>
        {children}
      </Grid>
      {hasToolbar && (
        <Grid item>
          {hasMoveUp && (
            <ButtonTemplates.MoveUpButton
              disabled={disabled || readonly}
              onClick={onReorderClick(index, index - 1)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {hasMoveDown && (
            <ButtonTemplates.MoveDownButton
              disabled={disabled || readonly}
              onClick={onReorderClick(index, index + 1)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {hasCopy && (
            <ButtonTemplates.CopyButton
              disabled={disabled || readonly}
              onClick={onCopyIndexClick(index)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {hasRemove && (
            <ButtonTemplates.RemoveButton
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
