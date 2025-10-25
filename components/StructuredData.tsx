import { getOrganizationName } from "@/lib/metadata";

interface OrganizationSchemaProps {
  locale: string;
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://unityfoundation.org";
  const orgName = getOrganizationName(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: orgName,
    alternateName: locale === "fa" ? "بنیاد همبستگی" : "Unity Foundation",
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/images/logo-2.png`,
    description:
      locale === "en"
        ? "Supporting children, people with disabilities, and families in need in Iran through direct, meaningful aid."
        : locale === "da"
        ? "Støtter børn, mennesker med handicap og familier i nød i Iran gennem direkte, meningsfuld hjælp."
        : "حمایت از کودکان، افراد دارای معلولیت و خانواده‌های نیازمند در ایران از طریق کمک‌های مستقیم و معنادار.",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "DK",
        addressLocality: "Denmark"
      }
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Shiraz, Iran"
      },
      {
        "@type": "Place",
        name: "Sistan and Baluchestan, Iran"
      }
    ],
    sameAs: ["https://t.me/unity_foundation"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@unityfoundation.org",
      contactType: "customer service"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt: Date;
  locale: string;
  slug: string;
  imageId?: string;
  authorName?: string;
}

export function ArticleSchema({
  title,
  description,
  publishedAt,
  updatedAt,
  locale,
  slug,
  imageId,
  authorName
}: ArticleSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://unityfoundation.org";
  const orgName = getOrganizationName(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: publishedAt.toISOString(),
    dateModified: updatedAt.toISOString(),
    author: {
      "@type": authorName ? "Person" : "Organization",
      name: authorName || orgName
    },
    publisher: {
      "@type": "Organization",
      name: orgName,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo-2.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/${locale}/updates/${slug}`
    },
    ...(imageId && {
      image: {
        "@type": "ImageObject",
        url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_1200,h_630/${imageId}`
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
