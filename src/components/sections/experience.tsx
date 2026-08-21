import { Reveal } from "@/components/reveal";
import { BriefcaseIcon } from "@/components/icons";
import type { ExperienceContent } from "@/content/types";

export function Experience({ experience }: { experience: ExperienceContent }) {
  return (
    <div>
      <p className="mb-8 text-sm text-muted-foreground sm:text-base">
        {experience.subtitle}
      </p>

      <Reveal as="ol" stagger className="space-y-10">
        {experience.items.map((item, i) => (
          <li
            key={i}
            className="relative grid gap-2 border-s-2 border-border ps-8 sm:grid-cols-[1fr_2fr] sm:gap-8"
          >
            <span
              aria-hidden="true"
              className="absolute -start-[15px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-foreground text-background"
            >
              <BriefcaseIcon className="h-3.5 w-3.5" />
            </span>
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
      </Reveal>
    </div>
  );
}
