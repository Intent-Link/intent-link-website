import { createTextQuery } from "@/i18n/create-text-query";
import { pickNamespace } from "@/i18n/translations";

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
    tagline: "Predict the target before the click. MIT-licensed.",
    groupTitles: {
      docs: "Docs",
      resources: "Resources",
      forAi: "For AI",
    },
    links: {
      quickstart: "Quickstart",
      api: "API Reference",
      guides: "Guides",
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      license: "License (MIT)",
      llmsText: "llms.txt",
    },
    builtLine: "Website built with Intent Link prefetch",
    copyright: (name: string) => `© 2026 ${name} · MIT`,
  },
  actions: {
    copy: "copy",
    copied: "✓ copied",
    getStarted: "Get started",
  },
  docs: {
    copyForLlm: "Copy for LLM",
    viewMarkdown: "View as Markdown",
    close: "close",
  },
  notFound: {
    title: "Page not found",
    backHome: "Back to the homepage",
  },
  language: {
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

/** Shared chrome query. Falls back to the `en` dictionary. */
const { getText: getCommonText } = createTextQuery(en, pickNamespace("common"));

export { getCommonText };
export type { CommonText };
