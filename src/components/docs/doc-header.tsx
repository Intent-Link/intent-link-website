"use client";

import { useCallback, useState } from "react";
import { CopyButton } from "@/components/ui/copy-button";
import { useCommonText } from "@/hooks/use-common-text";
import { useDismissable } from "@/hooks/use-dismissable";

interface DocHeaderProps {
  /** Resolved group title (e.g. "Getting Started"). */
  group: string;
  /** Resolved page title (e.g. "Quickstart"). */
  title: string;
  /** Pre-rendered Markdown for this doc — reused for "Copy for LLM" + the modal. */
  markdown: string;
}

/**
 * Content-column header bar: a mono breadcrumb on the left, and on the right a
 * "Copy for LLM" pill (copies an LLM-primed prompt built from the doc Markdown)
 * plus a "View as Markdown" button that opens a modal of the raw Markdown.
 */
const DocHeader = ({ group, title, markdown }: DocHeaderProps) => {
  const commonText = useCommonText();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  useDismissable({ when: isModalOpen, onDismiss: closeModal });

  const crumb = `${group} / ${title}`;
  const llmValue = `intent-link docs — ${title}. Use this to answer questions:\n\n${markdown}`;
  const pillClassName =
    "inline-flex items-center gap-1.5 rounded-[7px] border border-line bg-paper px-[11px] py-1.5 font-mono text-[11.5px] text-ink-2 transition-colors hover:text-ink";

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-[12px] text-ink-3">{crumb}</div>
        <div className="flex gap-[7px]">
          <CopyButton
            value={llmValue}
            label={commonText.docs.copyForLlm}
            className={pillClassName}
          />
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={pillClassName}
          >
            {commonText.docs.viewMarkdown}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-10"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="max-h-[80vh] w-full max-w-[760px] overflow-auto rounded-[14px] bg-paper shadow-[0_30px_70px_-20px_rgba(0,0,0,0.4)]"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-line-soft bg-paper px-[18px] py-3.5">
              <span className="font-mono text-[12px] text-ink-2">{crumb} · markdown</span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-2 transition-colors hover:text-ink"
              >
                {commonText.docs.close}
              </button>
            </div>
            <pre className="m-0 whitespace-pre-wrap px-5 py-5 font-mono text-[12.5px] leading-[1.6] text-ink-2">
              {markdown}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export { DocHeader };
