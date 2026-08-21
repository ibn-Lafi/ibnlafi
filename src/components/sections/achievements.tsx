import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { TrophyIcon } from "@/components/icons";
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
          eyebrow="03"
          title={achievements.title}
          subtitle={achievements.subtitle}
          icon={<TrophyIcon className="h-5 w-5" />}
        />

        <Reveal stagger className="grid gap-5 sm:grid-cols-2">
          {achievements.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-2xl border border-border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:hover:border-foreground/30"
            >
              <div className="flex items-center gap-2">
                <TrophyIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.year ?? item.organization}
                </span>
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
