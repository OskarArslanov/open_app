'use client';

import Logo from '@/shared/assets/Logo';
import styles from './login.module.css';
import Link from 'next/link';
import OAForm from '@/shared/OAForm';
import OAInput from '@/shared/OAInput';
import OAButton from '@/shared/OAButton';
import OACheckbox from '@/shared/OACheckbox';

const LoginPage = () => {
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
          rules={{ required: true }}
        />
        <OAInput name="password" placeholder="Пароль" type="password" />
        <div className={styles.login_remeberme}>
          <OACheckbox name="remember" label="Запомнить меня" />
          <OAButton variant="text">Забыли пароль?</OAButton>
        </div>
        <OAButton type="submit">Войти</OAButton>
      </OAForm>
    </div>
  );
};

export default LoginPage;
