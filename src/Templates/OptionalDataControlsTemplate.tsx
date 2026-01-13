import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Registry, RJSFSchema, UiSchema } from '@rjsf/utils';
import MuiIconButton, { RemoveButton } from '../IconButton';

type OptionalDataControlsTemplateProps = {
  id: string;
  label?: string;
  onAddClick?: (event?: React.MouseEvent) => void;
  onRemoveClick?: (event?: React.MouseEvent) => void;
  registry: Registry;
  uiSchema?: UiSchema<unknown, RJSFSchema>;
  [key: string]: unknown;
};

export default function OptionalDataControlsTemplate(props: OptionalDataControlsTemplateProps) {
  const { id, label, onAddClick, onRemoveClick, registry, uiSchema, ...buttonProps } = props;

  if (onAddClick) {
    return (
      <MuiIconButton
        id={id}
        className="rjsf-add-optional-data"
        onClick={onAddClick}
        title={label}
        icon={<AddIcon fontSize="small" />}
        registry={registry}
        uiSchema={uiSchema}
        {...buttonProps}
      />
    );
  }

  if (onRemoveClick) {
    return (
      <RemoveButton
        id={id}
        className="rjsf-remove-optional-data"
        onClick={onRemoveClick}
        title={label}
        registry={registry}
        uiSchema={uiSchema}
        {...buttonProps}
      />
    );
  }

  return <em id={id}>{label}</em>;
}
