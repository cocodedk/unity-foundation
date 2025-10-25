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
    // Temporarily return empty array due to Prisma binary issues
    const posts: never[] = [];

    if (posts.length === 0) {
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

    return (
      <section className="py-16 md:py-24 bg-background-sand">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-growth mb-12">
            {t("updates.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => {
              const content = post.i18n[0];
              if (!content) return null;

              return (
                <Link key={post.id} href={`/updates/${post.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {post.coverId && (
                      <div className="relative h-48 w-full bg-background-light">
                        <Image
                          src={getCloudinaryUrl(post.coverId, { width: 400, height: 300 })}
                          alt={content.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="text-sm text-text-primary/60 mb-2">
                        {formatDate(post.publishedAt!, locale)}
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2">
                        {content.title}
                      </h3>
                      {content.summary && (
                        <p className="text-text-primary text-sm line-clamp-3">
                          {content.summary}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/updates">
              <Button variant="secondary">{t("ui.viewAll")}</Button>
            </Link>
          </div>
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
