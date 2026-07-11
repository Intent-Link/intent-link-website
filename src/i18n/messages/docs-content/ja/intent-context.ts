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
  "field.probability": "隣接するリンクに対して正規化された確率。",
  "field.weight": "これがユーザーの遷移先であるという、正規化前の生の確率スコア。",
  "field.kineticAgent": "ユーザーの速度による運動エネルギー。",
  "field.kineticTarget": "遷移先が動いている場合の、その速度による運動エネルギー。",
  "field.potential": "ユーザーと遷移先の間の距離によるポテンシャルエネルギー。",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "完全な例は[カスタムコンポーネント](custom-components)を参照してください。",
};

export { intentContext };
