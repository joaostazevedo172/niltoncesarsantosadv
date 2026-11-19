import { ImageResponse } from "next/og";

export const alt = "Nilton Cesar dos Santos Advocacia — Búzios e Região dos Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#333132", color: "#f1f2f2" }}>
        <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#bcbec0" }}>Advocacia · OAB/RJ 119.061</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1, fontFamily: "serif" }}>Nilton Cesar dos Santos</div>
          <div style={{ fontSize: 34, marginTop: 24, color: "#bcbec0" }}>Escritório de advocacia em Búzios e na Região dos Lagos</div>
        </div>
        <div style={{ width: 120, height: 6, background: "#d88d2a", borderRadius: 3 }} />
      </div>
    ),
    size,
  );
}
