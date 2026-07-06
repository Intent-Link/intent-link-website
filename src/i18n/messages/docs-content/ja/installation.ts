import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "必要要件",
  "toc.app-router": "App / Pages Router",
  "intro": "intent-link は TypeScript の型付きで、ESM + CJS として提供されます。お好みのパッケージマネージャーでインストールしてください。",
  "requirementsHeading": "必要要件",
  "col.peer": "ピア依存関係",
  "col.version": "バージョン",
  "appRouterHeading": "App Router と Pages Router",
  "appRouterBody": "すべてのエクスポートはクライアントコンポーネントです（`\"use client\"` を持ちます）。**App Router** では、`IntentProvider` をクライアント境界の中でマウントします — `\"use client\"` のレイアウトか、サーバーレイアウトから描画する小さなクライアントラッパーのいずれかです。**Pages Router** では、アプリを `pages/_app.jsx` でラップします。",
};

export { installation };
