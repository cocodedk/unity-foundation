import { ImageResponse } from "next/og";
import { getOrganizationName } from "@/lib/metadata";

export const runtime = "edge";
export const alt = "Unity Foundation";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const orgName = getOrganizationName(locale);

  const descriptions = {
    en: "Supporting vulnerable communities with dignity and compassion",
    da: "Støtter sårbare samfund med værdighed og medfølelse",
    fa: "حمایت از جوامع آسیب‌پذیر با کرامت و مهربانی"
  } as const;

  const description = descriptions[locale as keyof typeof descriptions] || descriptions.en;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#F8F6F4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          direction: locale === "fa" ? "rtl" : "ltr"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px"
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#4A7C59",
              textAlign: "center"
            }}
          >
            {orgName}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#6B7280",
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: 1.4
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
