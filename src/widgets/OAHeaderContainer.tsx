'use client';

import { FC, PropsWithChildren } from 'react';
import Logo from '@/shared/assets/Logo';
import OAButton from '@/shared/controls/OAButton';
import Link from 'next/link';
import OANavbar from './OANavbar';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex: 0 1 auto;
  min-height: 48px;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;
const OAHeaderContainer: FC<PropsWithChildren> = (props) => {
  return (
    <Container style={{ padding: '0 20px' }}>
      <Link href="/" shallow>
        <Logo />
      </Link>
      <OANavbar />
      <Link href="/auth/login" shallow style={{ textDecoration: 'none' }}>
        <OAButton theme="primary" variant="outlined" size="small">
          Войти
        </OAButton>
      </Link>
    </Container>
  );
};

export default OAHeaderContainer;
