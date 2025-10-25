import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { getOrganizationName } from "@/lib/metadata";

export const metadata: Metadata = {
  title: getOrganizationName("en"),
  description: "Supporting children, people with disabilities, and people experiencing poverty",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://unityfoundation.org"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png" }]
  },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4A7C59"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
