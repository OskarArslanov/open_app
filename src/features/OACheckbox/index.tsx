import { FC, useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useFormContext } from 'react-hook-form';
import { FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';

interface OACheckboxProps {
  onClick?: () => void;
  onChange?: (data: boolean) => void;
  defaultChecked?: boolean;
  checked?: boolean;
  name?: string;
  label?: string;
  labelPlacements?: 'top' | 'start' | 'bottom' | 'end';
  id?: string;
}

const StyledCheckbox = styled(Checkbox)({
  color: 'var(--color-purple_dark)',
  '&.Mui-checked': {
    color: 'var(--color-purple_dark)',
  },
});

const OACheckbox: FC<OACheckboxProps> = (props) => {
  const context = useFormContext();
  const [checked, setChecked] = useState(props.defaultChecked || false);

  useEffect(() => {
    if (props.checked !== undefined) setChecked(props.checked);
  }, [props.checked]);

  useEffect(() => {
    props.onChange?.(checked);
  }, [checked]);

  if (!context) {
    return (
      <StyledCheckbox
        content="1"
        // @ts-ignore
        inputProps={{ 'data-testid': props.id }}
        checked={checked}
        onClick={() => {
          setChecked(!checked);
          props.onClick?.();
        }}
      />
    );
  }
  return (
    <FormControlLabel
      label={props.label}
      labelPlacement={props.labelPlacements}
      style={{ marginLeft: 0 }}
      control={
        <StyledCheckbox
          content="1"
          // @ts-ignore
          inputProps={{ 'data-testid': props.id }}
          checked={checked}
          onClick={() => {
            setChecked(!checked);
            props.onClick?.();
            context.setValue(props.name || 'check', !checked);
          }}
        />
      }
    />
  );
};

export default OACheckbox;
