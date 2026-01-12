import React from 'react';
import TextField from '@material-ui/core/TextField';
import { BaseInputTemplateProps } from '@rjsf/utils';

export default function BaseInputTemplate(props: BaseInputTemplateProps) {
  const {
    id,
    placeholder,
    required,
    readonly,
    disabled,
    type,
    label,
    value,
    onChange,
    onBlur,
    onFocus,
    autofocus,
    rawErrors,
    schema,
    uiSchema,
  } = props;

  const showError = rawErrors && rawErrors.length > 0;
  const helperText = showError ? rawErrors?.join(', ') : undefined;

  return (
    <TextField
      id={id}
      fullWidth
      label={label}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      autoFocus={autofocus}
      type={type}
      value={value ?? ''}
      error={showError}
      helperText={helperText}
      InputProps={{ readOnly: readonly }}
      InputLabelProps={{ shrink: type === 'date' || type === 'datetime-local' }}
      onChange={(event) => onChange(event.target.value === '' ? schema.default : event.target.value)}
      onBlur={onBlur && ((event) => onBlur(id, event.target.value))}
      onFocus={onFocus && ((event) => onFocus(id, event.target.value))}
    />
  );
}
