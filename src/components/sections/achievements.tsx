import { Reveal } from "@/components/reveal";
import { TrophyIcon } from "@/components/icons";
import type { AchievementsContent } from "@/content/types";

export function Achievements({
  achievements,
}: {
  achievements: AchievementsContent;
}) {
  return (
    <div>
      <p className="mb-8 text-sm text-muted-foreground sm:text-base">
        {achievements.subtitle}
      </p>

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
  );
}
