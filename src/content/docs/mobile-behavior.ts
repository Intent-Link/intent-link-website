import { blockKind, type DocContent } from "./types";

const mobileBehavior: DocContent = {
  slug: "mobile-behavior",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.heading, level: 2, id: "scroll", textKey: "scrollHeading" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["scroll.origin", "scroll.vertical", "scroll.weight"],
    },
    { kind: blockKind.heading, level: 2, id: "diff", textKey: "diffHeading" },
    { kind: blockKind.paragraph, textKey: "diffBody" },
  ],
};

export { mobileBehavior };
