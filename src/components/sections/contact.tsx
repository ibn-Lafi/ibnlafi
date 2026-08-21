import { MailIcon, WhatsAppIcon } from "@/components/icons";
import type { ContactContent } from "@/content/types";

export function Contact({ contact }: { contact: ContactContent }) {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-28">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {contact.title}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
          {contact.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            aria-label={contact.emailLabel}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:opacity-90 active:scale-95"
          >
            <MailIcon className="h-4 w-4" />
            {contact.email}
          </a>

          {contact.whatsapp && (
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.whatsappLabel}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-md active:scale-95"
              dir="ltr"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {contact.whatsappDisplay}
            </a>
          )}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">{contact.location}</p>

        {contact.socials.length > 0 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            {contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                {social.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
