import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "الاستخدام",
  "toc.notes": "ملاحظات",
  "intro": "مزوّد سياق يُشغّل محرّك التنبؤ. ركّبه **مرة واحدة**، قرب جذر تطبيقك. كل ما بداخله يمكنه استخدام `IntentLink` أو قراءة `IntentContext` مباشرة. وهو لا يأخذ **أي خصائص**.",
  "usageHeading": "الاستخدام",
  "notesHeading": "ملاحظات",
  "notes.client": "إنه **مكوّن عميل** (`\"use client\"`) — في الـ App Router، ركّبه داخل حدود عميل.",
  "notes.loop": "داخلياً يُشغّل حلقة `requestAnimationFrame` واحدة ويربط مستمعاً لـ `mousemove` وآخر لـ `scroll`، مستخدماً ما يناسب الجهاز — وتركيبه أكثر من مرة إهدار.",
  "notes.provides": "يوفّر `probabilities`، و`registerLink`، و`unregisterLink` للعناصر المنحدرة عبر `IntentContext`.",
};

export { intentProvider };
