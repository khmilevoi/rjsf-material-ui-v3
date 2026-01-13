import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import {
  FieldTemplateProps,
  FormContextType,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

/** The `FieldTemplate` component is the template used by `SchemaField` to render any field. It renders the field
 * content, (label, description, children, errors and help) inside of a `WrapIfAdditional` component.
 *
 * @param props - The `FieldTemplateProps` for this component
 */
export default function FieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldTemplateProps<T, S, F>) {
  const {
    id,
    children,
    disabled,
    displayLabel,
    hidden,
    label,
    readonly,
    required,
    rawErrors = [],
    errors,
    help,
    description,
    rawDescription,
    schema,
    uiSchema,
    registry,
  } = props;
  const uiOptions = getUiOptions<T, S, F>(uiSchema);
  const WrapIfAdditionalTemplate = getTemplate<'WrapIfAdditionalTemplate', T, S, F>(
    'WrapIfAdditionalTemplate',
    registry,
    uiOptions,
  );

  if (hidden) {
    return <div style={{ display: 'none' }}>{children}</div>;
  }

  const isCheckbox = uiOptions.widget === 'checkbox';

  return (
    <WrapIfAdditionalTemplate {...props}>
      <FormControl fullWidth error={rawErrors.length ? true : false} required={required}>
        {children}
        {displayLabel && !isCheckbox && rawDescription ? (
          <Typography variant="caption" color="textSecondary">
            {description}
          </Typography>
        ) : null}
        {errors}
        {help}
      </FormControl>
    </WrapIfAdditionalTemplate>
  );
}
