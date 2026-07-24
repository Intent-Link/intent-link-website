import type { TranslationBundle } from "./bundle";

/** Italian (it) translations. */
const it: TranslationBundle = {
  common: {
    tagline: "Conosci la destinazione prima del clic.",
    nav: { docs: "Documentazione", github: "GitHub" },
    footer: {
      tagline: "Prevedi la destinazione prima del clic. Licenza MIT.",
      groupTitles: { docs: "Documentazione", resources: "Risorse", forAi: "Per l’IA" },
      links: { quickstart: "Avvio rapido", api: "Riferimento API", guides: "Guide", github: "GitHub", npm: "npm", changelog: "Novità", license: "Licenza (MIT)", llmsText: "llms.txt" },
      builtLine: "Sito realizzato con il prefetch di Intent Link", copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: { copy: "copia", copied: "✓ copiato", getStarted: "Inizia" },
    docs: { copyForLlm: "Copia per LLM", viewMarkdown: "Mostra come Markdown", close: "chiudi" },
    notFound: { title: "Pagina non trovata", backHome: "Torna alla pagina iniziale" },
    language: { ariaLabel: "Seleziona lingua" },
    aria: { primaryNav: "Principale", docsNav: "Documentazione", pageNav: "In questa pagina", toggleMenu: "Apri o chiudi il menu", loading: "Caricamento" },
  },
  metadata: {
    title: "intent-link — Conosci la destinazione prima del clic",
    description: "Una libreria di previsione della destinazione per React e Next.js. Prevede dove si dirige l’utente e prepara la navigazione successiva prima del clic.",
    docs: { indexTitle: "Documentazione — intent-link", pageTitle: (title: string) => `${title} — documentazione intent-link` },
  },
  sections: {
    hero: {
      ariaLabel: "Introduzione", eyebrow: "Previsione della destinazione per React e Next.js", titleLead: "Conosci la destinazione", titleEmphasis: "prima del clic.",
      subcopy: "Ottieni un rapporto fetch:click di 1.37. Intent-link calcola la probabilità usando l’energia cinetica e potenziale derivata dalla velocità del movimento e dalla distanza.",
      getStarted: "Inizia", liveDemo: "Demo dal vivo",
      well: { caption: "i pixel hanno gravità" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / demo dal vivo", ariaLabel: "Demo della previsione dal vivo", heading: "Muoviti verso una scheda e osserva il prefetch.", addressBar: "shop.example/new-in", categories: (count: number) => `${count} categorie`,
      reset: "reimposta", importanceLabel: "importance", costLabel: "cost", streamTitle: "flusso onIntent", firedCount: (count: number) => `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} attivazioni`, streamEmpty: "// muoviti verso una scheda per attivare un segnale…", levels: { low: "basso", medium: "medio", high: "alto" },
      tiles: { women: "Donna", men: "Uomo", kids: "Bambini", shoes: "Scarpe", bags: "Borse", accessories: "Accessori", sport: "Sport", denim: "Denim", outerwear: "Capispalla", beauty: "Bellezza", home: "Casa", sale: "Saldi", electronics: "Elettronica", watches: "Orologi", jewelry: "Gioielli", furniture: "Mobili", gifts: "Regali", travel: "Viaggi" },
    },
    latencyRace: {
      eyebrow: "03 / senti la differenza", ariaLabel: "Confronto della latenza", heading: "Lo stesso clic. Salta l’attesa.", body: "Una pagina attende la richiesta di rete, mentre l’altra viene recuperata durante la traiettoria dell’utente.", timeSavedLabel: "tempo risparmiato in questa sessione", milliseconds: (value: number) => `${value} ms`, instant: (value: number) => `${value} ms · istantaneo`, withoutTitle: "Senza intent-link", withTitle: "Con intent-link", notLoaded: "non caricato", idle: "inattivo", prefetching: "prefetch in corso…", ready: "prefetch completato ✓ pronto", fetching: "caricamento…", productName: "Giacca trapuntata", productPrice: "148,00 €", productPath: "/product/quilted-jacket", addToCart: "Aggiungi al carrello", open: "Apri il prodotto →", opening: "apertura…", replay: "↻ Ripeti",
    },
    whyDifferent: {
      eyebrow: "04 / diverso", ariaLabel: "Perché è diverso", heading: "Non visibilità. Non hover. Intento.", body: "Ogni altro approccio è tardivo oppure dispendioso.",
      columns: { approach: "Approccio", timing: "Momento", selective: "Selettività" }, highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "lungo il percorso", selective: "la destinazione" },
        { name: "instant.page", timing: "all’hover", selective: "uno" },
        { name: "Next.js prefetch", timing: "quando è visibile", selective: "tutto ciò che è visibile" },
        { name: "Guess.js", timing: "precalcolato", selective: "ipotesi migliori" },
        { name: "intent-link", timing: "prima dell’arrivo", selective: "la destinazione" },
      ],
      benefits: [
        { stat: "Navigazione istantanea", title: "Precarica la pagina successiva prima del clic" },
        { stat: "1.37", title: "Rapporto Fetch:Click" },
        { stat: "Regolabile", title: "Configura i pesi importance e cost" },
        { stat: "useIntentTarget", title: "Crea componenti personalizzati" },
        { stat: "React · Next", title: "Per il framework più popolare" },
        { stat: "MIT", title: "Open source, nessuna raccolta dati" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / applicazioni", ariaLabel: "Oltre il prefetch", heading: "Un segnale. Molti utilizzi.",
      uses: [
        { tag: "// analisi", title: "Intento, non solo clic", body: "Registra gli avvicinamenti abbandonati e le esitazioni, non solo le azioni." },
        { tag: "// rivelazione", title: "Rivelazione progressiva", body: "Apri un’anteprima o un tooltip non appena l’utente si dirige verso di esso." },
        { tag: "// prestazioni", title: "Prefetch dei link", body: "Esegui il prefetch dei link di navigazione prima che l’utente faccia clic." },
        { tag: "// UI adattiva", title: "Puntamento assistito", body: "Ingrandisci i bersagli o avvicinali mentre l’utente si dirige verso di essi." },
      ],
      pattern: [{ step: "01", title: "Osserva", body: "il movimento" }, { step: "02", title: "Stima", body: "la destinazione probabile" }, { step: "03", title: "Prepara", body: "prima dell’arrivo" }]
    },
    ctaBand: { ariaLabel: "Inizia", heading: "Offri una navigazione che sembra istantanea.", getStarted: "Inizia", github: "GitHub", install: "$ npm install intent-link" },
  },
  docs: {
    groupTitles: { gettingStarted: "Per iniziare", apiReference: "Riferimento API", guides: "Guide", more: "Altro" },
    pageTitles: { quickstart: "Avvio rapido", "how-it-works": "Come funziona", "intent-provider": "IntentProvider", "intent-link": "IntentLink", "use-intent-target": "useIntentTarget", "custom-intent-components": "Componenti Intent personalizzati", examples: "Esempi", troubleshooting: "Risoluzione dei problemi", changelog: "Novità" },
  },
};

export { it };
