import { CSSProperties, FC, useEffect, useState } from 'react';
import { IconButton, InputBase } from '@mui/material';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { handleErrors } from '@/shared/utils/errors';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface OAInputProps {
  onChange?: (data: string) => void;
  style?: CSSProperties;
  className?: string;
  placeholder?: string;
  label?: string;
  rules?: RegisterOptions;
  name: string;
  fullWidth?: boolean;
  type: 'text' | 'number' | 'email' | 'password';
  defaultValue?: string | number;
  value?: number | string;
  endAdornment?: React.ReactNode;
  onClickEndAdornment?: () => void;
  startAdornment?: React.ReactNode;
  onStartEndAdornment?: () => void;
  id?: string;
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
});

const InputContainer = styled.div<{ $isError: boolean }>(
  {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'var(--text-color_not_primary)',
    borderRadius: '10px',
    height: '40px',
  },
  (props) =>
    props.$isError
      ? 'border: 1px solid var(--color-error);'
      : 'border: 1px solid var(--border-color);',
);

const BaseInput = styled(motion.input)({
  outline: 'none',
  border: 'none',
  padding: '8px 10px',
  borderRadius: '10px',
  width: '100%',
});

const OAInput: FC<OAInputProps> = (props) => {
  const context = useFormContext();
  const [type, setType] = useState(props.type);

  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === 'password';
  let endAdortment = showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />;
  endAdortment = (
    <IconButton
      onClick={() => {
        showPassword ? setType('password') : setType('text');
        setShowPassword(!showPassword);
      }}
    >
      {endAdortment}
    </IconButton>
  );
  const [value, setValue] = useState<string>('');
  const [invalid, setInvalid] = useState<boolean>(false);
  useEffect(() => {
    if (props.defaultValue !== undefined) {
      setValue(props.defaultValue as string);
    }
  }, []);

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value as string);
    }
  }, [props.value]);

  return (
    <Container>
      {props.label && (
        <label>
          {props.label}
          {props.rules?.required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      {context?.control ? (
        <Controller
          name={props.name}
          control={context?.control}
          rules={props.rules}
          render={({ field }) => {
            return (
              <InputContainer $isError={invalid} style={props.style}>
                {props.startAdornment}
                <BaseInput
                  {...field}
                  placeholder={props.placeholder}
                  type={type}
                  disabled={props.rules?.disabled}
                  value={value}
                  data-testId={props.id}
                  required={!!props.rules?.required}
                  onInput={(e) => {
                    // @ts-ignore
                    const changedValue = e.target.value;
                    setValue(changedValue);
                    props.onChange?.(changedValue);
                    const isValid = handleErrors(
                      context,
                      changedValue,
                      props.name,
                      props.label || props.placeholder,
                      props.rules,
                    );
                    setInvalid(!isValid);
                  }}
                />
                {isPassword ? endAdortment : props.endAdornment}
              </InputContainer>
            );
          }}
        />
      ) : (
        <InputContainer $isError={invalid} style={props.style}>
          {props.startAdornment}
          <BaseInput
            placeholder={props.placeholder}
            type={type}
            disabled={props.rules?.disabled}
            value={value}
            data-testid={props.id}
            required={!!props.rules?.required}
            onChange={(e) => {
              // @ts-ignore
              const changedValue = e.target.value;
              setValue(changedValue);
              props.onChange?.(changedValue);
            }}
          />
          {isPassword ? endAdortment : props.endAdornment}
        </InputContainer>
      )}
    </Container>
  );
};

export default OAInput;