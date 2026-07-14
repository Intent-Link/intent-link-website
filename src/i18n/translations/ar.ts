import type { TranslationBundle } from "./bundle";

/** Arabic (ar) translations. The site renders right-to-left for this locale. */
const ar: TranslationBundle = {
  common: {
    tagline: "اعرف الوجهة قبل النقرة.",
    nav: {
      docs: "الوثائق",
      github: "GitHub",
    },
    footer: {
      tagline: "يتنبأ بالوجهة قبل النقرة. مرخّص بموجب MIT. الحركة لا تغادر الجهاز.",
      groupTitles: {
        docs: "الوثائق",
        resources: "الموارد",
        forAi: "للذكاء الاصطناعي",
      },
      links: {
        quickstart: "البدء السريع",
        api: "مرجع API",
        guides: "الأدلة",
        github: "GitHub",
        npm: "npm",
        changelog: "سجل التغييرات",
        license: "الرخصة (MIT)",
        llmsText: "llms.txt",
      },
      builtLine: "مبني بالجلب المسبق التنبؤي — والمستندات تشعر بذلك أيضًا.",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "نسخ",
      copied: "✓ تم النسخ",
      getStarted: "ابدأ",
    },
    docs: {
      copyForLlm: "نسخ لـ LLM",
      viewMarkdown: "عرض كـ Markdown",
      close: "إغلاق",
    },
    notFound: {
      title: "الصفحة غير موجودة",
      backHome: "العودة إلى الصفحة الرئيسية",
    },
    language: {
      ariaLabel: "اختيار اللغة",
    },
    aria: {
      primaryNav: "الرئيسية",
      docsNav: "الوثائق",
      pageNav: "في هذه الصفحة",
      toggleMenu: "تبديل القائمة",
      loading: "جارٍ التحميل",
    },
  },
  metadata: {
    title: "intent-link — اعرف الوجهة قبل النقرة",
    description:
      "مكتبة للتنبؤ بالوجهة لـ React وNext.js. تتنبأ بالمكان الذي يتجه إليه المستخدم وتُهيّئ التنقل التالي قبل أن ينقر.",
    docs: {
      indexTitle: "الوثائق — intent-link",
      pageTitle: (title: string) => `${title} — وثائق intent-link`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "الواجهة",
      eyebrow: "التنبؤ بالوجهة لـ React وNext.js",
      titleLead: "اعرف الوجهة",
      titleEmphasis: "قبل النقرة.",
      subcopy:
        "حقق نسبة fetch:click تبلغ 1.39. يحسب Intent-link الاحتمال باستخدام الطاقة الحركية وطاقة الوضع الناتجتين عن سرعة الحركة والمسافة.",
      getStarted: "ابدأ الآن",
      liveDemo: "عرض حي",
    },
    predictionFieldDemo: {
      eyebrow: "02 / عرض حي",
      ariaLabel: "عرض التنبؤ الحي",
      heading: "تحرّك نحو بطاقة — وشاهد كيف تُحمَّل مسبقاً.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} فئات`,

      reset: "إعادة تعيين",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "تدفق onIntent",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} إطلاقات`,
      streamEmpty: "// تحرّك نحو بطاقة لإطلاق إشارة…",
      levels: { low: "منخفض", medium: "متوسط", high: "مرتفع" },
      tiles: { women: "نساء", men: "رجال", kids: "أطفال", shoes: "أحذية", bags: "حقائب", accessories: "إكسسوارات", sport: "رياضة", denim: "جينز", outerwear: "ملابس خارجية", beauty: "جمال", home: "منزل", sale: "تخفيضات", electronics: "إلكترونيات", watches: "ساعات", jewelry: "مجوهرات", furniture: "أثاث", gifts: "هدايا", travel: "سفر" },
    },
    latencyRace: {
      eyebrow: "03 / اشعر بالفرق",
      ariaLabel: "سباق زمن الاستجابة",
      heading: "النقرة نفسها. تجاوز الانتظار.",
      body:
        "تنتظر إحدى الصفحات طلب الشبكة، بينما يتم جلب الأخرى أثناء مسار حركة المستخدم.",
      timeSavedLabel: "الوقت الموفَّر في هذه الجلسة",
      milliseconds: (value: number) => `${value} م.ث`,
      instant: (value: number) => `${value} م.ث · فوري`,
      withoutTitle: "بدون intent-link",
      withTitle: "مع intent-link",
      notLoaded: "غير مُحمَّل",
      idle: "خامل",
      prefetching: "جارٍ التحميل المسبق…",
      ready: "مُحمَّل مسبقاً ✓ جاهز",
      fetching: "جارٍ التحميل…",
      productName: "سترة مبطّنة",
      productPrice: "148٫00 $",
      productPath: "/product/quilted-jacket",
      addToCart: "أضف إلى السلة",
      open: "افتح المنتج →",
      opening: "جارٍ الفتح…",
      replay: "↻ إعادة",
    },
    whyDifferent: {
      eyebrow: "04 / مختلف",
      ariaLabel: "لماذا هو مختلف",
      heading: "ليست الرؤية. وليس التحويم. بل النيّة.",
      body: "كل نهج آخر إما متأخر أو يهدر الموارد.",
      columns: {
        approach: "النهج",
        timing: "التوقيت",
        selective: "الانتقائية",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "على المسار", selective: "الوجهة" },
        { name: "instant.page", timing: "عند التحويم", selective: "واحد" },
        { name: "Next.js prefetch", timing: "عند الظهور", selective: "كل ما هو مرئي" },
        { name: "Guess.js", timing: "محسوب مسبقاً", selective: "أفضل التخمينات" },
        { name: "intent-link", timing: "قبل الوصول", selective: "الوجهة" },
      ],
      benefits: [
        { stat: "تنقل فوري", title: "حمّل الصفحة التالية مسبقاً قبل النقر" },
        { stat: "1.39", title: "نسبة Fetch:Click" },
        { stat: "قابل للضبط", title: "اضبط أوزان importance وcost" },
        { stat: "useIntentTarget", title: "أنشئ مكونات مخصصة لتوقع النية" },
        { stat: "React · Next", title: "محسّن لإطار العمل الأكثر شيوعاً" },
        { stat: "MIT", title: "مفتوح المصدر، دون جمع بيانات" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / التطبيقات",
      ariaLabel: "ما وراء التحميل المسبق",
      heading: "إشارة واحدة. استخدامات عديدة.",
      uses: [
        { tag: "// تحليلات", title: "النية، لا النقرات فقط", body: "سجّل الاقترابات المتروكة والتردد، لا الأفعال فحسب." },
        { tag: "// كشف", title: "كشف تدريجي", body: "افتح معاينة أو تلميحاً بمجرد أن يتجه المستخدم نحوه." },
        { tag: "// أداء", title: "تحميل الروابط مسبقاً", body: "حمّل روابط التنقل مسبقاً قبل أن ينقر عليها المستخدم." },
        { tag: "// واجهة متكيفة", title: "تصويب مُساعَد", body: "كبّر الأهداف أو قرّبها مع اقتراب المستخدم منها." },
      ],
      pattern: [
        { step: "01", title: "القياس", body: "المسار المشوّش" },
        { step: "02", title: "التقدير", body: "الوجهة المرجّحة" },
        { step: "03", title: "التهيئة", body: "قبل الوصول" },
      ],
    },
    ctaBand: {
      ariaLabel: "ابدأ الآن",
      heading: "قدّم تنقّلًا يبدو فوريًا.",
      getStarted: "ابدأ الآن",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "الخطوات الأولى",
      apiReference: "مرجع الواجهة البرمجية",
      guides: "أدلة",
      more: "المزيد",
    },
    pageTitles: {
      quickstart: "البدء السريع",
      "how-it-works": "كيف يعمل",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "مكوّنات النية المخصصة",
      examples: "أمثلة",
      troubleshooting: "استكشاف الأخطاء وإصلاحها",
      changelog: "سجل التغييرات",
    },
  },
};

export { ar };
