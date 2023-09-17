'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function RedirectPage() {
  const [yaSendSuggest, setYaSendSuggest] = useState<any>();
  useEffect(() => {
    // @ts-ignore
    setYaSendSuggest(window?.YaSendSuggestToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js" />
      <Script id="yaSendSuggest">
        {yaSendSuggest?.(
          'https://oskararslanov.vercel.app/portfolio?job=login',
          {
            kek: 'true',
          },
        )}
      </Script>
    </>
  );
}
