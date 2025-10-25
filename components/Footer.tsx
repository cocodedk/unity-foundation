import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "./ui/Container";

export async function Footer() {
  const t = await getTranslations();

  const quickLinks = [
    { href: "/about", label: t("nav.about") },
    { href: "/programs", label: t("nav.programs") },
    { href: "/updates", label: t("nav.updates") },
    { href: "/donate", label: t("nav.donate") },
    { href: "/contact", label: t("nav.contact") }
  ];

  return (
    <footer className="bg-growth border-t border-fluff mt-16">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-seedwhite mb-4">
                {t("siteName")}
              </h3>
              <p className="text-seedwhite/80 text-sm leading-relaxed">
                {t("footer.blurb")}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-seedwhite mb-4">
                {t("footer.links")}
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-seedwhite hover:text-coral transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-seedwhite mb-4">
                {t("footer.contact")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:contact@unityfoundation.org"
                    className="text-seedwhite hover:text-coral transition-colors"
                  >
                    contact@unityfoundation.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/unity_foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-seedwhite hover:text-coral transition-colors"
                  >
                    {t("footer.telegram")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-fluff/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-seedwhite/70">
                © {new Date().getFullYear()} {t("siteName")}. {t("footer.allRights")}.
              </p>
              <div className="flex gap-4">
                <Link href="/legal/privacy" className="text-sm text-seedwhite hover:text-coral transition-colors">
                  {t("legal.privacy")}
                </Link>
                <Link href="/legal/cookies" className="text-sm text-seedwhite hover:text-coral transition-colors">
                  {t("legal.cookies")}
                </Link>
                <Link href="/legal/impressum" className="text-sm text-seedwhite hover:text-coral transition-colors">
                  {t("legal.impressum")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
