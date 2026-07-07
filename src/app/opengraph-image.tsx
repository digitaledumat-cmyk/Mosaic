import { ImageResponse } from "next/og";

export const alt = "Mozaic.ma — Meilleur IPTV Maroc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #c1272d 0%, #9e1f24 55%, #004124 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, opacity: 0.9, marginBottom: 16 }}>
          Mozaic.ma
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Meilleur IPTV Maroc
        </div>
        <div style={{ fontSize: 30, marginTop: 20, color: "#b8f0d0", fontWeight: 600 }}>
          IPTV 4K Maroc · +48 000 chaînes · dès 149 MAD
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 12,
            fontSize: 20,
            opacity: 0.85,
          }}
        >
          <span>Abonnement IPTV Maroc</span>
          <span>·</span>
          <span>Recharge instantanée</span>
          <span>·</span>
          <span>Support 24h/24</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
