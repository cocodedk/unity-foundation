import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unity Foundation",
  description: "Supporting children, people with disabilities, and people experiencing poverty"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
