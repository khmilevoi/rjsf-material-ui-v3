import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ErrorListProps } from '@rjsf/utils';

export default function ErrorListTemplate({ errors }: ErrorListProps) {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <Paper elevation={0} style={{ padding: 16, marginBottom: 16 }}>
      <Typography variant="subtitle1" color="error">
        Errors
      </Typography>
      <List dense>
        {errors.map((error) => (
          <ListItem key={error.stack}>
            <ListItemText primary={error.stack} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
