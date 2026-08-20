export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-12 bg-foreground" />
    </div>
  );
}
