import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const csp = `img-src 'self' data: mc.admetrica.ru mc.yandex.ru avatars.mds.yandex.net yastatic.net https://passport-rc.yandex.ru/;`;

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const middleware = (req: NextRequest, res: NextResponse) => {
  req.headers.append('Content-Security-Policy', csp);
  return intlMiddleware(req);
};

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
