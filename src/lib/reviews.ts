import { track } from "@vercel/analytics";

export const GOOGLE_REVIEW_URL = "https://g.page/r/CZ1UBihucCgMEAI/review";

export function trackReviewClick() {
  track("review_click");
}
