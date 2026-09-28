import { ImageResponse } from "next/og";

export const alt = "VALERA MASIUTA - WEB / UI / AI / AUTOMATION";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0c0b",
          color: "#f1f0ea",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "68px 76px",
          width: "100%",
        }}
      >
        <div style={{ color: "#d9ff75", display: "flex", fontSize: 24, letterSpacing: "0.2em" }}>
          ПОРТФОЛИО / 2026
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: "-0.06em" }}>
            VALERA MASIUTA
          </div>
          <div style={{ color: "#a9ada5", display: "flex", fontSize: 30, letterSpacing: "0.18em" }}>
            WEB / UI / AI / AUTOMATION
          </div>
        </div>
        <div style={{ borderTop: "1px solid #30342f", color: "#a9ada5", display: "flex", fontSize: 22, paddingTop: 24 }}>
          Сайты, интерфейсы, AI-инструменты и Telegram-боты
        </div>
      </div>
    ),
    { ...size },
  );
}
