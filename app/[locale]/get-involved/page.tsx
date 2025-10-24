import {useTranslations} from 'next-intl';

export default function GetInvolvedPage() {
  const t = useTranslations('getInvolved');
  return (
    <div className="prose">
      <h1>{t('title')}</h1>
      <p>{t('intro')}</p>
    </div>
  );
}
