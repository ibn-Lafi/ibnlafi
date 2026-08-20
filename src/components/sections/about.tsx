import { SectionHeading } from "@/components/section-heading";
import type { AboutContent } from "@/content/types";

export function About({ about }: { about: AboutContent }) {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="01" title={about.title} />

        <div className="grid gap-10 sm:grid-cols-3">
          <div className="space-y-4 sm:col-span-2">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-3 gap-4 sm:grid-cols-1 sm:gap-6">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-border p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:hover:border-foreground/30"
              >
                <dt className="text-xs text-muted-foreground">{h.label}</dt>
                <dd className="mt-1 text-xl font-semibold">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
