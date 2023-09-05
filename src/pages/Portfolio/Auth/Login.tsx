'use client';

import Link from 'next/link';
import OAForm from '@/shared/controls/OAForm';
import OAInput from '@/shared/controls/OAInput';
import OAButton from '@/shared/controls/OAButton';
import OACheckbox from '@/shared/controls/OACheckbox';
import styled from 'styled-components';
import axiosInstance from '@/shared/utils/axiosConfig';
import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 500px;
  justify-content: center;
  height: 100%;
  align-self: center;
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
  const router = useRouter();
  const [error, setError] = useState<string>();
  const handleSubmit = async (data: Record<string, any>) => {
    axiosInstance
      .post('/auth/login', {
        login: data.email,
        password: data.password,
      })
      .then((resp: AxiosResponse) => {
        localStorage.setItem('jwt', resp.data.jwt);
        localStorage.setItem('user', JSON.stringify(resp.data.user));
        router.push('/platform');
      })
      .catch((err: AxiosError) => setError(err.response?.data as string));
  };
  return (
    <Container>
      {/* <Link href="/">
        <Image
          width={128}
          height={64}
          src="/logoO.png"
          style={{ borderRadius: '5px' }}
          alt="logo"
        />{' '}
      </Link> */}
      <Title>Вход</Title>
      <OAForm onSubmit={handleSubmit} error={error}>
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
