import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export default async function UpdatesPage({
  params
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();

  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    include: {
      i18n: {
        where: { locale: params.locale }
      }
    },
    orderBy: { publishedAt: "desc" }
  });

  return (
    <div className="py-16 md:py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          {t("updates.title")}
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">{t("ui.noPosts")}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => {
              const content = post.i18n[0];
              if (!content) return null;

              return (
                <Link key={post.id} href={`/updates/${post.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {post.coverId && (
                      <div className="relative h-48 w-full bg-gray-100">
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
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(post.publishedAt!, params.locale)}
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
        )}
      </Container>
    </div>
  );
}
