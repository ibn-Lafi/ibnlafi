import { SectionHeading } from "@/components/section-heading";
import type { AboutContent } from "@/content/types";

export function About({ about }: { about: AboutContent }) {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="01" title={about.title} />

        <div className="max-w-3xl space-y-4">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
