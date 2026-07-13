import { appRoutes, externalUrls } from "./routes";
import { docsEntryPath } from "./docs-nav";
import type { CommonText } from "@/i18n/messages/common";

/** Site identity. Non-localized brand data; user-facing copy lives in i18n. */
const site = {
  name: "intent-link",
  version: "1.0.13",
  tagline: "Target prediction for React / Next.js",
} as const;

interface NavLink {
  id: keyof CommonText["nav"];
  href: string;
}

/** Primary nav destinations. Labels are resolved by id from the common text. */
const navLinks: NavLink[] = [
  { id: "docs", href: docsEntryPath },
  { id: "github", href: externalUrls.github },
];

interface FooterLink {
  id: keyof CommonText["footer"]["links"];
  href: string;
}

interface FooterGroup {
  id: keyof CommonText["footer"]["groupTitles"];
  links: FooterLink[];
}

/** Footer link groups. Group titles and link labels are resolved by id. */
const footerGroups: FooterGroup[] = [
  {
    id: "docs",
    links: [
      { id: "quickstart", href: appRoutes.docsSlug("quickstart") },
      { id: "api", href: appRoutes.docsSlug("intent-provider") },
      { id: "guides", href: appRoutes.docsSlug("examples") },
    ],
  },
  {
    id: "resources",
    links: [
      { id: "github", href: externalUrls.github },
      { id: "npm", href: externalUrls.npm },
      { id: "changelog", href: appRoutes.docsSlug("changelog") },
      { id: "license", href: externalUrls.github },
    ],
  },
  {
    id: "forAi",
    links: [{ id: "llmsText", href: appRoutes.llmsText }],
  },
];

export { site, navLinks, footerGroups };
