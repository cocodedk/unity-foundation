import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { HomeTeasers } from "@/components/HomeTeasers";
import { UpdatesPreview } from "@/components/UpdatesPreview";
import { Philosophy } from "@/components/Philosophy";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-seedwhite">
        <Hero />
      </section>
      <HomeTeasers />
      <UpdatesPreview locale={locale} />
      <Philosophy />
    </>
  );
}
