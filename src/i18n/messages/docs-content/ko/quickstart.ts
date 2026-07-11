import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "설치",
  "toc.2-wrap": "앱 감싸기",
  "toc.3-links": "링크 교체",
  "intro": "설치부터 작동하는 예측까지 몇 분이면 됩니다. intent-link는 포인터가 어떻게 움직이는지 관찰하다가 링크가 유력한 대상이 되면 클릭하기 전에 `onIntent`를 실행합니다.",
  "installHeading": "1 · 설치",
  "peerDeps": "피어 의존성: `react ≥ 18`, `react-dom ≥ 18`, `next ≥ 13`.",
  "wrapHeading": "2 · 앱을 한 번 감싸기",
  "wrapBody": "`app/layout.jsx`에 `IntentProvider`를 마운트하세요. 예측 엔진을 실행하고 등록된 모든 대상에 대해 실시간 확률을 계산합니다. 자체 `\"use client\"` 지시문을 지니고 있으므로, 별도의 래퍼 없이 서버 레이아웃에 바로 들어갑니다.",
  "linksHeading": "3 · 링크 교체하기",
  "linksBody": "`next/link`의 그대로 대체품인 `IntentLink`를 사용하고, `onIntent`에서 무언가를 하세요. 링크의 유틸리티가 처음으로 0을 넘는 순간 한 번 실행됩니다.",
  "closing": "이것이 예측형 미리 가져오기입니다. 다음: [importance & cost](importance-and-cost)를 조정하거나, 원시 확률을 읽어 직접 동작을 만들어 보세요.",
};

export { quickstart };
