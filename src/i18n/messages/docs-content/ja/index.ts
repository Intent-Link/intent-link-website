import type { DocsContentText } from "@/content/docs/types";
import type { PartialText } from "@/i18n/create-text-query";

const ja: PartialText<DocsContentText> = {
  quickstart: {
    "toc.1-install": "インストール", "toc.2-wrap": "アプリをラップ", "toc.3-links": "IntentLink を使う", intro: "3つの手順で Next.js アプリにインテント対応の処理を追加します。", installHeading: "1 · インストール", wrapHeading: "2 · アプリを一度だけラップ", wrapBody: "ルートレイアウトに `IntentProvider` を一度だけ配置します。その内側すべてに対して共有インテントエンジンが動作します。", linksHeading: "3 · IntentLink を使う", linksBody: "`IntentLink` を通常の Next.js リンクと同じように使い、早めに始めたい処理を `onIntent` に入れます。", closing: "多くのアプリで必要なのはこれだけです。ライブラリが自動でプリフェッチすることはなく、`onIntent` の処理は利用者が決めます。",
  },
  "how-it-works": {
    "toc.observe": "観測", "toc.decide": "推定", "toc.fire": "処理を実行", "toc.devices": "デスクトップとモバイル", "toc.physics": "物理学の考え方", intro: "intent-link はページ内でのユーザーの動きを観測し、どの表示中のターゲットに近づいているかを推定します。信号が十分に強くなると、そのターゲットの `onIntent` 関数を呼び出します。", observeHeading: "1 · 動きを観測", observeBody: "デスクトップではポインターの動きを読み取ります。タッチ端末ではスクロールを読み取ります。ユーザーが操作したときだけ起動し、動きが止まると再び休止します。", decideHeading: "2 · ターゲットを推定", decideBody: "エンジンはユーザーの動きと表示中のインテントターゲットを比較します。ビューポート外のターゲットは計算から除外されます。", fireHeading: "3 · 処理を実行", fireBody: "あるターゲットの可能性が十分に高くなると、その `onIntent` コールバックが一度実行されます。ユーザーが離れ、後でもう一度近づけば再実行できます。", devicesHeading: "デスクトップとモバイル", "devices.desktop": "デスクトップでは、ポインターの2次元の動きを追跡します。", "devices.mobile": "モバイルでは、縦方向のスクロールを追跡します。最初のスクロールで有効になります。", "devices.visible": "レスポンシブ CSS で非表示になったものを含め、非表示または画面外のターゲットは無視されます。", physicsHeading: "物理学の考え方", physicsEnergy: "各ターゲットを小さな重力のくぼみとして考えてみてください。動きは **運動エネルギー** を生み、ターゲットまでの距離は **位置エネルギー** を生みます。速いポインターやスクロールにはまだ動きが残っていますが、ターゲット近くの遅い動きはそこに落ち着きつつあるように見えます。エンジンは熱力学に似た規則を使い、こうした低エネルギーの行き先をより可能性が高いものとして扱います。", physicsKalman: "ブラウザーの移動データには小さな飛びや誤差があります。**カルマンフィルター** は物理計算の前にそのノイズを滑らかにします。簡単に言えば、意図した動きと不安定な測定値を区別しやすくします。これはすべてライブラリ内部で行われ、アプリが受け取るのは `onIntent` だけです。", paperNote: "[研究論文を読む](https://intentlink.dev/paper)。ACM で公開されるまで、このリンクは仮のものです。",
  },
  "intent-provider": {
    "toc.usage": "使い方", "toc.notes": "注意点", intro: "アプリのルート付近に `IntentProvider` を一度だけ配置します。`IntentLink` と `useIntentTarget` の共有インテントエンジンを実行します。", usageHeading: "使い方", notesHeading: "注意点", "notes.once": "アプリでは1つの provider だけを使い、入れ子にしないでください。", "notes.props": "必要なのは `children` だけで、ほかに設定はありません。", "notes.client": "クライアント境界を内包しているため、Next.js のサーバーレイアウトから直接 import できます。",
  },
  "intent-link": {
    "toc.props": "Props", "toc.onintent": "onIntent", "toc.tuning": "importance と cost", "toc.example": "例", intro: "通常 Next.js の `Link` を使う場所で `IntentLink` を使います。クリックより前に始めたい処理を `onIntent` に追加します。", propsHeading: "Props", "col.prop": "Prop", "col.type": "型", "col.default": "既定値", "col.description": "説明", "prop.href": "必須。Next.js Link と同じです。", "prop.importance": "処理をどれだけ実行しやすくするか。", "prop.cost": "予測をどれだけ慎重にするか。", "prop.onIntent": "ユーザーがこのリンクを選ぶ可能性が高いときに一度呼ばれます。", "prop.rest": "className、style、ref を含む Next.js Link またはアンカーの任意の prop。", prefetchNote: "`IntentLink` は Next.js の自動プリフェッチを無効にします。予測プリフェッチを使うには、`onIntent` 内で `router.prefetch()` を呼びます。", onIntentHeading: "onIntent", onIntentBody: "このコールバックは引数を受け取らず、値も返しません。接近ごとに一度実行され、ユーザーが離れると再び実行可能になります。", tuningHeading: "importance と cost", tuningBody: "これらの設定は省略できます。ほとんどのアプリでは既定値のままにしてください。", "tuning.importance": "`importance` は処理の始まりやすさを制御します。既定値: `medium`。", "tuning.cost": "`cost` は予測の慎重さを制御します。既定値: `low`。", "tuning.defaults": "実際の処理をデスクトップとモバイルの両方でテストしてから変更してください。", exampleHeading: "例",
  },
  "use-intent-target": {
    "toc.button": "基本的な使い方", "toc.options": "オプション", "toc.third-party": "サードパーティ製コンポーネント", intro: "`useIntentTarget` はボタン、カード、その他の HTML 要素にインテント検出を追加します。返された ref を観測したい要素に取り付けます。", buttonHeading: "基本的な使い方", buttonBody: "クライアントコンポーネント内で hook を使い、返された ref を1つの HTML 要素に取り付けます。", optionsHeading: "オプション", "options.onIntent": "`onIntent`: 要素が有力なターゲットになったときに実行する処理。", "options.importance": "`importance`: 省略可能な `high`、`medium`、`low`。既定値: `medium`。", "options.cost": "`cost`: 省略可能な `high`、`medium`、`low`。既定値: `low`。", thirdPartyHeading: "サードパーティ製コンポーネント", thirdPartyBody: "コンポーネントが実際の HTML 要素へ ref を転送する場合は、直接取り付けます。", wrapperBody: "ref を転送しない場合はネイティブ要素で囲み、そのラッパーに ref を取り付けます。",
  },
  "custom-intent-components": {
    "toc.intent-button": "IntentButton", "toc.intent-button-usage": "使い方", "toc.intent-article": "IntentArticle", "toc.intent-article-usage": "使い方", intro: "同じ種類のターゲットが多い場合は、`useIntentTarget` を一度ラップして、できたコンポーネントを再利用します。", buttonHeading: "再利用可能な IntentButton", buttonBody: "通常の button props に加えて `onIntent`、`importance`、`cost` を受け取ります。", articleHeading: "再利用可能な IntentArticle", articleBody: "同じパターンを商品カードやその他の意味を持つコンテナーにも使えます。", usageHeading: "使い方",
  },
  examples: {
    "toc.route": "ルートをプリフェッチ", "toc.data": "データを準備", "toc.asset": "画像をプリロード", "toc.action": "コンポーネントを準備", intro: "`onIntent` では、安全で繰り返し可能な準備処理を開始できます。購入、メッセージ送信、フォーム送信など取り消せない処理は、実際のクリック後に行ってください。", routeHeading: "ルートをプリフェッチ", routeBody: "一般的な Next.js の使用例です。", dataHeading: "データを準備", dataBody: "次の画面で必要になる情報をデータライブラリのキャッシュに入れます。", assetHeading: "画像をプリロード", assetBody: "移動する前に大きなアセットの読み込みを始めます。", actionHeading: "コンポーネントを準備", actionBody: "ターゲットがリンクでない場合は `useIntentTarget` を使います。",
  },
  troubleshooting: {
    "toc.nothing": "何も実行されない", "toc.prefetch": "予期しないプリフェッチ", "toc.custom": "カスタムコンポーネントの ref", "toc.mobile": "モバイルテスト", "toc.development": "開発モード", nothingHeading: "onIntent が実行されない", "nothing.provider": "これらのリンクより上に `IntentProvider` がありますか？", "nothing.callback": "ターゲットに `onIntent` コールバックがありますか？ コールバックのないターゲットは登録されません。", "nothing.input": "デスクトップではポインターを動かし、モバイルではスクロールしてください。最初の操作までエンジンは休止しています。", "nothing.size": "ターゲットが表示され、実際の幅と高さを持つことを確認してください。", "nothing.wiring": "一時的に `importance=\"high\"` と `cost=\"low\"` を試して接続を確認し、その後既定値に戻してください。", prefetchHeading: "onIntent なしでルートがプリフェッチされる", prefetchBody: "レスポンシブ表示で隠れたリンクも含め、同じルートを指す別の Next.js `Link` を確認してください。`router.prefetch()` を直接呼ぶコードも確認します。", customHeading: "カスタムコンポーネントが動かない", customBody: "コンポーネントは ref を実際の HTML 要素へ転送する必要があります。転送しない場合は、`div` などのネイティブラッパーにインテント ref を取り付けます。", mobileHeading: "モバイルでテストする", mobileBody: "実際のタッチ端末を使うか、ブラウザー開発ツールでタッチエミュレーションを有効にしてからスクロールしてください。デスクトップのウィンドウ幅を狭めるだけではモバイル動作にならない場合があります。", developmentHeading: "開発環境と本番環境", developmentBody: "重要な動作は本番ビルドでも確認してください。React の開発時チェックやフレームワークのツールにより、コールバックや通信が本番と異なって見えることがあります。",
  },
  changelog: {
    "toc.v1013": "1.0.13", v1013Heading: "1.0.13（現在）", "v1013.api": "ボタン、カード、サードパーティ製コンポーネント向けに `useIntentTarget` を追加しました。", "v1013.visibility": "表示中のターゲットだけが予測処理に参加します。", "v1013.behavior": "`onIntent` は単純な void コールバックになり、内部の予測状態は公開 API ではなくなりました。", "v1013.performance": "登録、レンダリング、ターゲットの多いページでの性能を改善しました。", history: "npm で[すべてのバージョン履歴](https://www.npmjs.com/package/intent-link?activeTab=versions)を確認できます。",
  },
};

export { ja };
