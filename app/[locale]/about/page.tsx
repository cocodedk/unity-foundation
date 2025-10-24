import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');
  return (
    <div className="prose">
      <h1>{t('title')}</h1>
      <p>{t('intro')}</p>
      <h2>{t('founderTitle')}</h2>
      <p>{t('founderName')}</p>
      <h2>{t('adminTitle')}</h2>
      <p>{t('adminText')}</p>
    </div>
  );
}
