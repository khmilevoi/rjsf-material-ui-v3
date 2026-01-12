import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TitleFieldProps } from '@rjsf/utils';

export default function TitleFieldTemplate({ id, title, required }: TitleFieldProps) {
  return (
    <Typography id={id} variant="h6">
      {title}
      {required ? ' *' : null}
    </Typography>
  );
}
