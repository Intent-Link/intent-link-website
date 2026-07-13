import { site } from "@/constants/site";
import { externalUrls } from "@/constants/routes";
import { installCommands } from "@/constants/package-managers";
import { docSlugs } from "@/constants/docs-nav";
import { getDocContent } from "@/content/docs";
import { docToMarkdown } from "@/content/docs/markdown";

/**
 * The single machine-facing reference. It combines exact implementation notes
 * with the customer documentation generated from the same source as the site.
 */
export const dynamic = "force-static";

const implementationDetails = `## Public contract

- IntentProvider creates and runs one shared intent engine. Mount it once near the application root.
- IntentLink wraps Next.js Link, forwards link and anchor props, and adds importance, cost, and onIntent.
- useIntentTarget returns a callback ref for observing any HTML element.
- onIntent has the type () => void. It does not expose a URL, probability, utility, or physics state.
- Public types are IntentLinkProps, IntentLevel, and UseIntentTargetOptions.
- Defaults are importance="medium" and cost="low".
- IntentLink always sets Next.js prefetch={false}. Predictive prefetching is opt-in through onIntent={() => router.prefetch(href)}.

## Implementation details

### Provider and target lifecycle

IntentProvider creates one IntentEngine, starts it in a React effect, and disposes it during cleanup. A nested provider produces a development warning. Disposal removes global listeners, disconnects the observer, clears visible targets, and cancels any scheduled animation frame.

useIntentTarget gives each target a stable React useId. It registers the current HTML element only when an onIntent callback exists. It updates importance, cost, and the latest callback without exposing engine state to React consumers. Changing or unmounting the element unregisters it. Calling the hook outside IntentProvider produces a warning.

### Input and scheduling

The engine checks matchMedia("(pointer: coarse)") when it starts. Fine-pointer devices listen to passive mousemove events. Coarse-pointer devices listen to passive scroll events. The first relevant event initializes the motion estimator and wakes the engine.

Calculations run in requestAnimationFrame, not through React rendering. After input stops, the loop continues briefly and then sleeps after 500 milliseconds. A newly visible target can wake the loop only while pointer or scroll input is still active.

### Kalman filtering

Browser movement events are noisy. A Kalman filter smooths that noise and estimates motion from recent samples. Desktop uses a two-dimensional filter for pointer position and velocity. Mobile uses a one-dimensional filter for vertical scrolling. The engine also reads velocity variance from the filter as its uncertainty estimate and clamps it to at least 1e-8 for numerical safety.

The Kalman filter is an internal measurement tool. Consumers cannot configure it and do not receive its state.

### Visibility and high-density pages

An IntersectionObserver tracks which registered targets intersect the viewport. Only intersecting targets enter the active calculation set. Each frame also verifies that a target is genuinely visible and has usable geometry, so elements hidden by responsive CSS do not participate merely because they still exist in the DOM.

When a target leaves the viewport, it is removed from active calculations and its one-shot trigger is reset. When IntersectionObserver is unavailable, registered targets fall back to direct visibility checks.

### Target geometry and energy score

For each visible target, the engine measures the target's center and its effective size:

    effectiveSize = max(target width, target height, 1)


On desktop, distance is measured in two dimensions from the pointer to the target center. On mobile, horizontal distance is ignored and vertical distance is measured from a point 55% down the viewport.

The implementation forms three negative exponents:

    kineticEnergyExponentAgent = -(agentVelocity²) / (2 × velocityVariance)
    kineticEnergyExponentTarget = -(targetVelocity²) / (2 × velocityVariance)
    potentialEnergyDifferenceExponent = -(π × e × distance²) / effectiveSize²


Desktop supplies agent velocity and treats target velocity as zero. Mobile supplies scroll velocity as target velocity and treats agent velocity as zero. Their sum becomes an unnormalized target score:

    unnormalizedProbability = exp(
      kineticEnergyExponentAgent
      + kineticEnergyExponentTarget
      + potentialEnergyDifferenceExponent
    )


The naming comes from a thermodynamic model: motion contributes kinetic energy, separation contributes potential-energy difference, and the exponential favors lower-energy states. The gravity comparison is an intuition for targets becoming more attractive as the user settles near them; it is not a literal browser force.

### Desktop and mobile probability

Desktop compares all visible targets and includes a constant null state representing "none of these targets":

    partitionFunction = 1 + sum(all visible unnormalized probabilities)
    normalizedProbability = unnormalizedProbability / partitionFunction


Mobile uses the unnormalized probability directly. This avoids diluting a vertically approached target merely because several links are visible at once.

### Decision, firing, and rearming

Importance and cost map to fixed product-level weights:

    importance: high=1, medium=0.5, low=0.2
    cost:       high=0.8, medium=0.4, low=0.1

    expectedUtility = decisionProbability × importanceWeight - costWeight


When expected utility becomes greater than zero, the engine queues onIntent once and locks that target. The lock is released when its decision probability falls below 0.05 or when it leaves the viewport. Callbacks run after the frame calculation and are isolated with error handling so one consumer callback does not break the engine loop.

### Appropriate onIntent work

onIntent should start safe, repeatable preparation work: route prefetching, data warming, image preloading, or code loading. Irreversible actions such as purchases, messages, analytics commitments, or form submissions must remain behind an actual user action.
`;

const GET = async () => {
  const docs = docSlugs
    .map((slug) => docToMarkdown(getDocContent(slug)))
    .join("\n\n---\n\n");

  const body = [
    `# ${site.name}: complete reference`,
    "",
    `> ${site.tagline}. Version ${site.version} · MIT.`,
    "",
    "## Install",
    "",
    installCommands.npm,
    "",
    implementationDetails,
    "",
    "## Customer documentation",
    "",
    docs,
    "",
    "## Project links",
    "",
    `Repository: ${externalUrls.github}`,
    `npm: ${externalUrls.npm}`,
    "Research paper: https://intentlink.dev/paper (placeholder until ACM publication)",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};

export { GET };
