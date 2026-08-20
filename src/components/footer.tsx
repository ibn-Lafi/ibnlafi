import type { FooterContent, NavContent } from "@/content/types";

export function Footer({
  footer,
  brand,
}: {
  footer: FooterContent;
  brand: NavContent["brand"];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 py-8 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {year} {brand}. {footer.rights}.
        </p>
        <p>{footer.builtWith}</p>
      </div>
    </footer>
  );
}
