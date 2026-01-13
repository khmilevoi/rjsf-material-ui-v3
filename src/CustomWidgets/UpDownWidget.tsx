import React from 'react';
import TextField from '@material-ui/core/TextField';
import { WidgetProps } from '@rjsf/utils';

export default function UpDownWidget(props: WidgetProps) {
  const { id, label, value, required, disabled, readonly, onChange, schema, options, rawErrors } = props;
  const showError = rawErrors && rawErrors.length > 0;
  const min = options.min ?? schema.minimum;
  const max = options.max ?? schema.maximum;
  const step = options.step ?? schema.multipleOf;

  return (
    <TextField
      id={id}
      type="number"
      fullWidth
      label={label}
      required={required}
      value={value ?? ''}
      onChange={(event) => {
        const nextValue = event.target.value === '' ? undefined : Number(event.target.value);
        onChange(nextValue);
      }}
      disabled={disabled}
      error={showError}
      helperText={showError ? rawErrors?.join(', ') : undefined}
      InputProps={{ readOnly: readonly }}
      inputProps={{ min, max, step }}
    />
  );
}
