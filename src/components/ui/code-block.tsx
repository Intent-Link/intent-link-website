import { CopyButton } from "./copy-button";
import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

interface CodeBlockProps {
  code: string;
  className?: string;
}

/** Syntax-highlighted <pre> with a copy button. TODO: wire syntax-highlight util. */
const CodeBlock = ({ code, className }: CodeBlockProps) => {
  return (
    <div data-testid={testIds.codeBlock.root} className={cn("relative", className)}>
      <CopyButton value={code} className="absolute right-2 top-2" />
      <pre className="overflow-x-auto font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export { CodeBlock };
