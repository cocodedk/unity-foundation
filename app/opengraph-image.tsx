import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unity Foundation";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function Image() {
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
          fontFamily: "system-ui, sans-serif"
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
            Unity Foundation
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
            Supporting vulnerable communities with dignity and compassion
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
