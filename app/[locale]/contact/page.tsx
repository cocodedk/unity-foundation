import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div>
      <section className="py-16 md:py-24 bg-seedwhite">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-growth mb-8 text-center">
            {t("contact.title")}
          </h1>

          <div className="max-w-2xl mx-auto space-y-6">
            <Card className="bg-seedwhite">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-wind mb-4">
                  {t("contact.emailBlurb")}
                </p>
                <a
                  href="mailto:contact@unityfoundation.org"
                  className="text-xl font-semibold text-growth hover:text-coral transition-colors"
                >
                  contact@unityfoundation.org
                </a>
              </CardContent>
            </Card>

            <Card className="bg-seedwhite">
              <CardContent className="p-8 text-center">
                <h2 className="text-xl font-bold text-wind mb-4">
                  {t("contact.telegram")}
                </h2>
                <a
                  href="https://t.me/unity_foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-growth hover:text-coral transition-colors"
                >
                  @unity_foundation
                </a>
              </CardContent>
            </Card>

            <p className="text-center text-wind/60 text-sm">
              {t("contact.comingSoon")}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
