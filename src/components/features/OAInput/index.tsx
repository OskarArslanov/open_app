import {
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from 'react';
import IconButton from '@mui/material/IconButton';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import OABaseInput from './OABaseInput';

interface OAInputProps {
  onChange?: (data: string) => void;
  onClick?: () => void;
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
  startAdornment?: React.ReactNode;
  id?: string;
  disableFocus?: boolean;
}

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
  return context?.control ? (
    <Controller
      name={props.name}
      control={context?.control}
      rules={props.rules}
      render={({ field }) => {
        return (
          <OABaseInput
            {...field}
            label={props.label}
            isInvalid={isInvalid}
            style={props.style}
            placeholder={props.placeholder}
            type={type}
            disabled={props.rules?.disabled}
            value={value}
            id={props.id}
            required={!!props.rules?.required}
            onClick={props.onClick}
            onChange={(e) => {
              field.onChange(e);
              // @ts-ignore
              const changedValue = e.target.value;
              setValue(changedValue);
              props.onChange?.(changedValue);
            }}
            disableFocus={props.disableFocus}
            startAdornment={props.startAdornment}
            endAdornment={isPassword ? endAdortment : props.endAdornment}
          />
        );
      }}
    />
  ) : (
    <OABaseInput
      label={props.label}
      isInvalid={isInvalid}
      style={props.style}
      placeholder={props.placeholder}
      type={type}
      disabled={props.rules?.disabled}
      value={value}
      id={props.id}
      required={!!props.rules?.required}
      onClick={props.onClick}
      onChange={(e) => {
        // @ts-ignore
        const changedValue = e.target.value;
        setValue(changedValue);
        props.onChange?.(changedValue);
      }}
      disableFocus={props.disableFocus}
      startAdornment={props.startAdornment}
      endAdornment={isPassword ? endAdortment : props.endAdornment}
    />
  );
};

export default OAInput;
