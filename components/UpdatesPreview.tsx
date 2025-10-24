"use client";
import Link from 'next/link';
import Image from 'next/image';
import {useTranslations, useLocale} from 'next-intl';

export default function UpdatesPreview() {
  const t = useTranslations('updates');
  const ui = useTranslations('ui');
  const locale = useLocale();
  // Placeholder: would fetch latest posts for locale
  const posts: Array<{slug: string; title: string; date: string; cover?: string}> = [];
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{t('title')}</h2>
        <Link href={`/${locale}/updates`} className="text-brand underline">
          {ui('viewAll')}
        </Link>
      </div>
      {posts.length === 0 ? (
        <div className="text-slate-600">{ui('noPosts')}</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/${locale}/updates/${p.slug}`} className="group rounded-xl border border-slate-200 bg-white shadow-soft">
              {p.cover ? (
                <Image src={p.cover} alt="" width={640} height={360} className="h-40 w-full rounded-t-xl object-cover" />
              ) : (
                <div className="h-40 w-full rounded-t-xl bg-slate-100" />
              )}
              <div className="p-4">
                <div className="text-xs text-slate-500">{p.date}</div>
                <div className="mt-1 line-clamp-2 font-medium group-hover:text-brand">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
