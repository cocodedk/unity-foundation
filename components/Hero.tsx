import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export async function Hero() {
  const t = await getTranslations();

  return (
    <section className="relative bg-gradient-to-br from-brand/5 via-beige to-brand/10 overflow-hidden">
      <Container>
        <div className="py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <Link href="/donate">
            <Button size="lg" className="shadow-lg">
              {t("hero.cta")}
            </Button>
          </Link>
        </div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
