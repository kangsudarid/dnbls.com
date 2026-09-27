import { heroImage, ogSize } from "@/lib/og";

export const alt = "Sudar Blogger - Personal Blog";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return heroImage({ role: "Design Engineer" });
}
