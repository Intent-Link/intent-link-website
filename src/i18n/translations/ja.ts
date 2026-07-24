import type { TranslationBundle } from "./bundle";

/** Japanese (ja) translations. */
const ja: TranslationBundle = {
  common: {
    tagline: "クリックの前に、遷移先がわかる。",
    nav: {
      docs: "ドキュメント",
      github: "GitHub",
    },
    footer: {
      tagline: "クリックの前に遷移先を予測。MITライセンス。動きの情報は端末の外に出ません。",
      groupTitles: {
        docs: "ドキュメント",
        resources: "リソース",
        forAi: "AI向け",
      },
      links: {
        quickstart: "クイックスタート",
        api: "APIリファレンス",
        guides: "ガイド",
        github: "GitHub",
        npm: "npm",
        changelog: "変更履歴",
        license: "ライセンス (MIT)",
        llmsText: "llms.txt",
      },
      builtLine: "予測プリフェッチで構築 — ドキュメントもそれを感じます。",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "コピー",
      copied: "✓ コピーしました",
      getStarted: "はじめる",
    },
    docs: {
      copyForLlm: "LLM用にコピー",
      viewMarkdown: "Markdownで表示",
      close: "閉じる",
    },
    notFound: {
      title: "ページが見つかりません",
      backHome: "ホームへ戻る",
    },
    language: {
      ariaLabel: "言語を選択",
    },
    aria: {
      primaryNav: "メイン",
      docsNav: "ドキュメント",
      pageNav: "このページの内容",
      toggleMenu: "メニューを開閉",
      loading: "読み込み中",
    },
  },
  metadata: {
    title: "intent-link — クリックの前に、遷移先がわかる",
    description:
      "React と Next.js のための遷移先予測ライブラリ。ユーザーがどこへ向かっているかを予測し、クリックする前に次の遷移を準備します。",
    docs: {
      indexTitle: "ドキュメント — intent-link",
      pageTitle: (title: string) => `${title} — intent-link のドキュメント`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "トップ",
      eyebrow: "React と Next.js のための遷移先予測",
      titleLead: "クリックの前に、",
      titleEmphasis: "遷移先がわかる。",
      subcopy:
        "1.37 の fetch:click 比率を実現します。Intent-link は、動きの速度と距離によって生じる運動エネルギーと位置エネルギーを使って確率を計算します。",
      getStarted: "はじめる",
      liveDemo: "ライブデモ",
      well: { caption: "ピクセルには重力がある" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / ライブデモ",
      ariaLabel: "ライブ予測デモ",
      heading: "カードに向かって動かすと — プリフェッチされる様子が見えます。",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} カテゴリー`,

      reset: "リセット",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "onIntent ストリーム",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} 回発火`,
      streamEmpty: "// カードに向かって動かすとシグナルが発火します…",
      levels: { low: "低", medium: "中", high: "高" },
      tiles: { women: "レディース", men: "メンズ", kids: "キッズ", shoes: "シューズ", bags: "バッグ", accessories: "アクセサリー", sport: "スポーツ", denim: "デニム", outerwear: "アウター", beauty: "ビューティー", home: "ホーム", sale: "セール", electronics: "電化製品", watches: "腕時計", jewelry: "ジュエリー", furniture: "家具", gifts: "ギフト", travel: "トラベル" },
    },
    latencyRace: {
      eyebrow: "03 / 違いを体感",
      ariaLabel: "レイテンシー比較",
      heading: "同じクリック。待ち時間をスキップ。",
      body:
        "一方のページはネットワークリクエストを待ち、もう一方はユーザーの移動軌跡の途中で取得されます。",
      timeSavedLabel: "このセッションで節約した時間",
      milliseconds: (value: number) => `${value} ms`,
      instant: (value: number) => `${value} ms · 瞬時`,
      withoutTitle: "intent-link なし",
      withTitle: "intent-link あり",
      notLoaded: "未読み込み",
      idle: "待機中",
      prefetching: "プリフェッチ中…",
      ready: "プリフェッチ済み ✓ 準備完了",
      fetching: "読み込み中…",
      productName: "キルティングジャケット",
      productPrice: "$148.00",
      productPath: "/product/quilted-jacket",
      addToCart: "カートに追加",
      open: "商品を開く →",
      opening: "開いています…",
      replay: "↻ もう一度",
    },
    whyDifferent: {
      eyebrow: "04 / 何が違うか",
      ariaLabel: "何が違うか",
      heading: "可視性でも、ホバーでもなく、意図。",
      body: "ほかの手法は、遅すぎるか、無駄が多いかのどちらかです。",
      columns: {
        approach: "手法",
        timing: "タイミング",
        selective: "選択性",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "軌道上で", selective: "その遷移先" },
        { name: "instant.page", timing: "ホバー時", selective: "1つ" },
        { name: "Next.js prefetch", timing: "表示に入ったとき", selective: "見えているもの全部" },
        { name: "Guess.js", timing: "事前計算", selective: "最有力の推測" },
        { name: "intent-link", timing: "到達する前", selective: "その遷移先" },
      ],
      benefits: [
        { stat: "瞬時ナビゲーション", title: "クリック前に次のページをプリフェッチ" },
        { stat: "1.37", title: "Fetch:Click 比率" },
        { stat: "調整可能", title: "importance と cost の重みを設定" },
        { stat: "useIntentTarget", title: "独自のコンポーネントを構築" },
        { stat: "React · Next", title: "最も人気のあるフレームワーク向け" },
        { stat: "MIT", title: "オープンソース、データ収集なし" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / 活用例",
      ariaLabel: "プリフェッチの先へ",
      heading: "ひとつのシグナル。多くの用途。",
      uses: [
        { tag: "// 分析", title: "クリックだけでなく意図を", body: "行動だけでなく、途中でやめた接近やためらいを記録します。" },
        { tag: "// 開示", title: "段階的な開示", body: "ユーザーがそれに向かった瞬間に、プレビューやツールチップを開きます。" },
        { tag: "// パフォーマンス", title: "リンクをプリフェッチ", body: "ユーザーがクリックする前にナビゲーションリンクをプリフェッチします。" },
        { tag: "// 適応 UI", title: "補助付きの照準", body: "ユーザーが近づくにつれて、ターゲットを大きくするか近くに移動します。" },
      ],
      pattern: [
        { step: "01", title: "計測", body: "ノイズの多い軌道を" },
        { step: "02", title: "推定", body: "有力な遷移先を" },
        { step: "03", title: "準備", body: "到達する前に" },
      ],
    },
    ctaBand: {
      ariaLabel: "はじめる",
      heading: "一瞬に感じるナビゲーションを届けよう。",
      getStarted: "はじめる",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "はじめに",
      apiReference: "API リファレンス",
      guides: "ガイド",
      more: "その他",
    },
    pageTitles: {
      quickstart: "クイックスタート",
      "how-it-works": "仕組み",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "カスタム Intent コンポーネント",
      examples: "使用例",
      troubleshooting: "トラブルシューティング",
      changelog: "変更履歴",
    },
  },
};

export { ja };
