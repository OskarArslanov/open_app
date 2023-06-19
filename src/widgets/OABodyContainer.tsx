import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex: 1 1 auto;
`;
const OABodyContainer: FC<PropsWithChildren> = (props) => {
  return <Container>{props.children}</Container>;
};

export default OABodyContainer;
