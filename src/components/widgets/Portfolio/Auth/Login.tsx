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
import Script from 'next/script';
import VKSignIn from './VKSignIn';
import YandexSignIn from './YandexSignIn';
import SberSignIn from './SberSignIn';

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

const StyledLoginGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
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
          <StyledLoginGroup>
            <OAButton type="submit" fullwidth style={{ borderRadius: '10px' }}>
              {t('title')}
            </OAButton>
            <VKSignIn
              onRequest={(e) => {
                setAlert({
                  type: 'success',
                  message: `Добрый день от vk.com, ${e.first_name} ${e.last_name}`,
                });
              }}
            />
            <YandexSignIn />
            <SberSignIn />
          </StyledLoginGroup>
        </OAForm>
      </Container>
      <Script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js" />
    </OAAnimateContainer>
  );
};

export default Login;
