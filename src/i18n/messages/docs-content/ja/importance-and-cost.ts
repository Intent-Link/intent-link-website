import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "値の選び方",
  "intro": "確率はあくまで証拠にすぎません。`onIntent` が実際に発火するかは、証拠を判断へと変える、リンクごとの2つのつまみ — `importance` と `cost` — が決めます。`onIntent` は、遷移先の効用が初めてゼロを越えたときに発火します。",
  "exampleLead": "どちらも任意の `IntentLink` の props として設定します:",
  "col.value": "値",
  "col.effect": "効果",
  "importanceHeading": "importance — どれだけ進んで動作するか",
  "importanceBody": "予測された意図それ自体がどれだけの重みを持つか。早めに動作してよい遷移先（目立つ CTA など）では上げてください。",
  "importance.high": "早く発火、弱い証拠でも",
  "importance.medium": "バランス型 **（デフォルト）**",
  "importance.low": "ほぼ確実になるまで待つ",
  "costHeading": "cost — 誤った推測の代償",
  "costBody": "向かっていなかったと判明したときに `onIntent` を発火させてしまったことへのペナルティ。誤った推測が高くつく、あるいは邪魔になるときに上げてください。",
  "cost.high": "非常に慎重 — 強い証拠が必要",
  "cost.medium": "バランス型",
  "cost.low": "積極的 — 間違えても安い **（デフォルト）**",
  "pickingHeading": "値の選び方",
  "picking.cheap": "**安価な動作**（`router.prefetch` など）: importance を高く、cost を低く — 早く頻繁に発火させます。",
  "picking.expensive": "**高価な動作**（従量課金の API 呼び出し、WebSocket など）: importance を低く、cost を高く — ほぼ確実になるまで待ちます。",
  "pickingNote": "`onIntent` は接近ごとに一度だけ発火します。遷移先の確率が下がると再びアームされるので、改めて接近すれば再び発火できます。",
};

export { importanceAndCost };
