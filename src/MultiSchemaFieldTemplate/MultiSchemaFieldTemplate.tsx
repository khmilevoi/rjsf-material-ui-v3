import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Box from '../Box';

type MultiSchemaFieldTemplateProps = {
  optionSchemaField: React.ReactNode;
  selector: React.ReactNode;
};

export default function MultiSchemaFieldTemplate(props: MultiSchemaFieldTemplateProps) {
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
