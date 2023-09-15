import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

const Container = styled.section({
  display: 'flex',
  flex: '0 1 auto',
});

const OAFooterContainer: FC<PropsWithChildren> = (props) => {
  return <Container>{props.children}</Container>;
};

export default OAFooterContainer;
