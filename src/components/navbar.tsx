import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
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
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";

  const links = sectionIds.map((id) => ({
    id,
    label: nav.links[id],
  }));

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href={`/${locale}`}
          aria-label={nav.brand}
          title={nav.brand}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold tracking-tight transition-all hover:-translate-y-0.5 hover:shadow-sm"
        >
          {nav.monogram}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground active:scale-95"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle targetLocale={otherLocale} label={nav.languageToggle} />
          <ThemeToggle label={nav.themeToggle.toggle} />
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:opacity-90 active:scale-95 sm:inline-flex"
          >
            {nav.links.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
