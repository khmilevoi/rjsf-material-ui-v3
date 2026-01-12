import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FieldHelpProps, helpId } from '@rjsf/utils';

export default function FieldHelpTemplate(props: FieldHelpProps) {
  const { idSchema, help } = props;
  if (!help) {
    return null;
  }

  return (
    <FormHelperText component="div" id={helpId(idSchema)} style={{ marginTop: 5 }}>
      {help}
    </FormHelperText>
  );
}
