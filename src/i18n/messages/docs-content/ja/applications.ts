import type { DocText } from "@/content/docs/types";

const applications: DocText = {
  "toc.route": "ルートのプリフェッチ",
  "toc.data": "データのプリフェッチ",
  "toc.asset": "アセットのプリロード",
  "intro": "`onIntent` は、リンクが有力な遷移先になった瞬間に発火する、ただのコールバックです。その1つのシグナルには多くの使い道があります — ここではよくある3つを紹介します。",
  "routeHeading": "ルートのプリフェッチ",
  "routeBody": "花形の用途です。`IntentLink` は `next/link` 自身のプリフェッチを無効にするので、ルートをいつ温めるかはあなたが決めます。`router.prefetch` は安価なので、`importance=\"high\"` ／ `cost=\"low\"` を使って早く頻繁に発火させましょう。",
  "dataHeading": "データのプリフェッチ",
  "dataBody": "温められるのはルートだけではありません。次のページが必要とするデータ — クエリ、API 呼び出し、キャッシュエントリ — を先に走らせて、クリックの前に準備を整えておきましょう。",
  "assetHeading": "アセットのプリロード",
  "assetBody": "重いメディアは格好の対象です。意図を検知した瞬間に、遷移先のヒーロー画像や動画、フォントの読み込みを始めれば、ページが描画されるころにはデコードもキャッシュも済んでいます。",
};

export { applications };
