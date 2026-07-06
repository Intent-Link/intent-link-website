import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "発火しない",
  "toc.ssr": "SSR エラー",
  "toc.touch": "タッチ",
  "nothingHeading": "onIntent がまったく発火しない",
  "nothing.provider": "`IntentProvider` はこれらのリンクの上位にマウントされていますか？",
  "nothing.mousemove": "エンジンは最初の `mousemove` の後にしか動きません — カーソルを動かしてください。",
  "nothing.size": "非常に小さい、または画面外の遷移先はスコアがほぼゼロになります。実際のヒット領域を与えてください。",
  "nothing.wiring": "まず `importance=\"high\"` ／ `cost=\"low\"` で配線を確認し、それから控えめに戻してください。",
  "ssrHeading": "SSR ／ \"use client\" のエラー",
  "ssrBody": "すべてのエクスポートはクライアントコンポーネントです。App Router では、`IntentProvider` を `\"use client\"` 境界の中でマウントしてください。サーバーコンポーネントから直接呼び出さないでください。",
  "touchHeading": "タッチデバイスで何も起きない",
  "touchBody": "タッチでは、意図はタップではなく**スクロール**から得られます — [モバイルでの挙動](mobile-behavior)を参照してください。",
};

export { troubleshooting };
