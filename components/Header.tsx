"use client";
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Locale} from '@/i18n/config';
import LangSwitcher from './LangSwitcher';

export default function Header({locale}: {locale: Locale}) {
  const t = useTranslations('nav');
  const L = (p: string) => `/${locale}${p}`;
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex h-14 items-center justify-between">
        <Link href={L('/')} className="font-semibold">
          Unity Foundation
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href={L('/')} className="hover:text-brand">{t('home')}</Link>
          <Link href={L('/about')} className="hover:text-brand">{t('about')}</Link>
          <Link href={L('/programs')} className="hover:text-brand">{t('programs')}</Link>
          <Link href={L('/updates')} className="hover:text-brand">{t('updates')}</Link>
          <Link href={L('/donate')} className="text-brand font-medium">{t('donate')}</Link>
          <Link href={L('/contact')} className="hover:text-brand">{t('contact')}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}

