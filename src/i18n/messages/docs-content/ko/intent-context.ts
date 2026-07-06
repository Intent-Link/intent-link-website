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
  "field.probability": "이것이 대상일 정규화된 가능도.",
  "field.weight": "정규화되지 않은 점수(세 항의 곱).",
  "field.kineticAgent": "불확실성 대비 에이전트 속도 항.",
  "field.kineticTarget": "대상 상대 속도 항.",
  "field.potential": "기하 항(거리 및 크기).",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "전체 예제는 [커스텀 컴포넌트](custom-components)를 참고하세요.",
};

export { intentContext };
