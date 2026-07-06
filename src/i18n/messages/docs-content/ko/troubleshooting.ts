import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "반응 없음",
  "toc.ssr": "SSR 오류",
  "toc.touch": "터치",
  "nothingHeading": "onIntent가 전혀 실행되지 않음",
  "nothing.provider": "`IntentProvider`가 이 링크들 위에 마운트되어 있나요?",
  "nothing.mousemove": "엔진은 첫 번째 `mousemove` 이후에만 실행됩니다 — 커서를 움직이세요.",
  "nothing.size": "매우 작거나 화면 밖에 있는 대상은 0에 가까운 점수를 받습니다. 실제 히트 영역을 부여하세요.",
  "nothing.wiring": "연결을 확인하려면 `importance=\"high\"` / `cost=\"low\"`로 시도한 다음 다시 낮추세요.",
  "ssrHeading": "SSR / \"use client\" 오류",
  "ssrBody": "모든 export는 클라이언트 컴포넌트입니다. App Router에서는 `IntentProvider`를 `\"use client\"` 경계 안에 마운트하세요. 서버 컴포넌트에서 직접 호출하지 마세요.",
  "touchHeading": "터치 기기에서 아무 일도 일어나지 않음",
  "touchBody": "터치에서는 의도가 탭이 아니라 **스크롤**에서 나옵니다 — [모바일 동작](mobile-behavior)을 참고하세요.",
};

export { troubleshooting };
