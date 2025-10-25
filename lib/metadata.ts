import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  locale: string;
  path?: string;
}

// Constants for organization name - matches translation files
const ORGANIZATION_NAMES = {
  en: "Unity Foundation",
  fa: "بنیاد همبستگی",
  da: "Unity Foundation"
} as const;

type SupportedLocale = keyof typeof ORGANIZATION_NAMES;

export function getOrganizationName(locale: string): string {
  return ORGANIZATION_NAMES[locale as SupportedLocale] || ORGANIZATION_NAMES.en;
}

export function generatePageMetadata({
  title,
  description,
  locale,
  path = ""
}: PageMetadata): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://unityfoundation.org";
  const url = `${baseUrl}/${locale}${path}`;
  const orgName = getOrganizationName(locale);

  return {
    title: `${title} | ${orgName}`,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: orgName,
      locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: orgName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/${locale}/opengraph-image`]
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        da: `${baseUrl}/da${path}`,
        fa: `${baseUrl}/fa${path}`
      }
    }
  };
}
