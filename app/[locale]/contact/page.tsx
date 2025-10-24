import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="py-16 md:py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          {t("contact.title")}
        </h1>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                {t("contact.emailBlurb")}
              </p>
              <a
                href="mailto:contact@unityfoundation.org"
                className="text-xl font-semibold text-brand hover:underline"
              >
                contact@unityfoundation.org
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t("contact.telegram")}
              </h2>
              <a
                href="https://t.me/unity_foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-brand hover:underline"
              >
                @unity_foundation
              </a>
            </CardContent>
          </Card>

          <p className="text-center text-gray-500 text-sm">
            {t("contact.comingSoon")}
          </p>
        </div>
      </Container>
    </div>
  );
}
