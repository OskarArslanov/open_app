import { FC, useState } from 'react';
import styles from './checkbox.module.css';
import Checkbox from '@mui/material/Checkbox';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControlLabel } from '@mui/material';

interface OACheckboxProps {
  onClick?: () => void;
  defaultChecked?: boolean;
  name?: string;
  label?: string;
  labelPlacements?: 'top' | 'start' | 'bottom' | 'end';
}
const OACheckbox: FC<OACheckboxProps> = (props) => {
  const context = useFormContext();
  const [checked, setChecked] = useState(props.defaultChecked || false);
  return (
    <FormControlLabel
      label={props.label}
      labelPlacement={props.labelPlacements}
      control={
        <Checkbox
          content="1"
          checked={checked}
          onClick={() => {
            setChecked(!checked);
            props.onClick?.();
            context.setValue(props.name || 'check', !checked);
          }}
          sx={{
            color: '#4f46e5',
            '&.Mui-checked': {
              color: '#4f46e5',
            },
          }}
        />
      }
    />
  );
};

export default OACheckbox;
