import { site } from "@/constants/site";
import { appRoutes, externalUrls } from "@/constants/routes";
import { installCommands } from "@/constants/package-managers";

/** Concise machine-facing summary of the product (footer "For AI" link). */
// Pure GET with no request data — prerender at build time.
export const dynamic = "force-static";

const GET = async () => {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.tagline}. Reads pointer/scroll motion, estimates where it's heading with a Kalman filter (velocity + confidence), and fires \`onIntent\` once a target is the likely destination, before the click.`,
    "",
    `Version ${site.version} · MIT · react >= 18, react-dom >= 18, next >= 13.`,
    "",
    "## Install",
    "",
    installCommands.npm,
    "",
    "## Exports",
    "",
    "- IntentProvider: runs the prediction engine; mount once near the root.",
    "- IntentLink: drop-in for next/link with importance/cost props and onIntent.",
    "- IntentContext: raw probability stream + registerLink/unregisterLink.",
    "- Types: IntentLinkProps, PhysicsState, IntentContextType.",
    "",
    "## Model",
    "",
    "weight = kineticAgent · kineticTarget · potential",
    "probability = weight / (1 + Σ weights)",
    "utility = (probability × importanceWeight) − costWeight; onIntent fires once when utility > 0, resets when probability < 0.05.",
    "",
    "## Links",
    "",
    `Docs: ${appRoutes.docs}`,
    `Full reference: ${appRoutes.llmsFullText}`,
    `Repo: ${externalUrls.github}`,
    `npm: ${externalUrls.npm}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};

export { GET };
