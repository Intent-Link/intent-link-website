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
        "يقرأ intent-link حركة المؤشر أو التمرير ويتنبأ بالعنصر الذي يتجه إليه المستخدم بدقة تبلغ ~98 %. حمّل الصفحة التالية مسبقاً قبل أن تقع النقرة، أظهِر معاينة، أو كيّف الواجهة. إشارة واحدة، استخدامات عديدة.",
      getStarted: "ابدأ الآن",
      liveDemo: "عرض حي",
    },
    predictionFieldDemo: {
      eyebrow: "02 / عرض حي",
      ariaLabel: "عرض التنبؤ الحي",
      heading: "تحرّك نحو بطاقة — وشاهد كيف تُحمَّل مسبقاً.",
      bodyTail: "الوحدة الطرفية بالأسفل هي intent-link وهو يراقب الحركة نفسها.",
      modeHintCursor:
        "حرّك المؤشر نحو بطاقة — تتهيأ وفق مسارك قبل أن تصل إليها.",
      modeHintTouch:
        "مرّر نحو بطاقة — تتهيأ وفق سرعة تمريرك قبل أن تلمسها.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} فئات`,
      storefrontIdle: "// تحرّك نحو بطاقة لتفعيل تحميل مسبق",
      consoleTitle: "intent-link",
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
      heading: "النقرة نفسها. نصف الانتظار.",
      body:
        "صفحة تنتظر الشبكة. والأخرى تهيأت مع اقترابك وهي جاهزة بالفعل. افتحها وراقب.",
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
      hintBefore: "تلميح: تحرّك أولاً نحو اللوحة اليمنى — يحمّلها intent-link مسبقاً.",
      hintAfter: "افتحها الآن — الصفحة المُحمَّلة مسبقاً جاهزة بالفعل.",
    },
    codeExample: {
      eyebrow: "04 / ادمجه",
      ariaLabel: "مثال برمجي",
      heading: "سطران، للحالة الشائعة.",
      body: "غلّف مرة واحدة وبدّل الروابط. أو اقرأ الاحتمالات الخام وابنِ ما تريد.",
      tabs: { simple: "بسيط", custom: "مخصّص" },
      copyForLlm: "نسخ لنموذج لغوي",
      fullApiLead: "واجهة برمجية كاملة في ",
      fullApiLink: "الوثائق →",
      quickstartLabel: "البدء السريع",
    },
    whyDifferent: {
      eyebrow: "05 / مختلف",
      ariaLabel: "لماذا هو مختلف",
      heading: "ليست الرؤية. وليس التحويم. بل النيّة.",
      body: "كل نهج آخر يخمّن بمُطلِق فجّ. أما intent-link فيتنبأ.",
      columns: {
        approach: "النهج",
        timing: "التوقيت",
        selective: "الانتقائية",
        perUser: "لكل مستخدم",
        confidence: "الثقة",
        setup: "الإعداد",
      },
      highlightName: "intent-link",
      rows: [
        { name: "rel=prefetch", timing: "يدوي، ثابت", selective: "تختار أنت مسبقاً", perUser: "—", confidence: "—", setup: "معلَن يدوياً" },
        { name: "ForesightJS", timing: "على المسار", selective: "الوجهة", perUser: "✓", confidence: "—", setup: "تسجيل + ردّ نداء" },
        { name: "instant.page", timing: "عند التحويم", selective: "واحد، متأخر", perUser: "✓", confidence: "—", setup: "قابل للدمج" },
        { name: "Next.js prefetch", timing: "عند الظهور", selective: "كل ما هو مرئي", perUser: "—", confidence: "—", setup: "مدمج" },
        { name: "Guess.js", timing: "محسوب مسبقاً", selective: "أفضل التخمينات", perUser: "مُجمَّع", confidence: "—", setup: "خطوة بناء + بيانات" },
        { name: "intent-link", timing: "قبل الوصول", selective: "الوجهة", perUser: "✓", confidence: "✓", setup: "قابل للدمج" },
      ],
      benefits: [
        { stat: "~فوري", title: "تنقل فوري", body: "تُحمَّل الصفحة التالية مسبقاً قبل أن تقع النقرة." },
        { stat: "~98 %", title: "دقة عالية", body: "المسار + الثقة يحدّدان الوجهة الصحيحة." },
        { stat: "مِقبضان", title: "قابل للضبط", body: "importance وcost يضعان مستوى الجرأة حيث تريد." },
        { stat: "قابل للدمج / خام", title: "سطحان", body: "مكوّن واحد لـ 80 % من الحالات، واحتمالات خام للبقية." },
        { stat: "React · Next", title: "أصيل في إطار العمل", body: "بديل مباشر لـ next/link في Next.js App Router." },
        { stat: "MIT", title: "صغير ومفتوح", body: "لا جمع للبيانات — الحركة لا تغادر الجهاز." },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / ما وراء التحميل المسبق",
      ariaLabel: "ما وراء التحميل المسبق",
      heading: "إشارة واحدة. استخدامات عديدة.",
      body:
        "التحميل المسبق هو النجم. لكن تدفق الاحتمالات الخام إشارة نية آنية عامة الاستخدام.",
      uses: [
        { tag: "// تحليلات", title: "النية، لا النقرات فقط", body: "سجّل شبه الإصابات والاقترابات المهجورة — التردد، لا الأفعال فحسب." },
        { tag: "// كشف", title: "كشف تدريجي", body: "افتح معاينة أو تلميحاً بمجرد أن يتجه المستخدم نحوه." },
        { tag: "// واجهة متكيفة", title: "تصميم استباقي", body: "أبرِز أو حمّل مسبقاً العنصر الذي يتحرك الانتباه نحوه." },
        { tag: "// إتاحة", title: "تصويب مُساعَد", body: "تنبّأ بالوجهة المقصودة مبكراً لمن يعاني تحكماً حركياً أبطأ أو محدوداً." },
      ],
      pattern: [
        { step: "01", title: "القياس", body: "المسار المشوّش" },
        { step: "02", title: "التقدير", body: "الوجهة المرجّحة" },
        { step: "03", title: "التهيئة", body: "قبل الوصول" },
      ],
      patternLabel: "النمط، معمّمًا",
      patternClose: "لا شيء من ذلك خاص بالويب. المؤشر والشاشة مجرد حالة واحدة — الحركة نفسها تصف متسوقًا يقترب من رفّ، ومسار أحد المشاة، ويدًا تمتد نحو زر تحكم. المكتبة ليست سوى تطبيق واحد لفكرة عالمية.",
    },
    ctaBand: {
      ariaLabel: "ابدأ الآن",
      heading: "قدّم تنقّلًا يبدو فوريًا.",
      body: "سطران للحالة الشائعة. واحتمالات خام عندما تريد المزيد.",
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
