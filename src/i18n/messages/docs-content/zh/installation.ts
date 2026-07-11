import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "环境要求",
  "toc.app-router": "挂载",
  "intro": "intent-link 以 ESM + CJS 形式发布，并附带 TypeScript 类型。用你喜欢的包管理器安装即可。",
  "requirementsHeading": "环境要求",
  "col.peer": "对等依赖",
  "col.version": "版本",
  "appRouterHeading": "挂载",
  "appRouterBody": "每个导出都自带 `\"use client\"` 指令，因此你无需自行添加。在你的 `app/layout.jsx` 中挂载一次 `IntentProvider`——它可以直接在服务端布局内工作。完整代码片段见 [快速上手](quickstart)。",
};

export { installation };
