import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { ArrayFieldTemplateProps } from '@rjsf/utils';

export default function ArrayFieldTemplate(props: ArrayFieldTemplateProps) {
  const {
    items,
    canAdd,
    onAddClick,
    title,
    required,
    uiSchema,
    disabled,
    readonly,
  } = props;

  return (
    <Grid container spacing={2}>
      {title && (
        <Grid item xs={12}>
          <strong>
            {title}
            {required ? ' *' : null}
          </strong>
        </Grid>
      )}
      {items.map((item) => (
        <Grid item xs={12} key={item.key}>
          <Paper elevation={0} style={{ padding: 8 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs>
                {item.children}
              </Grid>
              {item.hasToolbar && (
                <Grid item>
                  <IconButton
                    aria-label="Remove"
                    onClick={item.onDropIndexClick(item.index)}
                    disabled={disabled || readonly}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
      ))}
      {canAdd && (
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={onAddClick}
            disabled={disabled || readonly}
            startIcon={<AddIcon />}
          >
            Add Item
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
