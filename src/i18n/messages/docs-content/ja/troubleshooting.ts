import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "発火しない",
  "toc.ssr": "SSR エラー",
  "nothingHeading": "onIntent がまったく発火しない",
  "nothing.provider": "`IntentProvider` はこれらのリンクの上位にマウントされていますか？",
  "nothing.mousemove": "エンジンは最初の `mousemove` の後にしか動きません — カーソルを動かしてください。",
  "nothing.size": "画面外の遷移先はスコアリングできません — 遷移先が実際に描画され、ビューポート内にあることを確認してください。",
  "nothing.wiring": "まず `importance=\"high\"` ／ `cost=\"low\"` で配線を確認し、それから控えめに戻してください。",
  "ssrHeading": "SSR ／ \"use client\" のエラー",
  "ssrBody": "すべてのエクスポートは自身の `\"use client\"` ディレクティブを持ち、サーバーレイアウトの中で直接動作するので、自分で `\"use client\"` を付ける必要はありません。",
};

export { troubleshooting };
