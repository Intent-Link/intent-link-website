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
        "intent-link は動き（カーソルやスクロール）を読み取り、ユーザーが向かっている要素を約 98 % の精度で予測します。クリックが着地する前に次のページをプリフェッチし、プレビューを表示し、UI を適応させる。ひとつのシグナルで、多くの用途に。",
      getStarted: "はじめる",
      liveDemo: "ライブデモ",
    },
    predictionFieldDemo: {
      eyebrow: "02 / ライブデモ",
      ariaLabel: "ライブ予測デモ",
      heading: "カードに向かって動かすと — プリフェッチされる様子が見えます。",
      bodyTail: "下のコンソールは、同じ動きを観察している intent-link です。",
      modeHintCursor:
        "カードに向かってカーソルを動かすと — あなたの軌道をもとに、到達する前に準備されます。",
      modeHintTouch:
        "カードに向かってスクロールすると — あなたのスクロール速度をもとに、触れる前に準備されます。",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} カテゴリー`,
      storefrontIdle: "// カードに向かって動かすとプリフェッチが起動します",
      consoleTitle: "intent-link",
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
      heading: "同じクリック。待ち時間は半分。",
      body:
        "一方のページはネットワークを待ちます。もう一方は近づいた時点で準備され、すでにそこにあります。開いて確かめてください。",
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
      hintBefore: "ヒント: まず右のパネルに向かって動かしてください — intent-link がプリフェッチします。",
      hintAfter: "では開いてみてください — プリフェッチ済みのページがすでにそこにあります。",
    },
    codeExample: {
      eyebrow: "04 / 組み込む",
      ariaLabel: "コード例",
      heading: "2 行で、よくあるケースに。",
      body: "一度ラップしてリンクを入れ替えるだけ。あるいは生の確率を読んで、独自のものを作ることもできます。",
      tabs: { simple: "シンプル", custom: "カスタム" },
      copyForLlm: "LLM 用にコピー",
      fullApiLead: "完全な API は",
      fullApiLink: "ドキュメントで →",
      quickstartLabel: "クイックスタート",
    },
    whyDifferent: {
      eyebrow: "05 / 何が違うか",
      ariaLabel: "何が違うか",
      heading: "可視性でも、ホバーでもなく、意図。",
      body: "他のあらゆる手法は雑なトリガーで当てずっぽうに動きます。intent-link は予測します。",
      columns: {
        approach: "手法",
        timing: "タイミング",
        selective: "選択性",
        perUser: "ユーザー単位",
        confidence: "確信度",
        setup: "セットアップ",
      },
      highlightName: "intent-link",
      rows: [
        { name: "rel=prefetch", timing: "手動・静的", selective: "事前に自分で選ぶ", perUser: "—", confidence: "—", setup: "手書きで宣言" },
        { name: "ForesightJS", timing: "軌道上で", selective: "その遷移先", perUser: "✓", confidence: "—", setup: "登録 + コールバック" },
        { name: "instant.page", timing: "ホバー時", selective: "1つ、遅れて", perUser: "✓", confidence: "—", setup: "組み込み可能" },
        { name: "Next.js prefetch", timing: "表示に入ったとき", selective: "見えているもの全部", perUser: "—", confidence: "—", setup: "組み込み済み" },
        { name: "Guess.js", timing: "事前計算", selective: "最有力の推測", perUser: "集計値", confidence: "—", setup: "ビルド手順 + データ" },
        { name: "intent-link", timing: "到達する前", selective: "その遷移先", perUser: "✓", confidence: "✓", setup: "組み込み可能" },
      ],
      benefits: [
        { stat: "ほぼ瞬時", title: "瞬時のナビゲーション", body: "クリックが着地する前に次のページがプリフェッチされます。" },
        { stat: "~98 %", title: "高い精度", body: "軌道 + 確信度が正しい遷移先を特定します。" },
        { stat: "2つのつまみ", title: "調整可能", body: "importance と cost で、積極性を好きな位置に設定できます。" },
        { stat: "組み込み / 生データ", title: "2つの使い方", body: "80 % のケースにはコンポーネントを、残りには生の確率を。" },
        { stat: "React · Next", title: "フレームワークネイティブ", body: "Next.js App Router での next/link のドロップイン置き換え。" },
        { stat: "MIT", title: "小さくてオープン", body: "データ収集なし — 動きの情報は端末の外に出ません。" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / プリフェッチの先へ",
      ariaLabel: "プリフェッチの先へ",
      heading: "ひとつのシグナル。多くの用途。",
      body:
        "プリフェッチは花形の用途です。しかし生の確率ストリームは、あらゆる用途に使えるリアルタイムの意図シグナルです。",
      uses: [
        { tag: "// 分析", title: "クリックだけでなく意図を", body: "あと一歩の接近や、途中でやめた動きを記録 — 行動だけでなく、ためらいまで。" },
        { tag: "// 開示", title: "段階的な開示", body: "ユーザーがそれに向かった瞬間に、プレビューやツールチップを開きます。" },
        { tag: "// 適応 UI", title: "先回りのデザイン", body: "注意が向かっている要素を強調したり、プリフェッチしたりします。" },
        { tag: "// a11y", title: "補助付きの照準", body: "動作制御が遅い・限られたユーザーのために、狙った遷移先を早めに予測します。" },
      ],
      pattern: [
        { step: "01", title: "計測", body: "ノイズの多い軌道を" },
        { step: "02", title: "推定", body: "有力な遷移先を" },
        { step: "03", title: "準備", body: "到達する前に" },
      ],
      patternLabel: "一般化したパターン",
      patternClose: "これは Web に限った話ではありません。カーソルと画面はその一例にすぎず、同じ動きは棚に近づく買い物客、歩行者の進路、操作パネルへ伸びる手にも読み取れます。このライブラリは、普遍的なアイデアのひとつの実装です。",
    },
    ctaBand: {
      ariaLabel: "はじめる",
      heading: "一瞬に感じるナビゲーションを届けよう。",
      body: "よくあるケースは 2 行で。さらに踏み込むなら生の確率を。",
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
