import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "安装",
  "toc.2-wrap": "包裹应用",
  "toc.3-links": "替换链接",
  "intro": "几分钟内即可从安装走到一个可用的预测。intent-link 观察指针如何移动，并在某个链接成为可能目标时——就在点击之前——触发 `onIntent`。",
  "installHeading": "1 · 安装",
  "peerDeps": "对等依赖：`react ≥ 18`、`react-dom ≥ 18`、`next ≥ 13`。",
  "wrapHeading": "2 · 将应用包裹一次",
  "wrapBody": "在你的 `app/layout.jsx` 中挂载 `IntentProvider`。它运行预测引擎，并为每个已注册的目标计算实时概率。它自带 `\"use client\"` 指令，因此可以直接放入服务端布局，无需额外的包裹层。",
  "linksHeading": "3 · 替换你的链接",
  "linksBody": "使用 `IntentLink`——它是 `next/link` 的直接替代——并在 `onIntent` 中做点什么。当链接的效用首次越过零时，它触发一次。",
  "closing": "这就是预测式预取。接下来：调节 [importance 与 cost](importance-and-cost)，或读取原始概率来构建你自己的行为。",
};

export { quickstart };
