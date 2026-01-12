import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { HelpProps } from '@rjsf/utils';

export default function HelpTemplate({ help }: HelpProps) {
  if (!help) {
    return null;
  }

  return <FormHelperText>{help}</FormHelperText>;
}
