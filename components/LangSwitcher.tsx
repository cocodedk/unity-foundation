"use client";
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {Locale, locales, localeNames} from '@/i18n/config';

function swapLocale(path: string, to: Locale) {
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return `/${to}`;
  parts[0] = to;
  return `/${parts.join('/')}`;
}

export default function LangSwitcher({locale}: {locale: Locale}) {
  const pathname = usePathname() || '/';
  return (
    <div className="flex gap-1">
      {locales.map((l) => (
        <Link
          key={l}
          href={swapLocale(pathname, l)}
          className={`rounded px-2 py-1 text-sm ${
            l === locale ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
          }`}
          prefetch={false}
        >
          {localeNames[l]}
        </Link>
      ))}
    </div>
  );
}

