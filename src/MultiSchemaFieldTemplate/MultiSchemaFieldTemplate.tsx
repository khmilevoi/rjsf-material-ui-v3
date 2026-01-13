import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import { FormContextType, MultiSchemaFieldTemplateProps, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';

export default function MultiSchemaFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: MultiSchemaFieldTemplateProps<T, S, F>) {
  const { optionSchemaField, selector } = props;

  return (
    <Box mb={2}>
      <FormControl fullWidth style={{ marginBottom: 16 }}>
        {selector}
      </FormControl>
      {optionSchemaField}
    </Box>
  );
}
