import { Fragment } from "react";
import { CopyButton } from "./copy-button";
import { cn } from "@/utils/class-names";
import { syntaxColors } from "@/constants/syntax";
import { tokenize, codeLanguage, type CodeLanguage } from "@/utils/syntax-highlight";

interface CodeBlockProps {
  code: string;
  language?: CodeLanguage;
  /** Render the built-in copy button. Disable when the parent supplies its own. */
  showCopy?: boolean;
  className?: string;
}

/**
 * Syntax-highlighted `<pre>` on the dark terminal surface with a copy button.
 * Highlighting is a pure token map (`tokenize`) → colored spans, so this stays
 * a server component; only the copy button is a client island.
 */
const CodeBlock = ({ code, language = codeLanguage.text, showCopy = true, className }: CodeBlockProps) => {
  const tokens = tokenize(code, language);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[10px] border border-black/20 bg-term-bg",
        className,
      )}
    >
      {showCopy && (
        <CopyButton
          value={code}
          label="copy"
          className="absolute right-2.5 top-2.5 z-10 rounded-md border border-white/[0.18] bg-white/[0.08] px-2.5 py-1 text-[11px] text-[#c7d0e0] transition-colors hover:text-term-ink"
        />
      )}
      <pre className="overflow-x-auto px-[22px] py-5 font-mono text-[13px] leading-[1.75] text-term-ink [tab-size:2]">
        <code>
          {tokens.map((token, tokenIndex) => (
            <Fragment key={tokenIndex}>
              {token.kind === "plain" ? (
                token.value
              ) : (
                <span style={{ color: syntaxColors[token.kind] }}>{token.value}</span>
              )}
            </Fragment>
          ))}
        </code>
      </pre>
    </div>
  );
};

export { CodeBlock };
