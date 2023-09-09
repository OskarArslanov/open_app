import {
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from 'react';
import { IconButton } from '@mui/material';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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
  type: HTMLInputTypeAttribute;
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

const InputContainer = styled.div<{ isError: boolean }>(
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

const BaseInput = styled(motion.input)({
  outline: 'none',
  border: 'none',
  padding: '8px 10px',
  borderRadius: '10px',
  background: 'transparent',
  width: '100%',
});

const OAInput: FC<OAInputProps> = (props) => {
  const context = useFormContext();
  const [type, setType] = useState<HTMLInputTypeAttribute>(props.type);
  const [value, setValue] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === 'password';

  let endAdortment = showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />;
  endAdortment = (
    <IconButton
      onClick={() => {
        setType(showPassword ? 'password' : 'text');
        setShowPassword(!showPassword);
      }}
    >
      {endAdortment}
    </IconButton>
  );

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

  const isInvalid = !!context?.formState.errors[props.name];
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
              <InputContainer isError={isInvalid} style={props.style}>
                {props.startAdornment}
                <BaseInput
                  {...field}
                  placeholder={props.placeholder}
                  type={type}
                  disabled={props.rules?.disabled}
                  value={value}
                  data-testid={props.id}
                  required={!!props.rules?.required}
                  onChange={(e) => {
                    field.onChange(e);
                    // @ts-ignore
                    const changedValue = e.target.value;
                    setValue(changedValue);
                    props.onChange?.(changedValue);
                  }}
                />
                {isPassword ? endAdortment : props.endAdornment}
              </InputContainer>
            );
          }}
        />
      ) : (
        <InputContainer isError={isInvalid} style={props.style}>
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
