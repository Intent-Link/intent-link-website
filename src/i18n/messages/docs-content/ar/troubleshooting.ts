import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "لا شيء يُطلق",
  "toc.ssr": "أخطاء SSR",
  "nothingHeading": "onIntent لا يُطلق أبداً",
  "nothing.provider": "هل `IntentProvider` مُركَّب فوق هذه الروابط؟",
  "nothing.mousemove": "لا يعمل المحرّك إلا بعد أول `mousemove`، فحرّك المؤشر.",
  "nothing.size": "لا يمكن تسجيل الأهداف خارج الشاشة — تأكّد من أن الهدف مُعروض فعلاً وضمن نافذة العرض.",
  "nothing.wiring": "جرّب `importance=\"high\"` / `cost=\"low\"` للتأكد من التوصيل، ثم خفّف تدريجياً.",
  "ssrHeading": "أخطاء SSR / \"use client\"",
  "ssrBody": "كل صادر يحمل توجيه `\"use client\"` الخاص به ويعمل مباشرة داخل تخطيط الخادم، فلا تضيف `\"use client\"` بنفسك.",
};

export { troubleshooting };
