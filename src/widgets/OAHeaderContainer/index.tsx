'use client';

import { FC, PropsWithChildren } from 'react';
import styles from './header.module.css';
import Logo from '@/shared/assets/Logo';
import OAButton from '@/shared/OAButton';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import OANavbar from './OANavbar';

const OAHeaderContainer: FC<PropsWithChildren> = (props) => {
  const segment = useSelectedLayoutSegment();
  const isAuth = segment === 'auth';
  if (isAuth) return null;
  return (
    <div className={styles.container} style={{ padding: '0 20px' }}>
      <Link href="/" shallow>
        <Logo />
      </Link>
      <OANavbar />
      <Link href="/auth/login" shallow style={{ textDecoration: 'none' }}>
        <OAButton theme="primary" variant="outlined" size="small">
          Войти
        </OAButton>
      </Link>
    </div>
  );
};

export default OAHeaderContainer;
