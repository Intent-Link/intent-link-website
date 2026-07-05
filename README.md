# intent-link website

Marketing + docs site for [`intent-link`](https://www.npmjs.com/package/intent-link) — a user-target prediction library for React & Next.js.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Vitest.

## Getting started

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

## Scripts

| Command          | What it does                          |
| ---------------- | ------------------------------------- |
| `npm run dev`    | Start the dev server                  |
| `npm run build`  | Production build (full typecheck)     |
| `npm run start`  | Serve the production build            |
| `npm run lint`   | ESLint                                |
| `npm test`       | Run unit tests (Vitest)               |

## Structure

```
src/
├─ app/            Routes only — one root layout (fonts, providers, nav, footer).
│                  Landing sections in _sections/; docs in docs/[slug]; llms.txt route.
├─ components/     Shared UI — ui/ (primitives), layout/ (nav, footer, shell), docs/ (docs shell).
├─ hooks/          Reusable client hooks (use-copy, use-media-query, demo state).
├─ i18n/           Custom localization — locale detection + per-namespace messages/queries.
├─ lib/            Cross-cutting helpers (cn).
├─ utils/          Pure functions (format, math, syntax-highlight, docs mapping) — unit-tested.
├─ constants/      Static data (site, nav, routes, package managers, test ids).
└─ types/          Shared types.
tests/             Vitest setup, factories, helpers, mocks (shared via @tests/*).
```

Import aliases: `@/*` → `src/*`, `@tests/*` → `tests/*`.

## Conventions

- **Container / presentation.** Pages (Server Components) resolve data — active locale,
  section copy, doc lookups — and pass each child a typed `text` prop. Components only
  present; they don't fetch or compute. Pure logic lives in `utils/`, never in a section.
- **No magic strings.** Routes (`constants/routes.ts`), section anchor ids
  (`constants/section-ids.ts`), and `data-testid`s (`constants/test-ids.ts`) come from
  central registries.
- **Localization is library-free.** Each namespace in `i18n/messages/` owns its dictionary,
  its type, and a server query (`get*Text`); client mirrors are `use*Text` hooks.
- **Uses the real `intent-link` package** — the prediction engine is never reimplemented;
  `IntentProvider` mounts once in `components/providers.tsx`.
