import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FieldHelpProps, helpId } from '@rjsf/utils';

export default function HelpTemplate({ help, fieldPathId }: FieldHelpProps) {
  if (!help) {
    return null;
  }

  return <FormHelperText id={helpId(fieldPathId)}>{help}</FormHelperText>;
}
