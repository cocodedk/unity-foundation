import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "./ui/Card";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { formatDate } from "@/lib/utils";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export async function UpdatesPreview({ locale }: { locale: string }) {
  const t = await getTranslations();

  // Guard against missing DATABASE_URL during build
  if (!process.env.DATABASE_URL) {
    return (
      <section className="py-16 md:py-24 bg-background-sand">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-growth mb-12">
            {t("updates.title")}
          </h2>
          <p className="text-center text-wind">{t("ui.noPosts")}</p>
        </Container>
      </section>
    );
  }

  try {
    // TODO: Re-enable after Netlify Prisma issue resolved
    // Temporarily return "no posts" message due to Prisma binary issues
    return (
      <section className="py-16 md:py-24 bg-background-sand">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-growth mb-12">
            {t("updates.title")}
          </h2>
          <p className="text-center text-wind">{t("ui.noPosts")}</p>
        </Container>
      </section>
    );
  } catch (error) {
    console.error("Failed to load updates:", error);
    return (
      <section className="py-16 md:py-24 bg-background-sand">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-growth mb-12">
            {t("updates.title")}
          </h2>
          <p className="text-center text-wind">{t("ui.noPosts")}</p>
        </Container>
      </section>
    );
  }
}
