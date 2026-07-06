import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "The low-level surface. Consume it to read the raw probability stream and register your own elements for target prediction on a `<button>`, a card, or any element that isn't a link.",
  "col.field": "Field",
  "col.type": "Type",
  "col.meaning": "Meaning",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "The live state for one target, keyed by id in `probabilities`.",
  "field.probability": "Normalized likelihood this is the target.",
  "field.weight": "Unnormalized score (product of the three terms).",
  "field.kineticAgent": "Agent-velocity term vs uncertainty.",
  "field.kineticTarget": "Target-relative velocity term.",
  "field.potential": "Geometry term (distance & size).",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "See [Custom components](custom-components) for a full example.",
};

export { intentContext };
