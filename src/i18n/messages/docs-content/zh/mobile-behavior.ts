import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "滚动模型",
  "toc.diff": "差异",
  "intro": "在触摸设备上（`pointer: coarse`）没有光标，因此引擎退回到使用 **滚动速度**，并将其送入一维卡尔曼滤波器。",
  "scrollHeading": "滚动模型",
  "scroll.origin": "“智能体”原点固定在阅读位置附近—— `innerWidth × 0.5`、`innerHeight × 0.6`。",
  "scroll.vertical": "只有 **垂直** 轴会被打分（水平距离被忽略）——用户在目标附近减速即是意图的信号。",
  "scroll.weight": "在触摸设备上，概率 **不会** 经过 softmax 归一化；每个目标的 `weight` 被直接使用。",
  "diffHeading": "与桌面端的差异",
  "diffBody": "无需改动任何代码——同样的 `IntentLink` 和 `onIntent` 都能工作。只需调整预期：滚动意图比光标轨迹更粗略，因此在移动端可以考虑为关键目标略微调高 `importance`。",
};

export { mobileBehavior };
