import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "スクロールモデル",
  "toc.diff": "違い",
  "intro": "タッチデバイス（`pointer: coarse`）にはカーソルがないため、エンジンは**スクロール速度**にフォールバックし、1D のカルマンフィルターに通します。",
  "scrollHeading": "スクロールモデル",
  "scroll.origin": "「エージェント」の原点は読み取り位置の近くに固定されます — `innerWidth × 0.5`、`innerHeight × 0.6`。",
  "scroll.vertical": "スコアリングされるのは**垂直**軸だけです（水平方向の距離は無視されます）— 遷移先の近くで減速するユーザーは意図を示しています。",
  "scroll.weight": "タッチでは確率はソフトマックス正規化**されません**。各遷移先の `weight` がそのまま使われます。",
  "diffHeading": "デスクトップとの違い",
  "diffBody": "コードの変更は不要です — 同じ `IntentLink` と `onIntent` が動作します。期待値だけ調整してください: スクロールの意図はカーソルの軌道より粗いので、モバイルでは重要な遷移先の `importance` をやや高めにすることを検討してください。",
};

export { mobileBehavior };
