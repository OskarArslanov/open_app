'use client';

import { CSSProperties, FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from '@emotion/styled';

interface OAButtonProps {
  fullwidth?: boolean;
  variant?: 'filled' | 'outlined' | 'shadow' | 'ghost' | 'text';
  size?: 'large' | 'medium' | 'small' | 'adaptive';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  query?: Record<string, string>;
  shallow?: boolean;
  children?: ReactNode;
  id?: string;
  type?: 'submit' | 'reset' | 'button';
  style?: CSSProperties;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  circled?: boolean;
}

const ButtonVariants: Record<string, any> = {
  filled: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-not_primary)',
    border: '1px solid var(--color-primary)',
    '&:hover': {
      opacity: 0.5,
    },
  },
  ghost: {
    color: 'var(--color-not_primary)',
    '&:hover': {
      opacity: 0.5,
    },
  },
  outlined: {
    backgroundColor: 'var(--color-not_primary)',
    border: '1px solid var(--color-primary)',
    color: 'var(--color-primary)',
    '&:hover': {
      opacity: 0.5,
    },
  },
  text: {
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
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
    borderRadius: '5px',
    cursor: 'pointer',
    transition: '0.25s',
  },
  (props) => ({
    width: props.fullwidth ? '100%' : 'auto',
    ...ButtonSizes[props.size || 'medium'],
    ...ButtonVariants[props.variant || 'filled'],
    '&:disabled': {
      opacity: 0.5,
      zIndex: 1,
      cursor: 'auto',
      backgroundColor: 'var(--color-gray_light)',
      color: 'var(--color-gray_dark)',
      borderColor: 'var(--color-gray_dark)',
    },
  }),
);

const LinkButton = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
});

const OAButton: FC<OAButtonProps> = (props) => {
  if (props.href || props.query) {
    return (
      <LinkButton
        href={{ pathname: props.href, query: props.query }}
        data-testid={props.id}
        shallow={props.shallow}
      >
        <StyledButton {...props}>
          {props.startIcon}
          {props.children}
          {props.endIcon}
        </StyledButton>
      </LinkButton>
    );
  }
  return (
    <StyledButton data-testid={props.id} {...props}>
      {props.startIcon}
      {props.children}
      {props.endIcon}
    </StyledButton>
  );
};

export default OAButton;
