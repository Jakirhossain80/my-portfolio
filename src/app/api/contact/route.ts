import { NextResponse } from "next/server";

const unavailableResponse = {
  error: "Contact submissions are not available yet.",
} as const;

export function POST() {
  return NextResponse.json(unavailableResponse, { status: 503 });
}
