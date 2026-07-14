const siteOrigin = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://intentlink.dev").replace(/\/$/, "");

const socialImage = {
  path: "/og/intent-link.png",
  width: 1200,
  height: 630,
  alt: "intent-link target prediction field",
} as const;

const absoluteUrl = (path: string): string => new URL(path, `${siteOrigin}/`).toString();

export { siteOrigin, socialImage, absoluteUrl };
