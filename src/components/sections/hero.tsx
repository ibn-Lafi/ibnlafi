import { ArrowIcon } from "@/components/icons";
import type { HeroContent } from "@/content/types";

export function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--color-muted),transparent_60%)]"
      />
      <div className="mx-auto flex max-w-5xl flex-col items-start px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-medium text-muted-foreground">
          {hero.greeting}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {hero.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground/80 sm:text-xl">
          {hero.role}
        </p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {hero.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {hero.ctaPrimary}
            <ArrowIcon className="h-4 w-4 transition-transform rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-muted"
          >
            {hero.ctaSecondary}
          </a>
        </div>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {hero.location}
        </p>
      </div>
    </section>
  );
}
