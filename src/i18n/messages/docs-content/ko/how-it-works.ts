import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "움직임 읽기",
  "toc.scoring": "대상은 중력을 가진다",
  "toc.probability": "확률",
  "intro": "intent-link는 포인터 움직임을 물리 시스템으로 모델링합니다. `IntentProvider`는 매 프레임마다 당신이 어떻게 움직이는지 읽고 등록된 모든 대상에 점수를 매기는 루프를 실행합니다. 그 결과가 대상별 실시간 확률입니다.",
  "estimateHeading": "움직임 읽기",
  "estimateBody": "원시 포인터 입력에는 잡음이 섞여 있으므로, intent-link는 이를 매끄럽게 다듬어 당신의 움직임을 안정적으로 읽어냅니다 — 얼마나 빠르게 움직이는지와 지금 그 읽기를 얼마나 신뢰할 수 있는지 둘 다를요. 빠르고 확신 있는 움직임은 분명하게 읽히고, 느리고 헤매는 움직임은 모호하게 남습니다.",
  "scoringHeading": "대상은 중력을 가진다",
  "scoringBody": "모든 대상이 저마다의 중력을 가진다고 생각해 보세요. 당신의 움직임이 그 대상 쪽으로 더 확고하게 향할수록, 그리고 대상이 당신이 향하는 곳에 더 가까이 있을수록 더 강하게 끌어당깁니다. 매 프레임, intent-link는 그 끌림을 대상별 하나의 `weight`로 바꿉니다.",
  "scoringNote": "확신 있는 움직임과 정렬된 대상은 높은 점수를 받습니다. 옆으로 벗어나 있거나, 당신의 움직임이 실제로 향하고 있지 않은 대상은 0에 가까워집니다.",
  "probabilityHeading": "확률과 널(null) 옵션",
  "probabilityBody": "가중치는 각 대상을 이웃과 견주고, 분모에 상수 `1`을 더해 확률로 바뀝니다:",
  "nullOption": "앞에 오는 그 `1`은 **\"어디로도 향하지 않음\" 옵션**입니다: 링크들에 걸친 확률의 합은 결코 1이 되지 않으므로, 엔진은 확신하지 못한 채로 남아 아예 실행하지 않을 수 있습니다. 모든 대상의 실시간 [PhysicsState](intent-context#physicsstate)는 `IntentContext`를 통해 노출됩니다.",
  "touch": "터치 기기에는 커서가 없으므로 엔진은 대신 [스크롤 속도](mobile-behavior)를 추적하고 수직 근접도로 대상에 점수를 매깁니다.",
};

export { howItWorks };
