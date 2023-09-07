import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { FC, ReactNode } from 'react';
import OAIconButton from '../OAIconButton';

const Container = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  background: '#FFF',
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
  return (
    <Modal open={props.isOpen} onClose={props.onClose}>
      <Container>
        <OAIconButton style={{ alignSelf: 'flex-end' }} onClick={props.onClose}>
          <ClearIcon />
        </OAIconButton>
        {props.title && <h1>{props.title}</h1>}
        {props.children}
      </Container>
    </Modal>
  );
};

export default OAModal;
