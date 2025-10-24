import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('footer');
  return (
    <div className="prose">
      <h1>About</h1>
      <p>
        Unity Foundation is a non-governmental, non-political, grassroots charity. We
        support children, people with disabilities, and people experiencing poverty.
      </p>
      <h2>Founder</h2>
      <p>Mandana Zaboli</p>
      <h2>Administration</h2>
      <p>cocode.dk / Babak Bandpey</p>
      <blockquote>{t('blurb')}</blockquote>
    </div>
  );
}

