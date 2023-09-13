import {
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface OABaseProps {
  onChange?: (data: any) => void;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  placeholder?: string;
  label?: string;
  fullWidth?: boolean;
  type: HTMLInputTypeAttribute;
  defaultValue?: string | number;
  value?: number | string;
  id?: string;
  isInvalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  disableFocus?: boolean;
}

const Container = styled.div<{ fullWidth?: boolean }>(
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
  },
  (props) => ({
    border: props.fullWidth ? '100%' : 'auto',
  }),
);

const BaseInput = styled(motion.input)<{ disableFocus?: boolean }>(
  {
    outline: 'none',
    border: 'none',
    padding: '8px 10px',
    borderRadius: '10px',
    background: 'transparent',
    width: '100%',
  },
  (props) => ({
    cursor: props.disableFocus ? 'default' : 'auto',
    '&:focus-visible': {
      visibility: props.disableFocus ? 'hidden' : 'visible',
    },
  }),
);

const InputContainer = styled.div<{ isError?: boolean }>(
  {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '40px',
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-black)',
  },
  (props) => ({
    border: props.isError
      ? '1px solid var(--color-red)'
      : '1px solid var(--color-primary)',
  }),
);

const OABaseInput: FC<OABaseProps> = (props) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (props.defaultValue !== undefined) {
      setValue(props.defaultValue as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value as string);
    }
  }, [props.value]);

  return (
    <Container fullWidth={props.fullWidth}>
      {props.label && (
        <label>
          {props.label}
          {props.required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      <InputContainer
        isError={props.isInvalid}
        style={props.style}
        className={props.className}
        onClick={props.onClick}
      >
        {props.startAdornment}
        <BaseInput
          disableFocus={props.disableFocus}
          placeholder={props.placeholder}
          type={props.type}
          disabled={props.disabled}
          value={value}
          data-testid={props.id}
          required={props.required}
          onChange={props.onChange}
        />
        {props.endAdornment}
      </InputContainer>
    </Container>
  );
};

export default OABaseInput;
