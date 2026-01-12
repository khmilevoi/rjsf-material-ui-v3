import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FieldHelpProps, helpId } from '@rjsf/utils';

export default function HelpTemplate({ help, idSchema }: FieldHelpProps) {
  if (!help) {
    return null;
  }

  return <FormHelperText id={helpId(idSchema)}>{help}</FormHelperText>;
}
