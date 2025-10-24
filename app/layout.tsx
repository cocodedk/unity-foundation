import "./globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Unity Foundation",
  description: "Unity Foundation — Non-governmental, non-political, grassroots charity",
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

