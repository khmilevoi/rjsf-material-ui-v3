import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { IconButtonTemplate, RemoveButton } from './ButtonTemplates';

type OptionalDataControlsTemplateProps = {
  id: string;
  label?: string;
  onAddClick?: (event?: React.MouseEvent) => void;
  onRemoveClick?: (event?: React.MouseEvent) => void;
  [key: string]: unknown;
};

export default function OptionalDataControlsTemplate(props: OptionalDataControlsTemplateProps) {
  const { id, label, onAddClick, onRemoveClick, ...buttonProps } = props;

  if (onAddClick) {
    return (
      <IconButtonTemplate
        id={id}
        className="rjsf-add-optional-data"
        onClick={onAddClick}
        title={label}
        icon={<AddIcon fontSize="small" />}
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
        {...buttonProps}
      />
    );
  }

  return <em id={id}>{label}</em>;
}
