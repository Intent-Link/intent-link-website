import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "无任何触发",
  "toc.ssr": "SSR 错误",
  "toc.touch": "触摸",
  "nothingHeading": "onIntent 从不触发",
  "nothing.provider": "这些链接的上方是否挂载了 `IntentProvider`？",
  "nothing.mousemove": "引擎只在第一次 `mousemove` 之后才运行——移动一下光标。",
  "nothing.size": "非常小或位于屏幕外的目标得分接近于零；请给它们真实的可点击区域。",
  "nothing.wiring": "尝试 `importance=\"high\"` / `cost=\"low\"` 来确认接线无误，然后再调回来。",
  "ssrHeading": "SSR /\"use client\"报错",
  "ssrBody": "所有导出都是客户端组件。在 App Router 中，把 `IntentProvider` 挂载到 `\"use client\"` 边界之内；不要直接从服务器组件中调用它。",
  "touchHeading": "触摸设备毫无反应",
  "touchBody": "在触摸设备上，意图来自 **滚动**，而非点按——参见 [移动端行为](mobile-behavior)。",
};

export { troubleshooting };
