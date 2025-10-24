"use client";

import { useTranslations } from "next-intl";
import { Container } from "./ui/Container";

interface DonationBannerInnerProps {
  text: string;
  mobilePayNumber: string;
}

export function DonationBannerInner({
  text,
  mobilePayNumber
}: DonationBannerInnerProps) {
  const t = useTranslations();

  return (
    <div className="bg-accent/10 border-b border-accent/20 py-3">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm md:text-base">
          <span className="text-text-primary">
            {text || t("banner.prefix")}
          </span>
          <span className="font-bold text-white bg-accent px-4 py-1 rounded-full">
            {mobilePayNumber}
          </span>
        </div>
      </Container>
    </div>
  );
}
