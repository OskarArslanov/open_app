import './globals.css';
import { Noto_Sans } from 'next/font/google';
import app from './app.module.css';
import { FC, PropsWithChildren } from 'react';
import App from '@/pages/App';
import { Metadata } from 'next';

const inter = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Huli d.o.o',
  description: 'Huli d.o.o test task',
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  return (
    <html>
      <body className={`${inter.className} ${app.layout}`}>
        <App>{props.children}</App>
      </body>
    </html>
  );
};
export default RootLayout;
