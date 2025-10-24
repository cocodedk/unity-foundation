import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { prisma } from "@/lib/prisma";

// Force dynamic rendering - sitemap will be generated at request time
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://unityfoundation.org";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/updates",
    "/donate",
    "/get-involved",
    "/contact",
    "/legal/privacy",
    "/legal/cookies",
    "/legal/impressum"
  ];

  const staticPages = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8
    }))
  );

  // Dynamic post routes - only fetch if DATABASE_URL is available
  let postPages: MetadataRoute.Sitemap = [];

  if (process.env.DATABASE_URL) {
    try {
      const posts = await prisma.post.findMany({
        where: { status: "PUBLISHED" },
        select: { slug: true, updatedAt: true }
      });

      postPages = locales.flatMap((locale) =>
        posts.map((post) => ({
          url: `${baseUrl}/${locale}/updates/${post.slug}`,
          lastModified: post.updatedAt,
          changeFrequency: "monthly" as const,
          priority: 0.6
        }))
      );
    } catch (error) {
      console.error("Failed to fetch posts for sitemap:", error);
    }
  }

  return [...staticPages, ...postPages];
}
