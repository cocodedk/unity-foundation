import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { ProgramCards } from "@/components/ProgramCards";
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
      <ProgramCards />
      <UpdatesPreview locale={locale} />
      <Philosophy />
    </>
  );
}
