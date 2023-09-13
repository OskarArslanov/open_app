/* eslint-disable react-hooks/exhaustive-deps */
import styled from '@emotion/styled';
import { FC, useEffect, useRef, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IdValue } from 'components/entities/functional';
import { animate, motion } from 'framer-motion';
import OAInput from '../OAInput';
import OAButton from '../OAButton';

interface OASelectProps {
  values: IdValue[];
  value?: IdValue;
  defaultValue?: IdValue;
  name?: string;
  id?: string;
  placeholder?: string;
  onChange?: (data?: IdValue) => void;
}

const Container = styled.div({
  position: 'relative',
});

const StyledMenu = styled(motion.ul)({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  width: '100%',
  '& > li': {
    width: '100%',
    padding: '6px',
    backgroundColor: 'var(--color-primary)',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--color-not_primary)',
      color: 'var(--color-primary)',
    },
  },
});
const OASelect: FC<OASelectProps> = (props) => {
  const ref = useRef(null);
  const [value, setValue] = useState<IdValue>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const list = document.getElementById('list');
    const arrow = document.getElementById('arrow');
    if (!list || !arrow) return;
    animate(
      list,
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        duration: 0.25,
      },
    );
    animate(
      arrow,
      {
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      },
      {
        duration: 0.25,
      },
    );
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    setValue(props.defaultValue);
  }, []);

  useEffect(() => {
    setValue(props.value);
  }, [props.value?.id]);

  useEffect(() => {
    props.onChange?.(value);
  }, [value?.id]);

  return (
    <Container ref={ref}>
      <OAInput
        type="text"
        name={props.name || 'select'}
        value={value?.value || ''}
        placeholder={props.placeholder || 'Choose option'}
        onClick={() => setIsOpen(!isOpen)}
        id={props.id || 'select'}
        disableFocus
        endAdornment={
          <OAButton
            circled
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            id="arrow"
          >
            <ExpandMoreIcon />
          </OAButton>
        }
      />
      <StyledMenu id="list">
        {props.values?.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setValue(item);
              setIsOpen(false);
            }}
          >
            {item.value}
          </li>
        ))}
      </StyledMenu>
    </Container>
  );
};

export default OASelect;
