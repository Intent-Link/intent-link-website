import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "安装",
  "toc.2-wrap": "包裹应用",
  "toc.3-links": "替换链接",
  "intro": "几分钟内即可从安装走到一个可用的预测。intent-link 观察指针移动，用卡尔曼滤波器估计它的去向，并在某个链接成为可能目标时触发 onIntent——就在点击之前。",
  "installHeading": "1 · 安装",
  "peerDeps": "对等依赖：`react ≥ 18`、`react-dom ≥ 18`、`next ≥ 13`。",
  "wrapHeading": "2 · 将应用包裹一次",
  "wrapBody": "在根附近挂载 `IntentProvider`。它运行预测引擎，并为每个已注册的目标计算实时概率。它是一个客户端组件，因此在 App Router 中，它必须位于 `\"use client\"` 边界之内。",
  "linksHeading": "3 · 替换你的链接",
  "linksBody": "使用 `IntentLink`——它是 `next/link` 的直接替代——并在 `onIntent` 中做点什么。当链接的效用首次越过零时，它触发一次。",
  "closing": "这就是预测式预取。接下来：调节 [importance 与 cost](importance-and-cost)，或读取原始概率来构建你自己的行为。",
};

export { quickstart };
