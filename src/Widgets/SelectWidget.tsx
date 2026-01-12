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
    multiple,
  } = props;

  const { enumOptions, enumDisabled, emptyValue } = options;
  const isMultiple = Boolean(multiple);
  const showError = rawErrors && rawErrors.length > 0;
  const selectedIndexes = isMultiple
    ? (enumOptionsIndexForValue(value, enumOptions, true) as string[] | undefined) ?? []
    : enumOptionsIndexForValue(value, enumOptions) ?? '';

  return (
    <FormControl fullWidth error={showError} disabled={disabled || readonly}>
      <InputLabel htmlFor={id} required={required}>
        {label}
      </InputLabel>
      <Select
        id={id}
        value={selectedIndexes}
        onChange={(event) => {
          const targetValue = event.target.value as string | string[];
          if (isMultiple) {
            const indexes = Array.isArray(targetValue) ? targetValue : [];
            const next = indexes
              .map((index) =>
                enumOptions && enumOptions[Number(index)] ? enumOptions[Number(index)].value : undefined
              )
              .filter((optionValue) => optionValue !== undefined);
            onChange(next);
            return;
          }

          const index = targetValue === '' ? '' : Number(targetValue);
          if (index === '') {
            onChange(emptyValue ?? '');
            return;
          }

          const next = enumOptions && enumOptions[index] ? enumOptions[index].value : emptyValue;
          onChange(next);
        }}
        inputProps={{ id }}
        displayEmpty={!isMultiple}
        multiple={isMultiple}
      >
        {!isMultiple && placeholder && (
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
