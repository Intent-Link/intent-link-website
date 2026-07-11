import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "저수준 표면입니다. 이것을 소비하여 원시 확률 스트림을 읽고 직접 요소를 등록하세요 — `<button>`, 카드, 또는 링크가 아닌 어떤 요소에서든 대상 예측을 위해.",
  "col.field": "필드",
  "col.type": "타입",
  "col.meaning": "의미",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "한 대상의 실시간 상태로, `probabilities` 안에서 id로 키가 매겨집니다.",
  "field.probability": "이웃 링크들에 대해 정규화된 확률.",
  "field.weight": "이것이 사용자의 대상이라는, 정규화되지 않은 원시 확률 점수.",
  "field.kineticAgent": "사용자의 속도에서 나온 운동 에너지.",
  "field.kineticTarget": "대상이 움직이고 있다면, 그 대상의 속도에서 나온 운동 에너지.",
  "field.potential": "사용자와 대상 사이의 거리에서 나온 위치 에너지.",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "전체 예제는 [커스텀 컴포넌트](custom-components)를 참고하세요.",
};

export { intentContext };
