"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/site";
import { testIds } from "@/constants/test-ids";
import { useCommonText } from "@/hooks/use-common-text";

/** Hamburger toggle + collapsible mobile nav drawer. TODO: port styling. */
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const text = useCommonText();

  return (
    <div data-testid={testIds.mobileMenu.root} className="md:hidden">
      <button
        type="button"
        data-testid={testIds.mobileMenu.trigger}
        aria-label={text.aria.toggleMenu}
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className="p-2"
      >
        ☰
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-line-soft bg-paper p-4">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              data-testid={testIds.mobileMenu.link}
              href={navLink.href}
              className="block py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {text.nav[navLink.id]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export { MobileMenu };
