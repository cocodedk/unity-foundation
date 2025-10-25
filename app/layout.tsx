import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { getOrganizationName } from "@/lib/metadata";

export const metadata: Metadata = {
  title: getOrganizationName("en"),
  description: "Supporting children, people with disabilities, and people experiencing poverty"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
