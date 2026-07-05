/**
 * App-local shared types. Product types (IntentLinkProps, PhysicsState,
 * IntentContextType) come straight from the `intent-link` package — re-exported
 * here for convenient `@/types` imports.
 */
/** A demo storefront tile for the prediction-field section. */
interface DemoTile {
  id: string;
  label: string;
  href: string;
}

export type {
  IntentLinkProps,
  PhysicsState,
  IntentContextType,
} from "intent-link";
export type { DemoTile };
