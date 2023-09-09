import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { FC, ReactNode, useContext } from 'react';
import OAButton from '../OAButton';
import { ThemeContext } from '@/shared/providers/ThemeProvider';

const Container = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  background: 'var(--text-color-not_primary)',
  color: 'var(--text-color-primary)',
  maxWidth: '50%',
  minWidth: '240px',
  width: 'max-content',
  padding: '20px',
  outline: 'none',
});

interface OAModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  id?: string;
}

const OAModal: FC<OAModalProps> = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      data-theme={themeContext.theme}
    >
      <Container>
        <OAButton
          style={{ alignSelf: 'flex-end' }}
          onClick={props.onClose}
          variant="text"
          id={`close-${props.id}`}
        >
          <ClearIcon />
        </OAButton>
        {props.title && <h1>{props.title}</h1>}
        {props.children}
      </Container>
    </Modal>
  );
};

export default OAModal;
