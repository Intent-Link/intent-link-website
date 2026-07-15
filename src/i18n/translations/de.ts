import type { TranslationBundle } from "./bundle";

/** German (de) translations. */
const de: TranslationBundle = {
  common: {
    tagline: "Kenne das Ziel vor dem Klick.",
    nav: {
      docs: "Docs",
      github: "GitHub",
    },
    footer: {
      tagline: "Sagt das Ziel vor dem Klick voraus. MIT-lizenziert. Die Bewegung verlässt das Gerät nicht.",
      groupTitles: {
        docs: "Docs",
        resources: "Ressourcen",
        forAi: "Für KI",
      },
      links: {
        quickstart: "Schnellstart",
        api: "API-Referenz",
        guides: "Leitfäden",
        github: "GitHub",
        npm: "npm",
        changelog: "Änderungen",
        license: "Lizenz (MIT)",
        llmsText: "llms.txt",
      },
      builtLine: "Mit prädiktivem Prefetch gebaut — die Docs spüren es auch.",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "Kopieren",
      copied: "✓ kopiert",
      getStarted: "Loslegen",
    },
    docs: {
      copyForLlm: "Für LLM kopieren",
      viewMarkdown: "Als Markdown ansehen",
      close: "schließen",
    },
    notFound: {
      title: "Seite nicht gefunden",
      backHome: "Zurück zur Startseite",
    },
    language: {
      ariaLabel: "Sprache auswählen",
    },
    aria: {
      primaryNav: "Hauptnavigation",
      docsNav: "Docs",
      pageNav: "Auf dieser Seite",
      toggleMenu: "Menü umschalten",
      loading: "Wird geladen",
    },
  },
  metadata: {
    title: "intent-link — Kenne das Ziel vor dem Klick",
    description:
      "Eine Bibliothek zur Zielvorhersage für React und Next.js. Sagt voraus, wohin der Nutzer steuert, und bereitet die nächste Navigation vor, bevor er klickt.",
    docs: {
      indexTitle: "Docs — intent-link",
      pageTitle: (title: string) => `${title} — intent-link Docs`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "Startbereich",
      eyebrow: "Zielvorhersage für React und Next.js",
      titleLead: "Kenne das Ziel",
      titleEmphasis: "vor dem Klick.",
      subcopy:
        "Erreiche ein fetch:click-Verhältnis von 1.39. Intent-link berechnet die Wahrscheinlichkeit anhand der kinetischen und potenziellen Energie, die sich aus Bewegungsgeschwindigkeit und Entfernung ergeben.",
      getStarted: "Loslegen",
      liveDemo: "Live-Demo",
      well: { caption: "Pixel haben Schwerkraft" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / live-demo",
      ariaLabel: "Live-Vorhersage-Demo",
      heading: "Bewege dich auf eine Karte zu — sieh zu, wie sie vorgeladen wird.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} Kategorien`,

      reset: "zurücksetzen",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "onIntent-Strom",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} Auslösungen`,
      streamEmpty: "// bewege dich auf eine Karte zu, um ein Signal auszulösen…",
      levels: { low: "niedrig", medium: "mittel", high: "hoch" },
      tiles: { women: "Damen", men: "Herren", kids: "Kinder", shoes: "Schuhe", bags: "Taschen", accessories: "Accessoires", sport: "Sport", denim: "Denim", outerwear: "Jacken", beauty: "Beauty", home: "Wohnen", sale: "Sale", electronics: "Elektronik", watches: "Uhren", jewelry: "Schmuck", furniture: "Möbel", gifts: "Geschenke", travel: "Reisen" },
    },
    latencyRace: {
      eyebrow: "03 / spüre den Unterschied",
      ariaLabel: "Latenzrennen",
      heading: "Derselbe Klick. Überspringe die Wartezeit.",
      body:
        "Eine Seite wartet auf die Netzwerkanfrage, während die andere während der Bewegung des Nutzers abgerufen wird.",
      timeSavedLabel: "in dieser Sitzung gesparte Zeit",
      milliseconds: (value: number) => `${value} ms`,
      instant: (value: number) => `${value} ms · sofort`,
      withoutTitle: "Ohne intent-link",
      withTitle: "Mit intent-link",
      notLoaded: "nicht geladen",
      idle: "inaktiv",
      prefetching: "wird vorgeladen…",
      ready: "vorgeladen ✓ bereit",
      fetching: "wird geladen…",
      productName: "Steppjacke",
      productPrice: "148,00 $",
      productPath: "/product/quilted-jacket",
      addToCart: "In den Warenkorb",
      open: "Produkt öffnen →",
      opening: "wird geöffnet…",
      replay: "↻ Wiederholen",
    },
    whyDifferent: {
      eyebrow: "04 / anders",
      ariaLabel: "Warum es anders ist",
      heading: "Nicht Sichtbarkeit. Nicht Hover. Absicht.",
      body: "Jeder andere Ansatz ist entweder zu spät oder verschwenderisch.",
      columns: {
        approach: "Ansatz",
        timing: "Zeitpunkt",
        selective: "Selektivität",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "auf der Bahn", selective: "das Ziel" },
        { name: "instant.page", timing: "beim Überfahren", selective: "eins" },
        { name: "Next.js prefetch", timing: "beim Sichtbarwerden", selective: "alles Sichtbare" },
        { name: "Guess.js", timing: "vorberechnet", selective: "beste Vermutungen" },
        { name: "intent-link", timing: "vor dem Ankommen", selective: "das Ziel" },
      ],
      benefits: [
        { stat: "Sofortige Navigation", title: "Lade die nächste Seite vor dem Klick vor" },
        { stat: "1.39", title: "Fetch:Click-Verhältnis" },
        { stat: "Anpassbar", title: "Konfiguriere die Gewichtung von importance und cost" },
        { stat: "useIntentTarget", title: "Erstelle eigene Komponenten" },
        { stat: "React · Next", title: "Für das beliebteste Framework" },
        { stat: "MIT", title: "Open Source, keine Datensammlung" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / anwendungen",
      ariaLabel: "Über die Vorladung hinaus",
      heading: "Ein Signal. Viele Anwendungen.",
      uses: [
        { tag: "// analytik", title: "Absicht, nicht nur Klicks", body: "Protokolliere abgebrochene Annäherungen und Zögern, nicht nur Aktionen." },
        { tag: "// enthüllung", title: "Progressive Enthüllung", body: "Öffne eine Vorschau oder einen Tooltip, sobald der Nutzer darauf zusteuert." },
        { tag: "// leistung", title: "Links vorladen", body: "Lade Navigationslinks vor, bevor der Nutzer darauf klickt." },
        { tag: "// adaptive UI", title: "Unterstütztes Anvisieren", body: "Vergrößere Ziele oder bringe sie näher, wenn sich der Nutzer ihnen nähert." },
      ],
      pattern: [
        { step: "01", title: "Messen", body: "die verrauschte Bahn" },
        { step: "02", title: "Schätzen", body: "das wahrscheinliche Ziel" },
        { step: "03", title: "Vorbereiten", body: "vor dem Ankommen" },
      ],
    },
    ctaBand: {
      ariaLabel: "Loslegen",
      heading: "Liefere Navigation, die sich sofort anfühlt.",
      getStarted: "Loslegen",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "Erste Schritte",
      apiReference: "API-Referenz",
      guides: "Anleitungen",
      more: "Mehr",
    },
    pageTitles: {
      quickstart: "Schnellstart",
      "how-it-works": "Wie es funktioniert",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "Eigene Intent-Komponenten",
      examples: "Beispiele",
      troubleshooting: "Fehlerbehebung",
      changelog: "Änderungen",
    },
  },
};

export { de };
