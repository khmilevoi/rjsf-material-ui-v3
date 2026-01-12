import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import RemoveIcon from '@material-ui/icons/Remove';
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
  } = props;

  if (!props.schema.additionalProperties) {
    return <div className={classNames}>{children}</div>;
  }

  return (
    <Grid container spacing={1} alignItems="center" className={classNames}>
      <Grid item xs={5}>
        <TextField
          id={`${id}-key`}
          label="Key"
          required={required}
          value={label}
          onChange={(event) => onKeyChange(event.target.value)}
          disabled={disabled || readonly}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        {children}
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={onDropPropertyClick(label)} disabled={disabled || readonly}>
          <RemoveIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
