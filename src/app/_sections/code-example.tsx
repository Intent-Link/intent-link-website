import { Section } from "@/components/ui/section";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface CodeExampleProps {
  text: SectionsText["codeExample"];
}

/**
 * Code Example (04) — "Two lines for the common case."
 * Dark card with simple/custom tabs, syntax-highlighted blocks, copy + "Copy for LLM".
 * TODO: port via TerminalCard + CodeBlock + CopyButton.
 */
const CodeExample = ({ text }: CodeExampleProps) => {
  return (
    <Section
      id={sectionIds.codeExample}
      testId={testIds.section.codeExample}
      ariaLabel={text.ariaLabel}
      className="border-b border-line-soft"
    >
      <p className="px-6 pt-10 text-xs uppercase tracking-wide text-ink-3">{text.eyebrow}</p>
      {/* TODO: code example */}
    </Section>
  );
};

export { CodeExample };
