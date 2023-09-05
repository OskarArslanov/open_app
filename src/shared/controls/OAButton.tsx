'use client';

import { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface OAButtonProps {
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  theme?: 'primary' | 'secondary' | 'warning' | 'error';
  size?: 'large' | 'adaptive' | 'small' | 'normal';
  type?: 'submit' | 'reset';
  children?: string | React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  fullwidth?: boolean;
  id?: string;
}

const ButtonSize: Record<string, any> = {
  small: `
    padding: 12px 24px;
    font-size: var(--font-size_s);
  `,
  normal: `
    padding: 12px 24px;
    font-size: var(--font-size_s);
  `,
  large: `
    padding: 16px 60px;
    font-size: var(--font-size_l);
  `,
};

const ButtonVariants: Record<string, any> = {
  contained: `
    background-color: var(--color-primary);
    color: var(--text-color_not_primary);
  `,
  outlined: `
    background-color: var(--text-color_not_primary);
    border: 1px solid;
  `,
  text: `
    background-color: var(--text-color_not_primary);
  `,
};

const ButtonThemes: Record<string, any> = {
  primary: `
    color: var(--color-primary);
    border-color: var(--color-primary);
  `,
  secondary: `
    color: var(--color-secondary);
    border-color: var(--color-secondary);
  `,
  warning: `
    color: var(--color-warning);
    border-color: var(--color-warning);
  `,
  error: `
    color: var(--color-error);
    border-color: var(--color-error);
  `,
};

const Button = styled(motion.button)<{
  $variant?: string;
  $theme?: string;
  $size?: string;
  $disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 8px;
  width: max-content;
  border: none;
  cursor: ${(props) => (props.$disabled ? 'auto' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
  ${(props) => ButtonSize[props.$size || 'normal']}
  ${(props) => ButtonThemes[props.$theme || 'primary']}
  ${(props) => ButtonVariants[props.$variant || 'contained']}
`;
const OAButton: FC<OAButtonProps> = (props) => {
  return (
    <Button
      id={props.id}
      $variant={props.variant}
      $theme={props.theme}
      $size={props.size}
      style={props.style}
      type={props.type || 'button'}
      onClick={props.onClick}
      $disabled={props.disabled}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default OAButton;
