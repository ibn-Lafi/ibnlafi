import { ArrowIcon } from "@/components/icons";
import type { HeroContent, ResumeContent } from "@/content/types";

export function Hero({
  hero,
  resume,
}: {
  hero: HeroContent;
  resume: ResumeContent;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--color-muted),transparent_60%)]"
      />
      <div className="mx-auto flex max-w-5xl flex-col items-start px-5 py-20 sm:px-8 sm:py-32">
        <p className="text-sm font-medium text-muted-foreground">
          {hero.greeting}
        </p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">
          {hero.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground/80 sm:text-xl">
          {hero.role}
        </p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {hero.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:opacity-90"
          >
            {hero.ctaPrimary}
            <ArrowIcon className="h-4 w-4 transition-transform rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
          <a
            href={resume.href}
            download={resume.downloadName}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-lg"
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
