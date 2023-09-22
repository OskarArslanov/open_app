'use client';

import { FC, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const YandexSignIn: FC = (props) => {
  useEffect(() => {
    console.log(window);

    // @ts-ignore
    window?.YaAuthSuggest?.init(
      {
        client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
        response_type: 'token',
      },
      'https://oskararslanov.vercel.app/redirect',
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
        resp.handler();
        console.log(resp);
      })
      .then((data: any) => console.log('Сообщение с токеном', data))
      .catch((error: any) => console.log('Обработка ошибки', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id="yaButtonContainer" />;
};

export default YandexSignIn;
