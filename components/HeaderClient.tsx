"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { LangSwitcher } from "./LangSwitcher";

interface HeaderClientProps {
  mobilePayNumber?: string;
  currentMonth: string;
}

export function HeaderClient({ mobilePayNumber, currentMonth }: HeaderClientProps) {
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
      <div className="px-4 md:px-6 py-4">
        <div className="relative flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold text-growth">
              {t("siteName")}
            </span>
          </Link>

          {/* MobilePay Box - Desktop (Centered) */}
          <Link
            href="/donate"
            className="hidden md:flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 bg-coral/10 hover:bg-coral/20 rounded-lg transition-colors border border-coral/30 flex-shrink-0 absolute left-1/2 -translate-x-1/2"
          >
            <div className="flex items-center gap-1.5 lg:gap-2">
              <span className="text-xs lg:text-sm text-wind whitespace-nowrap">{t("header.donateLabel")}:</span>
              <span className="font-bold text-sm lg:text-base bg-coral text-seedwhite px-2 lg:px-3 py-1 rounded-md whitespace-nowrap">
                {mobilePayNumber || "12345678"}
              </span>
              <span className="text-xs lg:text-sm text-wind/70 whitespace-nowrap">| {currentMonth}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-wind hover:text-growth transition-colors text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
            <LangSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-wind"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-seedwhite border-b border-fluff shadow-lg">
            <nav className="flex flex-col p-4 gap-4">
              {/* MobilePay Box - Mobile */}
              <Link
                href="/donate"
                className="flex flex-col gap-2 p-3 bg-coral/10 rounded-lg border border-coral/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xs text-wind">{t("header.donateLabel")}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base bg-coral text-seedwhite px-3 py-1 rounded-md">
                    {mobilePayNumber || "12345678"}
                  </span>
                  <span className="text-sm text-wind/70">{currentMonth}</span>
                </div>
              </Link>

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
