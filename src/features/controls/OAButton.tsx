'use client';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface OAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: 'filled' | 'outlined' | 'shadow' | 'ghost' | 'text';
  size?: 'large' | 'medium' | 'small' | 'adaptive';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const ButtonVariants: Record<string, any> = {
  filled: {
    backgroundColor: 'var(--color-purple_dark)',
    color: '#fff',
    border: '1px solid var(--color-purple_dark)',
    '&:hover': {
      color: 'var(--color-purple_dark)',
      backgroundColor: 'var(--color-purple_light)',
    },
  },
  ghost: {
    color: 'var(--color-purple_dark)',
    '&:hover': {
      background: 'var(--color-purple_light)',
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

const ButtonSizes: Record<string, any> = {
  large: {
    padding: '8px 16px',
    height: '50px',
    fontSize: '20px',
    fontWeight: 700,
  },
  medium: {
    padding: '6px 12px',
    height: '40px',
    fontSize: '16px',
    fontWeight: 600,
  },
  small: {
    padding: '4px 8px',
    height: '30px',
    fontSize: '12px',
    fontWeight: 500,
  },
  adaptive: {
    padding: '0',
  },
};

const StyledButton = styled(motion.button)<OAButtonProps>(
  {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    justifyContent: 'center',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  (props) => ({
    width: props.fullWidth ? '100%' : 'auto',
    ...ButtonSizes[props.size || 'medium'],
    ...ButtonVariants[props.variant || 'filled'],
  }),
);

const OAButton: FC<OAButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {props.startIcon}
      {props.children}
      {props.endIcon}
    </StyledButton>
  );
};

export default OAButton;
