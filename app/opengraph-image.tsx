import { ImageResponse } from "next/og";

import { siteContent } from "@/lib/site-content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #0b1b33 0%, #14335f 54%, #f4f7fb 54%, #f4f7fb 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -90,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(244,164,58,0.18)",
          }}
        />
        <div
          style={{
            width: "62%",
            padding: "68px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 18,
                background: "#ffffff",
                color: "#0d2a52",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              HFD
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ fontSize: 18, letterSpacing: 4, textTransform: "uppercase", opacity: 0.74 }}>
                Hamilton, Ontario
              </div>
              <div style={{ fontSize: 28, fontWeight: 700 }}>
                {siteContent.business.name}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 68, lineHeight: 1.02, fontWeight: 700 }}>
              Flyer design, print, and delivery for local businesses.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.35, color: "rgba(255,255,255,0.78)" }}>
              Hamilton flyer delivery, door hanger campaigns, and targeted area distribution.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            {["Get a Quote", "View Pricing", "Message on WhatsApp"].map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "14px 22px",
                  borderRadius: 999,
                  background: index === 0 ? "#f4a43a" : "rgba(255,255,255,0.1)",
                  color: index === 0 ? "#0d2a52" : "#ffffff",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "38%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 44,
          }}
        >
          <div
            style={{
              width: 330,
              height: 420,
              borderRadius: 28,
              background: "#ffffff",
              boxShadow: "0 30px 80px rgba(7,18,34,0.18)",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              color: "#0d2a52",
            }}
          >
            <div
              style={{
                fontSize: 14,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#5d7496",
                fontWeight: 700,
              }}
            >
              Sample Design
            </div>
            <div style={{ fontSize: 42, lineHeight: 1.04, fontWeight: 700 }}>
              Flyer Delivery
            </div>
            <div
              style={{
                padding: "14px 18px",
                borderRadius: 18,
                background: "#0d2a52",
                color: "white",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              Door Hangers
            </div>
            <div
              style={{
                marginTop: "auto",
                padding: "16px 18px",
                borderRadius: 18,
                background: "#eef4fb",
                fontSize: 18,
                color: "#4c6281",
              }}
            >
              Target by city, area, or postal code
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
