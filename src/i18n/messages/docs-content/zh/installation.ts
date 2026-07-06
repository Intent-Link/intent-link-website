import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "环境要求",
  "toc.app-router": "App Router 与 Pages Router",
  "intro": "intent-link 以 ESM + CJS 形式发布，并附带 TypeScript 类型。用你喜欢的包管理器安装即可。",
  "requirementsHeading": "环境要求",
  "col.peer": "对等依赖",
  "col.version": "版本",
  "appRouterHeading": "App Router 与 Pages Router",
  "appRouterBody": "每个导出都是客户端组件（它们带有 `\"use client\"`）。在 **App Router** 中，把 `IntentProvider` 挂载到客户端边界内——可以是一个 `\"use client\"` 布局，或一个从服务器布局中渲染的小型客户端包装组件。在 **Pages Router** 中，在 `pages/_app.jsx` 里包裹你的应用。",
};

export { installation };
