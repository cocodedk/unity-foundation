import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return generatePageMetadata({
    title: t("seo.about.title"),
    description: t("seo.about.description"),
    locale,
    path: "/about"
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div>
      <section className="py-16 md:py-24 bg-seedwhite">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-growth mb-12 text-center">
            {t("about.title")}
          </h1>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-fluff border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-wind leading-relaxed mb-6">
                  {t("about.intro")}
                </p>
                <p className="text-lg text-wind leading-relaxed mb-6">
                  {t("about.mission")}
                </p>
                <p className="text-lg text-wind leading-relaxed mb-6">
                  {t("about.goal")}
                </p>
                <p className="text-lg text-wind leading-relaxed mb-6">
                  {t("about.location")}
                </p>
                <p className="text-xl text-growth font-semibold text-center italic">
                  {t("about.closing")}
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-fluff">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-growth mb-12 text-center">
            {t("about.whereWeWork")}
          </h2>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-seedwhite border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-wind leading-relaxed mb-6">
                  {t("about.whereIntro")}
                </p>
                <p className="text-lg text-wind leading-relaxed mb-6">
                  {t("about.whereExpansion")}
                </p>
                <p className="text-lg text-wind leading-relaxed">
                  {t("about.whereGoal")}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-seedwhite">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-growth mb-3">
                    {t("about.founderTitle")}
                  </h3>
                  <p className="text-wind">{t("about.founderName")}</p>
                </CardContent>
              </Card>

              <Card className="bg-seedwhite">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-growth mb-3">
                    {t("about.adminTitle")}
                  </h3>
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
