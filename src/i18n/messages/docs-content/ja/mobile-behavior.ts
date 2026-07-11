import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "スクロールモデル",
  "toc.diff": "違い",
  "intro": "タッチデバイスにはカーソルがないため、意図は代わりに**スクロール速度**から得られます。",
  "scrollHeading": "スクロールモデル",
  "scroll.origin": "「エージェント」の原点は読み取り位置の近くに固定されます — `innerWidth × 0.5`、`innerHeight × 0.6`。",
  "scroll.vertical": "スコアリングされるのは**垂直**軸だけです（水平方向の距離は無視されます）— 遷移先の近くで減速するユーザーは意図を示しています。",
  "scroll.weight": "確率はリンク同士を比較して正規化されることはありません。代わりに、生の「weight」の確率スコアが使われます。",
  "diffHeading": "デスクトップとの違い",
  "diffBody": "変更は不要です。同じ `IntentLink` と `onIntent` が動作します。",
};

export { mobileBehavior };
