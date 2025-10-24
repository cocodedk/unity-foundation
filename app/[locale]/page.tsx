import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { ProgramCards } from "@/components/ProgramCards";
import { UpdatesPreview } from "@/components/UpdatesPreview";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ProgramCards />
      <UpdatesPreview locale={locale} />
    </>
  );
}
