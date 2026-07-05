import { testConstants } from "@tests/constants";
import type { DemoTile, PhysicsState } from "@/types";

/**
 * Hand-rolled factories (no faker). Convention: createTestX(overrides?) that
 * spreads defaults-from-constants then overrides.
 */

const createTestDemoTile = (overrides?: Partial<DemoTile>): DemoTile => ({
  id: testConstants.demoTile.id,
  label: testConstants.demoTile.label,
  href: testConstants.demoTile.href,
  ...overrides,
});

const createTestPhysicsState = (
  overrides?: Partial<PhysicsState>,
): PhysicsState => ({
  probability: testConstants.physics.probability,
  weight: testConstants.physics.weight,
  kineticAgent: testConstants.physics.kineticAgent,
  kineticTarget: testConstants.physics.kineticTarget,
  potential: testConstants.physics.potential,
  ...overrides,
});

export { createTestDemoTile, createTestPhysicsState };
