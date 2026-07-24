import type { TranslationBundle } from "./bundle";

/** Russian (ru) translations. */
const ru: TranslationBundle = {
  common: {
    tagline: "Узнайте цель ещё до клика.",
    nav: {
      docs: "Документация",
      github: "GitHub",
    },
    footer: {
      tagline: "Предсказывает цель ещё до клика. Лицензия MIT. Движение не покидает устройство.",
      groupTitles: {
        docs: "Документация",
        resources: "Ресурсы",
        forAi: "Для ИИ",
      },
      links: {
        quickstart: "Быстрый старт",
        api: "Справочник API",
        guides: "Руководства",
        github: "GitHub",
        npm: "npm",
        changelog: "История изменений",
        license: "Лицензия (MIT)",
        llmsText: "llms.txt",
      },
      builtLine: "Создано с предиктивной предзагрузкой — документация это тоже чувствует.",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "Копировать",
      copied: "✓ скопировано",
      getStarted: "Начать",
    },
    docs: {
      copyForLlm: "Скопировать для LLM",
      viewMarkdown: "Открыть как Markdown",
      close: "закрыть",
    },
    notFound: {
      title: "Страница не найдена",
      backHome: "Вернуться на главную",
    },
    language: {
      ariaLabel: "Выбрать язык",
    },
    aria: {
      primaryNav: "Основное",
      docsNav: "Документация",
      pageNav: "На этой странице",
      toggleMenu: "Переключить меню",
      loading: "Загрузка",
    },
  },
  metadata: {
    title: "intent-link — Узнайте цель ещё до клика",
    description:
      "Библиотека предсказания цели для React и Next.js. Предсказывает, куда направляется пользователь, и подготавливает следующий переход ещё до клика.",
    docs: {
      indexTitle: "Документация — intent-link",
      pageTitle: (title: string) => `${title} — документация intent-link`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "Титульный раздел",
      eyebrow: "Предсказание цели для React и Next.js",
      titleLead: "Узнайте цель",
      titleEmphasis: "ещё до клика.",
      subcopy:
        "Достигайте соотношения fetch:click 1.37. Intent-link вычисляет вероятность с помощью кинетической и потенциальной энергии, обусловленной скоростью движения и расстоянием.",
      getStarted: "Начать",
      liveDemo: "Живое демо",
      well: { caption: "у пикселей есть гравитация" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / живое демо",
      ariaLabel: "Живое демо предсказания",
      heading: "Двигайтесь к карточке — смотрите, как она предзагружается.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} категорий`,

      reset: "сбросить",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "поток onIntent",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} срабатываний`,
      streamEmpty: "// двигайтесь к карточке, чтобы вызвать сигнал…",
      levels: { low: "низкий", medium: "средний", high: "высокий" },
      tiles: { women: "Женщины", men: "Мужчины", kids: "Дети", shoes: "Обувь", bags: "Сумки", accessories: "Аксессуары", sport: "Спорт", denim: "Деним", outerwear: "Верхняя одежда", beauty: "Красота", home: "Дом", sale: "Распродажа", electronics: "Электроника", watches: "Часы", jewelry: "Украшения", furniture: "Мебель", gifts: "Подарки", travel: "Путешествия" },
    },
    latencyRace: {
      eyebrow: "03 / почувствуйте разницу",
      ariaLabel: "Гонка задержек",
      heading: "Тот же клик. Без ожидания.",
      body:
        "Одна страница ждёт сетевого запроса, а другая загружается во время движения пользователя по траектории.",
      timeSavedLabel: "сэкономлено времени за эту сессию",
      milliseconds: (value: number) => `${value} мс`,
      instant: (value: number) => `${value} мс · мгновенно`,
      withoutTitle: "Без intent-link",
      withTitle: "С intent-link",
      notLoaded: "не загружено",
      idle: "простой",
      prefetching: "предзагрузка…",
      ready: "предзагружено ✓ готово",
      fetching: "загрузка…",
      productName: "Стёганая куртка",
      productPrice: "148,00 $",
      productPath: "/product/quilted-jacket",
      addToCart: "В корзину",
      open: "Открыть товар →",
      opening: "открытие…",
      replay: "↻ Повторить",
    },
    whyDifferent: {
      eyebrow: "04 / отличие",
      ariaLabel: "Чем это отличается",
      heading: "Не видимость. Не наведение. Намерение.",
      body: "Все остальные подходы либо запаздывают, либо расходуют ресурсы впустую.",
      columns: {
        approach: "Подход",
        timing: "Момент",
        selective: "Избирательность",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "по траектории", selective: "цель" },
        { name: "instant.page", timing: "при наведении", selective: "один" },
        { name: "Next.js prefetch", timing: "при попадании в область видимости", selective: "всё видимое" },
        { name: "Guess.js", timing: "предвычислено", selective: "лучшие догадки" },
        { name: "intent-link", timing: "до достижения", selective: "цель" },
      ],
      benefits: [
        { stat: "Мгновенная навигация", title: "Загружайте следующую страницу до клика" },
        { stat: "1.37", title: "Соотношение Fetch:Click" },
        { stat: "Настраиваемо", title: "Настройте веса importance и cost" },
        { stat: "useIntentTarget", title: "Создавайте собственные компоненты" },
        { stat: "React · Next", title: "Для самого популярного фреймворка" },
        { stat: "MIT", title: "Открытый исходный код, без сбора данных" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / применения",
      ariaLabel: "За пределами предзагрузки",
      heading: "Один сигнал. Множество применений.",
      uses: [
        { tag: "// аналитика", title: "Намерение, а не только клики", body: "Фиксируйте брошенные приближения и колебания, а не только действия." },
        { tag: "// раскрытие", title: "Постепенное раскрытие", body: "Открывайте предпросмотр или подсказку, как только пользователь направляется к ним." },
        { tag: "// производительность", title: "Предзагрузка ссылок", body: "Предзагружайте навигационные ссылки до того, как пользователь нажмёт на них." },
        { tag: "// адаптивный UI", title: "Помощь в наведении", body: "Увеличивайте или приближайте цели по мере приближения пользователя." },
      ],
      pattern: [
        { step: "01", title: "Измерить", body: "зашумлённую траекторию" },
        { step: "02", title: "Оценить", body: "вероятную цель" },
        { step: "03", title: "Подготовить", body: "до достижения" },
      ],
    },
    ctaBand: {
      ariaLabel: "Начать",
      heading: "Навигация, которая ощущается мгновенной.",
      getStarted: "Начать",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "Начало работы",
      apiReference: "Справочник API",
      guides: "Руководства",
      more: "Ещё",
    },
    pageTitles: {
      quickstart: "Быстрый старт",
      "how-it-works": "Как это работает",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "Пользовательские intent-компоненты",
      examples: "Примеры",
      troubleshooting: "Устранение неполадок",
      changelog: "История изменений",
    },
  },
};

export { ru };
