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

        <a
          href={`mailto:${contact.email}`}
          className="mt-8 inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          {contact.email}
        </a>

        <p className="mt-4 text-xs text-muted-foreground">{contact.location}</p>

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
      </div>
    </section>
  );
}
