import {getRequestConfig} from 'next-intl/server';
import {locales} from './i18n/config';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = (locales as readonly string[]).includes(locale as any) ? (locale as string) : 'en';
  const messages = (await import(`./messages/${safeLocale}/common.json`)).default;
  return {locale: safeLocale, messages};
});
