'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function RedirectPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [yaSendSuggest, setYaSendSuggest] = useState<any>();
  useEffect(() => {
    // @ts-ignore
    // setYaSendSuggest(
    //   // @ts-ignore
    //   window?.YaSendSuggestToken?.(
    //     'https://oskararslanov.vercel.app/portfolio?job=login',
    //     {
    //       kek: 'true',
    //     },
    //   ),
    // );
    window?.YaSendSuggestToken?.(
      'https://oskararslanov.vercel.app/portfolio?job=login',
      {
        kek: 'true',
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js" />
      {/* <Script id="yaSendSuggest">
        {yaSendSuggest?.(
          'https://oskararslanov.vercel.app/portfolio?job=login',
          {
            kek: 'true',
          },
        )}
      </Script> */}
    </>
  );
}
