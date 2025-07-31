import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Optionally configure the locale detection
  localeDetection: true,

  // Optionally configure which paths should not be localized
  pathnames: {
    '/': '/',
    '/dashboard': '/dashboard',
    '/auth/signin': '/auth/signin',
    '/auth/signup': '/auth/signup'
  }
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|es|fr)/:path*']
};