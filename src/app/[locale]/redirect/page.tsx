'use client';

import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    console.log(window);
    // @ts-ignore
    window?.YaSendSuggestToken?.(
      'https://oskararslanov.vercel.app/portfolio?job=login',
      {
        flag: true,
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default RedirectPage;
