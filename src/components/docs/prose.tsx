import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

/** Long-form docs typography wrapper. TODO: port heading/code/link styles. */
const Prose = ({ children, className }: ProseProps) => {
  return (
    <article data-testid={testIds.prose.root} className={cn("max-w-2xl", className)}>
      {children}
    </article>
  );
};

export { Prose };
