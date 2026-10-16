import { NextResponse } from "next/server";
import { GOOGLE_REVIEW_URL } from "@/lib/reviews";

export function GET() {
  const response = NextResponse.redirect(GOOGLE_REVIEW_URL, { status: 307 });
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
