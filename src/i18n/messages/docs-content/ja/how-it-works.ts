import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "推定",
  "toc.scoring": "スコアリング",
  "toc.probability": "確率",
  "intro": "intent-link はポインターの動きを物理系としてモデル化します。`IntentProvider` は `requestAnimationFrame` ループを実行し、毎フレーム、あなたの動きを推定して登録済みのすべての遷移先をスコアリングします — 結果は各遷移先ごとのリアルタイムの確率です。",
  "estimateHeading": "推定",
  "estimateBody": "生のポインターサンプルはノイズが多いものです。**カルマンフィルター**（カーソルには 2D、タッチのスクロールには 1D）が、それを滑らかな**速度**と、決定的に重要な**不確かさ**（σ）— その推定を今どれだけ信頼してよいか — に変換します。速く真っ直ぐな動きは素早く確信のある推定を生み、遅くさまよう動きは不確かなままです。",
  "scoringHeading": "遷移先のスコアリング",
  "scoringBody": "各遷移先の `weight` は、3つの指数項 — 2つの運動項（動きから）と1つのポテンシャル項（幾何から）— を組み合わせたものです:",
  "scoringNote": "大きく（大きい `w`）、近く（小さい `d`）、確信のある動きと揃った遷移先は高いスコアになります。小さく、遠く、軌道から外れた遷移先はほぼゼロになります。",
  "probabilityHeading": "確率と「どこにも向かわない」選択肢",
  "probabilityBody": "重みは、定数 `1` を含むソフトマックス風の分母によって確率へと正規化されます:",
  "nullOption": "先頭のその `1` が、**「どこにも向かっていない」選択肢**です — 確率はリンク全体で合計しても 1 にはならないので、エンジンは確信が持てないままでいて、単に発火しないことができます。各遷移先のリアルタイムの [PhysicsState](intent-context#physicsstate)（確率、重み、3つの項）は `IntentContext` を通じて公開されます。",
  "touch": "タッチデバイスにはカーソルがないため、エンジンは代わりに[スクロール速度](mobile-behavior)を追跡し、垂直方向の近さで遷移先をスコアリングします。",
};

export { howItWorks };
