import { blockKind, type DocContent } from "./types";

const changelog: DocContent = {
  slug: "changelog",
  blocks: [
    { kind: blockKind.heading, level: 2, id: "v108", textKey: "v108Heading" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["v108.types", "v108.meta"],
    },
    { kind: blockKind.heading, level: 2, id: "v107", textKey: "v107Heading" },
    { kind: blockKind.list, ordered: false, itemKeys: ["v107.maint"] },
    { kind: blockKind.heading, level: 2, id: "v106", textKey: "v106Heading" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["v106.engine", "v106.api", "v106.stream", "v106.meta"],
    },
  ],
};

export { changelog };
