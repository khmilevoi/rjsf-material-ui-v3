import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ErrorListProps, TranslatableString } from '@rjsf/utils';

export default function ErrorListTemplate({ errors, registry }: ErrorListProps) {
  if (!errors || errors.length === 0) {
    return null;
  }
  const translateString = registry.translateString;
  const title = translateString
    ? translateString(TranslatableString.ErrorsLabel)
    : 'Errors';

  return (
    <Paper elevation={0} style={{ padding: 16, marginBottom: 16 }}>
      <Typography variant="subtitle1" color="error">
        {title}
      </Typography>
      <List dense>
        {errors.map((error, index) => (
          <ListItem key={error.stack ?? error.message ?? String(index)}>
            <ListItemText primary={error.stack || error.message} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
