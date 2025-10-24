import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";

export default async function GetInvolvedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="py-16 md:py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          {t("getInvolved.title")}
        </h1>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-700">
                {t("getInvolved.intro")}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
