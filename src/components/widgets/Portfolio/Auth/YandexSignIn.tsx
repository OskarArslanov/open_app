'use client';

import Script from 'next/script';
import { FC, useEffect, useState } from 'react';

interface Props {
  onRequest?: (data: any) => void;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const YandexSignIn: FC<Props> = (props) => {
  const [el, setEl] = useState<any>();

  useEffect(() => {
    const oauthQueryParams = {
      client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
      response_type: 'token',
      redirect_uri: process.env.NEXT_PUBLIC_YANDEX_REDIRECT,
    };

    const tokenPageOrigin = process.env.NEXT_PUBLIC_YANDEX_REDIRECT;
    // @ts-ignore
    const yaSuggest = window?.YaAuthSuggest;
    const button = (
      <Script id="yaButton">
        {yaSuggest
          ?.init(oauthQueryParams, tokenPageOrigin, {
            view: 'button',
            parentId: 'buttonContainerId',
            buttonSize: 'm',
            buttonView: 'main',
            buttonTheme: 'light',
            buttonBorderRadius: '10',
            buttonIcon: 'ya',
          })
          .then(({ handler }: { handler: any }) => handler())
          .then((data: any) => console.log('Сообщение с токеном', data))
          .catch((error: any) => console.log('Обработка ошибки', error))}
      </Script>
    );
    setEl(button);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return el;
};

export default YandexSignIn;
