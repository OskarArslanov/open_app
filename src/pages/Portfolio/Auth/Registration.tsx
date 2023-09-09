'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { AnimateContainer } from '@/widgets/Animations';
import OAButton from '@/features/OAButton';
import OACheckbox from '@/features/OACheckbox';
import OAForm from '@/features/OAForm';
import OAInput from '@/features/OAInput';
import OAModal from '@/features/OAModal';
import OAAlert, { OAAlertType } from '@/features/OAAlert';

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

const Registration = () => {
  const [openAlert, setOpenAlert] = useState<OAAlertType>();
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (data: Record<string, any>) => {
    if (data.password === data.confirm_password) {
      setOpenAlert({ type: 'success', message: 'Запрос отправлен' });
    } else {
      setOpenAlert({ type: 'error', message: 'Пароли должны совпадать' });
    }
    console.log(data);
  };

  return (
    <AnimateContainer>
      <OAAlert alert={openAlert} onClose={() => setOpenAlert(undefined)} />
      <OAButton variant="ghost" query={{ job: 'login' }}>
        Уже зарегестрированы?
      </OAButton>
      <Container>
        <Title>Регистрация</Title>
        <OAForm onSubmit={handleSubmit}>
          <OAInput
            name="name"
            placeholder="Имя"
            type="text"
            rules={{
              required: 'Поле Имя обязательно к заполнению',
              minLength: {
                value: 6,
                message: 'Поле Имя должно содержать минимум 6 символов',
              },
            }}
          />
          <OAInput
            name="email"
            placeholder="Email"
            type="text"
            rules={{
              required: 'Поле Email обязательно к заполнению',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Введите Email в формате example@gmail.com',
              },
            }}
          />
          <OAInput
            name="phone"
            placeholder="Телефон"
            type="number"
            rules={{
              required: 'Поле Телефон обязательно к заполнению',
              minLength: {
                value: 11,
                message:
                  'Поле Телефон должно содержать 11 цифр в формате 89963359210',
              },
              maxLength: {
                value: 11,
                message:
                  'Поле Телефон должно содержать 11 цифр в формате 89963359210',
              },
            }}
          />
          <OAInput
            name="password"
            placeholder="Пароль"
            type="password"
            rules={{
              required: 'Поле Пароль обязательно к заполнению',
              minLength: {
                value: 6,
                message: 'Поле Пароль должно содержать минимум 6 символов',
              },
            }}
          />
          <OAInput
            name="confirm_password"
            placeholder="Подтвердить пароль"
            type="password"
            rules={{
              required: 'Поле Подтвердить пароль обязательно к заполнению',
              minLength: {
                value: 6,
                message:
                  'Поле Подтвердить пароль должно содержать минимум 6 символов',
              },
            }}
          />
          <OACheckbox
            name="remember"
            rules={{
              required: 'Ознакомьтесь с соглашением',
            }}
            label={
              <span
                style={{ fontSize: '12px', color: 'var(--text-color-primary)' }}
              >
                Нажимая &apos;Зарегистрироваться&apos; вы соглашаетесь с
                пользовательским{' '}
                <button
                  onClick={() => setOpenModal(true)}
                  type="button"
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--text-color-primary)',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  соглашением
                </button>
              </span>
            }
          />
          <OAButton type="submit" fullwidth>
            Зарегестрироваться
          </OAButton>
        </OAForm>
      </Container>
      <OAModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Private policy"
      >
        Some private policy
      </OAModal>
    </AnimateContainer>
  );
};

export default Registration;
