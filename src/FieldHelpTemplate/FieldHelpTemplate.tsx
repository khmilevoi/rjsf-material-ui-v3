import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FieldHelpProps, FormContextType, helpId, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';

/** The `FieldHelpTemplate` component renders any help desired for a field
 *
 * @param props - The `FieldHelpProps` to be rendered
 */
export default function FieldHelpTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldHelpProps<T, S, F>) {
  const { idSchema, help } = props;
  if (!help) {
    return null;
  }

  return (
    <FormHelperText component="div" id={helpId<T>(idSchema)} style={{ marginTop: '5px' }}>
      {help}
    </FormHelperText>
  );
}
