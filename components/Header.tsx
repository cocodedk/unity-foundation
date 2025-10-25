"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { LangSwitcher } from "./LangSwitcher";

export function Header() {
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/programs", label: t("nav.programs") },
    { href: "/updates", label: t("nav.updates") },
    { href: "/donate", label: t("nav.donate") },
    { href: "/contact", label: t("nav.contact") }
  ];

  return (
    <header className="sticky top-0 z-50 bg-seedwhite/95 backdrop-blur-sm border-b border-fluff">
      <div className="px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-growth">
            {t("siteName")}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-wind hover:text-growth transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LangSwitcher />
        </nav>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-wind"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-seedwhite border-b border-fluff">
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-wind hover:text-growth transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-fluff">
                <LangSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
