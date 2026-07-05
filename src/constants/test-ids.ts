/**
 * Central registry of `data-testid` values. Components spread these onto their
 * roots; specs query by the same registry so test ids are typed, shared, and
 * never magic strings on either side.
 */
const testIds = {
  button: { root: "button" },
  badge: { root: "badge" },
  chip: { root: "chip" },
  card: { root: "card" },
  toast: { root: "toast" },
  spinner: { root: "spinner" },
  skeleton: { root: "skeleton" },
  segmentedControl: { root: "segmented-control", segment: "segmented-control-segment" },
  copyButton: { root: "copy-button" },
  codeBlock: { root: "code-block" },
  terminalCard: { root: "terminal-card" },
  probabilityRing: { root: "probability-ring" },
  productTile: { root: "product-tile" },
  languageDropdown: {
    root: "language-dropdown",
    trigger: "language-dropdown-trigger",
    option: "language-dropdown-option",
  },
  navbar: { root: "navbar", link: "navbar-link" },
  mobileMenu: { root: "mobile-menu", trigger: "mobile-menu-trigger", link: "mobile-menu-link" },
  footer: { root: "footer", group: "footer-group", link: "footer-link" },
  sidebar: { root: "docs-sidebar", link: "docs-sidebar-link" },
  toc: { root: "docs-toc", link: "docs-toc-link" },
  prose: { root: "docs-prose" },
  docTable: { root: "doc-table" },
  docsShell: { root: "docs-shell" },
  section: {
    hero: "section-hero",
    predictionFieldDemo: "section-prediction-field-demo",
    kalmanLens: "section-kalman-lens",
    latencyRace: "section-latency-race",
    codeExample: "section-code-example",
    whyDifferent: "section-why-different",
    beyondPrefetch: "section-beyond-prefetch",
    ctaBand: "section-cta-band",
  },
  gridBackground: { root: "grid-background" },
  glyphBackground: { root: "glyph-background" },
} as const;

export { testIds };
