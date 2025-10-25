import { getTranslations } from "next-intl/server";
import { Container } from "./ui/Container";
import { Card, CardContent } from "./ui/Card";

export async function Philosophy() {
  const t = await getTranslations();

  return (
    <section className="py-16 md:py-24 bg-seedwhite">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-growth mb-8">
            {t("philosophy.title")}
          </h2>

          <Card className="bg-fluff border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-wind leading-relaxed mb-8">
                {t("philosophy.content")}
              </p>

              <blockquote className="border-l-4 border-growth pl-6 py-2 italic">
                <p className="text-xl text-growth">
                  "{t("philosophy.quote")}"
                </p>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
