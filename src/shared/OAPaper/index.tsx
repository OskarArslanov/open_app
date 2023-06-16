import { FC, PropsWithChildren } from 'react';
import styles from './paper.module.css';

const OAPaper: FC<PropsWithChildren> = (props) => {
  return <div className={styles.OAPaper}>{props.children}</div>;
};

export default OAPaper;
