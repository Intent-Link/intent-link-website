"use client";

import Link from "next/link";
import { appRoutes, localePath } from "@/constants/routes";
import { useLocale } from "@/i18n/locale-provider";
import { useCommonText } from "@/hooks/use-common-text";

/** Locale-tree 404 (unknown doc slug or unmatched path). Unknown-locale paths use Next's default. */
const NotFound = () => {
  const locale = useLocale();
  const text = useCommonText().notFound;

  return (
    <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-4 px-8 py-[120px]">
      <p className="font-mono text-[13px] text-ink-3">404</p>
      <h1 className="text-[28px] font-extrabold tracking-[-0.03em] text-ink">{text.title}</h1>
      <Link href={localePath(locale, appRoutes.home)} className="text-accent hover:underline">
        {text.backHome}
      </Link>
    </div>
  );
};

export default NotFound;
