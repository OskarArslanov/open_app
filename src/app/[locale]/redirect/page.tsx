'use client';

import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // @ts-ignore
    window?.YaSendSuggestToken?.('https://oskararslanov.vercel.app', {
      flag: true,
    });
  }, []);

  return null;
};

export default RedirectPage;
