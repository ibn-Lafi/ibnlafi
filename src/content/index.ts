import type { Locale } from "@/i18n/config";
import type { PortfolioContent } from "./types";
import { ar } from "./ar";
import { en } from "./en";

const content: Record<Locale, PortfolioContent> = { ar, en };

export function getContent(locale: Locale): PortfolioContent {
  return content[locale];
}

export type { PortfolioContent } from "./types";
