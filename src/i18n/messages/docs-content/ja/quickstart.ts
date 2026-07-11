import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "インストール",
  "toc.2-wrap": "アプリをラップ",
  "toc.3-links": "リンクを入れ替え",
  "intro": "インストールから動く予測まで、数分で到達できます。intent-link はポインターの動きを監視し、リンクが有力な遷移先になった時点で — クリックの前に — `onIntent` を発火します。",
  "installHeading": "1 · インストール",
  "peerDeps": "ピア依存関係: `react ≥ 18`、`react-dom ≥ 18`、`next ≥ 13`。",
  "wrapHeading": "2 · アプリを一度ラップする",
  "wrapBody": "`app/layout.jsx` に `IntentProvider` をマウントします。予測エンジンを実行し、登録済みのすべての遷移先についてリアルタイムの確率を計算します。自身の `\"use client\"` ディレクティブを持つので、追加のラッパーなしでサーバーレイアウトにそのまま組み込めます。",
  "linksHeading": "3 · リンクを入れ替える",
  "linksBody": "`IntentLink` — `next/link` のドロップイン — を使い、`onIntent` の中で何かを行います。リンクの効用が初めてゼロを越えたときに一度だけ発火します。",
  "closing": "これで予測プリフェッチができました。次は [importance と cost](importance-and-cost) を調整するか、生の確率を読んで独自の挙動を作りましょう。",
};

export { quickstart };
