import { blockKind, type DocContent } from "./types";

const changelog: DocContent = {
  slug: "changelog",
  blocks: [
    { kind: blockKind.heading, level: 2, id: "v1013", textKey: "v1013Heading" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["v1013.api", "v1013.visibility", "v1013.behavior", "v1013.performance"],
    },
    { kind: blockKind.paragraph, textKey: "history" },
  ],
};

export { changelog };
