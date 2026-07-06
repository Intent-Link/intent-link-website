import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Использование",
  "toc.notes": "Примечания",
  "intro": "Провайдер контекста, запускающий движок предсказания. Монтируйте его **один раз**, ближе к корню приложения. Всё внутри может использовать `IntentLink` или читать `IntentContext` напрямую. Он не принимает **никаких свойств**.",
  "usageHeading": "Использование",
  "notesHeading": "Примечания",
  "notes.client": "Это **клиентский компонент** (`\"use client\"`) — в App Router монтируйте его внутри клиентской границы.",
  "notes.loop": "Внутри он запускает единственный цикл `requestAnimationFrame` и подключает оба слушателя — `mousemove` и `scroll`, используя тот, что подходит устройству — монтировать его больше одного раза расточительно.",
  "notes.provides": "Он предоставляет `probabilities`, `registerLink` и `unregisterLink` потомкам через `IntentContext`.",
};

export { intentProvider };
