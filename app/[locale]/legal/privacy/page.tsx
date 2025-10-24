import {useTranslations} from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('legal');
  return (
    <div className="prose">
      <h1>{t('privacy')}</h1>
      <p>{t('comingSoon')}</p>
    </div>
  );
}
