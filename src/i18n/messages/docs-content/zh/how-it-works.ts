import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "读取你的动作",
  "toc.scoring": "你的目标有引力",
  "toc.probability": "概率",
  "intro": "intent-link 将指针移动建模为一个物理系统。`IntentProvider` 运行一个循环，每一帧读取你如何移动，并为每个已注册的目标打分。结果是每个目标的实时概率。",
  "estimateHeading": "读取你的动作",
  "estimateBody": "原始指针输入是抖动的，因此 intent-link 会将其平滑为对你动作的稳定读取——既包括你移动的速度，也包括此刻它对这一读取的置信程度。一个快速、坚定的动作读起来很清晰；一个缓慢、游移的动作则保持模糊。",
  "scoringHeading": "你的目标有引力",
  "scoringBody": "把每个目标想象成拥有自己的引力。你的动作越是朝它坚定靠近、它越是接近你前进的方向，这个目标的拉力就越强。每一帧，intent-link 都会把这份拉力转化为每个目标的单个 `weight`。",
  "scoringNote": "一个与坚定动作对齐的目标得分很高。一个偏在侧边的目标——或是你的动作并未真正朝它靠近的目标——则趋向于零。",
  "probabilityHeading": "概率与空选项",
  "probabilityBody": "权重通过将每个目标与其相邻目标相互权衡，并在分母中加上一个常数 `1`，从而转化为概率：",
  "nullOption": "前导的那个 `1` 是一个 **“哪儿都不去”选项**：概率在你的各个链接之间永远不会加总为 1，因此引擎可以保持不确定，干脆不触发。每个目标的实时 [PhysicsState](intent-context#physicsstate) 都通过 `IntentContext` 暴露出来。",
  "touch": "在触摸设备上没有光标，因此引擎改为跟踪[滚动速度](mobile-behavior)，并按垂直邻近度为目标打分。",
};

export { howItWorks };
