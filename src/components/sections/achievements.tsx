import { SectionHeading } from "@/components/section-heading";
import type { AchievementsContent } from "@/content/types";

export function Achievements({
  achievements,
}: {
  achievements: AchievementsContent;
}) {
  return (
    <section id="achievements" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="04"
          title={achievements.title}
          subtitle={achievements.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-2xl border border-border p-5"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {item.year}
              </span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
