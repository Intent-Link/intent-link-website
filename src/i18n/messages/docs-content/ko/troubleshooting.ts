import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "반응 없음",
  "toc.ssr": "SSR 오류",
  "nothingHeading": "onIntent가 전혀 실행되지 않음",
  "nothing.provider": "`IntentProvider`가 이 링크들 위에 마운트되어 있나요?",
  "nothing.mousemove": "엔진은 첫 번째 `mousemove` 이후에만 실행됩니다 — 커서를 움직이세요.",
  "nothing.size": "화면 밖 대상은 점수를 매길 수 없습니다 — 대상이 실제로 렌더링되어 뷰포트 안에 있는지 확인하세요.",
  "nothing.wiring": "연결을 확인하려면 `importance=\"high\"` / `cost=\"low\"`로 시도한 다음 다시 낮추세요.",
  "ssrHeading": "SSR / \"use client\" 오류",
  "ssrBody": "모든 export는 자체 `\"use client\"` 지시문을 지니고 있으며 서버 레이아웃 안에서 바로 작동하므로, `\"use client\"`를 직접 추가할 필요가 없습니다.",
};

export { troubleshooting };
