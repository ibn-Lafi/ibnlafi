"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border text-foreground transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-sm active:scale-90 active:duration-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <SunIcon className="absolute h-[18px] w-[18px] rotate-90 scale-50 opacity-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <MoonIcon className="absolute h-[18px] w-[18px] rotate-0 scale-100 opacity-100 transition-all duration-300 ease-out dark:-rotate-90 dark:scale-50 dark:opacity-0" />
    </button>
  );
}
