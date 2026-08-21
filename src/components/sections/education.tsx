import { Reveal } from "@/components/reveal";
import { GraduationCapIcon } from "@/components/icons";
import type { EducationContent } from "@/content/types";

export function Education({ education }: { education: EducationContent }) {
  return (
    <div>
      <p className="mb-8 text-sm text-muted-foreground sm:text-base">
        {education.subtitle}
      </p>

      <Reveal as="ol" stagger className="space-y-8">
        {education.items.map((item, i) => (
          <li key={i} className="relative border-s-2 border-border ps-8">
            <span
              aria-hidden="true"
              className="absolute -start-[15px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-foreground text-background"
            >
              <GraduationCapIcon className="h-3.5 w-3.5" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold sm:text-lg">
                {item.degree}
              </h3>
              {item.period && (
                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.institution}
              {item.location && ` — ${item.location}`}
            </p>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </Reveal>
    </div>
  );
}
