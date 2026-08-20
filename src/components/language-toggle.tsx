"use client";

import Link from "next/link";
import { GlobeIcon } from "./icons";
import type { Locale } from "@/i18n/config";

export function LanguageToggle({
  targetLocale,
  label,
}: {
  targetLocale: Locale;
  label: string;
}) {
  return (
    <Link
      href={`/${targetLocale}`}
      onClick={() => {
        document.cookie = `locale=${targetLocale};path=/;max-age=31536000;samesite=lax`;
      }}
      aria-label={label}
      title={label}
      lang={targetLocale}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <GlobeIcon className="h-[16px] w-[16px]" />
      <span>{label}</span>
    </Link>
  );
}
