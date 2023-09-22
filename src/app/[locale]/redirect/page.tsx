'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    // @ts-ignore
    window?.YaSendSuggestToken?.(
      'https://oskararslanov.vercel.app/portfolio?job=login',
      {
        kek: 'true',
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js" />
  );
}
