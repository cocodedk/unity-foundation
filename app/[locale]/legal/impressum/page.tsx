import {useTranslations} from 'next-intl';

export default function ImpressumPage() {
  const t = useTranslations('legal');
  return (
    <div className="prose">
      <h1>{t('impressum')}</h1>
      <p>{t('comingSoon')}</p>
    </div>
  );
}
