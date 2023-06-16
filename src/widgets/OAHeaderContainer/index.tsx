'use client';
import { FC, PropsWithChildren } from 'react';
import styles from './header.module.css';
import OANavbar from '@/widgets/OANavbar';
import Logo from '@/shared/assets/Logo';
import OAButton from '@/shared/OAButton';
import Link from 'next/link';

const OAHeaderContainer: FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.container}>
      <Link href="/" shallow>
        <Logo />
      </Link>
      <OANavbar />
      <Link href="/login" shallow style={{ textDecoration: 'none' }}>
        <OAButton theme="primary" variant="outlined" size="small">
          Войти
        </OAButton>
      </Link>
    </div>
  );
};

export default OAHeaderContainer;
