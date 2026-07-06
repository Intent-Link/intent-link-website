import type { ReactNode } from "react";
import { cn } from "@/utils/class-names";

interface TerminalCardProps {
  title?: string;
  toolbar?: ReactNode;
  children: ReactNode;
  /** Show the macOS traffic-light dots in the header. Defaults to true. */
  chrome?: boolean;
  className?: string;
}

/** Dark terminal card: radius 16 + drop shadow, traffic-light header, body. */
const TerminalCard = ({ title, toolbar, children, chrome = true, className }: TerminalCardProps) => (
  <div
    className={cn(
      "overflow-hidden rounded-2xl border border-black/20 bg-term-bg text-term-ink shadow-[0_30px_60px_-30px_rgba(11,18,32,0.5)]",
      className,
    )}
  >
    {(chrome || title || toolbar) && (
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
        {chrome && (
          <>
            <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
          </>
        )}
        {title && <span className="ml-2.5 font-mono text-[11.5px] text-term-dim">{title}</span>}
        {toolbar && <div className="ml-auto">{toolbar}</div>}
      </div>
    )}
    <div className="p-4 font-mono text-[13.5px]">{children}</div>
  </div>
);

export { TerminalCard };
