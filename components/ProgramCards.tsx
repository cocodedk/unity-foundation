"use client";
import {useTranslations} from 'next-intl';

const Card = ({title, desc}: {title: string; desc: string}) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5">
    <div className="text-lg font-semibold">{title}</div>
    <p className="mt-2 text-slate-700">{desc}</p>
  </div>
);

export default function ProgramCards() {
  const t = useTranslations('programs');
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">{t('title')}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card title={t('children')} desc={t('desc.children')} />
        <Card title={t('disability')} desc={t('desc.disability')} />
        <Card title={t('poverty')} desc={t('desc.poverty')} />
      </div>
    </section>
  );
}
