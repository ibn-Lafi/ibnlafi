import { SectionHeading } from "@/components/section-heading";
import type { SkillsContent } from "@/content/types";

export function Skills({ skills }: { skills: SkillsContent }) {
  return (
    <section id="skills" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="03"
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border p-5"
            >
              <h3 className="text-sm font-semibold">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
