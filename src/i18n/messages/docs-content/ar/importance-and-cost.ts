import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "اختيار القيم",
  "intro": "الاحتمال مجرد دليل. أما إطلاق onIntent فعلياً فيقرّره مِقبضان لكل رابط يحوّلان الدليل إلى قرار.",
  "col.value": "القيمة",
  "col.weight": "الوزن",
  "col.effect": "الأثر",
  "importanceHeading": "importance — مدى الاستعداد للتصرف",
  "importanceBody": "مقدار الوزن الذي تحمله النية المتوقَّعة وحدها. ارفعها للأهداف التي يسعدك التصرف بناءً عليها مبكراً (دعوة إلى إجراء بارزة).",
  "importance.high": "يُطلق مبكراً، على دليل أضعف",
  "importance.medium": "متوازن **(الافتراضي)**",
  "importance.low": "ينتظر حتى شبه اليقين",
  "costHeading": "cost — ثمن التخمين الخاطئ",
  "costBody": "يُطرح من المنفعة كعقوبة. ارفعها عندما يكون إطلاق `onIntent` دون داعٍ مكلفاً أو مُربكاً.",
  "cost.high": "حذر جداً — يحتاج دليلاً قوياً",
  "cost.medium": "متوازن",
  "cost.low": "جريء — الخطأ رخيص **(الافتراضي)**",
  "pickingHeading": "اختيار القيم",
  "picking.cheap": "**إجراء رخيص** (`router.prefetch`): أهمية عالية، تكلفة منخفضة — أطلق مبكراً وكثيراً.",
  "picking.expensive": "**إجراء مكلف** (استدعاء واجهة برمجية بعدّاد، أو websocket): أهمية أقل، تكلفة أعلى — انتظر شبه اليقين.",
  "pickingNote": "`onIntent` يُطلق مرة واحدة؛ ويُعاد ضبط القفل الداخلي عندما يهبط احتمال الهدف دون `0.05`، فيمكنه الإطلاق مجدداً عند اقتراب جديد.",
};

export { importanceAndCost };
