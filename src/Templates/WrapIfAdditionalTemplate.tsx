import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { WrapIfAdditionalTemplateProps } from '@rjsf/utils';

export default function WrapIfAdditionalTemplate(props: WrapIfAdditionalTemplateProps) {
  const {
    children,
    classNames,
    id,
    label,
    onDropPropertyClick,
    onKeyChange,
    required,
    readonly,
    disabled,
    schema,
    uiSchema,
    registry,
  } = props;

  if (!props.schema.additionalProperties) {
    return <div className={classNames}>{children}</div>;
  }
  const ButtonTemplates = registry.templates.ButtonTemplates;

  return (
    <Grid container spacing={8} alignItems="center" className={classNames}>
      <Grid item xs={5}>
        <TextField
          id={`${id}-key`}
          label="Key"
          required={required}
          value={label}
          onChange={(event) => onKeyChange(event.target.value)}
          disabled={disabled || readonly}
          fullWidth
          inputProps={{ 'aria-describedby': `${id}__error` }}
        />
      </Grid>
      <Grid item xs={6}>
        {children}
      </Grid>
      <Grid item xs={1}>
        <ButtonTemplates.RemoveButton
          title="Remove"
          onClick={onDropPropertyClick(label)}
          disabled={disabled || readonly}
          uiSchema={uiSchema}
          registry={registry}
        />
      </Grid>
    </Grid>
  );
}
