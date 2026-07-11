import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Требования",
  "toc.app-router": "Монтирование",
  "intro": "intent-link поставляется как ESM + CJS с типами TypeScript. Установите его вашим любимым менеджером пакетов.",
  "requirementsHeading": "Требования",
  "col.peer": "Peer-зависимость",
  "col.version": "Версия",
  "appRouterHeading": "Монтирование",
  "appRouterBody": "Каждый экспорт поставляется с собственной директивой `\"use client\"`, поэтому вам никогда не нужно добавлять её самим. Смонтируйте `IntentProvider` один раз в `app/layout.jsx` — он работает прямо внутри серверного макета. Полный сниппет см. в [Быстром старте](quickstart).",
};

export { installation };
