'use client';

import Logo from '@/shared/assets/Logo';
import Link from 'next/link';
import OAForm from '@/shared/controls/OAForm';
import OAInput from '@/shared/controls/OAInput';
import OAButton from '@/shared/controls/OAButton';
import OACheckbox from '@/shared/controls/OACheckbox';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.span`
  margin-top: 10%;
  font-size: var(--font-size_xxl);
  font-weight: var(--font-weight_l);
`;

const RememberMe = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -8px;
  margin-bottom: 8px;
`;

const Login = () => {
  return (
    <Container>
      <Link href="/">
        <Logo />
      </Link>
      <Title>Вход</Title>
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
        <RememberMe>
          <OACheckbox name="remember" label="Запомнить меня" />
          <OAButton variant="text">Забыли пароль?</OAButton>
        </RememberMe>
        <OAButton type="submit" fullwidth>
          Войти
        </OAButton>
      </OAForm>
    </Container>
  );
};

export default Login;
