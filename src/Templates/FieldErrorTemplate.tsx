import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { errorId, FieldErrorProps } from '@rjsf/utils';

export default function FieldErrorTemplate(props: FieldErrorProps) {
  const { errors = [], idSchema } = props;
  if (errors.length === 0) {
    return null;
  }

  const id = errorId(idSchema);

  return (
    <List id={id} dense disablePadding>
      {errors.map((error, index) => (
        <ListItem key={index} disableGutters>
          <FormHelperText component="div" id={`${id}-${index}`}>
            {error}
          </FormHelperText>
        </ListItem>
      ))}
    </List>
  );
}
