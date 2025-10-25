import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <section className="py-16 md:py-24 bg-seedwhite">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-growth mb-8 text-center">
          {t("legal.cookies")}
        </h1>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <p className="text-wind">{t("legal.comingSoon")}</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
