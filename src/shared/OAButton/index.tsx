import { FC } from 'react';
import styles from './button.module.css';
import { ButtonBase } from '@mui/material';

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
}
const OAButton: FC<OAButtonProps> = (props) => {
  const themeClass = styles[`OAButton_theme__${props.theme || 'primary'}`];
  const variantClass =
    styles[`OAButton_variant__${props.variant || 'contained'}`];
  const sizeClass = styles[`OAButton_size__${props.size || 'normal'}`];
  return (
    <ButtonBase
      style={props.style}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${styles.OAButton} ${themeClass} ${variantClass} ${sizeClass} ${props.className}`}
    >
      {props.children}
    </ButtonBase>
  );
};

export default OAButton;
