import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { WidgetProps } from '@rjsf/utils';

export default function CheckboxWidget(props: WidgetProps) {
  const { id, label, value, disabled, readonly, onChange } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          id={id}
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
          disabled={disabled || readonly}
        />
      }
      label={label}
    />
  );
}
