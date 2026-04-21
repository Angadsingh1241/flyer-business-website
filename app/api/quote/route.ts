import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: false,
    error: "Quote requests are handled through WhatsApp on this site.",
  });
}
