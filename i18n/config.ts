export const locales = ["en", "da", "fa"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  da: "Dansk",
  fa: "فارسی"
};

export const isRTL = (locale: string) => locale === "fa";

