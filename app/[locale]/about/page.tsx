import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div>
      <section className="py-16 md:py-24 bg-seedwhite">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-growth mb-8 text-center">
            {t("about.title")}
          </h1>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-wind leading-relaxed">
                  {t("about.intro")}
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-fluff">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-seedwhite">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-growth mb-3">
                    {t("about.founderTitle")}
                  </h2>
                  <p className="text-wind">{t("about.founderName")}</p>
                </CardContent>
              </Card>

              <Card className="bg-seedwhite">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-growth mb-3">
                    {t("about.adminTitle")}
                  </h2>
                  <p className="text-wind">{t("about.adminText")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
