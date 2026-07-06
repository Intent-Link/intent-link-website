"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames } from "@/i18n/locales";
import { useLocale } from "@/i18n/locale-provider";
import { appRoutes, localePath, switchLocalePath } from "@/constants/routes";
import { useCommonText } from "@/hooks/use-common-text";
import { dismissReason, useDismissable, type DismissReason } from "@/hooks/use-dismissable";
import { cn } from "@/utils/class-names";

const panelWidth = 184;
const rowHeight = 40;
const maxPanelHeight = 320;
const viewportMargin = 12;

interface LanguageDropdownProps {
  /** Force the panel to open upward (for the footer, which sits at the page bottom). */
  openUp?: boolean;
  /** Render the trigger as a bordered white box (footer) vs. plain text (nav). */
  boxed?: boolean;
  className?: string;
}

/** Language picker used in the nav (plain) and footer (bordered box). */
const LanguageDropdown = ({ openUp = false, boxed = false, className }: LanguageDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(openUp);
  const [alignLeft, setAlignLeft] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const text = useCommonText();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Escape returns focus to the trigger; clicking elsewhere just closes.
  const dismiss = useCallback((reason: DismissReason) => {
    setOpen(false);
    if (reason === dismissReason.escape) {
      triggerRef.current?.focus();
    }
  }, []);

  // Selecting an option closes the panel and hands focus back to the trigger
  // so keyboard users keep their place while the navigation happens.
  const selectOption = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useDismissable({ when: open, onDismiss: dismiss, outsideRef: wrapperRef });

  // Decide vertical/horizontal placement from the trigger's viewport position
  // whenever the panel opens. `openUp` forces upward; otherwise flip only when
  // there isn't enough room below.
  useLayoutEffect(() => {
    if (!open) {
      return;
    }

    const trigger = triggerRef.current;
    if (!trigger) {
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const panelHeight = Math.min(maxPanelHeight, locales.length * rowHeight);

    const spaceBelow = window.innerHeight - rect.bottom - viewportMargin;
    const spaceAbove = rect.top - viewportMargin;
    // Force upward when requested; otherwise flip up only if below can't fit
    // but above can.
    setDropUp(openUp || (spaceBelow < panelHeight && spaceAbove > spaceBelow));

    // Panel is right-aligned by default (extends leftward from the trigger's
    // right edge). If that would push it off the left of the viewport, switch
    // to left-aligned so it opens rightward instead.
    setAlignLeft(rect.right - panelWidth < viewportMargin);
  }, [open, openUp]);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative", className)}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={text.language.ariaLabel}
        onClick={() => setOpen((previous) => !previous)}
        className={cn(
          "flex items-center gap-1.5 rounded-[7px] px-2 py-[7px] text-[13px] font-medium text-ink-2",
          boxed && "border border-line bg-surface px-2.5 font-mono text-[12px]",
        )}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
        </svg>
        <span>{localeNames[locale]}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className={cn(
            "absolute overflow-auto rounded-[14px] border border-line bg-surface p-[7px] shadow-[0_20px_44px_-14px_rgba(0,0,0,0.24)]",
            alignLeft ? "left-0" : "right-0",
            dropUp ? "bottom-full mb-1" : "mt-1",
          )}
          style={{ width: panelWidth, maxHeight: maxPanelHeight }}
        >
          {locales.map((option) => (
            <li key={option}>
              <Link
                role="option"
                aria-selected={option === locale}
                href={switchLocalePath(pathname ?? localePath(locale, appRoutes.home), option)}
                scroll={false}
                onClick={selectOption}
                onKeyDown={(event) => {
                  // role="option" promises Space activation; anchors only activate on Enter.
                  if (event.key === " ") {
                    event.preventDefault();
                    event.currentTarget.click();
                  }
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-[9px] px-[11px] py-[9px] text-left text-[13.5px] text-ink",
                  option === locale ? "bg-accent/10 font-semibold" : "font-normal",
                )}
              >
                <span>{localeNames[option]}</span>
                <span
                  className={cn(
                    "font-mono text-[10px]",
                    option === locale ? "text-accent" : "text-ink-3",
                  )}
                >
                  {option}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { LanguageDropdown };
