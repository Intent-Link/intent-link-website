import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "示例",
  "intro": "当你想对某个非链接元素进行预测时，消费 `IntentContext` 并自行注册该元素。",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "为每个元素赋予一个稳定的 id（`useId`），在挂载时注册它，卸载时取消注册，然后读取 `probabilities[id]`。",
  "exampleHeading": "示例",
};

export { customComponents };
