import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export async function Hero() {
  const t = await getTranslations();

  return (
    <section className="relative w-full h-72 md:h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/header-background.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-seedwhite mb-6 leading-tight drop-shadow-lg">
              {t("hero.title")}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 max-w-6xl mx-auto" style={{color: '#3B9DBF', textShadow: '0 2px 4px rgba(255,255,255,0.8)'}}>
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" asChild>
                <Link href="/donate">{t("nav.donate")}</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/get-involved">{t("nav.getInvolved")}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
