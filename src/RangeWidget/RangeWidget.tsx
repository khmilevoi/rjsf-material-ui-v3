import React, { ChangeEvent, FocusEvent } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import {
  ariaDescribedByIds,
  labelValue,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
  rangeSpec,
} from "@rjsf/utils";

/** The `RangeWidget` component uses the `BaseInputTemplate` changing the type to `range` and wrapping the result
 * in a div, with the value along side it.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function RangeWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: WidgetProps<T, S, F>) {
  const { value, readonly, disabled, onBlur, onFocus, options, schema, onChange, required, label, hideLabel, id } =
    props;
  const sliderProps = { ...rangeSpec<S>(schema) };

  const _onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const nextValue = target.value === "" ? options.emptyValue : Number(target.value);
    onChange(nextValue);
  };
  const _onBlur = ({ target }: FocusEvent<HTMLInputElement>) => onBlur(id, target && target.value);
  const _onFocus = ({ target }: FocusEvent<HTMLInputElement>) => onFocus(id, target && target.value);

  return (
    <>
      {labelValue(
        <FormLabel required={required} htmlFor={id}>
          {label || undefined}
        </FormLabel>,
        hideLabel
      )}
      <TextField
        id={id}
        type="range"
        fullWidth
        value={value ?? ""}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        disabled={disabled || readonly}
        inputProps={{ ...sliderProps, "aria-describedby": ariaDescribedByIds(id) }}
      />
    </>
  );
}
