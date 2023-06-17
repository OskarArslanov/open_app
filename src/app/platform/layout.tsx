import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

const PlatformLayout: FC<PropsWithChildren> = (props) => {
  return props.children;
};

export default PlatformLayout;
