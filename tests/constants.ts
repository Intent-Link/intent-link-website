import { commonMessages } from "@/i18n/messages/common";

/**
 * Centralized test constants — no magic strings in tests or factories.
 * Grouped `as const` objects, referenced by factories and specs alike.
 */
const testConstants = {
  demoTile: {
    id: "tile-1",
    label: "Running shoes",
    href: "/products/running-shoes",
  },
  physics: {
    probability: 0.5,
    weight: 1,
    kineticAgent: 0,
    kineticTarget: 0,
    potential: 0,
  },
  doc: {
    groupId: "gettingStarted",
    slug: "quickstart",
    title: "Quickstart",
    body: "# Quickstart\n\nbody",
  },
} as const;

/** UI copy expected in specs. Chrome strings come from the i18n `en` dictionary. */
const testText = {
  clickMe: "Click me",
  copy: commonMessages.en.actions.copy,
  copied: commonMessages.en.actions.copied,
  sectionLabel: "Demo section",
  sectionBody: "Section content",
} as const;

export { testConstants, testText };
