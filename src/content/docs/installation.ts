import { blockKind, inlineKind, tableCellKind, type DocContent } from "./types";

const installation: DocContent = {
  slug: "installation",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.install },

    { kind: blockKind.heading, level: 2, id: "requirements", textKey: "requirementsHeading" },
    {
      kind: blockKind.table,
      columns: [
        { id: "peer", headerKey: "col.peer" },
        { id: "version", headerKey: "col.version" },
      ],
      rows: [
        [
          { kind: inlineKind.code, value: "react" },
          { kind: tableCellKind.value, value: "≥ 18.0.0" },
        ],
        [
          { kind: inlineKind.code, value: "react-dom" },
          { kind: tableCellKind.value, value: "≥ 18.0.0" },
        ],
        [
          { kind: inlineKind.code, value: "next" },
          { kind: tableCellKind.value, value: "≥ 13.0.0" },
        ],
      ],
    },

    { kind: blockKind.heading, level: 2, id: "app-router", textKey: "appRouterHeading" },
    { kind: blockKind.paragraph, textKey: "appRouterBody" },
  ],
};

export { installation };
