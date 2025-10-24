import {useTranslations} from 'next-intl';

export default function CookiesPage() {
  const t = useTranslations('legal');
  return (
    <div className="prose">
      <h1>{t('cookies')}</h1>
      <p>{t('comingSoon')}</p>
    </div>
  );
}
