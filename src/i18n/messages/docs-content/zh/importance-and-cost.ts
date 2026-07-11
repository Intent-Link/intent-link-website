import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "如何取值",
  "intro": "概率只是证据。`onIntent` 是否真正触发，由两个作用于每个链接的旋钮决定——`importance` 与 `cost`——它们把证据转化为决策。`onIntent` 在目标的效用首次越过零时触发。",
  "exampleLead": "在任意 `IntentLink` 上同时设置这两个 prop：",
  "col.value": "取值",
  "col.effect": "效果",
  "importanceHeading": "importance：采取行动的意愿有多强",
  "importanceBody": "单凭预测出的意图能占多大分量。对于你乐于提前采取行动的目标（例如醒目的 CTA），把它调高。",
  "importance.high": "更早触发，凭较弱的证据",
  "importance.medium": "均衡 **（默认）**",
  "importance.low": "等到几乎确定为止",
  "costHeading": "cost：猜错的代价",
  "costBody": "当结果表明你并未朝那里去，却触发了 `onIntent` 时所付出的惩罚。当猜错的代价昂贵或具有干扰性时，把它调高。",
  "cost.high": "非常谨慎，需要强有力的证据",
  "cost.medium": "均衡",
  "cost.low": "激进，猜错的代价很低 **（默认）**",
  "pickingHeading": "如何取值",
  "picking.cheap": "**廉价的行动**（一次 `router.prefetch`）：高 importance、低 cost。尽早且频繁地触发。",
  "picking.expensive": "**昂贵的行动**（一次计费 API 调用、一个 websocket）：更低的 importance、更高的 cost。等到几乎确定为止。",
  "pickingNote": "`onIntent` 每次靠近触发一次；在目标的概率回落之后它会重新武装，因此再次靠近可以让它再次触发。",
};

export { importanceAndCost };
