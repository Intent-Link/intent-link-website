import type { DocText } from "@/content/docs/types";

const applications: DocText = {
  "toc.route": "라우트 프리페치",
  "toc.data": "데이터 프리페치",
  "toc.asset": "에셋 미리 로드",
  "intro": "`onIntent`은 링크가 유력한 목적지가 되는 순간 실행되는 콜백일 뿐입니다. 그 하나의 신호는 다양하게 활용할 수 있는데, 여기 흔한 세 가지를 소개합니다.",
  "routeHeading": "라우트 프리페치",
  "routeBody": "대표적인 활용 사례입니다. `IntentLink`는 `next/link` 자체의 프리페치를 비활성화하므로, 언제 라우트를 준비할지는 당신이 결정합니다. `router.prefetch`는 저렴하므로 `importance=\"high\"` / `cost=\"low\"`를 사용해 일찍 자주 실행하세요.",
  "dataHeading": "데이터 프리페치",
  "dataBody": "준비할 수 있는 것이 라우트만은 아닙니다. 다음 페이지에 필요한 데이터, 즉 쿼리, API 호출, 캐시 항목을 미리 시작해 클릭 전에 준비되도록 하세요.",
  "assetHeading": "에셋 미리 로드",
  "assetBody": "무거운 미디어가 특히 잘 맞습니다. 의도가 감지되는 순간 목적지의 히어로 이미지, 동영상, 폰트를 로드하기 시작해 페이지가 렌더링될 때쯤에는 디코딩되고 캐시되어 있도록 하세요.",
};

export { applications };
