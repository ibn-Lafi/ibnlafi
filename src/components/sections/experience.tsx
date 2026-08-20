import { SectionHeading } from "@/components/section-heading";
import type { ExperienceContent } from "@/content/types";

export function Experience({ experience }: { experience: ExperienceContent }) {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="02"
          title={experience.title}
          subtitle={experience.subtitle}
        />

        <ol className="space-y-10">
          {experience.items.map((item, i) => (
            <li
              key={i}
              className="relative grid gap-2 border-s-2 border-border ps-6 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <span
                aria-hidden="true"
                className="absolute -start-[7px] top-1 h-3 w-3 rounded-full bg-foreground"
              />
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.period}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.location}
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold sm:text-lg">
                  {item.role}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.organization}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {item.description.map((line, j) => (
                    <li
                      key={j}
                      className="text-sm leading-relaxed text-foreground/80"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
