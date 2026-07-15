import type { TranslationBundle } from "./bundle";

/** Portuguese (pt, Brazilian) translations. */
const pt: TranslationBundle = {
  common: {
    tagline: "Conheça o destino antes do clique.",
    nav: {
      docs: "Docs",
      github: "GitHub",
    },
    footer: {
      tagline: "Preveja o destino antes do clique. Licença MIT. O movimento não sai do dispositivo.",
      groupTitles: {
        docs: "Docs",
        resources: "Recursos",
        forAi: "Para IA",
      },
      links: {
        quickstart: "Início rápido",
        api: "Referência da API",
        guides: "Guias",
        github: "GitHub",
        npm: "npm",
        changelog: "Changelog",
        license: "Licença (MIT)",
        llmsText: "llms.txt",
      },
      builtLine: "Feito com pré-carregamento preditivo — os docs também sentem.",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "Copiar",
      copied: "✓ copiado",
      getStarted: "Começar",
    },
    docs: {
      copyForLlm: "Copiar para LLM",
      viewMarkdown: "Ver como Markdown",
      close: "fechar",
    },
    notFound: {
      title: "Página não encontrada",
      backHome: "Voltar ao início",
    },
    language: {
      ariaLabel: "Selecionar idioma",
    },
    aria: {
      primaryNav: "Principal",
      docsNav: "Docs",
      pageNav: "Nesta página",
      toggleMenu: "Alternar menu",
      loading: "Carregando",
    },
  },
  metadata: {
    title: "intent-link — Conheça o destino antes do clique",
    description:
      "Uma biblioteca de previsão de destino para React e Next.js. Prevê para onde o usuário está indo e prepara a próxima navegação antes de ele clicar.",
    docs: {
      indexTitle: "Docs — intent-link",
      pageTitle: (title: string) => `${title} — docs do intent-link`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "Capa",
      eyebrow: "Previsão de destino para React e Next.js",
      titleLead: "Conheça o destino",
      titleEmphasis: "antes do clique.",
      subcopy:
        "Alcance uma proporção fetch:click de 1.39. O Intent-link calcula a probabilidade usando a energia cinética e potencial resultante da velocidade do movimento e da distância.",
      getStarted: "Começar",
      liveDemo: "Demo ao vivo",
      well: { caption: "pixels têm gravidade" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / demo ao vivo",
      ariaLabel: "Demo de previsão ao vivo",
      heading: "Mova-se em direção a um card — veja como ele é pré-carregado.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} categorias`,

      reset: "reiniciar",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "fluxo onIntent",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} disparos`,
      streamEmpty: "// mova-se em direção a um card para disparar um sinal…",
      levels: { low: "baixo", medium: "médio", high: "alto" },
      tiles: { women: "Feminino", men: "Masculino", kids: "Infantil", shoes: "Calçados", bags: "Bolsas", accessories: "Acessórios", sport: "Esporte", denim: "Jeans", outerwear: "Casacos", beauty: "Beleza", home: "Casa", sale: "Promoção", electronics: "Eletrônicos", watches: "Relógios", jewelry: "Joias", furniture: "Móveis", gifts: "Presentes", travel: "Viagem" },
    },
    latencyRace: {
      eyebrow: "03 / sinta a diferença",
      ariaLabel: "Corrida de latência",
      heading: "O mesmo clique. Pule a espera.",
      body:
        "Uma página aguarda a solicitação de rede, enquanto a outra é carregada durante a trajetória do usuário.",
      timeSavedLabel: "tempo economizado nesta sessão",
      milliseconds: (value: number) => `${value} ms`,
      instant: (value: number) => `${value} ms · instantâneo`,
      withoutTitle: "Sem intent-link",
      withTitle: "Com intent-link",
      notLoaded: "não carregado",
      idle: "inativo",
      prefetching: "pré-carregando…",
      ready: "pré-carregado ✓ pronto",
      fetching: "carregando…",
      productName: "Jaqueta acolchoada",
      productPrice: "R$ 148,00",
      productPath: "/product/quilted-jacket",
      addToCart: "Adicionar ao carrinho",
      open: "Abrir o produto →",
      opening: "abrindo…",
      replay: "↻ Repetir",
    },
    whyDifferent: {
      eyebrow: "04 / diferente",
      ariaLabel: "Por que é diferente",
      heading: "Não é visibilidade. Não é hover. É intenção.",
      body: "Todas as outras abordagens chegam tarde ou desperdiçam recursos.",
      columns: {
        approach: "Abordagem",
        timing: "Momento",
        selective: "Seletividade",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "na trajetória", selective: "o destino" },
        { name: "instant.page", timing: "ao passar o mouse", selective: "um" },
        { name: "Next.js prefetch", timing: "ao entrar na visão", selective: "tudo o que é visível" },
        { name: "Guess.js", timing: "pré-calculado", selective: "melhores palpites" },
        { name: "intent-link", timing: "antes de chegar", selective: "o destino" },
      ],
      benefits: [
        { stat: "Navegação instantânea", title: "Pré-carregue a próxima página antes do clique" },
        { stat: "1.39", title: "Proporção Fetch:Click" },
        { stat: "Ajustável", title: "Configure os pesos de importance e cost" },
        { stat: "useIntentTarget", title: "Crie componentes personalizados" },
        { stat: "React · Next", title: "Para o framework mais popular" },
        { stat: "MIT", title: "Código aberto, sem coleta de dados" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / aplicações",
      ariaLabel: "Além do pré-carregamento",
      heading: "Um sinal. Muitos usos.",
      uses: [
        { tag: "// analítica", title: "Intenção, não apenas cliques", body: "Registre aproximações abandonadas e hesitação, não apenas ações." },
        { tag: "// revelação", title: "Revelação progressiva", body: "Abra uma prévia ou um tooltip assim que o usuário se dirigir a ele." },
        { tag: "// desempenho", title: "Pré-carregar links", body: "Pré-carregue links de navegação antes que o usuário clique neles." },
        { tag: "// UI adaptativa", title: "Mira assistida", body: "Amplie os alvos ou aproxime-os à medida que o usuário se aproxima." },
      ],
      pattern: [
        { step: "01", title: "Medir", body: "a trajetória ruidosa" },
        { step: "02", title: "Estimar", body: "o destino provável" },
        { step: "03", title: "Preparar", body: "antes de chegar" },
      ],
    },
    ctaBand: {
      ariaLabel: "Começar",
      heading: "Entregue uma navegação que parece instantânea.",
      getStarted: "Começar",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "Primeiros passos",
      apiReference: "Referência da API",
      guides: "Guias",
      more: "Mais",
    },
    pageTitles: {
      quickstart: "Início rápido",
      "how-it-works": "Como funciona",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "Componentes de intenção personalizados",
      examples: "Exemplos",
      troubleshooting: "Solução de problemas",
      changelog: "Changelog",
    },
  },
};

export { pt };
