import {Suspense} from 'react';
import DonationBannerInner from './DonationBannerInner';

export default function DonationBanner() {
  return (
    <Suspense fallback={null}>
      {/* @ts-expect-error Async Server Component */}
      <DonationBannerInner />
    </Suspense>
  );
}

