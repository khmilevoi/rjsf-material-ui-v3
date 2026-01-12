import { FormContextType, RJSFSchema, StrictRJSFSchema, TemplatesType } from '@rjsf/utils';
import {
  ClearButton,
  CopyButton,
  MoveDownButton,
  MoveUpButton,
  RemoveButton,
} from '../IconButton';
import ArrayFieldItemTemplate from './ArrayFieldItemTemplate';
import ArrayFieldTemplate from './ArrayFieldTemplate';
import BaseInputTemplate from './BaseInputTemplate';
import { AddButton, SubmitButton } from './ButtonTemplates';
import DescriptionField from './DescriptionFieldTemplate';
import ErrorList from './ErrorListTemplate';
import FieldErrorTemplate from './FieldErrorTemplate';
import FieldHelpTemplate from './FieldHelpTemplate';
import FieldTemplate from './FieldTemplate';
import GridTemplate from './GridTemplate';
import HelpTemplate from './HelpTemplate';
import MultiSchemaFieldTemplate from './MultiSchemaFieldTemplate';
import ObjectFieldTemplate from './ObjectFieldTemplate';
import OptionalDataControlsTemplate from './OptionalDataControlsTemplate';
import TitleField from './TitleFieldTemplate';
import WrapIfAdditionalTemplate from './WrapIfAdditionalTemplate';

export function generateTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): Partial<TemplatesType<T, S, F>> {
  return {
    ArrayFieldItemTemplate,
    ArrayFieldTemplate,
    BaseInputTemplate,
    ButtonTemplates: {
      AddButton,
      CopyButton,
      MoveDownButton,
      MoveUpButton,
      RemoveButton,
      SubmitButton,
      ClearButton,
    },
    DescriptionFieldTemplate: DescriptionField,
    ErrorListTemplate: ErrorList,
    FieldErrorTemplate,
    FieldHelpTemplate,
    FieldTemplate,
    GridTemplate,
    HelpTemplate,
    MultiSchemaFieldTemplate,
    ObjectFieldTemplate,
    OptionalDataControlsTemplate,
    TitleFieldTemplate: TitleField,
    WrapIfAdditionalTemplate,
  } as Partial<TemplatesType<T, S, F>>;
}

export default generateTemplates();
