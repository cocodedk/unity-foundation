import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {useLocale} from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-beige to-white p-8 shadow-soft md:p-12">
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-slate-700">{t('subtitle')}</p>
        <div className="mt-6 flex items-center gap-4">
          <Link
            href={`/${locale}/donate`}
            className="rounded-md bg-brand px-5 py-3 text-white shadow hover:bg-brand-dark"
          >
            {t('cta')}
          </Link>
          {/* MobilePay number pill placeholder */}
          <span className="rounded-full bg-white/80 px-3 py-1 text-sm ring-1 ring-slate-200">
            MobilePay: <span className="font-mono">{process.env.NEXT_PUBLIC_MOBILEPAY_BOX || 'XXXXXX'}</span>
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(1000px_400px_at_80%_-20%,rgba(14,116,144,0.10),transparent)]" />
    </section>
  );
}

