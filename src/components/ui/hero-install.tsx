"use client";

import { useEffect, useState } from "react";
import { TerminalCard } from "./terminal-card";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";
import { cn } from "@/utils/class-names";
import { codeLanguage } from "@/utils/syntax-highlight";
import { useMediaQuery } from "@/hooks/use-media-query";
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

/** ~40wpm-ish typing cadence for the command line, in milliseconds per character. */
const typeIntervalMs = 38;

/** Longest install command, used to reserve width so retyping never reflows the row. */
const longestInstallCommand = Object.values(installCommands).reduce((longest, current) =>
  current.length > longest.length ? current : longest,
);

/** "$ " prompt + longest command, in `ch` units — the fixed width of the command row. */
const commandRowWidthCh = `${longestInstallCommand.length + 2}ch`;

/** Pure: the command text visible after `charCount` characters have been typed. */
const typedSlice = (command: string, charCount: number): string => command.slice(0, charCount);

/**
 * Types `command` out one character at a time. Restarts whenever `command`
 * changes (e.g. switching package-manager tabs cancels the in-flight type and
 * retypes the new command). Renders the full string immediately when the
 * user prefers reduced motion.
 */
const useTypewriter = (command: string, enabled: boolean): string => {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCharCount(count);
      if (count >= command.length) clearInterval(interval);
    }, typeIntervalMs);

    return () => {
      clearInterval(interval);
      setCharCount(0);
    };
  }, [command, enabled]);

  return enabled ? typedSlice(command, charCount) : command;
};

/**
 * Bespoke hero install card: folder-style npm/pnpm/yarn/bun tabs that swap the
 * command, a blinking-cursor command line with a copy pill, and a drop-in
 * snippet — all inside the dark terminal card.
 */
const HeroInstall = ({ title, snippet }: HeroInstallProps) => {
  const [selected, setSelected] = useState<PackageManager>(packageManager.npm);
  const command = installCommands[selected];
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const typed = useTypewriter(command, !reducedMotion);

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
        {/* min-width reserves space for the longest install command so switching tabs never reflows the row. */}
        <span className="truncate" style={{ minWidth: commandRowWidthCh }}>
          <span className="text-term-dim">$ </span>
          <span className="text-term-ink">{typed}</span>
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
