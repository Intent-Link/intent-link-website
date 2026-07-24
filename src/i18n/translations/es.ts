import type { TranslationBundle } from "./bundle";

/** Spanish (es) translations. Template for the other locale bundles. */
const es: TranslationBundle = {
  common: {
    tagline: "Conoce el destino antes del clic.",
    nav: {
      docs: "Docs",
      github: "GitHub",
    },
    footer: {
      tagline: "Predice el destino antes del clic. Con licencia MIT. El movimiento no sale del dispositivo.",
      groupTitles: {
        docs: "Docs",
        resources: "Recursos",
        forAi: "Para IA",
      },
      links: {
        quickstart: "Inicio rápido",
        api: "Referencia de API",
        guides: "Guías",
        github: "GitHub",
        npm: "npm",
        changelog: "Cambios",
        license: "Licencia (MIT)",
        llmsText: "llms.txt",
      },
      builtLine: "Hecho con precarga predictiva — los docs también lo sienten.",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "Copiar",
      copied: "✓ copiado",
      getStarted: "Empezar",
    },
    docs: {
      copyForLlm: "Copiar para LLM",
      viewMarkdown: "Ver como Markdown",
      close: "cerrar",
    },
    notFound: {
      title: "Página no encontrada",
      backHome: "Volver al inicio",
    },
    language: {
      ariaLabel: "Seleccionar idioma",
    },
    aria: {
      primaryNav: "Principal",
      docsNav: "Docs",
      pageNav: "En esta página",
      toggleMenu: "Alternar menú",
      loading: "Cargando",
    },
  },
  metadata: {
    title: "intent-link — Conoce el destino antes del clic",
    description:
      "Una librería de predicción de destino para React y Next.js. Predice adónde se dirige el usuario y prepara la siguiente navegación antes de que haga clic.",
    docs: {
      indexTitle: "Docs — intent-link",
      pageTitle: (title: string) => `${title} — docs de intent-link`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "Portada",
      eyebrow: "Predicción de destino para React y Next.js",
      titleLead: "Conoce el destino",
      titleEmphasis: "antes del clic.",
      subcopy:
        "Consigue una relación fetch:click de 1.37. Intent-link calcula la probabilidad usando la energía cinética y potencial derivada de la velocidad del movimiento y la distancia.",
      getStarted: "Empezar",
      liveDemo: "Demo en vivo",
      well: { caption: "los píxeles tienen gravedad" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / demo en vivo",
      ariaLabel: "Demo de predicción en vivo",
      heading: "Muévete hacia una tarjeta — mira cómo se precarga.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} categorías`,

      reset: "reiniciar",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "flujo onIntent",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} disparos`,
      streamEmpty: "// muévete hacia una tarjeta para disparar una señal…",
      levels: { low: "bajo", medium: "medio", high: "alto" },
      tiles: { women: "Mujer", men: "Hombre", kids: "Niños", shoes: "Zapatos", bags: "Bolsos", accessories: "Accesorios", sport: "Deporte", denim: "Vaqueros", outerwear: "Abrigos", beauty: "Belleza", home: "Hogar", sale: "Rebajas", electronics: "Electrónica", watches: "Relojes", jewelry: "Joyería", furniture: "Muebles", gifts: "Regalos", travel: "Viajes" },
    },
    latencyRace: {
      eyebrow: "03 / siente la diferencia",
      ariaLabel: "Carrera de latencia",
      heading: "El mismo clic. Sáltate la espera.",
      body:
        "Una página espera la solicitud de red, mientras la otra se obtiene durante la trayectoria del usuario.",
      timeSavedLabel: "tiempo ahorrado en esta sesión",
      milliseconds: (value: number) => `${value} ms`,
      instant: (value: number) => `${value} ms · instantáneo`,
      withoutTitle: "Sin intent-link",
      withTitle: "Con intent-link",
      notLoaded: "no cargado",
      idle: "inactivo",
      prefetching: "precargando…",
      ready: "precargado ✓ listo",
      fetching: "cargando…",
      productName: "Chaqueta acolchada",
      productPrice: "148,00 $",
      productPath: "/product/quilted-jacket",
      addToCart: "Añadir al carrito",
      open: "Abrir el producto →",
      opening: "abriendo…",
      replay: "↻ Repetir",
    },
    whyDifferent: {
      eyebrow: "04 / diferente",
      ariaLabel: "Por qué es diferente",
      heading: "Ni visibilidad. Ni hover. Intención.",
      body: "Todos los demás enfoques llegan tarde o desperdician recursos.",
      columns: {
        approach: "Enfoque",
        timing: "Momento",
        selective: "Selectividad",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "sobre la trayectoria", selective: "el destino" },
        { name: "instant.page", timing: "al pasar el ratón", selective: "uno" },
        { name: "Next.js prefetch", timing: "al entrar en vista", selective: "todo lo visible" },
        { name: "Guess.js", timing: "precalculado", selective: "mejores conjeturas" },
        { name: "intent-link", timing: "antes de llegar", selective: "el destino" },
      ],
      benefits: [
        { stat: "Navegación instantánea", title: "Precarga la página siguiente antes del clic" },
        { stat: "1.37", title: "Relación Fetch:Click" },
        { stat: "Ajustable", title: "Configura los pesos de importance y cost" },
        { stat: "useIntentTarget", title: "Crea componentes personalizados" },
        { stat: "React · Next", title: "Para el framework más popular" },
        { stat: "MIT", title: "Código abierto, sin recopilación de datos" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / aplicaciones",
      ariaLabel: "Más allá de la precarga",
      heading: "Una señal. Muchos usos.",
      uses: [
        { tag: "// analítica", title: "Intención, no solo clics", body: "Registra acercamientos abandonados y dudas, no solo acciones." },
        { tag: "// revelación", title: "Revelado progresivo", body: "Abre una vista previa o un tooltip en cuanto el usuario se dirige hacia él." },
        { tag: "// rendimiento", title: "Precargar enlaces", body: "Precarga los enlaces de navegación antes de que el usuario haga clic." },
        { tag: "// UI adaptativa", title: "Apuntado asistido", body: "Amplía los objetivos o acércalos cuando el usuario se aproxima." },
      ],
      pattern: [
        { step: "01", title: "Medir", body: "la trayectoria ruidosa" },
        { step: "02", title: "Estimar", body: "el destino probable" },
        { step: "03", title: "Preparar", body: "antes de llegar" },
      ],
    },
    ctaBand: {
      ariaLabel: "Empezar",
      heading: "Publica una navegación que se siente instantánea.",
      getStarted: "Empezar",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "Primeros pasos",
      apiReference: "Referencia de la API",
      guides: "Guías",
      more: "Más",
    },
    pageTitles: {
      quickstart: "Inicio rápido",
      "how-it-works": "Cómo funciona",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "Componentes de intención personalizados",
      examples: "Ejemplos",
      troubleshooting: "Solución de problemas",
      changelog: "Cambios",
    },
  },
};

export { es };
