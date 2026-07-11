"use client";

import Link from "next/link";
import { useState } from "react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CodeBlock } from "@/components/ui/code-block";
import { CopyButton } from "@/components/ui/copy-button";
import { HeroInstall } from "@/components/ui/hero-install";
import { cn } from "@/utils/class-names";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import { localePath } from "@/constants/routes";
import { docsEntryPath } from "@/constants/docs-nav";
import { codeLanguage } from "@/utils/syntax-highlight";
import type { SectionsText } from "@/i18n/messages/sections";
import type { Locale } from "@/i18n/locales";

interface CodeExampleProps {
  text: SectionsText["codeExample"];
  locale: Locale;
}

const snippets = {
  simple: `// app/layout.jsx — wrap your app once
import { IntentProvider } from 'intent-link'

export default function RootLayout({ children }) {
  return <IntentProvider>{children}</IntentProvider>
}

// any link — prefetch on predicted intent
import { IntentLink } from 'intent-link'
import { useRouter } from 'next/navigation'

function ProductCard({ href }) {
  const router = useRouter()
  return (
    <IntentLink href={href} onIntent={() => router.prefetch(href)}>
      View product
    </IntentLink>
  )
}`,
  custom: `// read the raw probability stream — build anything
import { useContext, useRef, useEffect, useId } from 'react'
import { IntentContext } from 'intent-link'

function PredictiveButton({ onIntent, children }) {
  const { probabilities, registerLink, unregisterLink } = useContext(IntentContext)
  const ref = useRef(null)
  const id = useId()

  useEffect(() => {
    if (!ref.current) return
    registerLink(id, ref.current)
    return () => unregisterLink(id)
  }, [id, registerLink, unregisterLink])

  const p = probabilities[id]?.probability ?? 0
  useEffect(() => { if (p > 0.5) onIntent?.() }, [p])

  return <button ref={ref}>{children}</button>
}`,
} as const;

/** The two-line common case, shown beside the install command in the quickstart card. */
const dropInSnippet = `// then, in your link
import { IntentLink } from 'intent-link'
<IntentLink href="/pricing"
  onIntent={() => router.prefetch('/pricing')}>
  Pricing
</IntentLink>
// fires once, before the click lands`;

const tabKeys = ["simple", "custom"] as const;
const trafficLights = ["#ff5f57", "#febc2e", "#28c840"] as const;

const forLlm = (code: string): string =>
  `intent-link usage example. Use this to answer questions about wiring it up:\n\n${code}`;

const clipboardIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const sparkleIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1" />
  </svg>
);

/** Code example (04) — simple/custom tabs with copy + "Copy for LLM". */
const CodeExample = ({ text, locale }: CodeExampleProps) => {
  const [tab, setTab] = useState<keyof typeof snippets>("simple");
  const code = snippets[tab];

  const pillClass =
    "inline-flex items-center gap-1.5 rounded-md border border-white/[0.18] px-2.5 py-1.5 font-mono text-[11px] text-[#c7d0e0] hover:text-term-ink";

  return (
    <Section
      id={sectionIds.codeExample}
      testId={testIds.section.codeExample}
      ariaLabel={text.ariaLabel}
      className="border-t border-line-soft bg-white"
    >
      <div className="mx-auto max-w-[1240px] px-8 pb-[100px] pt-[88px]">
        <SectionHeading
          eyebrow={text.eyebrow}
          heading={text.heading}
          body={text.body}
          className="mb-[30px] max-w-[52ch]"
        />

        <div className="grid items-start gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="overflow-hidden rounded-2xl border border-black/[0.25] bg-term-bg shadow-[0_30px_60px_-30px_rgba(11,18,32,.5)]">
            <div className="flex items-center justify-between gap-2.5 border-b border-white/[0.08] px-[14px] py-[10px]">
              <div className="flex items-center gap-3">
                <span className="flex gap-[7px]">
                  {trafficLights.map((color) => (
                    <span
                      key={color}
                      className="block h-[11px] w-[11px] rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>
                <div className="flex gap-1">
                  {tabKeys.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setTab(value)}
                      className={cn(
                        "rounded-md px-3.5 py-1.5 font-mono text-xs font-semibold transition-colors",
                        tab === value
                          ? "bg-white/[0.12] text-[#e8edf6]"
                          : "text-[#7d8aa0] hover:bg-white/[0.06] hover:text-[#c7d0e0]",
                      )}
                    >
                      {text.tabs[value]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <CopyButton
                  value={code}
                  icon={clipboardIcon}
                  labelClassName="hidden sm:inline"
                  className={pillClass}
                />
                <CopyButton
                  value={forLlm(code)}
                  label={text.copyForLlm}
                  icon={sparkleIcon}
                  labelClassName="hidden sm:inline"
                  className={pillClass}
                />
              </div>
            </div>

            <CodeBlock
              code={code}
              language={codeLanguage.tsx}
              showCopy={false}
              className="rounded-none border-0 bg-transparent"
            />
          </div>

          <HeroInstall title={text.quickstartLabel} snippet={dropInSnippet} />
        </div>

        <Link
          href={localePath(locale, docsEntryPath)}
          className="mt-4 inline-block font-mono text-xs text-ink-3 no-underline"
        >
          {text.fullApiLead}
          <span className="text-accent">{text.fullApiLink}</span>
        </Link>
      </div>
    </Section>
  );
};

export { CodeExample };
