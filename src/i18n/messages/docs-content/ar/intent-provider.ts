import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "الاستخدام",
  "toc.notes": "ملاحظات",
  "intro": "مزوّد سياق يُشغّل محرّك التنبؤ. ركّبه **مرة واحدة** في `app/layout.jsx`. كل ما بداخله يمكنه استخدام `IntentLink` أو قراءة `IntentContext` مباشرة. وهو لا يأخذ **أي خصائص**.",
  "usageHeading": "الاستخدام",
  "notesHeading": "ملاحظات",
  "notes.client": "يحمل توجيه `\"use client\"` الخاص به، فيعمل مباشرة داخل تخطيط الخادم — ولا تحتاج إلى تغليفه.",
  "notes.provides": "يوفّر `probabilities`، و`registerLink`، و`unregisterLink` للعناصر المنحدرة عبر `IntentContext`.",
};

export { intentProvider };
