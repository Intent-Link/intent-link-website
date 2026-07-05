/** Package-manager tabs for install commands. Const map + derived union. */
const packageManager = {
  npm: "npm",
  pnpm: "pnpm",
  yarn: "yarn",
  bun: "bun",
} as const;

type PackageManager = (typeof packageManager)[keyof typeof packageManager];

const packageManagers: PackageManager[] = [
  packageManager.npm,
  packageManager.pnpm,
  packageManager.yarn,
  packageManager.bun,
];

const installCommands: Record<PackageManager, string> = {
  [packageManager.npm]: "npm install intent-link",
  [packageManager.pnpm]: "pnpm add intent-link",
  [packageManager.yarn]: "yarn add intent-link",
  [packageManager.bun]: "bun add intent-link",
};

export { packageManager, packageManagers, installCommands };
export type { PackageManager };
