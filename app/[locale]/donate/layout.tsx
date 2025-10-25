import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return generatePageMetadata({
    title: t("seo.donate.title"),
    description: t("seo.donate.description"),
    locale,
    path: "/donate"
  });
}

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
