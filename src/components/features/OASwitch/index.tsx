import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

const SwitchBg = styled(motion.div)({
  position: 'relative',
  width: '40px',
  height: '15px',
  borderRadius: '15px',
  cursor: 'pointer',
  backgroundColor: '#000',
});

const SwitchToggle = styled(motion.button)({
  cursor: 'pointer',
  position: 'absolute',
  top: '-2.5px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  outline: 'none',
  border: 'none',
});

const variantsToggle = {
  active: {
    backgroundColor: 'var(--color-primary)',
  },
  inactive: {
    backgroundColor: 'var(--color-not_primary)',
    right: 0,
  },
};

const variantsBg = {
  active: {
    backgroundColor: 'var(--color-not_primary)',
  },
  inactive: {
    backgroundColor: 'var(--color-primary)',
  },
};

interface OASwitchProps {
  onClick?: () => void;
  onChange?: (data: boolean) => void;
  state?: boolean;
  defaultState?: boolean;
  variantsBg?: Record<string, any>;
  variantsToggle?: Record<string, any>;
}
const OASwitch: FC<OASwitchProps> = (props) => {
  const [state, setState] = useState(!!props.defaultState);

  const handleChange = () => {
    const updatedState = !state;
    setState(updatedState);
    props.onChange?.(updatedState);
    props.onClick?.();
  };

  useEffect(() => {
    if (props.state !== undefined) setState(props.state);
  }, [props.state]);

  return (
    <SwitchBg
      variants={props.variantsBg || variantsBg}
      animate={state ? 'active' : 'inactive'}
      onClick={handleChange}
    >
      <SwitchToggle
        variants={props.variantsToggle || variantsToggle}
        animate={state ? 'active' : 'inactive'}
      />
    </SwitchBg>
  );
};

export default OASwitch;
