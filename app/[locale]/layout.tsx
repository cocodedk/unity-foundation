import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, isRTL } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DonationBanner } from "@/components/DonationBanner";
import { OrganizationSchema } from "@/components/StructuredData";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as unknown as typeof locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={isRTL(locale) ? "rtl" : "ltr"}>
      <head>
        <OrganizationSchema locale={locale} />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <DonationBanner locale={locale} />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
