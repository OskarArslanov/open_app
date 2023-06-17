import { FC, PropsWithChildren } from 'react';
import styles from './auth.module.css';
import AuthPageInfo from '@/widgets/OAAuth';

const AuthLayout: FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth_form}>{props.children}</div>
      <AuthPageInfo />
    </div>
  );
};

export default AuthLayout;
