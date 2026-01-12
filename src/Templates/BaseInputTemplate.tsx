import React from 'react';
import TextField from '@material-ui/core/TextField';
import { BaseInputTemplateProps, getUiOptions } from '@rjsf/utils';

export default function BaseInputTemplate(props: BaseInputTemplateProps) {
  const {
    id,
    placeholder,
    required,
    readonly,
    disabled,
    type,
    label,
    value,
    onChange,
    onBlur,
    onFocus,
    autofocus,
    rawErrors,
    schema,
    uiSchema,
    options,
    ariaDescribedByIds,
  } = props;

  const uiOptions = { ...getUiOptions(uiSchema), ...options };
  const showError = rawErrors && rawErrors.length > 0;
  const helperText = showError ? rawErrors?.join(', ') : undefined;
  const emptyValue = uiOptions.emptyValue ?? schema.default ?? '';
  const inputType = uiOptions.inputType ?? type;
  const examples = Array.isArray(schema.examples) ? schema.examples : undefined;
  const listId = examples && examples.length > 0 ? `${id}-examples` : undefined;
  const inputProps = {
    ...uiOptions.inputProps,
    'aria-describedby': ariaDescribedByIds,
    'aria-invalid': showError || undefined,
    list: listId,
  };

  return (
    <>
      <TextField
        id={id}
        fullWidth
        label={label}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoFocus={autofocus}
        autoComplete={uiOptions.autocomplete}
        type={inputType}
        value={value ?? ''}
        error={showError}
        helperText={helperText}
        InputProps={{ readOnly: readonly, ...uiOptions.InputProps }}
        inputProps={inputProps}
        InputLabelProps={{ shrink: inputType === 'date' || inputType === 'datetime-local' }}
        multiline={uiOptions.multiline}
        rows={uiOptions.rows}
        onChange={(event) =>
          onChange(event.target.value === '' ? emptyValue : event.target.value)
        }
        onBlur={onBlur && ((event) => onBlur(id, event.target.value))}
        onFocus={onFocus && ((event) => onFocus(id, event.target.value))}
      />
      {listId && (
        <datalist id={listId}>
          {examples?.map((example, index) => (
            <option key={String(example) + index} value={String(example)} />
          ))}
        </datalist>
      )}
    </>
  );
}
