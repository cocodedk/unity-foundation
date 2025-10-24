import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  locale: string;
  path?: string;
}

export function generatePageMetadata({
  title,
  description,
  locale,
  path = ""
}: PageMetadata): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://unityfoundation.org";
  const url = `${baseUrl}/${locale}${path}`;

  return {
    title: `${title} | Unity Foundation`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Unity Foundation",
      locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
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
