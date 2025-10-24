import {useTranslations} from 'next-intl';

export default function ProgramsPage() {
  const t = useTranslations('programs');
  return (
    <div className="prose">
      <h1>{t('title')}</h1>
      <ul>
        <li>{t('children')}</li>
        <li>{t('disability')}</li>
        <li>{t('poverty')}</li>
      </ul>
    </div>
  );
}

