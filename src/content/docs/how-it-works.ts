import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const scoringSnippet = `// per target, every frame
kineticAgent  = exp(-(Va²) / (2·σ²))     // agent velocity vs uncertainty
kineticTarget = exp(-(Vt²) / (2·σ²))     // target-relative velocity
potential     = exp(-(π·e·d²) / (w²))    // distance d, target size w

weight        = kineticAgent · kineticTarget · potential`;

const probabilitySnippet = `probability = weight / (1 + Σ weights)`;

const howItWorks: DocContent = {
  slug: "how-it-works",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "the-estimate", textKey: "estimateHeading" },
    { kind: blockKind.paragraph, textKey: "estimateBody" },

    { kind: blockKind.heading, level: 2, id: "scoring", textKey: "scoringHeading" },
    { kind: blockKind.paragraph, textKey: "scoringBody" },
    { kind: blockKind.code, language: codeLanguage.text, code: scoringSnippet },
    { kind: blockKind.paragraph, textKey: "scoringNote" },

    { kind: blockKind.heading, level: 2, id: "probability", textKey: "probabilityHeading" },
    { kind: blockKind.paragraph, textKey: "probabilityBody" },
    { kind: blockKind.code, language: codeLanguage.text, code: probabilitySnippet },
    { kind: blockKind.paragraph, textKey: "nullOption" },
    { kind: blockKind.paragraph, textKey: "touch" },
  ],
};

export { howItWorks };
