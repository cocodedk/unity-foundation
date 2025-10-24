"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] as Locale;

  const switchLocale = (locale: Locale) => {
    const pathWithoutLocale = pathname.split("/").slice(2).join("/");
    router.push(`/${locale}/${pathWithoutLocale}`);
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
            currentLocale === locale
              ? "bg-primary text-white"
              : "bg-background-sand text-text-primary hover:bg-border"
          }`}
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  );
}
