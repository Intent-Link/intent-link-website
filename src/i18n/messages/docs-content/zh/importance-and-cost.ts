import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "如何取值",
  "intro": "概率只是证据。onIntent 是否真正触发，由两个作用于每个链接的旋钮决定——它们把证据转化为决策。",
  "col.value": "取值",
  "col.weight": "权重",
  "col.effect": "效果",
  "importanceHeading": "importance — 采取行动的意愿有多强",
  "importanceBody": "单凭预测出的意图能占多大分量。对于你乐于提前采取行动的目标（例如醒目的 CTA），把它调高。",
  "importance.high": "更早触发，凭较弱的证据",
  "importance.medium": "均衡 **（默认）**",
  "importance.low": "等到几乎确定为止",
  "costHeading": "cost — 猜错的代价",
  "costBody": "作为惩罚从效用中减去。当触发 `onIntent` 会带来昂贵或干扰性的后果时，把它调高。",
  "cost.high": "非常谨慎——需要强有力的证据",
  "cost.medium": "均衡",
  "cost.low": "激进——猜错的代价很低 **（默认）**",
  "pickingHeading": "如何取值",
  "picking.cheap": "**廉价的行动**（一次 `router.prefetch`）：高 importance、低 cost——尽早且频繁地触发。",
  "picking.expensive": "**昂贵的行动**（一次计费 API 调用、一个 websocket）：更低的 importance、更高的 cost——等到几乎确定为止。",
  "pickingNote": "`onIntent` 只触发一次；当目标的概率跌破 `0.05` 时，内部的锁会重置，因此在再次靠近时它可以重新触发。",
};

export { importanceAndCost };
