import Script from 'next/script';
import { FC, PropsWithChildren } from 'react';

const RedirectLayout: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <Script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js" />
      {props.children}
    </>
  );
};

export default RedirectLayout;
