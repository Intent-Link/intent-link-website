import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "المتطلبات",
  "toc.app-router": "التركيب",
  "intro": "يُوزَّع intent-link بصيغتَي ESM + CJS مع أنواع TypeScript. ثبّته بمدير الحزم الذي تفضّله.",
  "requirementsHeading": "المتطلبات",
  "col.peer": "تبعية نظيرة",
  "col.version": "الإصدار",
  "appRouterHeading": "التركيب",
  "appRouterBody": "كل صادر يحمل توجيه `\"use client\"` الخاص به، فلا تضيفه بنفسك أبداً. ركّب `IntentProvider` مرة واحدة في `app/layout.jsx` — إذ يعمل مباشرة داخل تخطيط الخادم. انظر [البدء السريع](quickstart) للمقتطف الكامل.",
};

export { installation };
