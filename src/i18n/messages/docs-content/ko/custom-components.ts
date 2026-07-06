import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "예제",
  "intro": "링크가 아닌 요소에서 예측을 원한다면 `IntentContext`를 소비하고 요소를 직접 등록하세요.",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "각 요소에 안정적인 id(`useId`)를 부여하고, 마운트 시 등록하고, 언마운트 시 등록 해제한 다음 `probabilities[id]`를 읽으세요.",
  "exampleHeading": "예제",
};

export { customComponents };
