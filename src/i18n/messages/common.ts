import { createTextQuery } from "@/i18n/create-text-query";

/**
 * Shared chrome copy (nav, footer, actions, accessibility labels). `en` is the
 * typed source of truth; other locales are optional and fall back to `en`.
 */
const en = {
  tagline: "Know the target before the click.",
  nav: {
    docs: "Docs",
    github: "GitHub",
  },
  footer: {
    groupTitles: {
      docs: "Docs",
      resources: "Resources",
      forAi: "For AI",
    },
    links: {
      quickstart: "Quickstart",
      installation: "Installation",
      github: "GitHub",
      npm: "npm",
      llmsText: "llms.txt",
    },
    copyright: (name: string) => `© ${name}`,
  },
  actions: {
    copy: "Copy",
    copied: "✓ copied",
  },
  language: {
    label: "Language",
    ariaLabel: "Select language",
  },
  aria: {
    primaryNav: "Primary",
    docsNav: "Docs",
    pageNav: "On this page",
    toggleMenu: "Toggle menu",
    loading: "Loading",
  },
} as const;

type CommonText = typeof en;

/** Shared chrome registry + server query. Falls back to the `en` dictionary. */
const { messages: commonMessages, getText: getCommonText } = createTextQuery(en);

export { commonMessages, getCommonText };
export type { CommonText };
