import { SectionHeading } from "@/components/section-heading";
import type { EducationContent } from "@/content/types";

export function Education({ education }: { education: EducationContent }) {
  return (
    <section id="education" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="05"
          title={education.title}
          subtitle={education.subtitle}
        />

        <ol className="space-y-8">
          {education.items.map((item, i) => (
            <li
              key={i}
              className="relative border-s-2 border-border ps-6"
            >
              <span
                aria-hidden="true"
                className="absolute -start-[7px] top-1 h-3 w-3 rounded-full bg-foreground"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold sm:text-lg">
                  {item.degree}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution} — {item.location}
              </p>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
