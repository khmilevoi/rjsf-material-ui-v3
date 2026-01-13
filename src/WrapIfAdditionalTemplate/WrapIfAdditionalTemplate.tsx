import React, { CSSProperties } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  ADDITIONAL_PROPERTY_FLAG,
  buttonId,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
  WrapIfAdditionalTemplateProps,
} from '@rjsf/utils';

/** The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are
 * part of an `additionalProperties` part of a schema.
 *
 * @param props - The `WrapIfAdditionalProps` for this component
 */
export default function WrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WrapIfAdditionalTemplateProps<T, S, F>) {
  const {
    children,
    classNames,
    style,
    disabled,
    id,
    label,
    displayLabel,
    onKeyRenameBlur,
    onRemoveProperty,
    readonly,
    required,
    schema,
    uiSchema,
    registry,
  } = props;
  const { templates, translateString } = registry;
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = templates.ButtonTemplates;
  const keyLabel = translateString(TranslatableString.KeyLabel, [label]);
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;
  const btnStyle: CSSProperties = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  };

  if (!additional) {
    return (
      <div className={classNames} style={style}>
        {children}
      </div>
    );
  }

  return (
    <Grid container key={`${id}-key`} alignItems="flex-start" spacing={16} className={classNames} style={style}>
      <Grid item xs={12} sm={5}>
        <TextField
          fullWidth
          required={required}
          label={displayLabel ? keyLabel : undefined}
          defaultValue={label}
          disabled={disabled || readonly}
          id={`${id}-key`}
          name={`${id}-key`}
          onBlur={!readonly ? onKeyRenameBlur : undefined}
          type="text"
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        {children}
      </Grid>
      <Grid item xs={12} sm={2} style={{ marginTop: 12 }}>
        <RemoveButton
          className="rjsf-object-property-remove"
          iconType="default"
          style={btnStyle}
          disabled={disabled || readonly}
          id={buttonId(id, 'remove')}
          onClick={onRemoveProperty}
          uiSchema={uiSchema}
          registry={registry}
        />
      </Grid>
    </Grid>
  );
}
