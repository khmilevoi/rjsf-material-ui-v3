import React from 'react';
import TextField from '@material-ui/core/TextField';
import { WidgetProps } from '@rjsf/utils';

export default function TextareaWidget(props: WidgetProps) {
  const {
    id,
    label,
    value,
    required,
    disabled,
    readonly,
    onChange,
    onBlur,
    onFocus,
    autofocus,
    placeholder,
    rawErrors,
    options,
  } = props;

  const showError = rawErrors && rawErrors.length > 0;
  const rows = (options.rows as number | undefined) ?? 4;

  return (
    <TextField
      id={id}
      fullWidth
      multiline
      minRows={rows}
      label={label}
      required={required}
      value={value ?? ''}
      placeholder={placeholder}
      disabled={disabled}
      autoFocus={autofocus}
      error={showError}
      helperText={showError ? rawErrors?.join(', ') : undefined}
      InputProps={{ readOnly: readonly }}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onBlur && ((event) => onBlur(id, event.target.value))}
      onFocus={onFocus && ((event) => onFocus(id, event.target.value))}
    />
  );
}
