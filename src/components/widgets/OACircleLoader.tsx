import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';
import styled from '@emotion/styled';
import { OAAnimateContainer } from './OAAnimateContainer';

const Container = styled(OAAnimateContainer)({
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  left: 0,
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

interface OACircleLoaderProps {
  visible?: boolean;
  transparentBg?: boolean;
}
export const OACircleLoader: FC<OACircleLoaderProps> = (props) => {
  if (!props.visible) return null;
  return (
    <Container
      style={{
        background: props.transparentBg ? 'transparent' : 'rgb(0,0,0,0.25)',
      }}
    >
      <CircularProgress color="secondary" size={60} />
    </Container>
  );
};
