import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "المتطلبات",
  "toc.app-router": "App Router مقابل Pages Router",
  "intro": "يُوزَّع intent-link بصيغتَي ESM + CJS مع أنواع TypeScript. ثبّته بمدير الحزم الذي تفضّله.",
  "requirementsHeading": "المتطلبات",
  "col.peer": "تبعية نظيرة",
  "col.version": "الإصدار",
  "appRouterHeading": "App Router مقابل Pages Router",
  "appRouterBody": "كل صادر هو مكوّن عميل (يحمل `\"use client\"`). في الـ **App Router**، ركّب `IntentProvider` داخل حدود عميل — إما تخطيط `\"use client\"` أو غلاف عميل صغير تعرضه من تخطيط خادم. وفي الـ **Pages Router**، غلّف تطبيقك في `pages/_app.jsx`.",
};

export { installation };
