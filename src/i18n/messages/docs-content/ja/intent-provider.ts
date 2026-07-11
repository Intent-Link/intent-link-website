import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "使い方",
  "toc.notes": "注意点",
  "intro": "予測エンジンを実行するコンテキストプロバイダーです。`app/layout.jsx` に**一度だけ**マウントします。その内側のすべては `IntentLink` を使うか、`IntentContext` を直接読み取れます。**props はありません**。",
  "usageHeading": "使い方",
  "notesHeading": "注意点",
  "notes.client": "自身の `\"use client\"` ディレクティブを持つので、サーバーレイアウトの中で直接動作します — ラップする必要はありません。",
  "notes.provides": "子孫要素に対して、`probabilities`、`registerLink`、`unregisterLink` を `IntentContext` 経由で提供します。",
};

export { intentProvider };
