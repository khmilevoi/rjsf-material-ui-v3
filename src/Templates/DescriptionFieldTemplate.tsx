import React from 'react';
import Typography from '@material-ui/core/Typography';
import { DescriptionFieldProps } from '@rjsf/utils';

export default function DescriptionFieldTemplate({ id, description }: DescriptionFieldProps) {
  if (!description) {
    return null;
  }

  return (
    <Typography id={id} variant="body2" color="textSecondary">
      {description}
    </Typography>
  );
}
