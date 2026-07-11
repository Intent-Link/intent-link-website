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
  "field.probability": "Normalized probability against neighboring links.",
  "field.weight": "Unnormalized raw probability score that this is the user's target.",
  "field.kineticAgent": "Kinetic energy from the user's velocity.",
  "field.kineticTarget": "Kinetic energy from the target's velocity, if it is in motion.",
  "field.potential": "Potential energy from the distance between the user and the target.",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "See [Custom components](custom-components) for a full example.",
};

export { intentContext };
