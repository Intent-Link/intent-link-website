import type { MetadataRoute } from "next";
import { absoluteUrl, siteOrigin } from "@/constants/seo";

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/" },
  sitemap: absoluteUrl("/sitemap.xml"),
  host: siteOrigin,
});

export default robots;
