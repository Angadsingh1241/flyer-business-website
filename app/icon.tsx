import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          background: "#0d2a52",
          display: "flex",
          height: "100%",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: 12,
            height: 34,
            width: 26,
            position: "relative",
            marginRight: 6,
          }}
        />
        <div
          style={{
            background: "#f4a43a",
            borderRadius: 999,
            height: 16,
            width: 16,
            position: "absolute",
            right: 10,
            bottom: 10,
            border: "3px solid #0d2a52",
          }}
        />
      </div>
    ),
    size,
  );
}
