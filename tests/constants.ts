/**
 * Centralized test constants — no magic strings in tests or factories.
 * Grouped `as const` objects, referenced by specs.
 */
const testConstants = {
  demoTile: {
    id: "shoes",
    label: "Running shoes",
  },
  doc: {
    groupId: "gettingStarted",
    slug: "quickstart",
    title: "Quickstart",
  },
} as const;

/** UI copy expected in specs. */
const testText = {
  sectionLabel: "Demo section",
  sectionBody: "Section content",
} as const;

export { testConstants, testText };
