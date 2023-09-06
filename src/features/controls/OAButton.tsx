'use client';

import { FC } from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@mui/material/Button';

interface OAButtonProps extends ButtonProps {
  fullWidth?: boolean;
  cVariant?: 'filled' | 'outlined' | 'shadow' | 'ghost' | 'text';
}

const ButtonVariants: Record<string, any> = {
  filled: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--text-color_not_primary)',
    border: '1px solid var(--color-purple_dark)',
    '&:hover': {
      color: 'var(--color-purple_dark)',
    },
  },
  ghost: {
    color: 'var(--color-purple_dark)',
    '&:hover': {
      color: 'var(--color-purple_light)',
    },
  },
  outlined: {
    backgroundColor: 'var(--text-color_not_primary)',
    border: '1px solid var(--color-purple_dark)',
    color: 'var(--color-purple_dark)',
  },
  text: {
    backgroundColor: 'var(--text-color_not_primary)',
  },
};

const StyledButton = styled(Button)<OAButtonProps>({}, (props) => ({
  width: props.fullWidth ? '100%' : 'auto',
  ...ButtonVariants[props.cVariant || 'filled'],
}));

const OAButton: FC<OAButtonProps> = (props) => {
  return (
    <StyledButton
      id={props.id}
      style={props.style}
      type={props.type || 'button'}
      onClick={props.onClick}
      cVariant={props.cVariant}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      startIcon={props.startIcon}
    >
      {props.children}
    </StyledButton>
  );
};

export default OAButton;
