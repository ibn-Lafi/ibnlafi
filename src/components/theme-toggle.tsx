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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <SunIcon className="hidden h-[18px] w-[18px] dark:block" />
      <MoonIcon className="block h-[18px] w-[18px] dark:hidden" />
    </button>
  );
}
