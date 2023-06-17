'use client';

import Logo from '@/shared/assets/Logo';
import styles from './login.module.css';
import Link from 'next/link';
import OAForm from '@/shared/OAForm';
import OAInput from '@/shared/OAInput';
import OAButton from '@/shared/OAButton';
import OACheckbox from '@/shared/OACheckbox';

const Login = () => {
  return (
    <div className={styles.login}>
      <Link href="/">
        <Logo />
      </Link>
      <span className={styles.login_title}>Вход</span>
      <OAForm onSubmit={console.log}>
        <OAInput
          name="email"
          placeholder="Email"
          type="email"
          rules={{ required: true, minLength: 6 }}
        />
        <OAInput
          name="password"
          placeholder="Пароль"
          type="password"
          rules={{ required: true, minLength: 6 }}
        />
        <div className={styles.login_remeberme}>
          <OACheckbox name="remember" label="Запомнить меня" />
          <OAButton variant="text">Забыли пароль?</OAButton>
        </div>
        <OAButton type="submit" fullwidth>Войти</OAButton>
      </OAForm>
    </div>
  );
};

export default Login;
