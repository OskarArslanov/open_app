import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex: 0 1 auto;
`;
const OAFooterContainer: FC<PropsWithChildren> = (props) => {
  return <Container>{props.children}</Container>;
};

export default OAFooterContainer;
