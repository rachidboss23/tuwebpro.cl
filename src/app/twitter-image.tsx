import { ImageResponse } from "next/og";
import BrandSocialImage from "@/components/BrandSocialImage";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<BrandSocialImage />, size);
}
