import './globals.css';
import { Noto_Sans } from 'next/font/google';
import app from './app.module.css';
import { FC, PropsWithChildren } from 'react';
import App from '@/pages/App';
import { Metadata } from 'next';
import styled from '@emotion/styled';

const inter = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'OskarArs',
  description: 'OskarArs web page',
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  return (
    <html style={{ height: '100%' }}>
      <body className={inter.className} style={{ height: '100%' }}>
        <App>{props.children}</App>
      </body>
    </html>
  );
};
export default RootLayout;
