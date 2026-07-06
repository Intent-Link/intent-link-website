import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "스크롤 모델",
  "toc.diff": "차이점",
  "intro": "터치 기기(`pointer: coarse`)에는 커서가 없으므로 엔진은 **스크롤 속도**로 대체하며, 이를 1D 칼만 필터에 통과시킵니다.",
  "scrollHeading": "스크롤 모델",
  "scroll.origin": "“에이전트” 원점은 읽는 위치 근처에 고정됩니다 — `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "오직 **수직** 축만 점수가 매겨집니다(수평 거리는 무시됨) — 대상 근처에서 감속하는 사용자는 의도를 나타냅니다.",
  "scroll.weight": "터치에서는 확률이 소프트맥스로 정규화되지 **않습니다**. 각 대상의 `weight`가 직접 사용됩니다.",
  "diffHeading": "데스크톱과의 차이",
  "diffBody": "코드 변경은 필요 없습니다 — 동일한 `IntentLink`와 `onIntent`가 작동합니다. 기대치만 조정하세요: 스크롤 의도는 커서 궤적보다 거칠므로, 모바일에서 핵심 대상에는 약간 더 높은 `importance`를 고려하세요.",
};

export { mobileBehavior };
