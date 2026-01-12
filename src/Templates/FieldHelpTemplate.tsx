import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { RichHelp } from '@rjsf/core';
import { FieldHelpProps, helpId } from '@rjsf/utils';

export default function FieldHelpTemplate(props: FieldHelpProps) {
  const { fieldPathId, help, uiSchema, registry } = props;
  if (!help) {
    return null;
  }

  return (
    <FormHelperText component="div" id={helpId(fieldPathId)} style={{ marginTop: 5 }}>
      <RichHelp help={help} registry={registry} uiSchema={uiSchema} />
    </FormHelperText>
  );
}
