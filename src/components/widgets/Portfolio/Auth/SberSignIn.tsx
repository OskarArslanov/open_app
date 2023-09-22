'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { SberidSDK, SberidSDKProps } from '@sberid/js-sdk';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SberSignIn: FC = (props) => {
  return null;
  const onSuccessCallback = (result: any) => {
    console.log('Вы успешно вошли: ', result);
  };
  const onErrorCallback = (result: any) => {
    console.log('Что-то пошло не так: ', result);
  };

  const oidcParams = {
    response_type: 'code',
    client_type: 'PRIVATE',
    client_id: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    redirect_uri: 'https://example.com/oidc/success',
    state: 'ut8Ar4MUZEMDPIiD2ko914y37s0Q0VKJgxeCkU0yzTY',
    scope: 'openid name',
    nonce: 'NfZscgwxPY7v0kYvuPfnFHA57bqHxQc3lV51Oiaxlo4',
    login_hint: '79012345678',
    anyParam: 'param',
  };

  const params = {
    oidc: oidcParams,
    container: '.preview',
    display: 'popup',
    mweb2app: false,
    generateState: false,
    cloud: {
      enable: true,
    },
    notification: {
      enable: false,
      onNotificationBannerClose: () => {
        console.log('Баннер закрыт');
      },
      onNotificationBannerOpen: () => {
        console.log('Баннер открыт');
      },
      animation: true,
      position: 'right',
    },
    utmProxyDisabled: false,
    buttonProps: {
      type: 'default',
      custom: {
        anonymous: 'Вход',
        personal: 'Вход как {{userName}}',
      },
    },
    onSuccessCallback,
    onErrorCallback,
  };

  // @ts-ignore
  const sbSDK = new SberidSDK(params);
  console.log(sbSDK.getUser());
  return null;
};

export default SberSignIn;
