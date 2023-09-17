'use client';

import Script from 'next/script';
import { FC, useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const YandexSignIn: FC = (props) => {
  const [el, setEl] = useState<any>();
  useEffect(() => {
    const oauthQueryParams = {
      client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
      response_type: 'token',
      redirect_uri: process.env.NEXT_PUBLIC_YANDEX_REDIRECT,
    };

    console.log(window);
    const tokenPageOrigin = process.env.NEXT_PUBLIC_YANDEX_REDIRECT;
    // @ts-ignore
    const yaAuthSuggest = window?.YaAuthSuggest;
    const button = (
      <Script id="yaButton">
        {yaAuthSuggest
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

    // @ts-ignore
    const yaSendSuggest = window?.YaSendSuggestToken;
    setEl(button);
    yaSendSuggest?.(process.env.NEXT_PUBLIC_YANDEX_REDIRECT, {
      flag: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js" />
      {el}
    </>
  );
};

export default YandexSignIn;
