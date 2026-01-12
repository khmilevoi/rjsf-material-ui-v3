import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import { FieldTemplateProps } from '@rjsf/utils';

export default function FieldTemplate(props: FieldTemplateProps) {
  const {
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children,
    displayLabel,
    rawErrors,
  } = props;

  const showError = rawErrors && rawErrors.length > 0;

  return (
    <FormControl fullWidth className={classNames} error={showError} id={id}>
      {displayLabel && label && (
        <Typography variant="subtitle1" component="label">
          {label}
          {required ? ' *' : null}
        </Typography>
      )}
      {description}
      {children}
      {errors}
      {help}
      {!errors && showError && <FormHelperText>{rawErrors?.join(', ')}</FormHelperText>}
    </FormControl>
  );
}
