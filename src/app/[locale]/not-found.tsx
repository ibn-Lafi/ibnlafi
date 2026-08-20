import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        الصفحة غير موجودة · Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        العودة للرئيسية · Back home
      </Link>
    </main>
  );
}
