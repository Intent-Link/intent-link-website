import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "라우트 프리페치",
  "toc.data": "데이터 & 캐시",
  "intro": "대표적인 활용 사례입니다. `IntentLink`는 next/link 자체의 미리 가져오기를 비활성화하므로, 언제 경로를 준비할지는 `onIntent`에서 당신이 결정합니다.",
  "routeHeading": "경로 미리 가져오기",
  "routeBody": "`router.prefetch`는 저렴하므로, `importance=\"high\"` / `cost=\"low\"`를 사용해 일찍 자주 실행하세요.",
  "dataHeading": "데이터 및 캐시 준비",
  "dataBody": "`onIntent`는 그저 콜백일 뿐입니다 — 무엇이든 준비하세요: 데이터 페치, 이미지, 캐시 항목, 쿼리 클라이언트.",
};

export { predictivePrefetch };
