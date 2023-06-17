import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

const PortfolioLayout: FC<PropsWithChildren> = (props) => {
  return <div>{props.children}</div>;
};

export default PortfolioLayout;
