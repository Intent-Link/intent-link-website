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
        "nothing.callback",
        "nothing.input",
        "nothing.size",
        "nothing.wiring",
      ],
    },
    { kind: blockKind.heading, level: 2, id: "prefetch", textKey: "prefetchHeading" },
    { kind: blockKind.paragraph, textKey: "prefetchBody" },
    { kind: blockKind.heading, level: 2, id: "custom", textKey: "customHeading" },
    { kind: blockKind.paragraph, textKey: "customBody" },
    { kind: blockKind.heading, level: 2, id: "mobile", textKey: "mobileHeading" },
    { kind: blockKind.paragraph, textKey: "mobileBody" },
    { kind: blockKind.heading, level: 2, id: "development", textKey: "developmentHeading" },
    { kind: blockKind.paragraph, textKey: "developmentBody" },
  ],
};

export { troubleshooting };
