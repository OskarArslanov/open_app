import { Noto_Sans } from 'next/font/google';
import { FC, ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';
import App from '@/components/layout/App';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
}

const inter = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'OskarArs',
  description: 'OskarArs web page',
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}
const LocaleLayout: FC<LocaleLayoutProps> = async (props) => {
  const locale = props.params.locale;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html style={{ height: '100%' }} lang={locale}>
      <body className={inter.className} style={{ height: '100%' }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <App>{props.children}</App>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
export default LocaleLayout;
