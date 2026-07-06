import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "لا شيء يُطلق",
  "toc.ssr": "أخطاء SSR",
  "toc.touch": "اللمس",
  "nothingHeading": "onIntent لا يُطلق أبداً",
  "nothing.provider": "هل `IntentProvider` مُركَّب فوق هذه الروابط؟",
  "nothing.mousemove": "لا يعمل المحرّك إلا بعد أول `mousemove` — حرّك المؤشر.",
  "nothing.size": "الأهداف الصغيرة جداً أو خارج الشاشة تسجّل قرب الصفر؛ امنحها مساحات نقر حقيقية.",
  "nothing.wiring": "جرّب `importance=\"high\"` / `cost=\"low\"` للتأكد من التوصيل، ثم خفّف تدريجياً.",
  "ssrHeading": "أخطاء SSR / \"use client\"",
  "ssrBody": "كل الصادرات مكوّنات عميل. في الـ App Router، ركّب `IntentProvider` داخل حدود `\"use client\"`؛ ولا تستدعِه من مكوّن خادم مباشرة.",
  "touchHeading": "أجهزة اللمس لا تفعل شيئاً",
  "touchBody": "على اللمس، تأتي النية من **التمرير**، لا النقر — انظر [سلوك الأجهزة المحمولة](mobile-behavior).",
};

export { troubleshooting };
