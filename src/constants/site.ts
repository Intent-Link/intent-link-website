import { appRoutes, externalUrls } from "./routes";
import { docsEntryPath } from "./docs-nav";
import type { CommonText } from "@/i18n/messages/common";

/** Site identity. Non-localized brand data; user-facing copy lives in i18n. */
const site = {
  name: "intent-link",
  version: "1.0.8",
  tagline: "Target prediction for React / Next.js",
} as const;

/** Clipboard payload for the footer "Copy for LLM" button. */
const llmCopyText = `${site.name}: ${site.tagline}. Full reference: ${appRoutes.llmsFullText}. Install: npm install ${site.name}`;

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
      { id: "api", href: docsEntryPath },
      { id: "guides", href: docsEntryPath },
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
    links: [
      { id: "llmsText", href: appRoutes.llmsText },
      { id: "llmsFullText", href: appRoutes.llmsFullText },
    ],
  },
];

export { site, llmCopyText, navLinks, footerGroups };
