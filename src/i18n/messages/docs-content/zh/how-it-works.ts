import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "估计",
  "toc.scoring": "为目标打分",
  "toc.probability": "概率",
  "intro": "intent-link 将指针移动建模为一个物理系统。`IntentProvider` 运行一个 `requestAnimationFrame` 循环，每一帧都估计你的移动并为每个已注册目标打分——结果是每个目标的实时概率。",
  "estimateHeading": "估计",
  "estimateBody": "原始指针采样是带噪声的。一个 **卡尔曼滤波器**（光标用二维，触摸滚动用一维）把它们转换成平滑的 **速度**，以及关键的一项—— **不确定度**（σ）——即此刻该在多大程度上信任该估计。快速、笔直的移动能很快得到一个高置信度的估计；缓慢、游移的移动则持续保持不确定。",
  "scoringHeading": "为目标打分",
  "scoringBody": "每个目标的 `weight` 组合了三个指数项——两个动能项（来自移动）和一个势能项（来自几何关系）：",
  "scoringNote": "一个大（`w` 大）、近（`d` 小），且与高置信度移动方向对齐的目标，得分很高。一个微小、遥远或偏离轨迹的目标，得分接近于零。",
  "probabilityHeading": "概率与空选项",
  "probabilityBody": "各项权重通过一个 softmax 式的分母归一化为概率，该分母包含一个常数 `1`：",
  "nullOption": "开头那个 `1` 是一个 **“哪儿都不去”的选项**——各链接的概率之和永远不会等于 1，因此引擎可以保持不确定，干脆不触发。每个目标的实时 [PhysicsState](intent-context#physicsstate)（概率、权重和三个项）都通过 `IntentContext` 暴露出来。",
  "touch": "在触摸设备上没有光标，因此引擎转而跟踪 [滚动速度](mobile-behavior)，并按垂直邻近度为目标打分。",
};

export { howItWorks };
