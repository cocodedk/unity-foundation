import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export async function Hero() {
  const t = await getTranslations();

  return (
    <section className="relative w-full h-[28rem] md:h-96 flex items-center justify-center overflow-hidden pt-0">
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
      <div className="relative z-10 -mt-4 md:mt-0">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-seedwhite mb-4 leading-tight drop-shadow-lg">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-3xl mb-6 max-w-6xl mx-auto" style={{color: '#2B7A95', textShadow: '0 0 8px rgba(255,255,255,1), 0 0 12px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.8)'}}>
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
