import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.example": "例",
  "intro": "予測に対応した、`next/link` のドロップイン置き換えです。`next/link` とネイティブの `<a>` が受け付けるものすべてを受け付けます。下記に挙げていないものは、そのままアンカーへ渡されます。`ref` は転送されます。",
  "propsHeading": "Props",
  "col.prop": "Prop",
  "col.type": "型",
  "col.default": "デフォルト",
  "col.description": "説明",
  "prop.href": "必須。next/link と同じ。",
  "prop.importance": "予測された意図がどれだけ進んで onIntent をトリガーするか。",
  "prop.cost": "誤トリガーのペナルティ。",
  "prop.onIntent": "効用がゼロを越えたときに一度だけ呼ばれる。",
  "prop.rest": "任意の next/link またはアンカーの prop（className、style、ref…）。",
  "prefetchNote": "注意: `IntentLink` は基盤となる `next/link` に `prefetch={false}` を設定します — プリフェッチはシグナルの消費者の1つとして扱われ、強制されることはありません。",
  "onIntentHeading": "onIntent",
  "onIntentBody": "遷移先の効用が初めてゼロを越えたときに一度だけ発火します。コールバックは次を受け取ります:",
  "exampleHeading": "例",
};

export { intentLink };
