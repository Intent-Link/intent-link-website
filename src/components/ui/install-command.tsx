import { CopyButton } from "./copy-button";
import { cn } from "@/utils/class-names";
import { installCommands } from "@/constants/package-managers";

interface InstallCommandProps {
  className?: string;
}

/** Compact dark install pill: `$ npm install intent-link` with a copy button. */
const InstallCommand = ({ className }: InstallCommandProps) => (
  <div
    className={cn(
      "inline-flex items-center gap-3 rounded-[10px] border border-black/25 bg-term-bg py-2.5 pl-4 pr-3 shadow-[0_16px_34px_-18px_rgba(0,0,0,.4)]",
      className,
    )}
  >
    <span className="font-mono text-[14px] text-term-ink">
      <span className="text-term-dim">$ </span>
      {installCommands.npm}
    </span>
    <CopyButton
      value={installCommands.npm}
      className="rounded-[7px] border border-white/20 px-3 py-1.5 text-[11.5px] text-term-dim hover:text-term-ink"
      copiedClassName="border-accent/40 bg-accent/25 text-[#82aaff]"
    />
  </div>
);

export { InstallCommand };
