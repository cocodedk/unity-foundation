import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { HomeTeasers } from "@/components/HomeTeasers";
import { UpdatesPreview } from "@/components/UpdatesPreview";
import { Philosophy } from "@/components/Philosophy";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return generatePageMetadata({
    title: t("seo.home.title"),
    description: t("seo.home.description"),
    locale,
    path: ""
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-seedwhite -mt-16 pt-16 md:mt-0 md:pt-0">
        <Hero />
      </section>
      <HomeTeasers />
      <UpdatesPreview locale={locale} />
      <Philosophy />
    </>
  );
}
