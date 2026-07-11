import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "نموذج التمرير",
  "toc.diff": "الاختلافات",
  "intro": "لا يوجد مؤشر على أجهزة اللمس، لذا تأتي النية من **سرعة التمرير** بدلاً من ذلك.",
  "scrollHeading": "نموذج التمرير",
  "scroll.origin": "أصل “الفاعل” مثبّت قرب موضع القراءة: `innerWidth × 0.5`، `innerHeight × 0.6`.",
  "scroll.vertical": "يُسجَّل المحور **العمودي** فقط (وتُتجاهل المسافة الأفقية). فالمستخدم الذي يُبطئ قرب هدف يشير إلى نية.",
  "scroll.weight": "الاحتمالات غير مُطبَّعة بموازنة الروابط بعضها ببعض. وبدلاً من ذلك، تُستخدم درجة الاحتمال الخام “weight”.",
  "diffHeading": "الاختلافات عن سطح المكتب",
  "diffBody": "لا حاجة إلى أي تغييرات. يعمل `IntentLink` و`onIntent` نفساهما.",
};

export { mobileBehavior };
