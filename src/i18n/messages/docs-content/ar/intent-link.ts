import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "الخصائص",
  "toc.onintent": "onIntent",
  "toc.example": "مثال",
  "intro": "بديل مباشر واعٍ بالتنبؤ لـ `next/link`. يقبل كل ما يقبله `next/link` والوسم الأصلي `<a>`؛ وأي شيء غير مدرَج أدناه يمرّ مباشرة إلى الرابط. `ref` يُمرَّر إلى الأمام.",
  "propsHeading": "الخصائص",
  "col.prop": "الخاصية",
  "col.type": "النوع",
  "col.default": "الافتراضي",
  "col.description": "الوصف",
  "prop.href": "مطلوبة. مثل next/link.",
  "prop.importance": "مدى سهولة إطلاق النية المتوقَّعة لـ onIntent.",
  "prop.cost": "عقوبة الإطلاق الخاطئ.",
  "prop.onIntent": "تُستدعى مرة واحدة عندما تتجاوز المنفعة الصفر.",
  "prop.rest": "أي خاصية لـ next/link أو للرابط (className، style، ref…).",
  "prefetchNote": "ملاحظة: `IntentLink` يضبط `prefetch={false}` على الـ `next/link` الأساسي — إذ يُعامَل التحميل المسبق كأحد مستهلكي الإشارة، ولا يُفرض أبداً.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "يُطلق مرة واحدة، أول مرة يتحقق فيها `(probability × importanceWeight) − costWeight > 0`. يُعاد ضبط القفل عندما يهبط الاحتمال دون `0.05`، فيمكنه الإطلاق مجدداً. يتلقّى ردّ النداء:",
  "exampleHeading": "مثال",
};

export { intentLink };
