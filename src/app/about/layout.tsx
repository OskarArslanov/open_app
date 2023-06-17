import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

const AboutLayout: FC<PropsWithChildren> = (props) => {
  return <div>{props.children}</div>;
};

export default AboutLayout;
