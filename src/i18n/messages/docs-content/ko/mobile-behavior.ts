import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "스크롤 모델",
  "toc.diff": "차이점",
  "intro": "터치 기기에는 커서가 없으므로, 의도는 대신 **스크롤 속도**에서 나옵니다.",
  "scrollHeading": "스크롤 모델",
  "scroll.origin": "“에이전트” 원점은 읽는 위치 근처에 고정됩니다: `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "오직 **수직** 축만 점수가 매겨집니다(수평 거리는 무시됨). 대상 근처에서 감속하는 사용자는 의도를 나타냅니다.",
  "scroll.weight": "확률은 링크들을 서로 견주어 정규화되지 않습니다. 대신 원시 “weight” 확률 점수가 사용됩니다.",
  "diffHeading": "데스크톱과의 차이",
  "diffBody": "변경할 것은 없습니다. 동일한 `IntentLink`와 `onIntent`가 작동합니다.",
};

export { mobileBehavior };
