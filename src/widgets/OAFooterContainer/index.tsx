'use client';

import { FC, PropsWithChildren } from 'react';
import styles from './footer.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';

const OAFooterContainer: FC<PropsWithChildren> = (props) => {
  const segment = useSelectedLayoutSegment();
  const isAuth = segment === 'auth';
  if (isAuth) return null;
  return <div className={styles.container}>{props.children}</div>;
};

export default OAFooterContainer;
