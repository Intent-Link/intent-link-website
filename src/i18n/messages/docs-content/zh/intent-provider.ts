import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "用法",
  "toc.notes": "说明",
  "intro": "运行预测引擎的上下文提供者。在应用根附近把它挂载 **一次**。它内部的一切都可以使用 `IntentLink`，或直接读取 `IntentContext`。它 **不接受任何 props**。",
  "usageHeading": "用法",
  "notesHeading": "说明",
  "notes.client": "它是一个 **客户端组件**（`\"use client\"`）——在 App Router 中，把它挂载到客户端边界之内。",
  "notes.loop": "它内部运行单个 `requestAnimationFrame` 循环，并同时挂载一个 `mousemove` 和一个 `scroll` 监听器，按设备情况选用其一——多次挂载只会造成浪费，挂载一次即可。",
  "notes.provides": "它通过 `IntentContext` 向后代提供 `probabilities`、`registerLink` 和 `unregisterLink`。",
};

export { intentProvider };
