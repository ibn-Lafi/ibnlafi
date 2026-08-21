import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import type { Locale } from "@/i18n/config";
import type { NavContent } from "@/content/types";

export function Navbar({
  locale,
  nav,
}: {
  locale: Locale;
  nav: NavContent;
}) {
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <div className="flex items-center gap-2 rounded-full border border-border bg-background/85 px-2 py-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <LanguageToggle targetLocale={otherLocale} label={nav.languageToggle} />
        <ThemeToggle label={nav.themeToggle.toggle} />
      </div>
    </header>
  );
}
