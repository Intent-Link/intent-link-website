"use client";

import { useState } from "react";
import { TerminalCard } from "./terminal-card";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";
import { cn } from "@/utils/class-names";
import { codeLanguage } from "@/utils/syntax-highlight";
import {
  packageManager,
  packageManagers,
  installCommands,
  type PackageManager,
} from "@/constants/package-managers";

interface HeroInstallProps {
  /** Terminal header prefix; the selected manager is appended (e.g. "quickstart — npm"). */
  title?: string;
  /** Drop-in snippet rendered below the install command. */
  snippet: string;
}

/**
 * Bespoke hero install card: folder-style npm/pnpm/yarn/bun tabs that swap the
 * command, a blinking-cursor command line with a copy pill, and a drop-in
 * snippet — all inside the dark terminal card.
 */
const HeroInstall = ({ title, snippet }: HeroInstallProps) => {
  const [selected, setSelected] = useState<PackageManager>(packageManager.npm);
  const command = installCommands[selected];

  return (
    <TerminalCard title={title ? `${title} — ${selected}` : undefined}>
      <div className="flex gap-0.5">
        {packageManagers.map((manager) => {
          const active = manager === selected;
          return (
            <button
              key={manager}
              type="button"
              onClick={() => setSelected(manager)}
              className={cn(
                "rounded-t-md px-[15px] py-[7px] font-mono text-xs font-medium transition-colors",
                active ? "bg-white/10 text-term-ink" : "text-term-dim",
              )}
            >
              {manager}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
        <span className="min-w-0 truncate">
          <span className="text-term-dim">$ </span>
          <span className="text-term-ink">{command}</span>
          <span
            aria-hidden
            className="ml-[3px] inline-block h-[15px] w-2 bg-accent align-[-2px] animate-[il-blink_1.1s_step-end_infinite]"
          />
        </span>
        <CopyButton
          value={command}
          className="flex-none rounded-md border border-white/[0.18] px-[11px] py-1 text-[11px] text-term-dim hover:text-term-ink"
          copiedClassName="border-accent/40 bg-accent/25 text-[#82aaff]"
        />
      </div>

      <div className="mt-4">
        <CodeBlock
          code={snippet}
          language={codeLanguage.tsx}
          showCopy={false}
          className="border-0 bg-transparent p-0 leading-[1.85]"
        />
      </div>
    </TerminalCard>
  );
};

export { HeroInstall };
