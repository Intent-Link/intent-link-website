import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.observe": "Observe",
  "toc.decide": "Estimate",
  "toc.fire": "Run your action",
  "toc.devices": "Desktop and mobile",
  "toc.physics": "The physics idea",
  "intro": "intent-link watches how someone moves through a page and estimates which visible target they are approaching. When the signal is strong enough, it calls that target's `onIntent` function.",
  "observeHeading": "1 · Observe movement",
  "observeBody": "On desktop, the engine reads pointer movement. On touch devices, it reads scrolling. It starts only when the user interacts and settles again when movement stops.",
  "decideHeading": "2 · Estimate the target",
  "decideBody": "The engine compares the user's movement with the visible intent targets. Targets outside the viewport are excluded from active calculations.",
  "fireHeading": "3 · Run your action",
  "fireBody": "When one target becomes likely enough, its `onIntent` callback runs once. It can run again after the user moves away and later approaches the target again.",
  "devicesHeading": "Desktop and mobile",
  "devices.desktop": "Desktop prediction follows pointer movement in two dimensions.",
  "devices.mobile": "Mobile prediction follows vertical scroll movement. The first scroll activates it.",
  "devices.visible": "Hidden and off-screen targets are ignored, including elements hidden by responsive CSS.",
  "physicsHeading": "The physics idea",
  "physicsEnergy": "Imagine each target as a small gravity well. Movement creates **kinetic energy**, while distance from a target creates **potential energy**. A fast pointer or scroll still has motion left; a slow movement close to a target looks like it is settling there. The engine uses a thermodynamics-style rule that treats these lower-energy destinations as more likely.",
  "physicsKalman": "Browser movement data contains tiny jumps and mistakes. A **Kalman filter** smooths that noise before the physics calculation. In simple terms, it helps the engine separate deliberate movement from shaky measurements. This all stays inside the library; applications only receive `onIntent`.",
  "paperNote": "[Read the research paper](https://intentlink.dev/paper). This is a placeholder link until the ACM publication is available.",
};

export { howItWorks };
