import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Locale} from '@/i18n/config';

export default function Footer({locale}: {locale: Locale}) {
  const t = useTranslations('footer');
  const L = (p: string) => `/${locale}${p}`;
  return (
    <footer className="mt-20 border-t border-slate-200 bg-beige/50">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">Unity Foundation</div>
            <p className="mt-2 text-slate-700">{t('blurb')}</p>
            <div className="mt-4 text-sm text-slate-600">
              <a href="#">{t('telegram')}</a>
            </div>
          </div>
          <div>
            <div className="font-medium">Links</div>
            <ul className="mt-2 space-y-1 text-slate-700">
              <li><Link href={L('/about')}>About</Link></li>
              <li><Link href={L('/programs')}>Programs</Link></li>
              <li><Link href={L('/updates')}>Updates</Link></li>
              <li><Link href={L('/donate')}>Donate</Link></li>
              <li><Link href={L('/contact')}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Contact</div>
            <p className="mt-2 text-slate-700">contact@unityfoundation.example</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Unity Foundation. {t('allRights')}.</div>
      </div>
    </footer>
  );
}

