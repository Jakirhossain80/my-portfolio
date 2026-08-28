import { NextResponse } from "next/server";

const unavailableResponse = {
  error: {
    code: "CONTACT_FORM_UNAVAILABLE",
    message: "Contact form delivery is not configured yet. Your message was not sent.",
  },
  alternative: {
    label: "Email Md. Jakir Hossain",
    href: "mailto:jakir.devbd@gmail.com",
  },
} as const;

export function POST() {
  return NextResponse.json(unavailableResponse, {
    status: 503,
    headers: { "Cache-Control": "no-store" },
  });
}
