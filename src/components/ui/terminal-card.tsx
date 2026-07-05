import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

interface TerminalCardProps {
  title?: string;
  toolbar?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Dark terminal card: traffic-light header + optional tab row + body. */
const TerminalCard = ({ title, toolbar, children, className }: TerminalCardProps) => (
  <div
    data-testid={testIds.terminalCard.root}
    className={cn(
      "overflow-hidden rounded-lg border border-line bg-term-bg text-term-ink",
      className,
    )}
  >
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      {title && <span className="ml-2 font-mono text-xs text-term-dim">{title}</span>}
      {toolbar && <div className="ml-auto">{toolbar}</div>}
    </div>
    <div className="p-4 font-mono text-sm">{children}</div>
  </div>
);

export { TerminalCard };
