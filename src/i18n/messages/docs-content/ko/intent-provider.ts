import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "사용법",
  "toc.notes": "참고",
  "intro": "예측 엔진을 실행하는 컨텍스트 프로바이더입니다. `app/layout.jsx`에 **한 번** 마운트하세요. 그 안의 모든 것은 `IntentLink`를 사용하거나 `IntentContext`를 직접 읽을 수 있습니다. **prop을 받지 않습니다**.",
  "usageHeading": "사용법",
  "notesHeading": "참고",
  "notes.client": "이것은 자체 `\"use client\"` 지시문을 지니고 있으므로, 서버 레이아웃 안에서 바로 작동합니다 — 따로 감쌀 필요가 없습니다.",
  "notes.provides": "이것은 `probabilities`, `registerLink`, 그리고 `unregisterLink`를 `IntentContext`를 통해 하위 요소에 제공합니다.",
};

export { intentProvider };
