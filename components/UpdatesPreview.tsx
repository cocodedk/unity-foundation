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

  try {
    const posts = await prisma.post.findMany({
      where: { status: "PUBLISHED" },
      include: {
        i18n: {
          where: { locale }
        }
      },
      orderBy: { publishedAt: "desc" },
      take: 3
    }).catch(() => []);

    if (posts.length === 0) {
      return (
        <section className="py-16 md:py-24 bg-beige">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              {t("updates.title")}
            </h2>
            <p className="text-center text-gray-600">{t("ui.noPosts")}</p>
          </Container>
        </section>
      );
    }

    return (
      <section className="py-16 md:py-24 bg-beige">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t("updates.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => {
              const content = post.i18n[0];
              if (!content) return null;

              return (
                <Link key={post.id} href={`/updates/${post.slug}` as any}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {post.coverId && (
                      <div className="relative h-48 w-full bg-gray-100">
                        <Image
                          src={getCloudinaryUrl(post.coverId, { width: 400, height: 300 })}
                          alt={content.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(post.publishedAt!, locale)}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {content.title}
                      </h3>
                      {content.summary && (
                        <p className="text-gray-600 text-sm line-clamp-3">
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
      <section className="py-16 md:py-24 bg-beige">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t("updates.title")}
          </h2>
          <p className="text-center text-gray-600">{t("ui.noPosts")}</p>
        </Container>
      </section>
    );
  }
}
