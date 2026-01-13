import { FormContextType, RegistryWidgetsType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import AltDateWidget from './AltDateWidget';
import AltDateTimeWidget from './AltDateTimeWidget';
import ColorWidget from './ColorWidget';
import DateTimeWidget from './DateTimeWidget';
import DateWidget from './DateWidget';
import EmailWidget from './EmailWidget';
import PasswordWidget from './PasswordWidget';
import TextWidget from './TextWidget';
import UpDownWidget from './UpDownWidget';
import URLWidget from './URLWidget';

export function generateCustomWidgets<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): RegistryWidgetsType<T, S, F> {
  return {
    AltDateWidget,
    AltDateTimeWidget,
    ColorWidget,
    DateWidget,
    DateTimeWidget,
    EmailWidget,
    PasswordWidget,
    TextWidget,
    UpDownWidget,
    URLWidget,
  } as unknown as RegistryWidgetsType<T, S, F>;
}

export const CustomWidgets = generateCustomWidgets();

export default generateCustomWidgets();
