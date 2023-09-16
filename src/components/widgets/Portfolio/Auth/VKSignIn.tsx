'use client';

import { VKSilentData, VKProfile } from '@/components/entities/vk';
import {
  Config,
  Connect,
  ConnectEvents,
  VKAuthButtonCallbackResult,
} from '@vkontakte/superappkit';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface Props {
  onRequest: (data: VKProfile) => void;
}
const VKSignIn: FC<Props> = (props) => {
  const [payload, setPayload] = useState<VKAuthButtonCallbackResult>();

  useEffect(() => {
    const data = payload?.payload as VKSilentData;
    if (!data?.user.first_name) {
      // eslint-disable-next-line no-console
      console.log('bad auth', data);
    } else {
      axios
        .post('/api/auth/login/vk', data)
        .then((resp) => props.onRequest(resp.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(payload?.payload)]);

  useEffect(() => {
    Config.init({
      appId: 51750467, // идентификатор приложения
    });

    const VKOneTapButton = Connect.buttonOneTapAuth({
      callback: (e) => {
        const type = e.type;
        if (!type) {
          return false;
        }

        switch (type) {
          case ConnectEvents.OneTapAuthEventsSDK.LOGIN_SUCCESS: // = 'VKSDKOneTapAuthLoginSuccess'
            setPayload(e);
            return false;
          // Для этих событий нужно открыть полноценный VK ID чтобы
          // пользователь дорегистрировался или подтвердил телефон
          case ConnectEvents.OneTapAuthEventsSDK.FULL_AUTH_NEEDED: //  = 'VKSDKOneTapAuthFullAuthNeeded'
          case ConnectEvents.OneTapAuthEventsSDK.PHONE_VALIDATION_NEEDED: // = 'VKSDKOneTapAuthPhoneValidationNeeded'
          case ConnectEvents.ButtonOneTapAuthEventsSDK.SHOW_LOGIN: // = 'VKSDKButtonOneTapAuthShowLogin'
            return Connect.redirectAuth({
              url: 'https://oskararslanov.vercel.app',
              state: '?logged=true',
            }); // url - строка с url, на который будет произведён редирект после авторизации.
          // state - состояние вашего приложение или любая произвольная строка, которая будет добавлена к url после авторизации.
          // Пользователь перешел по кнопке "Войти другим способом"
          case ConnectEvents.ButtonOneTapAuthEventsSDK.SHOW_LOGIN_OPTIONS: // = 'VKSDKButtonOneTapAuthShowLoginOptions'
            // Параметр screen: phone позволяет сразу открыть окно ввода телефона в VK ID
            // Параметр url: ссылка для перехода после авторизации. Должен иметь https схему. Обязательный параметр.
            return Connect.redirectAuth({
              screen: 'phone',
              url: 'https://oskararslanov.vercel.app/about',
            });
          default:
            return null;
        }
      },
      // Не обязательный параметр с настройками отображения OneTap
      options: {
        // showAlternativeLogin: true, // Отображение кнопки "Войти другим способом"
        displayMode: 'default', // Режим отображения кнопки 'default' | 'name_phone' | 'phone_name'
        buttonStyles: {
          borderRadius: 8, // Радиус скругления кнопок
        },
      },
    });

    const login = document.getElementById('vkSignIn');
    const frame = VKOneTapButton?.getFrame();
    if (frame && login) {
      login.appendChild(frame);
    }
  }, []);

  return <div id="vkSignIn" />;
};

export default VKSignIn;
