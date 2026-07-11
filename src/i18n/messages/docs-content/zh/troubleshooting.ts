import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "无任何触发",
  "toc.ssr": "SSR 错误",
  "nothingHeading": "onIntent 从不触发",
  "nothing.provider": "这些链接的上方是否挂载了 `IntentProvider`？",
  "nothing.mousemove": "引擎只在第一次 `mousemove` 之后才运行——移动一下光标。",
  "nothing.size": "屏幕外的目标无法被打分——请确保目标确实被渲染且位于视口之内。",
  "nothing.wiring": "尝试 `importance=\"high\"` / `cost=\"low\"` 来确认接线无误，然后再调回来。",
  "ssrHeading": "SSR / \"use client\" 报错",
  "ssrBody": "每个导出都自带 `\"use client\"` 指令，并可直接在服务端布局内工作，因此你无需自行添加 `\"use client\"`。",
};

export { troubleshooting };
