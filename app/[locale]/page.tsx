import { Hero } from "@/components/Hero";
import { ProgramCards } from "@/components/ProgramCards";
import { UpdatesPreview } from "@/components/UpdatesPreview";

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
      <Hero />
      <ProgramCards />
      <UpdatesPreview locale={params.locale} />
    </>
  );
}
