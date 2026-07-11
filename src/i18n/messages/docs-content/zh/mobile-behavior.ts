import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "滚动模型",
  "toc.diff": "差异",
  "intro": "在触摸设备上没有光标，因此意图转而来自 **滚动速度**。",
  "scrollHeading": "滚动模型",
  "scroll.origin": "“智能体”原点固定在阅读位置附近：`innerWidth × 0.5`、`innerHeight × 0.6`。",
  "scroll.vertical": "只有 **垂直** 轴会被打分（水平距离被忽略）。用户在目标附近减速即是意图的信号。",
  "scroll.weight": "概率不会通过让链接相互权衡而归一化。取而代之的是直接使用原始的“weight”概率得分。",
  "diffHeading": "与桌面端的差异",
  "diffBody": "无需任何改动。同样的 `IntentLink` 和 `onIntent` 都能工作。",
};

export { mobileBehavior };
