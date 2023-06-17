'use client';

import { FC, PropsWithChildren } from 'react';
import styles from './body.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';

const OABodyContainer: FC<PropsWithChildren> = (props) => {
  const segment = useSelectedLayoutSegment();
  const isAuth = segment === 'auth';
  return (
    <div
      className={styles.container}
      style={{ padding: isAuth ? '0px' : '0 20px' }}
    >
      {props.children}
    </div>
  );
};

export default OABodyContainer;
