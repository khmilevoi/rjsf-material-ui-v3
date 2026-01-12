import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import RemoveIcon from '@material-ui/icons/Remove';
import { getUiOptions } from '@rjsf/utils';

interface IconButtonTemplateProps extends React.ComponentProps<typeof IconButton> {
  icon?: React.ReactNode;
  title?: string;
}

interface AddButtonProps extends React.ComponentProps<typeof Button> {
  icon?: React.ReactNode;
  title?: string;
  uiSchema?: Record<string, unknown>;
}

interface SubmitButtonTemplateProps extends React.ComponentProps<typeof Button> {
  uiSchema?: {
    'ui:submitButtonOptions'?: {
      props?: React.ComponentProps<typeof Button>;
      submitText?: string;
      norender?: boolean;
    };
  };
}

function IconButtonTemplate({ icon, title, ...props }: IconButtonTemplateProps) {
  const button = (
    <IconButton aria-label={title} {...props}>
      {icon}
    </IconButton>
  );

  if (title) {
    return <Tooltip title={title}>{button}</Tooltip>;
  }

  return button;
}

function SubmitButton({ uiSchema, ...props }: SubmitButtonTemplateProps) {
  const buttonOptions = uiSchema?.['ui:submitButtonOptions'];

  if (buttonOptions?.norender) {
    return null;
  }

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      {...buttonOptions?.props}
      {...props}
    >
      {buttonOptions?.submitText ?? 'Submit'}
    </Button>
  );
}

function AddButton({ icon, title, uiSchema, children, ...props }: AddButtonProps) {
  const uiOptions = getUiOptions(uiSchema);
  const addButtonProps = uiOptions.addButtonProps ?? {};
  return (
    <Button
      variant="contained"
      color="primary"
      aria-label={title}
      startIcon={icon ?? <AddIcon />}
      {...addButtonProps}
      {...props}
    >
      {children}
    </Button>
  );
}

function CopyButton(props: IconButtonTemplateProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <FileCopyIcon />} />;
}

function MoveDownButton(props: IconButtonTemplateProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <ArrowDownwardIcon />} />;
}

function MoveUpButton(props: IconButtonTemplateProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <ArrowUpwardIcon />} />;
}

function RemoveButton(props: IconButtonTemplateProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <RemoveIcon />} />;
}

const ButtonTemplates = {
  AddButton,
  CopyButton,
  MoveDownButton,
  MoveUpButton,
  RemoveButton,
  SubmitButton,
};

export default ButtonTemplates;
