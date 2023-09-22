'use client';

import { FC, useEffect } from 'react';

const YandexSignIn: FC = () => {
  useEffect(() => {
    // @ts-ignore
    window?.YaAuthSuggest?.init(
      {
        client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
        response_type: 'token',
        redirect_uri: 'https://oskararslanov.vercel.app/redirect',
      },
      'https://oskararslanov.vercel.app',
      {
        view: 'button',
        parentId: 'yaButtonContainer',
        buttonSize: 'm',
        buttonView: 'main',
        buttonTheme: 'light',
        buttonBorderRadius: '10',
        buttonIcon: 'ya',
      },
    )
      .then((resp: any) => {
        console.log(resp);
        resp.handler();
      })
      .then((data: any) => console.log('Сообщение с токеном', data))
      .catch((error: any) => console.log('Обработка ошибки', error));
  }, []);
  return <div id="yaButtonContainer" />;
};

export default YandexSignIn;
