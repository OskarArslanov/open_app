import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const Container = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  background: '#FFF',
  maxWidth: '768px',
  minWidth: '240px',
  width: 'max-content',
  maxHeight: '400px',
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

const CloseButton = styled(motion.button)({
  borderRadius: '50%',
  maxWidth: '40px',
  minWidth: '40px',
  maxHeight: '40px',
  minHeight: '40px',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
  border: '2px solid var(--color-purple_dark)',
  color: 'var(--color-purple_dark)',
  alignSelf: 'flex-end',
});

const OAModal: FC<OAModalProps> = (props) => {
  console.log(props.title);
  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <CloseButton
          onClick={props.onClose}
          whileTap={{
            border: '1px solid var(--color-purple_dark)',
            backgroundColor: 'var(--color-purple_dark)',
            color: '#fff',
          }}
        >
          <ClearIcon />
        </CloseButton>
        {props.title && <h1>{props.title}</h1>}
        {props.children}
      </Container>
    </Modal>
  );
};

export default OAModal;
