import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

const Container = styled.section({
  display: 'flex',
  flex: '1 1 auto',
  marginTop: '40px',
  padding: '40px',
  '@media screen and (max-width: 768px)': {
    padding: '20px',
  },
});
const OABodyContainer: FC<PropsWithChildren> = (props) => {
  return <Container>{props.children}</Container>;
};

export default OABodyContainer;
