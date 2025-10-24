import { prisma } from "@/lib/prisma";
import { DonationBannerInner } from "./DonationBannerInner";

export async function DonationBanner({ locale }: { locale: string }) {
  try {
    const announcement = await prisma.announcement.findUnique({
      where: { id: 1 },
      include: {
        i18n: {
          where: { locale }
        }
      }
    }).catch(() => null);

    if (!announcement || !announcement.enabled) {
      return null;
    }

    const text = announcement.i18n[0]?.bannerText || "";

    return (
      <DonationBannerInner
        text={text}
        mobilePayNumber={announcement.mobilePay}
      />
    );
  } catch (error) {
    console.error("Failed to load donation banner:", error);
    return null;
  }
}
