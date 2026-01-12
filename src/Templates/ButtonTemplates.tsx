import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ClearIcon from '@material-ui/icons/Clear';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import RemoveIcon from '@material-ui/icons/Remove';
import { getUiOptions, IconButtonProps, SubmitButtonProps } from '@rjsf/utils';

type IconButtonTemplateProps = React.PropsWithChildren<IconButtonProps> & {
  icon?: React.ReactNode;
};

export function IconButtonTemplate({
  icon,
  iconType,
  uiSchema,
  registry,
  ...props
}: IconButtonTemplateProps) {
  const { title, ...iconButtonProps } = props;
  const button = (
    <IconButton
      aria-label={title}
      {...(iconButtonProps as React.ComponentProps<typeof IconButton>)}
    >
      {icon}
    </IconButton>
  );

  if (title) {
    return <Tooltip title={title}>{button}</Tooltip>;
  }

  return button;
}

export function SubmitButton({ uiSchema }: SubmitButtonProps) {
  const buttonOptions = uiSchema?.['ui:submitButtonOptions'];

  if (buttonOptions?.norender) {
    return null;
  }

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      {...(buttonOptions?.props as React.ComponentProps<typeof Button>)}
    >
      {buttonOptions?.submitText ?? 'Submit'}
    </Button>
  );
}

export function AddButton({
  icon,
  iconType,
  uiSchema,
  registry,
  children,
  ...props
}: IconButtonTemplateProps) {
  const uiOptions = getUiOptions(uiSchema);
  const addButtonProps = (uiOptions.addButtonProps ?? {}) as React.ComponentProps<typeof Button>;
  const resolvedIcon = icon ?? <AddIcon />;
  const { title, ...buttonProps } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      aria-label={title}
      {...addButtonProps}
      {...(buttonProps as React.ComponentProps<typeof Button>)}
    >
      {resolvedIcon && <span style={{ display: 'inherit', marginRight: 8 }}>{resolvedIcon}</span>}
      {children}
    </Button>
  );
}

export function CopyButton(props: IconButtonProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <FileCopyIcon />} />;
}

export function MoveDownButton(props: IconButtonProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <ArrowDownwardIcon />} />;
}

export function MoveUpButton(props: IconButtonProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <ArrowUpwardIcon />} />;
}

export function RemoveButton(props: IconButtonProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <RemoveIcon />} />;
}

export function ClearButton(props: IconButtonProps) {
  return <IconButtonTemplate {...props} icon={props.icon ?? <ClearIcon />} />;
}

const ButtonTemplates = {
  AddButton,
  CopyButton,
  MoveDownButton,
  MoveUpButton,
  RemoveButton,
  SubmitButton,
  ClearButton,
};

export default ButtonTemplates;
