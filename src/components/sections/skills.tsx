import { Reveal } from "@/components/reveal";
import { SparklesIcon } from "@/components/icons";
import type { SkillsContent } from "@/content/types";

export function Skills({ skills }: { skills: SkillsContent }) {
  return (
    <div>
      <p className="mb-8 text-sm text-muted-foreground sm:text-base">
        {skills.subtitle}
      </p>

      <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:hover:border-foreground/30"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <SparklesIcon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-semibold">{group.category}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-foreground hover:text-background"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
