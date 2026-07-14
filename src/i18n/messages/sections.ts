import { createTextQuery } from "@/i18n/create-text-query";
import { pickNamespace } from "@/i18n/translations";

/** Landing-page section copy: eyebrows, headings, labels, and demo strings. */
const en = {
  hero: {
    ariaLabel: "Hero",
    eyebrow: "Target prediction for React & Next.js",
    titleLead: "Know the target",
    titleEmphasis: "before the click.",
    subcopy:
      "Achieve a 1.39 fetch:click ratio. Intent-link computes probability using kinetic and potential energy from motion velocity and distance.",
    getStarted: "Get started",
    liveDemo: "Live demo",
    well: {
      cursor: "cursor",
      target: "target",
      detected: "Intent Detected",
      caption: "pixels have gravity",
    },
  },
  predictionFieldDemo: {
    eyebrow: "02 / live demo",
    ariaLabel: "Live prediction demo",
    heading: "Move toward a tile and watch it prefetch.",
    addressBar: "shop.example/new-in",
    categories: (count: number) => `${count} categories`,
    reset: "reset",
    importanceLabel: "importance",
    costLabel: "cost",
    streamTitle: "onIntent stream",
    firedCount: (count: number) =>
      `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} fired`,
    streamEmpty: "// move toward a tile to fire a signal…",
    levels: { low: "low", medium: "medium", high: "high" },
    tileImageLabel: "product shot",
    tileBadge: "prefetched",
    tiles: {
      women: "Women",
      men: "Men",
      kids: "Kids",
      shoes: "Shoes",
      bags: "Bags",
      accessories: "Accessories",
      sport: "Sport",
      denim: "Denim",
      outerwear: "Outerwear",
      beauty: "Beauty",
      home: "Home",
      sale: "Sale",
      electronics: "Electronics",
      watches: "Watches",
      jewelry: "Jewelry",
      furniture: "Furniture",
      gifts: "Gifts",
      travel: "Travel",
    },
  },
  latencyRace: {
    eyebrow: "03 / feel the difference",
    ariaLabel: "Latency race",
    heading: "Same click. Skip the wait.",
    body:
      "One page waits for the network request while the other is fetched during user trajectory.",
    timeSavedLabel: "time saved this session",
    milliseconds: (value: number) => `${value} ms`,
    instant: (value: number) => `${value} ms · instant`,
    withoutTitle: "Without intent-link",
    withTitle: "With intent-link",
    notLoaded: "not loaded",
    idle: "idle",
    prefetching: "prefetching…",
    ready: "prefetched ✓ ready",
    fetching: "fetching…",
    productName: "Quilted Jacket",
    productPrice: "$148.00",
    productPath: "/product/quilted-jacket",
    addToCart: "Add to cart",
    open: "Open the product →",
    opening: "opening…",
    replay: "↻ Replay",
  },
  whyDifferent: {
    eyebrow: "04 / why it's different",
    ariaLabel: "Why it's different",
    heading: "Not visibility. Not hover. Intent.",
    body: "Every other approach is either late or wasteful.",
    columns: {
      approach: "Approach",
      timing: "Timing",
      selective: "Selectivity",
    },
    highlightName: "intent-link",
    rows: [
      { name: "ForesightJS", timing: "on trajectory", selective: "the target" },
      { name: "instant.page", timing: "on hover", selective: "one" },
      { name: "Next.js prefetch", timing: "on viewport", selective: "all visible" },
      { name: "Guess.js", timing: "precomputed", selective: "top guesses" },
      { name: "intent-link", timing: "before arrival", selective: "the target" },
    ],
    benefits: [
      { stat: "Instant Navigation", title: "Prefetch the next page before the click" },
      { stat: "1.39", title: "Fetch:Click ratio" },
      { stat: "Tunable", title: "Configure importance and cost weights" },
      { stat: "useIntentTarget", title: "Build custom intent prediction components" },
      { stat: "React · Next", title: "Optimized for the most popular framework" },
      { stat: "MIT", title: "Open source, no data collection" },
    ],
  },
  beyondPrefetch: {
    eyebrow: "01 / applications",
    ariaLabel: "Beyond prefetch",
    heading: "One signal. Many uses.",
    uses: [
      { tag: "// analytics", title: "Intent, not just clicks", body: "Log abandoned approaches and hesitation, not only actions." },
      { tag: "// disclosure", title: "Progressive reveal", body: "Open a preview or tooltip the instant a user heads toward it." },
      { tag: "// performance", title: "Prefetch Links", body: "Prefetch navigation links before the user clicks them." },
      { tag: "// adaptive UI", title: "Assistive targeting", body: "Enlarge targets or bring them closer as the user approaches them." },
    ],
    pattern: [
      { step: "01", title: "Measure", body: "the noisy trajectory" },
      { step: "02", title: "Estimate", body: "the likely endpoint" },
      { step: "03", title: "Prepare", body: "before arrival" },
    ],
  },
  ctaBand: {
    ariaLabel: "Get started",
    heading: "Ship navigation that feels instant.",
    getStarted: "Get started",
    github: "GitHub",
    install: "$ npm install intent-link",
  },
} as const;

type SectionsText = typeof en;

/** Section query. Falls back to the `en` dictionary. */
const { getText: getSectionsText } = createTextQuery(en, pickNamespace("sections"));

export { getSectionsText };
export type { SectionsText };
