import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "사용법",
  "toc.notes": "참고",
  "intro": "예측 엔진을 실행하는 컨텍스트 프로바이더입니다. 앱의 루트 근처에 **한 번** 마운트하세요. 그 안의 모든 것은 `IntentLink`를 사용하거나 `IntentContext`를 직접 읽을 수 있습니다. **prop을 받지 않습니다**.",
  "usageHeading": "사용법",
  "notesHeading": "참고",
  "notes.client": "이것은 **클라이언트 컴포넌트**입니다(`\"use client\"`) — App Router에서는 클라이언트 경계 안에 마운트하세요.",
  "notes.loop": "내부적으로 단일 `requestAnimationFrame` 루프를 실행하고 `mousemove`와 `scroll` 리스너를 모두 붙여 기기에 맞는 쪽을 사용합니다 — 한 번보다 많이 마운트하는 것은 낭비입니다.",
  "notes.provides": "이것은 `probabilities`, `registerLink`, 그리고 `unregisterLink`를 `IntentContext`를 통해 하위 요소에 제공합니다.",
};

export { intentProvider };
