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
      "intent-link reads cursor or scroll motion and predicts the element a user is heading toward with ~98% accuracy. Prefetch the next page before the click lands, reveal a preview, or adapt the UI. One signal, many uses.",
    getStarted: "Get started",
    liveDemo: "Live demo",
    well: {
      cursor: "cursor",
      target: "target",
      arming: "arming",
      armed: "armed → prefetch",
      captionLead: "Your links have gravity.",
      captionBody: "Your motion falls toward a target, it arms, and the page is prefetched before the click.",
    },
  },
  predictionFieldDemo: {
    eyebrow: "02 / live demo",
    ariaLabel: "Live prediction demo",
    heading: "Move toward a tile and watch it prefetch.",
    bodyTail: "The console below is intent-link watching the same motion.",
    modeHintCursor:
      "Move your cursor toward a tile. It arms from your trajectory before you arrive.",
    modeHintTouch:
      "Scroll toward a tile. It arms from your scroll velocity before you commit.",
    addressBar: "shop.example/new-in",
    categories: (count: number) => `${count} categories`,
    storefrontIdle: "// move toward a tile to trigger a prefetch",
    consoleTitle: "intent-link",
    liveSignal: "· live signal",
    formula: "utility = P·imp − cost",
    reset: "reset",
    importanceLabel: "importance",
    importanceSub: "fire readiness",
    costLabel: "cost",
    costSub: "false-trigger cost",
    streamTitle: "onIntent stream",
    firedCount: (count: number) =>
      `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} fired`,
    streamEmpty: "// move toward a tile to fire a signal…",
    levels: { low: "low", medium: "medium", high: "high" },
    tileStates: { watching: "watching", arming: "arming", prefetched: "prefetched" },
    tileImageLabel: "product shot",
    tileBadge: "prefetched",
    tiles: {
      women: "Women",
      men: "Men",
      kids: "Kids",
      shoes: "Shoes",
      bags: "Bags",
      sale: "Sale",
    },
  },
  latencyRace: {
    eyebrow: "03 / feel the difference",
    ariaLabel: "Latency race",
    heading: "Same click. Half the wait.",
    body:
      "One page waits for the network. The other armed on approach and is already there. Open it and watch.",
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
    hintBefore: "Tip: move toward the right panel first so intent-link can prefetch it.",
    hintAfter: "Now open it. The prefetched page is already there.",
  },
  codeExample: {
    eyebrow: "04 / drop it in",
    ariaLabel: "Code example",
    heading: "Two lines for the common case.",
    body: "Wrap once, then swap your links. Or read the raw probabilities and build your own.",
    tabs: { simple: "simple", custom: "custom" },
    copyForLlm: "Copy for LLM",
    fullApiLead: "Full API in the ",
    fullApiLink: "docs →",
    quickstartLabel: "quickstart",
  },
  whyDifferent: {
    eyebrow: "05 / why it's different",
    ariaLabel: "Why it's different",
    heading: "Not visibility. Not hover. Intent.",
    body: "Every other approach is static, coarse, late, or aggregate. intent-link reads this user's live motion and commits to a specific target before arrival.",
    columns: {
      approach: "Approach",
      timing: "Timing",
      selective: "Selectivity",
      perUser: "Per-user",
      confidence: "Confidence",
      setup: "Setup",
    },
    highlightName: "intent-link",
    rows: [
      { name: "rel=prefetch", timing: "manual, static", selective: "you pre-pick", perUser: "—", confidence: "—", setup: "hand-declared" },
      { name: "ForesightJS", timing: "on trajectory", selective: "the target", perUser: "✓", confidence: "—", setup: "register + callback" },
      { name: "instant.page", timing: "on hover", selective: "one, late", perUser: "✓", confidence: "—", setup: "drop-in" },
      { name: "Next.js prefetch", timing: "on viewport", selective: "all visible", perUser: "—", confidence: "—", setup: "built-in" },
      { name: "Guess.js", timing: "precomputed", selective: "top guesses", perUser: "aggregate", confidence: "—", setup: "build step + data" },
      { name: "intent-link", timing: "before arrival", selective: "the target", perUser: "✓", confidence: "✓", setup: "drop-in" },
    ],
    benefits: [
      { stat: "~instant", title: "Instant navigation", body: "The next page is prefetched before the click lands." },
      { stat: "~98%", title: "High accuracy", body: "Trajectory + confidence identifies the right target." },
      { stat: "2 knobs", title: "Tunable", body: "importance and cost place the aggressiveness where you want it." },
      { stat: "drop-in / raw", title: "Two surfaces", body: "One component for the 80% case, raw probabilities for the rest." },
      { stat: "React · Next", title: "Framework-native", body: "A drop-in for next/link in the Next.js App Router." },
      { stat: "MIT", title: "Small & open", body: "No data collection. Motion stays on the device." },
    ],
  },
  beyondPrefetch: {
    eyebrow: "01 / beyond prefetch",
    ariaLabel: "Beyond prefetch",
    heading: "One signal. Many uses.",
    body:
      "Prefetch is the flagship. But the raw probability stream is a real-time intent signal, and the same callback drives much more.",
    uses: [
      { tag: "// analytics", title: "Intent, not just clicks", body: "Log near-misses and abandoned approaches: hesitation, not only actions." },
      { tag: "// disclosure", title: "Progressive reveal", body: "Open a preview or tooltip the instant a user heads toward it." },
      { tag: "// adaptive UI", title: "Anticipatory layout", body: "Emphasize or preload the element attention is moving toward." },
      { tag: "// a11y", title: "Assistive targeting", body: "Predict the intended target early for slower or limited motor control." },
    ],
    pattern: [
      { step: "01", title: "Measure", body: "the noisy trajectory" },
      { step: "02", title: "Estimate", body: "the likely endpoint" },
      { step: "03", title: "Prepare", body: "before arrival" },
    ],
    patternLabel: "the pattern, generalized",
    patternClose:
      "Nothing about that is web-specific. A cursor and a screen are one instance. The same move reads a shopper approaching a shelf, a pedestrian's path, a hand reaching for a control. The library is one implementation of a universal idea.",
  },
  ctaBand: {
    ariaLabel: "Get started",
    heading: "Ship navigation that feels instant.",
    body: "Two lines for the common case. Raw probabilities when you want more.",
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
