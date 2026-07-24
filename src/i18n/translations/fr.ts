import type { TranslationBundle } from "./bundle";

/** French (fr) translations. */
const fr: TranslationBundle = {
  common: {
    tagline: "Devinez la destination avant le clic.",
    nav: {
      docs: "Docs",
      github: "GitHub",
    },
    footer: {
      tagline: "Prédit la destination avant le clic. Sous licence MIT. Le mouvement ne quitte jamais l'appareil.",
      groupTitles: {
        docs: "Docs",
        resources: "Ressources",
        forAi: "Pour l'IA",
      },
      links: {
        quickstart: "Démarrage rapide",
        api: "Référence API",
        guides: "Guides",
        github: "GitHub",
        npm: "npm",
        changelog: "Journal des modifications",
        license: "Licence (MIT)",
        llmsText: "llms.txt",
      },
      builtLine: "Conçu avec le préchargement prédictif — les docs le ressentent aussi.",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "Copier",
      copied: "✓ copié",
      getStarted: "Commencer",
    },
    docs: {
      copyForLlm: "Copier pour LLM",
      viewMarkdown: "Voir en Markdown",
      close: "fermer",
    },
    notFound: {
      title: "Page introuvable",
      backHome: "Retour à l'accueil",
    },
    language: {
      ariaLabel: "Sélectionner la langue",
    },
    aria: {
      primaryNav: "Principal",
      docsNav: "Docs",
      pageNav: "Sur cette page",
      toggleMenu: "Basculer le menu",
      loading: "Chargement",
    },
  },
  metadata: {
    title: "intent-link — Devinez la destination avant le clic",
    description:
      "Une bibliothèque de prédiction de destination pour React et Next.js. Prédit où l'utilisateur se dirige et prépare la navigation suivante avant qu'il ne clique.",
    docs: {
      indexTitle: "Docs — intent-link",
      pageTitle: (title: string) => `${title} — docs d'intent-link`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "Bannière",
      eyebrow: "Prédiction de destination pour React et Next.js",
      titleLead: "Devinez la destination",
      titleEmphasis: "avant le clic.",
      subcopy:
        "Atteignez un ratio fetch:click de 1.37. Intent-link calcule la probabilité à partir de l’énergie cinétique et potentielle produite par la vitesse du mouvement et la distance.",
      getStarted: "Commencer",
      liveDemo: "Démo en direct",
      well: { caption: "les pixels ont de la gravité" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / démo en direct",
      ariaLabel: "Démo de prédiction en direct",
      heading: "Dirigez-vous vers une carte — regardez-la se précharger.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} catégories`,

      reset: "réinitialiser",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "flux onIntent",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} déclenchements`,
      streamEmpty: "// dirigez-vous vers une carte pour déclencher un signal…",
      levels: { low: "faible", medium: "moyen", high: "élevé" },
      tiles: { women: "Femme", men: "Homme", kids: "Enfants", shoes: "Chaussures", bags: "Sacs", accessories: "Accessoires", sport: "Sport", denim: "Denim", outerwear: "Manteaux", beauty: "Beauté", home: "Maison", sale: "Soldes", electronics: "Électronique", watches: "Montres", jewelry: "Bijoux", furniture: "Meubles", gifts: "Cadeaux", travel: "Voyage" },
    },
    latencyRace: {
      eyebrow: "03 / ressentez la différence",
      ariaLabel: "Course de latence",
      heading: "Le même clic. Évitez l’attente.",
      body:
        "Une page attend la requête réseau, tandis que l’autre est récupérée pendant la trajectoire de l’utilisateur.",
      timeSavedLabel: "temps gagné pendant cette session",
      milliseconds: (value: number) => `${value} ms`,
      instant: (value: number) => `${value} ms · instantané`,
      withoutTitle: "Sans intent-link",
      withTitle: "Avec intent-link",
      notLoaded: "non chargé",
      idle: "inactif",
      prefetching: "préchargement…",
      ready: "préchargé ✓ prêt",
      fetching: "chargement…",
      productName: "Veste matelassée",
      productPrice: "148,00 $",
      productPath: "/product/quilted-jacket",
      addToCart: "Ajouter au panier",
      open: "Ouvrir le produit →",
      opening: "ouverture…",
      replay: "↻ Rejouer",
    },
    whyDifferent: {
      eyebrow: "04 / différent",
      ariaLabel: "Pourquoi c'est différent",
      heading: "Ni visibilité. Ni survol. L'intention.",
      body: "Toutes les autres approches sont soit tardives, soit inefficaces.",
      columns: {
        approach: "Approche",
        timing: "Moment",
        selective: "Sélectivité",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "sur la trajectoire", selective: "la destination" },
        { name: "instant.page", timing: "au survol", selective: "un seul" },
        { name: "Next.js prefetch", timing: "à l'entrée dans la vue", selective: "tout ce qui est visible" },
        { name: "Guess.js", timing: "précalculé", selective: "meilleures suppositions" },
        { name: "intent-link", timing: "avant l'arrivée", selective: "la destination" },
      ],
      benefits: [
        { stat: "Navigation instantanée", title: "Préchargez la page suivante avant le clic" },
        { stat: "1.37", title: "Ratio Fetch:Click" },
        { stat: "Réglable", title: "Configurez les poids importance et cost" },
        { stat: "useIntentTarget", title: "Créez des composants personnalisés" },
        { stat: "React · Next", title: "Pour le framework le plus populaire" },
        { stat: "MIT", title: "Open source, sans collecte de données" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / applications",
      ariaLabel: "Au-delà du préchargement",
      heading: "Un signal. De multiples usages.",
      uses: [
        { tag: "// analytique", title: "L’intention, pas seulement les clics", body: "Enregistrez les approches abandonnées et les hésitations, pas seulement les actions." },
        { tag: "// révélation", title: "Divulgation progressive", body: "Ouvrez un aperçu ou une infobulle dès que l’utilisateur se dirige vers lui." },
        { tag: "// performance", title: "Précharger les liens", body: "Préchargez les liens de navigation avant que l’utilisateur ne clique." },
        { tag: "// interface adaptative", title: "Ciblage assisté", body: "Agrandissez les cibles ou rapprochez-les lorsque l’utilisateur s’en approche." },
      ],
      pattern: [
        { step: "01", title: "Mesurer", body: "la trajectoire bruitée" },
        { step: "02", title: "Estimer", body: "la destination probable" },
        { step: "03", title: "Préparer", body: "avant l'arrivée" },
      ],
    },
    ctaBand: {
      ariaLabel: "Commencer",
      heading: "Livrez une navigation qui semble instantanée.",
      getStarted: "Commencer",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "Premiers pas",
      apiReference: "Référence de l'API",
      guides: "Guides",
      more: "Plus",
    },
    pageTitles: {
      quickstart: "Démarrage rapide",
      "how-it-works": "Comment ça marche",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "Composants d’intention personnalisés",
      examples: "Exemples",
      troubleshooting: "Dépannage",
      changelog: "Journal des modifications",
    },
  },
};

export { fr };
