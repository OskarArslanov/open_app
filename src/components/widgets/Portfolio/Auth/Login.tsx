'use client';

import { AxiosResponse, AxiosError } from 'axios';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import styled from '@emotion/styled';
import OAButton from '@/features/OAButton';
import OACheckbox from '@/features/OACheckbox';
import OAForm from '@/features/OAForm';
import OAInput from '@/features/OAInput';
import axiosInstance from '@/utils/axiosConfig';
import { OAAnimateContainer } from '@/widgets/OAAnimateContainer';
import OAAlert, { OAAlertType } from '@/components/features/OAAlert';
import VKSignIn from './VKSignIn';

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
  const [error, setError] = useState<string>();
  const [alert, setAlert] = useState<OAAlertType>();
  const t = useTranslations('Portfolio.login');
  const handleSubmit = async (data: Record<string, any>) => {
    axiosInstance
      .post('/auth/login', {
        login: data.email,
        password: data.password,
      })
      .then((resp: AxiosResponse) => {
        localStorage.setItem('jwt', resp.data.jwt);
        localStorage.setItem('user', JSON.stringify(resp.data.user));
      })
      .catch((err: AxiosError) => setError(err.response?.data as string));
  };

  return (
    <OAAnimateContainer>
      <OAAlert alert={alert} onClose={() => setAlert(undefined)} />
      <Container id="login">
        <Title>{t('title')}</Title>
        <OAForm onSubmit={handleSubmit} error={error}>
          <OAInput
            name="email"
            placeholder="Email"
            type="email"
            rules={{ required: true, minLength: 6 }}
          />
          <OAInput
            name="password"
            placeholder={t('pass')}
            type="password"
            rules={{ required: true, minLength: 6 }}
          />
          <RememberMe>
            <OACheckbox name="remember" label={t('remember')} />
            <OAButton variant="ghost">{t('forget')}?</OAButton>
          </RememberMe>
          <OAButton type="submit" fullwidth>
            {t('title')}
          </OAButton>
        </OAForm>
        <VKSignIn
          onRequest={(e) => {
            console.log(e);
            setAlert({
              type: 'success',
              message: `Добрый день, ${e.response.first_name} ${e.response.last_name}`,
            });
          }}
        />
      </Container>
    </OAAnimateContainer>
  );
};

export default Login;
