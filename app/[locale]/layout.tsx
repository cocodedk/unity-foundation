import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import {isRTL, Locale, locales} from '@/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonationBanner from '@/components/DonationBanner';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: Locale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={isRTL(locale) ? 'rtl' : 'ltr'}>
      <body className="min-h-dvh bg-white text-slate-900">
        <NextIntlClientProvider messages={messages}>
          <DonationBanner />
          <Header locale={locale} />
          <main className="container py-10">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

