import {useTranslations} from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const email = process.env.CONTACT_EMAIL || 'contact@example.com';
  const telegram = process.env.TELEGRAM_URL || '#';
  return (
    <div className="prose">
      <h1>{t('title')}</h1>
      <p>
        {t('emailBlurb')} <a href={`mailto:${email}`}>{email}</a>.
      </p>
      <p>
        {t('telegram')}: <a href={telegram}>{telegram}</a>
      </p>
      <p>{t('comingSoon')}</p>
    </div>
  );
}
