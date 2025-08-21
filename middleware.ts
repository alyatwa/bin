import createMiddleware from 'next-intl/middleware';

export default createMiddleware({ 
  locales: ['en', 'ar'], 
  defaultLocale: 'en', 
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 