"use client";

import { useState } from "react";
import { CopyButton } from "./copy-button";
import { cn } from "@/utils/class-names";
import {
  packageManager,
  packageManagers,
  installCommands,
  type PackageManager,
} from "@/constants/package-managers";

interface PackageManagerInstallProps {
  className?: string;
}

/**
 * Docs install block: a folder-tab strip (npm/pnpm/yarn/bun) fused to a plain
 * dark code block. The active tab blends into the block below; a copy button
 * sits top-right. No card chrome, no traffic-light dots, no cursor.
 */
const PackageManagerInstall = ({ className }: PackageManagerInstallProps) => {
  const [selected, setSelected] = useState<PackageManager>(packageManager.npm);
  const command = installCommands[selected];

  return (
    <div className={className}>
      <div className="flex gap-0.5">
        {packageManagers.map((manager) => {
          const isActive = manager === selected;
          return (
            <button
              key={manager}
              type="button"
              onClick={() => setSelected(manager)}
              className={cn(
                "rounded-t-[7px] border border-b-0 px-3.5 py-1.5 font-mono text-xs font-medium transition-colors",
                isActive
                  ? "border-black/20 bg-term-bg text-term-ink"
                  : "border-line text-ink-3 hover:bg-black/[0.03] hover:text-ink",
              )}
            >
              {manager}
            </button>
          );
        })}
      </div>
      <div className="relative rounded-b-[10px] rounded-tr-[10px] bg-term-bg px-[18px] py-4">
        <div className="font-mono text-[13px] leading-[1.7] text-term-ink">
          <span className="text-term-dim">$</span> {command}
        </div>
        <CopyButton
          value={command}
          className="absolute right-2.5 top-2.5 rounded-md border border-white/[0.18] bg-white/[0.08] px-2.5 py-1 text-[11px] text-[#c7d0e0] hover:text-term-ink"
        />
      </div>
    </div>
  );
};

export { PackageManagerInstall };
