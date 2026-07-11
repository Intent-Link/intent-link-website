import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "用法",
  "toc.notes": "说明",
  "intro": "运行预测引擎的上下文提供者。在你的 `app/layout.jsx` 中把它挂载 **一次**。它内部的一切都可以使用 `IntentLink`，或直接读取 `IntentContext`。它 **不接受任何 props**。",
  "usageHeading": "用法",
  "notesHeading": "说明",
  "notes.client": "它自带 `\"use client\"` 指令，因此可以直接在服务端布局内工作——你无需再包裹它。",
  "notes.provides": "它通过 `IntentContext` 向后代提供 `probabilities`、`registerLink` 和 `unregisterLink`。",
};

export { intentProvider };
