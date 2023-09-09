import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import OAModal from '.';
import OAButton from '../OAButton';

interface OAConfirmModalProps {
  onReject: () => void;
  onConfirm: () => void;
  state: boolean;
  children: ReactNode;
}

const Controls = styled.div({
  display: 'flex',
  gap: '10px',
  justifyContent: 'space-between',
});
const OAConfirmModal: FC<OAConfirmModalProps> = (props) => {
  return (
    <OAModal isOpen={props.state} onClose={props.onReject}>
      {props.children}
      <Controls>
        <OAButton onClick={props.onReject} variant="outlined" fullwidth>
          Cancel
        </OAButton>
        <OAButton onClick={props.onConfirm} variant="filled" fullwidth>
          Confirm
        </OAButton>
      </Controls>
    </OAModal>
  );
};

export default OAConfirmModal;
