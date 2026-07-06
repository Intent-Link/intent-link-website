import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Требования",
  "toc.app-router": "App и Pages Router",
  "intro": "intent-link поставляется как ESM + CJS с типами TypeScript. Установите его вашим любимым менеджером пакетов.",
  "requirementsHeading": "Требования",
  "col.peer": "Peer-зависимость",
  "col.version": "Версия",
  "appRouterHeading": "App Router и Pages Router",
  "appRouterBody": "Каждый экспорт — это клиентский компонент (они содержат `\"use client\"`). В **App Router** монтируйте `IntentProvider` внутри клиентской границы — либо в `\"use client\"`-макете, либо в небольшой клиентской обёртке, которую вы рендерите из серверного макета. В **Pages Router** оберните приложение в `pages/_app.jsx`.",
};

export { installation };
