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
      subcopy: "intent-link legge il movimento del puntatore o dello scorrimento e prevede l’elemento verso cui si dirige l’utente. Carica in anticipo la pagina successiva, mostra un’anteprima o adatta l’interfaccia. Un segnale, molti utilizzi.",
      getStarted: "Inizia", liveDemo: "Demo dal vivo",
    },
    predictionFieldDemo: {
      eyebrow: "02 / demo dal vivo", ariaLabel: "Demo della previsione dal vivo", heading: "Muoviti verso una scheda e osserva il prefetch.", bodyTail: "La console qui sotto mostra intent-link mentre osserva lo stesso movimento.",
      modeHintCursor: "Muovi il puntatore verso una scheda: si prepara seguendo la tua traiettoria prima che tu la raggiunga.", modeHintTouch: "Scorri verso una scheda: si prepara seguendo la velocità dello scorrimento prima del tocco.",
      addressBar: "shop.example/new-in", categories: (count: number) => `${count} categorie`, storefrontIdle: "// muoviti verso una scheda per attivare un prefetch", consoleTitle: "intent-link", reset: "reimposta", importanceLabel: "importance", costLabel: "cost", streamTitle: "flusso onIntent", firedCount: (count: number) => `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} attivazioni`, streamEmpty: "// muoviti verso una scheda per attivare un segnale…", levels: { low: "basso", medium: "medio", high: "alto" },
      tiles: { women: "Donna", men: "Uomo", kids: "Bambini", shoes: "Scarpe", bags: "Borse", accessories: "Accessori", sport: "Sport", denim: "Denim", outerwear: "Capispalla", beauty: "Bellezza", home: "Casa", sale: "Saldi", electronics: "Elettronica", watches: "Orologi", jewelry: "Gioielli", furniture: "Mobili", gifts: "Regali", travel: "Viaggi" },
    },
    latencyRace: {
      eyebrow: "03 / senti la differenza", ariaLabel: "Confronto della latenza", heading: "Lo stesso clic. Metà dell’attesa.", body: "Una pagina aspetta la rete. L’altra si è preparata mentre ti avvicinavi ed è già pronta. Aprila e guarda.", timeSavedLabel: "tempo risparmiato in questa sessione", milliseconds: (value: number) => `${value} ms`, instant: (value: number) => `${value} ms · istantaneo`, withoutTitle: "Senza intent-link", withTitle: "Con intent-link", notLoaded: "non caricato", idle: "inattivo", prefetching: "prefetch in corso…", ready: "prefetch completato ✓ pronto", fetching: "caricamento…", productName: "Giacca trapuntata", productPrice: "148,00 €", productPath: "/product/quilted-jacket", addToCart: "Aggiungi al carrello", open: "Apri il prodotto →", opening: "apertura…", replay: "↻ Ripeti", hintBefore: "Suggerimento: muoviti prima verso il pannello destro; intent-link lo caricherà in anticipo.", hintAfter: "Ora aprilo: la pagina caricata in anticipo è già pronta.",
    },
    codeExample: {
      eyebrow: "04 / integra", ariaLabel: "Esempio di codice", heading: "Due righe per il caso comune.", body: "Avvolgi l’app una volta e sostituisci i link. Per gli altri elementi usa il riferimento di intent.", tabs: { simple: "semplice", custom: "personalizzato" }, copyForLlm: "Copia per LLM", fullApiLead: "API completa nella ", fullApiLink: "documentazione →", quickstartLabel: "avvio rapido",
    },
    whyDifferent: {
      eyebrow: "05 / diverso", ariaLabel: "Perché è diverso", heading: "Non visibilità. Non hover. Intento.", body: "Gli altri approcci usano un segnale approssimativo. intent-link prevede.",
      columns: { approach: "Approccio", timing: "Momento", selective: "Selettività", perUser: "Per utente", confidence: "Affidabilità", setup: "Configurazione" }, highlightName: "intent-link",
      rows: [
        { name: "rel=prefetch", timing: "manuale, statico", selective: "scelto in anticipo", perUser: "—", confidence: "—", setup: "dichiarato a mano" },
        { name: "ForesightJS", timing: "lungo il percorso", selective: "la destinazione", perUser: "✓", confidence: "—", setup: "registrazione + callback" },
        { name: "instant.page", timing: "all’hover", selective: "uno, tardi", perUser: "✓", confidence: "—", setup: "integrabile" },
        { name: "Next.js prefetch", timing: "quando è visibile", selective: "tutto ciò che è visibile", perUser: "—", confidence: "—", setup: "integrato" },
        { name: "Guess.js", timing: "precalcolato", selective: "ipotesi migliori", perUser: "aggregato", confidence: "—", setup: "build + dati" },
        { name: "intent-link", timing: "prima dell’arrivo", selective: "la destinazione", perUser: "✓", confidence: "✓", setup: "integrabile" },
      ],
      benefits: [
        { stat: "~istantaneo", title: "Navigazione istantanea", body: "La pagina successiva viene caricata prima del clic." },
        { stat: "~98%", title: "Alta precisione", body: "Traiettoria e affidabilità individuano la destinazione corretta." },
        { stat: "2 controlli", title: "Regolabile", body: "importance e cost controllano quanto presto agire." },
        { stat: "pronto / personalizzato", title: "Due modalità", body: "IntentLink per i link e useIntentTarget per gli altri elementi." },
        { stat: "React · Next", title: "Nativo del framework", body: "Un sostituto diretto di next/link nell’App Router di Next.js." },
        { stat: "MIT", title: "Piccolo e aperto", body: "Nessuna raccolta dati: il movimento resta sul dispositivo." },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / oltre il prefetch", ariaLabel: "Oltre il prefetch", heading: "Un segnale. Molti utilizzi.", body: "Il prefetch è il caso principale, ma onIntent può preparare anche dati, immagini e componenti.",
      uses: [
        { tag: "// dati", title: "Prepara i dati", body: "Riempi la cache dei dati prima che si apra la schermata successiva." },
        { tag: "// anteprima", title: "Mostra un’anteprima", body: "Prepara un’anteprima quando l’utente si dirige verso un elemento." },
        { tag: "// risorse", title: "Carica le risorse", body: "Avvia in anticipo immagini o file pesanti." },
        { tag: "// componenti", title: "Prepara l’interfaccia", body: "Inizializza il lavoro ripetibile prima dell’interazione finale." },
      ],
      pattern: [{ step: "01", title: "Osserva", body: "il movimento" }, { step: "02", title: "Stima", body: "la destinazione probabile" }, { step: "03", title: "Prepara", body: "prima dell’arrivo" }], patternLabel: "il modello generale", patternClose: "Il movimento contiene informazioni sulla probabile destinazione. intent-link trasforma questo segnale in un semplice onIntent.",
    },
    ctaBand: { ariaLabel: "Inizia", heading: "Offri una navigazione che sembra istantanea.", body: "Due componenti per il caso comune. Un hook per gli elementi personalizzati.", getStarted: "Inizia", github: "GitHub", install: "$ npm install intent-link" },
  },
  docs: {
    groupTitles: { gettingStarted: "Per iniziare", apiReference: "Riferimento API", guides: "Guide", more: "Altro" },
    pageTitles: { quickstart: "Avvio rapido", "how-it-works": "Come funziona", "intent-provider": "IntentProvider", "intent-link": "IntentLink", "use-intent-target": "useIntentTarget", "custom-intent-components": "Componenti Intent personalizzati", examples: "Esempi", troubleshooting: "Risoluzione dei problemi", changelog: "Novità" },
  },
};

export { it };
