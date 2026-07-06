import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "ルートのプリフェッチ",
  "toc.data": "データとキャッシュ",
  "intro": "花形の用途です。`IntentLink` は next/link 自身のプリフェッチを無効にするので、ルートをいつ温めるかは `onIntent` の中であなたが決めます。",
  "routeHeading": "ルートのプリフェッチ",
  "routeBody": "`router.prefetch` は安価なので、`importance=\"high\"` ／ `cost=\"low\"` を使って早く頻繁に発火させましょう。",
  "dataHeading": "データとキャッシュの温め",
  "dataBody": "`onIntent` は単なるコールバックです — データの取得、画像、キャッシュエントリ、クエリクライアントなど、何でも温められます。",
};

export { predictivePrefetch };
