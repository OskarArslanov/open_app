'use client';

import { FC, PropsWithChildren } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex: 1 1 auto;
`;
const OABodyContainer: FC<PropsWithChildren> = (props) => {
  const segment = useSelectedLayoutSegment();
  const isAuth = segment === 'auth';
  return (
    <Container style={{ padding: isAuth ? '0px' : '0 20px' }}>
      {props.children}
    </Container>
  );
};

export default OABodyContainer;
