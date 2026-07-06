import { blockKind, type DocContent } from "./types";

const troubleshooting: DocContent = {
  slug: "troubleshooting",
  blocks: [
    { kind: blockKind.heading, level: 2, id: "nothing", textKey: "nothingHeading" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: [
        "nothing.provider",
        "nothing.mousemove",
        "nothing.size",
        "nothing.wiring",
      ],
    },
    { kind: blockKind.heading, level: 2, id: "ssr", textKey: "ssrHeading" },
    { kind: blockKind.paragraph, textKey: "ssrBody" },
    { kind: blockKind.heading, level: 2, id: "touch", textKey: "touchHeading" },
    { kind: blockKind.paragraph, textKey: "touchBody" },
  ],
};

export { troubleshooting };
