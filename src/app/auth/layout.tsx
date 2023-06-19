'use client';

import { FC, PropsWithChildren } from 'react';
import AuthCharts from '@/pages/Auth/AuthCharts';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const AuthInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AuthLayout: FC<PropsWithChildren> = (props) => {
  return (
    <Container>
      <AuthInput>{props.children}</AuthInput>
      <AuthCharts />
    </Container>
  );
};

export default AuthLayout;
