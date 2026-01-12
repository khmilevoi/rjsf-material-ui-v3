import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { WidgetProps, enumOptionsIndexForValue } from '@rjsf/utils';

export default function RadioWidget(props: WidgetProps) {
  const { id, label, value, required, disabled, readonly, onChange, options, rawErrors } = props;
  const { enumOptions, enumDisabled, emptyValue } = options;
  const showError = rawErrors && rawErrors.length > 0;
  const selectedIndex = enumOptionsIndexForValue(value, enumOptions) ?? -1;

  return (
    <FormControl component="fieldset" required={required} error={showError} disabled={disabled || readonly}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        id={id}
        value={selectedIndex}
        onChange={(event) => {
          const index = Number(event.target.value);
          const next = enumOptions && enumOptions[index] ? enumOptions[index].value : emptyValue;
          onChange(next);
        }}
      >
        {enumOptions?.map((option, index) => (
          <FormControlLabel
            key={option.value as string}
            value={index}
            control={<Radio />}
            label={option.label}
            disabled={enumDisabled?.includes(option.value)}
          />
        ))}
      </RadioGroup>
      {showError && <FormHelperText>{rawErrors?.join(', ')}</FormHelperText>}
    </FormControl>
  );
}
