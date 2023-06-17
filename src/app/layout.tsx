import './globals.css';
import { Noto_Sans } from 'next/font/google';
import styles from './app.module.css';
import OAFooterContainer from '@/widgets/OAFooterContainer';
import OAHeaderContainer from '@/widgets/OAHeaderContainer';
import OABodyContainer from '@/widgets/OABodyContainer';
import { FC, PropsWithChildren } from 'react';

const inter = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Huli d.o.o',
  description: 'Huli d.o.o test task',
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${styles.layout}`}
        data-theme="default"
      >
        <div className={styles.container}>
          <OAHeaderContainer />
          <OABodyContainer>{props.children}</OABodyContainer>
          <OAFooterContainer />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
