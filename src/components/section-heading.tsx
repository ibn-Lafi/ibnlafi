import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  icon,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </span>
      <div className="mt-2 flex items-center gap-3">
        {icon && (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border">
            {icon}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-12 bg-foreground" />
    </div>
  );
}
