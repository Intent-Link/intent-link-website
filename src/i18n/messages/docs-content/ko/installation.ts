import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "요구 사항",
  "toc.app-router": "App vs Pages Router",
  "intro": "intent-link는 TypeScript 타입과 함께 ESM + CJS로 제공됩니다. 원하는 패키지 매니저로 설치하세요.",
  "requirementsHeading": "요구 사항",
  "col.peer": "피어 의존성",
  "col.version": "버전",
  "appRouterHeading": "App Router 대 Pages Router",
  "appRouterBody": "모든 export는 클라이언트 컴포넌트입니다(`\"use client\"`를 지니고 있습니다). **App Router**에서는 `IntentProvider`를 클라이언트 경계 안에 마운트하세요 — `\"use client\"` 레이아웃이나, 서버 레이아웃에서 렌더링하는 작은 클라이언트 래퍼 중 하나입니다. **Pages Router**에서는 앱을 `pages/_app.jsx`에서 감싸세요.",
};

export { installation };
