import { blockKind, type DocContent } from "./types";

const howItWorks: DocContent = {
  slug: "how-it-works",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "observe", textKey: "observeHeading" },
    { kind: blockKind.paragraph, textKey: "observeBody" },
    { kind: blockKind.heading, level: 2, id: "decide", textKey: "decideHeading" },
    { kind: blockKind.paragraph, textKey: "decideBody" },
    { kind: blockKind.heading, level: 2, id: "fire", textKey: "fireHeading" },
    { kind: blockKind.paragraph, textKey: "fireBody" },
    { kind: blockKind.heading, level: 2, id: "devices", textKey: "devicesHeading" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["devices.desktop", "devices.mobile", "devices.visible"],
    },
    { kind: blockKind.heading, level: 2, id: "physics", textKey: "physicsHeading" },
    { kind: blockKind.paragraph, textKey: "physicsEnergy" },
    { kind: blockKind.paragraph, textKey: "physicsKalman" },
    { kind: blockKind.callout, tone: "note", textKey: "paperNote" },
  ],
};

export { howItWorks };
