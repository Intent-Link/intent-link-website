import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "값 고르기",
  "intro": "확률은 그저 근거일 뿐입니다. `onIntent`가 실제로 실행될지는 근거를 결정으로 바꾸는 두 개의 링크별 노브 — `importance`와 `cost` — 가 정합니다. `onIntent`는 대상의 유틸리티가 처음으로 0을 넘는 순간 실행됩니다.",
  "exampleLead": "어떤 `IntentLink`에든 두 값을 prop으로 설정하세요:",
  "col.value": "값",
  "col.effect": "효과",
  "importanceHeading": "importance: 얼마나 선뜻 반응할지",
  "importanceBody": "예측된 의도만으로 얼마나 큰 무게를 실을지입니다. 일찍 반응해도 괜찮은 대상(눈에 띄는 CTA)에는 값을 높이세요.",
  "importance.high": "약한 근거에도 일찍 실행",
  "importance.medium": "균형 잡힌 **(기본값)**",
  "importance.low": "거의 확실해질 때까지 대기",
  "costHeading": "cost: 잘못된 추측의 대가",
  "costBody": "당신이 그쪽으로 향하고 있지 않았던 것으로 드러났을 때 `onIntent`를 실행한 데 대한 페널티입니다. 잘못된 추측이 비싸거나 방해가 될 때 값을 높이세요.",
  "cost.high": "매우 신중함, 강한 근거가 필요",
  "cost.medium": "균형",
  "cost.low": "공격적, 틀려도 비용이 적음 **(기본값)**",
  "pickingHeading": "값 고르기",
  "picking.cheap": "**저렴한 동작** (`router.prefetch`): 높은 importance, 낮은 cost. 일찍 자주 실행.",
  "picking.expensive": "**비싼 동작** (요금이 부과되는 API 호출, 웹소켓): 낮은 importance, 높은 cost. 거의 확실할 때까지 대기.",
  "pickingNote": "`onIntent`는 한 번의 접근마다 한 번 실행됩니다. 대상의 확률이 다시 내려가면 재장전되므로, 새로운 접근에서 다시 실행될 수 있습니다.",
};

export { importanceAndCost };
