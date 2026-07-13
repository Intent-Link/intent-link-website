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
        "intent-link liest die Bewegung — Cursor oder Scrollen — und sagt mit ~98 % Genauigkeit voraus, auf welches Element der Nutzer zusteuert. Lade die nächste Seite vor, bevor der Klick landet, zeige eine Vorschau oder passe die Oberfläche an. Ein Signal, viele Anwendungen.",
      getStarted: "Loslegen",
      liveDemo: "Live-Demo",
    },
    predictionFieldDemo: {
      eyebrow: "02 / live-demo",
      ariaLabel: "Live-Vorhersage-Demo",
      heading: "Bewege dich auf eine Karte zu — sieh zu, wie sie vorgeladen wird.",
      bodyTail: "Die Konsole unten ist intent-link, die dieselbe Bewegung beobachtet.",
      modeHintCursor:
        "Bewege den Cursor auf eine Karte zu — sie wird anhand deiner Bahn vorbereitet, bevor du ankommst.",
      modeHintTouch:
        "Scrolle auf eine Karte zu — sie wird anhand deiner Scrollgeschwindigkeit vorbereitet, bevor du sie berührst.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} Kategorien`,
      storefrontIdle: "// bewege dich auf eine Karte zu, um eine Vorladung auszulösen",
      consoleTitle: "intent-link",
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
      heading: "Derselbe Klick. Die halbe Wartezeit.",
      body:
        "Eine Seite wartet auf das Netzwerk. Die andere wurde beim Näherkommen vorbereitet und ist schon da. Öffne sie und beobachte.",
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
      hintBefore: "Tipp: Bewege dich zuerst auf das rechte Panel zu — intent-link lädt es vor.",
      hintAfter: "Öffne es jetzt — die vorgeladene Seite ist schon da.",
    },
    codeExample: {
      eyebrow: "04 / binde es ein",
      ariaLabel: "Codebeispiel",
      heading: "Zwei Zeilen, der Normalfall.",
      body: "Umschließe einmal und tausche die Links. Oder lies die rohen Wahrscheinlichkeiten und baue dein Eigenes.",
      tabs: { simple: "einfach", custom: "individuell" },
      copyForLlm: "Für LLM kopieren",
      fullApiLead: "Vollständige API in den ",
      fullApiLink: "Docs →",
      quickstartLabel: "schnellstart",
    },
    whyDifferent: {
      eyebrow: "05 / anders",
      ariaLabel: "Warum es anders ist",
      heading: "Nicht Sichtbarkeit. Nicht Hover. Absicht.",
      body: "Jeder andere Ansatz rät mit einem groben Auslöser. intent-link sagt voraus.",
      columns: {
        approach: "Ansatz",
        timing: "Zeitpunkt",
        selective: "Selektivität",
        perUser: "Pro Nutzer",
        confidence: "Konfidenz",
        setup: "Einrichtung",
      },
      highlightName: "intent-link",
      rows: [
        { name: "rel=prefetch", timing: "manuell, statisch", selective: "du wählst vorab", perUser: "—", confidence: "—", setup: "manuell deklariert" },
        { name: "ForesightJS", timing: "auf der Bahn", selective: "das Ziel", perUser: "✓", confidence: "—", setup: "registrieren + Callback" },
        { name: "instant.page", timing: "beim Überfahren", selective: "eins, spät", perUser: "✓", confidence: "—", setup: "einbindbar" },
        { name: "Next.js prefetch", timing: "beim Sichtbarwerden", selective: "alles Sichtbare", perUser: "—", confidence: "—", setup: "integriert" },
        { name: "Guess.js", timing: "vorberechnet", selective: "beste Vermutungen", perUser: "aggregiert", confidence: "—", setup: "Build-Schritt + Daten" },
        { name: "intent-link", timing: "vor dem Ankommen", selective: "das Ziel", perUser: "✓", confidence: "✓", setup: "einbindbar" },
      ],
      benefits: [
        { stat: "~sofort", title: "Sofortige Navigation", body: "Die nächste Seite wird vorgeladen, bevor der Klick landet." },
        { stat: "~98 %", title: "Hohe Genauigkeit", body: "Bahn + Konfidenz bestimmen das richtige Ziel." },
        { stat: "2 Regler", title: "Anpassbar", body: "importance und cost setzen die Aggressivität dorthin, wo du sie willst." },
        { stat: "einbindbar / roh", title: "Zwei Oberflächen", body: "Eine Komponente für 80 % der Fälle, rohe Wahrscheinlichkeiten für den Rest." },
        { stat: "React · Next", title: "Framework-nativ", body: "Ein direkter Ersatz für next/link im Next.js App Router." },
        { stat: "MIT", title: "Klein und offen", body: "Keine Datensammlung — die Bewegung verlässt das Gerät nicht." },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / über die vorladung hinaus",
      ariaLabel: "Über die Vorladung hinaus",
      heading: "Ein Signal. Viele Anwendungen.",
      body:
        "Die Vorladung ist das Highlight. Aber der rohe Wahrscheinlichkeitsstrom ist ein universelles Echtzeit-Absichtssignal.",
      uses: [
        { tag: "// analytik", title: "Absicht, nicht nur Klicks", body: "Protokolliere Beinahe-Treffer und abgebrochene Annäherungen — das Zögern, nicht nur die Aktionen." },
        { tag: "// enthüllung", title: "Progressive Enthüllung", body: "Öffne eine Vorschau oder einen Tooltip, sobald der Nutzer darauf zusteuert." },
        { tag: "// adaptive UI", title: "Vorausschauende Gestaltung", body: "Hebe das Element hervor oder lade es vor, auf das sich die Aufmerksamkeit zubewegt." },
        { tag: "// a11y", title: "Unterstütztes Anvisieren", body: "Sage das anvisierte Ziel früher voraus für langsamere oder eingeschränkte Motorik." },
      ],
      pattern: [
        { step: "01", title: "Messen", body: "die verrauschte Bahn" },
        { step: "02", title: "Schätzen", body: "das wahrscheinliche Ziel" },
        { step: "03", title: "Vorbereiten", body: "vor dem Ankommen" },
      ],
      patternLabel: "das Muster, verallgemeinert",
      patternClose: "Nichts daran ist webspezifisch. Cursor und Bildschirm sind nur ein Beispiel — dieselbe Bewegung beschreibt einen Kunden vor einem Regal, den Weg eines Fußgängers, eine Hand auf dem Weg zu einem Schalter. Die Bibliothek ist eine Implementierung einer universellen Idee.",
    },
    ctaBand: {
      ariaLabel: "Loslegen",
      heading: "Liefere Navigation, die sich sofort anfühlt.",
      body: "Zwei Zeilen für den Normalfall. Rohe Wahrscheinlichkeiten, wenn du mehr willst.",
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
