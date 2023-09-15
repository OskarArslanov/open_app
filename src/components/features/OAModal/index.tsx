import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { CSSProperties, FC, ReactNode, useContext } from 'react';
import { ThemeContext } from '@/components/shared/providers/ThemeProvider';
import OAButton from '../OAButton';

const ModalPos = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const Title = styled.div({
  display: 'flex',
  background: 'var(--text-color-not_primary)',
  color: 'var(--text-color-primary)',
  // padding: '20px',
  justifyContent: 'space-between',
});

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  background: 'var(--text-color-not_primary)',
  color: 'var(--text-color-primary)',
  padding: '20px',
  outline: 'none',
  width: '50vw',
  height: '100%',
  '@media screen and (max-width: 500px)': {
    width: '80vw',
  },
});

const Content = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  justifyContent: 'space-between',
  background: 'var(--text-color-not_primary)',
  color: 'var(--text-color-primary)',
  height: '100%',
  width: '100%',
});

interface OAModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  id?: string;
  style?: CSSProperties;
}

const OAModal: FC<OAModalProps> = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      data-theme={themeContext.data}
      style={props.style}
    >
      <ModalPos>
        <Container>
          <Title>
            <h1>{props.title || ''}</h1>
            <OAButton
              onClick={props.onClose}
              variant="text"
              id={`close-${props.id}`}
            >
              <ClearIcon />
            </OAButton>
          </Title>
          <Content>{props.children}</Content>
        </Container>
      </ModalPos>
    </Modal>
  );
};

export default OAModal;
