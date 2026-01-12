import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ObjectFieldTemplateProps } from '@rjsf/utils';

export default function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  const { title, description, properties } = props;

  return (
    <Paper elevation={0} style={{ padding: 8 }}>
      <Grid container spacing={2}>
        {title && (
          <Grid item xs={12}>
            <strong>{title}</strong>
          </Grid>
        )}
        {description && (
          <Grid item xs={12}>
            {description}
          </Grid>
        )}
        {properties.map((element) => (
          <Grid item xs={12} key={element.name}>
            {element.content}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
