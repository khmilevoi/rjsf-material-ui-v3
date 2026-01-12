import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { HelpProps } from '@rjsf/utils';

export default function HelpTemplate({ help, id }: HelpProps) {
  if (!help) {
    return null;
  }

  return <FormHelperText id={id}>{help}</FormHelperText>;
}
