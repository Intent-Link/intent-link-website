import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Использование",
  "toc.notes": "Примечания",
  "intro": "Провайдер контекста, который запускает движок предсказания. Смонтируйте его **один раз** в `app/layout.jsx`. Всё внутри может использовать `IntentLink` или читать `IntentContext` напрямую. Он **не принимает свойств**.",
  "usageHeading": "Использование",
  "notesHeading": "Примечания",
  "notes.client": "Он поставляется с собственной директивой `\"use client\"`, поэтому работает прямо внутри серверного макета — оборачивать его не нужно.",
  "notes.provides": "Он предоставляет `probabilities`, `registerLink` и `unregisterLink` потомкам через `IntentContext`.",
};

export { intentProvider };
