import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "低レベルの API です。これを利用して生の確率ストリームを読み取り、自分の要素を登録します — `<button>`、カード、あるいはリンクではない任意の要素での遷移先予測のために。",
  "col.field": "フィールド",
  "col.type": "型",
  "col.meaning": "意味",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "1つの遷移先のリアルタイムの状態で、`probabilities` の中で id をキーにして格納されます。",
  "field.probability": "これが遷移先である正規化された尤度。",
  "field.weight": "正規化前のスコア（3つの項の積）。",
  "field.kineticAgent": "不確かさに対するエージェント速度の項。",
  "field.kineticTarget": "遷移先に対する相対速度の項。",
  "field.potential": "幾何の項（距離とサイズ）。",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "完全な例は[カスタムコンポーネント](custom-components)を参照してください。",
};

export { intentContext };
