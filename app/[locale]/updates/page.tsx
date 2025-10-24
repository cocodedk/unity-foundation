import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import { getCloudinaryUrl } from "@/lib/cloudinary";

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic';

export default async function UpdatesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  // Guard against missing DATABASE_URL
  const posts = process.env.DATABASE_URL
    ? await prisma.post.findMany({
        where: { status: "PUBLISHED" },
        include: {
          i18n: {
            where: { locale }
          }
        },
        orderBy: { publishedAt: "desc" }
      }).catch(() => [])
    : [];

  return (
    <section className="py-16 md:py-24 bg-background-light">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-12 text-center">
          {t("updates.title")}
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-text-primary">{t("ui.noPosts")}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => {
              const content = post.i18n[0];
              if (!content) return null;

              return (
                <Link key={post.id} href={`/updates/${post.slug}` as any}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {post.coverId && (
                      <div className="relative h-48 w-full bg-background-light">
                        <Image
                          src={getCloudinaryUrl(post.coverId, {
                            width: 400,
                            height: 300
                          })}
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
        )}
      </Container>
    </section>
  );
}
