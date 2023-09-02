'use client';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import OAButton from '@/shared/controls/OAButton';
import Link from 'next/link';
import Image from 'next/image';
import OANavbar from './OANavbar';
import styled from 'styled-components';
import PersonIcon from '@/shared/assets/PersonIcon';

const Container = styled.section`
  display: flex;
  flex: 0 1 auto;
  min-height: 48px;
  margin-top: 10px;
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
        <Image
          width={96}
          height={48}
          style={{ borderRadius: '5px' }}
          src="/logoO.png"
          alt="logo"
        />
      </Link>
      <OANavbar />
    </Container>
  );
};

export default OAHeaderContainer;
