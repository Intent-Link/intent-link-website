import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "使い方",
  "toc.notes": "注意点",
  "intro": "予測エンジンを実行するコンテキストプロバイダーです。アプリのルート近くに**一度だけ**マウントします。その内側のすべては `IntentLink` を使うか、`IntentContext` を直接読み取れます。**props はありません**。",
  "usageHeading": "使い方",
  "notesHeading": "注意点",
  "notes.client": "これは**クライアントコンポーネント**です（`\"use client\"`）— App Router では、クライアント境界の中でマウントしてください。",
  "notes.loop": "内部では単一の `requestAnimationFrame` ループを実行し、`mousemove` と `scroll` の両方のリスナーを、デバイスに合う方を使って取り付けます — 複数回マウントするのは無駄です。",
  "notes.provides": "子孫要素に対して、`probabilities`、`registerLink`、`unregisterLink` を `IntentContext` 経由で提供します。",
};

export { intentProvider };
