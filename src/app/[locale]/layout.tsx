import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { locales, localeDirection, isLocale } from "@/i18n/config";
import { getContent } from "@/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getContent(locale);

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL("https://example.com"),
    alternates: {
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  // Reading the nonce forces dynamic rendering, which is required for
  // Next.js to apply the per-request CSP nonce (set in proxy) to its own
  // inline bootstrap scripts.
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang={locale}
      dir={localeDirection[locale]}
      className={`${inter.variable} ${tajawal.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          nonce={nonce}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
