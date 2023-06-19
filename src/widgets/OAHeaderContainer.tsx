'use client';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import LogoIcon from '@/shared/assets/LogoIcon';
import OAButton from '@/shared/controls/OAButton';
import Link from 'next/link';
import OANavbar from './OANavbar';
import styled from 'styled-components';
import PersonIcon from '@/shared/assets/PersonIcon';

const Container = styled.section`
  display: flex;
  flex: 0 1 auto;
  min-height: 48px;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;

const OAHeaderContainer: FC<PropsWithChildren> = (props) => {
  const [logged, setLogged] = useState<{
    jwt: string;
    fullanme: string;
    shortname: string;
  }>();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const user = localStorage.getItem('user');
    if (user !== null && jwt !== null) {
      const shortname = JSON.parse(user).shortName;
      const fullname = JSON.parse(user).name;
      setLogged({ jwt, shortname, fullanme: fullname });
    }
  }, []);

  return (
    <Container>
      <Link href="/" shallow>
        <LogoIcon />
      </Link>
      <OANavbar />
      {logged?.jwt ? (
        <Link href="/portfolio" shallow>
          <OAButton
            theme="primary"
            variant="text"
            size="small"
            style={{ borderRadius: 0 }}
          >
            {logged.shortname}. <PersonIcon />
          </OAButton>
        </Link>
      ) : (
        <Link href="/auth/login" shallow style={{ textDecoration: 'none' }}>
          <OAButton theme="primary" variant="outlined" size="small">
            Войти
          </OAButton>
        </Link>
      )}
    </Container>
  );
};

export default OAHeaderContainer;
