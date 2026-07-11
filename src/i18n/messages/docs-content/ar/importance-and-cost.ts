import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "اختيار القيم",
  "intro": "الاحتمال مجرد دليل. أما إطلاق `onIntent` فعلياً فيقرّره مِقبضان لكل رابط — `importance` و`cost` — يحوّلان الدليل إلى قرار. يُطلق `onIntent` أول مرة تتجاوز فيها منفعة الهدف الصفر.",
  "exampleLead": "اضبط كليهما كخاصيتين على أي `IntentLink`:",
  "col.value": "القيمة",
  "col.effect": "الأثر",
  "importanceHeading": "importance: مدى الاستعداد للتصرف",
  "importanceBody": "مقدار الوزن الذي تحمله النية المتوقَّعة وحدها. ارفعها للأهداف التي يسعدك التصرف بناءً عليها مبكراً (دعوة إلى إجراء بارزة).",
  "importance.high": "يُطلق مبكراً، على دليل أضعف",
  "importance.medium": "متوازن **(الافتراضي)**",
  "importance.low": "ينتظر حتى شبه اليقين",
  "costHeading": "cost: ثمن التخمين الخاطئ",
  "costBody": "عقوبة إطلاق `onIntent` عندما يتبيّن أنك لم تكن متجهاً إلى هناك. ارفعها عندما يكون التخمين الخاطئ مكلفاً أو مُربكاً.",
  "cost.high": "حذر جداً، يحتاج دليلاً قوياً",
  "cost.medium": "متوازن",
  "cost.low": "جريء، الخطأ رخيص **(الافتراضي)**",
  "pickingHeading": "اختيار القيم",
  "picking.cheap": "**إجراء رخيص** (`router.prefetch`): أهمية عالية، تكلفة منخفضة. أطلق مبكراً وكثيراً.",
  "picking.expensive": "**إجراء مكلف** (استدعاء واجهة برمجية بعدّاد، أو websocket): أهمية أقل، تكلفة أعلى. انتظر شبه اليقين.",
  "pickingNote": "`onIntent` يُطلق مرة واحدة لكل اقتراب؛ ويُعاد تسليحه بعد أن يهبط احتمال الهدف مجدداً، فيمكن لاقتراب جديد أن يُطلقه من جديد.",
};

export { importanceAndCost };
