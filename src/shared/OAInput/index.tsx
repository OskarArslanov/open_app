import { CSSProperties, FC, useEffect, useState } from 'react';
import styles from './input.module.css';
import { Icon, IconButton, InputBase } from '@mui/material';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { handleErrors } from '../utils/errors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface OAInputProps {
  onChange?: (data: string) => void;
  style?: CSSProperties;
  className?: string;
  placeholder?: string;
  label?: string;
  rules?: RegisterOptions;
  name: string;
  type: 'text' | 'number' | 'email' | 'password';
  defaultValue?: string | number;
  value?: number | string;
  endAdornment?: React.ReactNode;
  onClickEndAdornment?: () => void;
  startAdornment?: React.ReactNode;
  onStartEndAdornment?: () => void;
}

const OAInput: FC<OAInputProps> = (props) => {
  const context = useFormContext();
  const [type, setType] = useState(props.type);

  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === 'password';
  let endAdortment = props.endAdornment;
  if (isPassword) {
    endAdortment = showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />;
  }

  const handleClickEnd = () => {
    if (isPassword) {
      setShowPassword(!showPassword);
      setType(type === 'password' ? 'text' : 'password');
    }
    props.onClickEndAdornment?.();
  };
  endAdortment = (props.endAdornment || isPassword) && (
    <IconButton onClick={handleClickEnd} style={{ padding: '0' }}>
      {endAdortment}
    </IconButton>
  );
  const startAdornment = props.startAdornment && (
    <IconButton style={{ padding: '0' }}>{props.startAdornment}</IconButton>
  );

  const [value, setValue] = useState<string>('');
  const [invalid, setInvalid] = useState<boolean>();
  const errorClass = styles[`OAInput_input__${invalid && 'error'}`];
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
    <div className={styles.OAInput}>
      {props.label && (
        <label className={styles.OAInput_label}>
          {props.label}
          {props.rules?.required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      <Controller
        name={props.name}
        control={context.control}
        rules={props.rules}
        render={({ field }) => {
          return (
            <InputBase
              {...field}
              placeholder={props.placeholder}
              className={`${styles.OAInput_input} ${errorClass}`}
              type={type}
              disabled={props.rules?.disabled}
              value={value}
              required={!!props.rules?.required}
              endAdornment={endAdortment}
              startAdornment={startAdornment}
              onInput={(e) => {
                // @ts-ignore
                const changedValue = e.target.value;
                setValue(changedValue);
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
          );
        }}
      />
    </div>
  );
};

export default OAInput;
