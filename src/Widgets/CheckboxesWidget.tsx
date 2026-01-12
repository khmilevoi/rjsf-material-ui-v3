import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { WidgetProps } from '@rjsf/utils';

export default function CheckboxesWidget(props: WidgetProps) {
  const { id, label, value, disabled, readonly, onChange, options, rawErrors } = props;
  const showError = rawErrors && rawErrors.length > 0;
  const enumOptions = options.enumOptions ?? [];
  const enumDisabled = options.enumDisabled ?? [];
  const selectedValues = Array.isArray(value) ? value : [];

  const handleToggle = (optionValue: unknown) => () => {
    const nextValue = selectedValues.includes(optionValue)
      ? selectedValues.filter((item) => item !== optionValue)
      : [...selectedValues, optionValue];
    onChange(nextValue);
  };

  return (
    <FormControl error={showError} disabled={disabled || readonly} id={id}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormGroup>
        {enumOptions.map((option) => (
          <FormControlLabel
            key={String(option.value)}
            control={
              <Checkbox
                checked={selectedValues.includes(option.value)}
                onChange={handleToggle(option.value)}
                value={String(option.value)}
                disabled={enumDisabled.includes(option.value)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      {showError && <FormHelperText>{rawErrors?.join(', ')}</FormHelperText>}
    </FormControl>
  );
}
