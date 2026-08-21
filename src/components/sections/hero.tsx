import { DownloadIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import type { ContactContent, HeroContent, ResumeContent } from "@/content/types";

export function Hero({
  hero,
  resume,
  contact,
}: {
  hero: HeroContent;
  resume: ResumeContent;
  contact: ContactContent;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--color-muted),transparent_60%)]"
      />
      <div className="hero-in mx-auto flex max-w-5xl flex-col items-start px-5 py-20 sm:px-8 sm:py-32">
        <p className="text-sm font-medium text-muted-foreground">
          {hero.greeting}
        </p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">
          {hero.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground/80 sm:text-xl">
          {hero.role}
        </p>

        <div className="mt-9 grid w-full max-w-xl grid-cols-3 gap-2 sm:gap-3">
          <a
            href={`mailto:${contact.email}`}
            aria-label={contact.emailLabel}
            className="inline-flex h-12 min-w-0 items-center justify-center gap-1.5 rounded-full bg-foreground px-3 text-xs font-semibold text-background shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:opacity-90 active:scale-95 sm:px-5 sm:text-sm"
          >
            <MailIcon className="h-4 w-4 shrink-0" />
            <span className="truncate">{contact.email}</span>
          </a>

          {contact.whatsapp && (
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.whatsappLabel}
              className="inline-flex h-12 min-w-0 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3 text-xs font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-lg active:scale-95 sm:px-5 sm:text-sm"
              dir="ltr"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span className="truncate">{contact.whatsappDisplay}</span>
            </a>
          )}

          <a
            href={resume.href}
            download={resume.downloadName}
            className="inline-flex h-12 min-w-0 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3 text-xs font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-lg active:scale-95 sm:px-5 sm:text-sm"
          >
            <DownloadIcon className="h-4 w-4 shrink-0" />
            <span className="truncate">{hero.ctaSecondary}</span>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <p className="text-xs text-muted-foreground">{contact.location}</p>
          {contact.socials.length > 0 && (
            <div className="flex items-center gap-2">
              {contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium transition-colors hover:bg-muted"
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
