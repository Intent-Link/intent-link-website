import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "نموذج التمرير",
  "toc.diff": "الاختلافات",
  "intro": "على أجهزة اللمس (`pointer: coarse`) لا يوجد مؤشر، لذا يرجع المحرّك إلى **سرعة التمرير**، مُمرَّرة عبر مرشّح كالمان أحادي البعد.",
  "scrollHeading": "نموذج التمرير",
  "scroll.origin": "أصل “الفاعل” مثبّت قرب موضع القراءة — `innerWidth × 0.5`، `innerHeight × 0.6`.",
  "scroll.vertical": "يُسجَّل المحور **العمودي** فقط (وتُتجاهل المسافة الأفقية) — فالمستخدم الذي يُبطئ قرب هدف يشير إلى نية.",
  "scroll.weight": "الاحتمالات **غير** مُطبَّعة بـ softmax على اللمس؛ إذ يُستخدم `weight` كل هدف مباشرة.",
  "diffHeading": "الاختلافات عن سطح المكتب",
  "diffBody": "لا حاجة إلى تغييرات برمجية — يعمل `IntentLink` و`onIntent` نفساهما. اضبط التوقعات فقط: نية التمرير أخشن من مسار المؤشر، لذا فكّر في رفع `importance` قليلاً للأهداف الرئيسية على الأجهزة المحمولة.",
};

export { mobileBehavior };
