import { notFound } from "next/navigation";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export default async function UpdatePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await prisma.post.findUnique({
    where: { slug, status: "PUBLISHED" },
    include: {
      i18n: {
        where: { locale }
      },
      author: {
        select: { name: true, email: true }
      }
    }
  });

  if (!post || !post.i18n[0]) {
    notFound();
  }

  const content = post.i18n[0];

  return (
    <article className="py-16 md:py-24 bg-background-light">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              {content.title}
            </h1>
            <div className="text-text-primary/60">
              {formatDate(post.publishedAt!, locale)}
            </div>
          </header>

          {/* Cover Image */}
          {post.coverId && (
            <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src={getCloudinaryUrl(post.coverId, { width: 1200, height: 600 })}
                alt={content.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="whitespace-pre-wrap text-text-primary leading-relaxed">
              {content.body}
            </div>
          </div>

          {/* Gallery */}
          {post.gallery.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {post.gallery.map((imageId, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden"
                >
                  <Image
                    src={getCloudinaryUrl(imageId, { width: 400, height: 300 })}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </article>
  );
}
