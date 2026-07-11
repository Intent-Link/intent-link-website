import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "요구 사항",
  "toc.app-router": "마운트하기",
  "intro": "intent-link는 TypeScript 타입과 함께 ESM + CJS로 제공됩니다. 원하는 패키지 매니저로 설치하세요.",
  "requirementsHeading": "요구 사항",
  "col.peer": "피어 의존성",
  "col.version": "버전",
  "appRouterHeading": "마운트하기",
  "appRouterBody": "모든 export는 자체 `\"use client\"` 지시문을 지니고 있으므로, 직접 추가할 필요가 전혀 없습니다. `IntentProvider`를 `app/layout.jsx`에 한 번 마운트하세요 — 서버 레이아웃 안에서 바로 작동합니다. 전체 코드는 [퀵스타트](quickstart)를 참고하세요.",
};

export { installation };
