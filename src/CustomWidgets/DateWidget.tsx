import React from 'react';
import TextField from '@material-ui/core/TextField';
import { WidgetProps } from '@rjsf/utils';

export default function DateWidget(props: WidgetProps) {
  const { id, label, required, value, onChange, disabled, readonly, rawErrors } = props;
  const showError = rawErrors && rawErrors.length > 0;

  return (
    <TextField
      id={id}
      type="date"
      fullWidth
      label={label}
      required={required}
      value={value ?? ''}
      onChange={(event) => onChange(event.target.value)}
      disabled={disabled}
      error={showError}
      helperText={showError ? rawErrors?.join(', ') : undefined}
      InputProps={{ readOnly: readonly }}
      InputLabelProps={{ shrink: true }}
    />
  );
}
