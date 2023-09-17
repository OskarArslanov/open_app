import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const middleware = (req: NextRequest, res: NextResponse) => {
  return intlMiddleware(req);
};

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
