import type { MetadataRoute } from "next";
import { site } from "@/constants/site";

const manifest = (): MetadataRoute.Manifest => ({
  name: `${site.name} — ${site.tagline}`,
  short_name: site.name,
  description: "Predictive navigation for React and Next.js.",
  start_url: "/en",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#0969ff",
  icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
});

export default manifest;
