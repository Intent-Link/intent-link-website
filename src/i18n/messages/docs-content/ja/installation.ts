import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "必要要件",
  "toc.app-router": "マウント",
  "intro": "intent-link は TypeScript の型付きで、ESM + CJS として提供されます。お好みのパッケージマネージャーでインストールしてください。",
  "requirementsHeading": "必要要件",
  "col.peer": "ピア依存関係",
  "col.version": "バージョン",
  "appRouterHeading": "マウント",
  "appRouterBody": "すべてのエクスポートは自身の `\"use client\"` ディレクティブを持つので、自分で付ける必要はありません。`IntentProvider` を `app/layout.jsx` に一度だけマウントしてください — サーバーレイアウトの中で直接動作します。完全なスニペットは[クイックスタート](quickstart)を参照してください。",
};

export { installation };
