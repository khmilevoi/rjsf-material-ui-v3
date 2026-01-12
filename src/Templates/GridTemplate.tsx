import React from 'react';
import Grid from '@material-ui/core/Grid';

type GridTemplateProps = React.ComponentProps<typeof Grid> & {
  children?: React.ReactNode;
  column?: boolean;
};

export default function GridTemplate(props: GridTemplateProps) {
  const { children, column, ...rest } = props;
  return (
    <Grid container={!column} {...rest}>
      {children}
    </Grid>
  );
}
