import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "例",
  "intro": "リンク以外のものに予測を効かせたいときは、`IntentContext` を利用して、要素を自分で登録します。",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "各要素に安定した id を与え（`useId`）、マウント時に登録し、アンマウント時に登録解除して、`probabilities[id]` を読み取ります。",
  "exampleHeading": "例",
};

export { customComponents };
