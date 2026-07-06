import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.example": "예제",
  "intro": "예측을 인식하는, 그대로 대체 가능한 `next/link` 대체품입니다. `next/link`와 네이티브 `<a>`가 받는 모든 것을 받습니다. 아래에 나열되지 않은 것은 앵커로 그대로 전달됩니다. `ref`는 전달됩니다.",
  "propsHeading": "Props",
  "col.prop": "Prop",
  "col.type": "타입",
  "col.default": "기본값",
  "col.description": "설명",
  "prop.href": "필수. next/link와 동일.",
  "prop.importance": "예측된 의도가 얼마나 선뜻 onIntent를 트리거하는지.",
  "prop.cost": "잘못된 트리거에 대한 페널티.",
  "prop.onIntent": "유틸리티가 0을 넘을 때 한 번 호출됨.",
  "prop.rest": "모든 next/link 또는 앵커 prop (className, style, ref…).",
  "prefetchNote": "참고: `IntentLink`는 내부 `next/link`에 `prefetch={false}`를 설정합니다 — 미리 가져오기는 신호의 한 소비자로 취급될 뿐, 강제되지 않습니다.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "처음으로 `(probability × importanceWeight) − costWeight > 0`이 되는 순간 한 번 실행됩니다. 확률이 `0.05` 아래로 떨어지면 잠금이 초기화되어 다시 실행될 수 있습니다. 콜백은 다음을 받습니다:",
  "exampleHeading": "예제",
};

export { intentLink };
