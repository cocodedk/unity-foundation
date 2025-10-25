import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return generatePageMetadata({
    title: t("seo.getInvolved.title"),
    description: t("seo.getInvolved.description"),
    locale,
    path: "/get-involved"
  });
}

export default async function GetInvolvedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <section className="py-16 md:py-24 bg-seedwhite">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-growth mb-8 text-center">
          {t("getInvolved.title")}
        </h1>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-wind">
                {t("getInvolved.intro")}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
