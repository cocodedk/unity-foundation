import {headers} from 'next/headers';

export default async function DonationBannerInner() {
  // Placeholder fetch to API; returns enabled=false by default
  const h = await headers();
  const base = h.get('x-url-base') || '';
  try {
    const res = await fetch(`${base}/api/announcement`, {cache: 'no-store'});
    const data = await res.json();
    if (!data?.enabled) return null;
    return (
      <div className="w-full bg-brand text-white">
        <div className="container py-2 text-sm">
          <span className="font-medium">{data.bannerText || 'Donate via MobilePay:'}</span>
          {data.mobilePay ? <span className="ml-2 font-mono">{data.mobilePay}</span> : null}
        </div>
      </div>
    );
  } catch {
    return null;
  }
}

