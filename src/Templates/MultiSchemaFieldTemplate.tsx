import React from 'react';
import FormControl from '@material-ui/core/FormControl';

type MultiSchemaFieldTemplateProps = {
  optionSchemaField: React.ReactNode;
  selector: React.ReactNode;
};

export default function MultiSchemaFieldTemplate(props: MultiSchemaFieldTemplateProps) {
  const { optionSchemaField, selector } = props;

  return (
    <div style={{ marginBottom: 16 }}>
      <FormControl fullWidth style={{ marginBottom: 16 }}>
        {selector}
      </FormControl>
      {optionSchemaField}
    </div>
  );
}
