import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "값 고르기",
  "intro": "확률은 그저 근거일 뿐입니다. onIntent가 실제로 실행될지는 근거를 결정으로 바꾸는 두 개의 링크별 노브가 정합니다.",
  "col.value": "값",
  "col.weight": "가중치",
  "col.effect": "효과",
  "importanceHeading": "importance — 얼마나 선뜻 반응할지",
  "importanceBody": "예측된 의도만으로 얼마나 큰 무게를 실을지입니다. 일찍 반응해도 괜찮은 대상(눈에 띄는 CTA)에는 값을 높이세요.",
  "importance.high": "약한 근거에도 일찍 실행",
  "importance.medium": "균형 잡힌 **(기본값)**",
  "importance.low": "거의 확실해질 때까지 대기",
  "costHeading": "cost — 잘못된 추측의 대가",
  "costBody": "유틸리티에서 페널티로 차감됩니다. `onIntent`를 불필요하게 실행하는 것이 비싸거나 방해가 될 때 값을 높이세요.",
  "cost.high": "매우 신중함 — 강한 근거가 필요",
  "cost.medium": "균형",
  "cost.low": "공격적 — 틀려도 비용이 적음 **(기본값)**",
  "pickingHeading": "값 고르기",
  "picking.cheap": "**저렴한 동작** (`router.prefetch`): 높은 importance, 낮은 cost — 일찍 자주 실행.",
  "picking.expensive": "**비싼 동작** (요금이 부과되는 API 호출, 웹소켓): 낮은 importance, 높은 cost — 거의 확실할 때까지 대기.",
  "pickingNote": "`onIntent`는 한 번 실행됩니다. 대상의 확률이 `0.05` 아래로 떨어지면 내부 잠금이 초기화되어, 새로운 접근에서 다시 실행될 수 있습니다.",
};

export { importanceAndCost };
