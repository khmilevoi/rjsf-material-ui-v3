import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { WidgetProps, enumOptionsIndexForValue } from '@rjsf/utils';

export default function SelectWidget(props: WidgetProps) {
  const {
    id,
    label,
    required,
    disabled,
    readonly,
    value,
    onChange,
    placeholder,
    rawErrors,
    options,
  } = props;

  const { enumOptions, enumDisabled } = options;
  const showError = rawErrors && rawErrors.length > 0;

  return (
    <FormControl fullWidth error={showError} disabled={disabled || readonly}>
      <InputLabel htmlFor={id} required={required}>
        {label}
      </InputLabel>
      <Select
        id={id}
        value={enumOptionsIndexForValue(value, enumOptions) ?? ''}
        onChange={(event) => {
          const index = event.target.value as number;
          const next = enumOptions && enumOptions[index] ? enumOptions[index].value : undefined;
          onChange(next);
        }}
        displayEmpty
        inputProps={{ id }}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {enumOptions?.map((option, index) => (
          <MenuItem key={option.value as string} value={index} disabled={enumDisabled?.includes(option.value)}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {showError && <FormHelperText>{rawErrors?.join(', ')}</FormHelperText>}
    </FormControl>
  );
}
