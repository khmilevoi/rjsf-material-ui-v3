import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { FieldTemplateProps, getUiOptions } from '@rjsf/utils';

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
    uiSchema,
  } = props;

  const showError = rawErrors && rawErrors.length > 0;
  const uiOptions = getUiOptions(uiSchema);
  const hideError = uiOptions.hideError === true;
  const showLabel = displayLabel && label && uiOptions.label !== false;

  return (
    <FormControl fullWidth className={classNames} error={showError && !hideError} id={id}>
      {showLabel && (
        <FormLabel htmlFor={id} required={required}>
          {label}
        </FormLabel>
      )}
      {description}
      {children}
      {!hideError && errors}
      {help}
      {!hideError && !errors && showError && (
        <FormHelperText>{rawErrors?.join(', ')}</FormHelperText>
      )}
    </FormControl>
  );
}
