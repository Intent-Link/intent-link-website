import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "추정",
  "toc.scoring": "대상 점수 매기기",
  "toc.probability": "확률",
  "intro": "intent-link는 포인터 움직임을 물리 시스템으로 모델링합니다. `IntentProvider`는 `requestAnimationFrame` 루프를 실행하여 매 프레임마다 당신의 움직임을 추정하고 등록된 모든 대상에 점수를 매깁니다 — 그 결과가 대상별 실시간 확률입니다.",
  "estimateHeading": "추정",
  "estimateBody": "원시 포인터 샘플에는 잡음이 섞여 있습니다. **칼만 필터**(커서에는 2D, 터치의 스크롤에는 1D)가 이를 매끄러운 **속도**로, 그리고 결정적으로 **불확실성**(σ) — 지금 그 추정을 얼마나 신뢰할지로 바꿉니다. 빠르고 곧은 움직임은 금세 확신 있는 추정을 만들고, 느리고 헤매는 움직임은 불확실하게 남습니다.",
  "scoringHeading": "대상 점수 매기기",
  "scoringBody": "각 대상의 `weight`는 세 가지 지수 항을 결합합니다 — 두 개는 운동학적(움직임에서), 하나는 위치적(기하에서):",
  "scoringNote": "크고(큰 `w`), 가깝고(작은 `d`), 확신 있는 움직임과 정렬된 대상은 높은 점수를 받습니다. 작거나, 멀거나, 궤적에서 벗어난 대상은 0에 가까운 점수를 받습니다.",
  "probabilityHeading": "확률과 널(null) 옵션",
  "probabilityBody": "가중치는 상수 `1`을 포함한 소프트맥스 방식의 분모로 확률로 정규화됩니다:",
  "nullOption": "앞에 오는 그 `1`은 **\"어디로도 향하지 않음\" 옵션**입니다 — 링크들에 걸친 확률의 합은 결코 1이 되지 않으므로, 엔진은 확신하지 못한 채로 남아 아예 실행하지 않을 수 있습니다. 모든 대상의 실시간 [PhysicsState](intent-context#physicsstate)(확률, 가중치, 그리고 세 가지 항)는 `IntentContext`를 통해 노출됩니다.",
  "touch": "터치 기기에는 커서가 없으므로 엔진은 대신 [스크롤 속도](mobile-behavior)를 추적하고 수직 근접도로 대상에 점수를 매깁니다.",
};

export { howItWorks };
