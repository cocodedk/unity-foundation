"use client";
import {useTranslations} from 'next-intl';
import {useState} from 'react';

export default function DonatePage() {
  const t = useTranslations('donate');
  const [copied, setCopied] = useState(false);
  // In v1, fetch from /api/announcement; placeholder env var fallback
  const mobilePay = process.env.NEXT_PUBLIC_MOBILEPAY_BOX || 'XXXXXX';

  const copy = async () => {
    await navigator.clipboard.writeText(mobilePay);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">{t('title')}</h1>
      <div className="rounded-xl bg-beige p-6 shadow-soft">
        <p className="text-lg">
          {t('mobilePay')}: <span className="font-mono text-2xl">{mobilePay}</span>
        </p>
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={copy}
            className="rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-dark"
          >
            {copied ? t('copied') : t('copy')}
          </button>
          {/* QR placeholder; admin-managed in v1 */}
          <div className="h-24 w-24 rounded-md bg-white ring-1 ring-slate-200 grid place-content-center text-xs text-slate-500">
            QR
          </div>
        </div>
      </div>
      <p className="text-slate-700">
        Donations support children, people with disabilities, and people experiencing
        poverty. Thank you for your generosity.
      </p>
    </div>
  );
}

