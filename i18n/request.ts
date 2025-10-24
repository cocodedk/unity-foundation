import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({locale}) => {
  // Ensure a supported locale
  if (!locales.includes(locale as any)) {
    locale = 'en';
  }

  const messages = (await import(`../messages/${locale}/common.json`)).default;
  return {messages};
});

