import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.example": "示例",
  "intro": "一个具备预测能力、可直接替代 `next/link` 的组件。它接受 `next/link` 和原生 `<a>` 接受的一切；下方未列出的任何属性都会直接透传给锚点元素。`ref` 会被转发。",
  "propsHeading": "Props",
  "col.prop": "属性",
  "col.type": "类型",
  "col.default": "默认值",
  "col.description": "说明",
  "prop.href": "必填。与 next/link 相同。",
  "prop.importance": "预测出的意图触发 onIntent 的意愿有多强。",
  "prop.cost": "误触发的惩罚。",
  "prop.onIntent": "当效用越过零时调用一次。",
  "prop.rest": "任意 next/link 或锚点属性（className、style、ref…）。",
  "prefetchNote": "注意：`IntentLink` 会在底层的 `next/link` 上设置 `prefetch={false}`——预取被视为该信号的一个消费者，绝不强制。",
  "onIntentHeading": "onIntent",
  "onIntentBody": "在目标的效用首次越过零时触发一次。回调接收：",
  "exampleHeading": "示例",
};

export { intentLink };
