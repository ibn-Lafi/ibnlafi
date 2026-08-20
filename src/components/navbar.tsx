"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { CloseIcon, MenuIcon } from "./icons";
import type { Locale } from "@/i18n/config";
import type { NavContent } from "@/content/types";

const sectionIds = [
  "about",
  "experience",
  "skills",
  "achievements",
  "education",
  "courses",
] as const;

export function Navbar({
  locale,
  nav,
}: {
  locale: Locale;
  nav: NavContent;
}) {
  const [open, setOpen] = useState(false);
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";

  const links = sectionIds.map((id) => ({
    id,
    label: nav.links[id],
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href={`/${locale}`}
          className="text-base font-semibold tracking-tight"
        >
          {nav.brand}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle targetLocale={otherLocale} label={nav.languageToggle} />
          <ThemeToggle label={nav.themeToggle.toggle} />
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {nav.links.contact}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle label={nav.themeToggle.toggle} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? nav.menuClose : nav.menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted"
          >
            {open ? (
              <CloseIcon className="h-[18px] w-[18px]" />
            ) : (
              <MenuIcon className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <LanguageToggle
              targetLocale={otherLocale}
              label={nav.languageToggle}
            />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 flex-1 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background"
            >
              {nav.links.contact}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
