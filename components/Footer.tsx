import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "./ui/Container";

export async function Footer() {
  const t = await getTranslations();

  const links = [
    { href: "/about", label: t("nav.about") },
    { href: "/programs", label: t("nav.programs") },
    { href: "/updates", label: t("nav.updates") },
    { href: "/donate", label: t("nav.donate") },
    { href: "/contact", label: t("nav.contact") }
  ];

  const legalLinks = [
    { href: "/legal/privacy", label: t("legal.privacy") },
    { href: "/legal/cookies", label: t("legal.cookies") },
    { href: "/legal/impressum", label: t("legal.impressum") }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-brand mb-4">
                {t("siteName")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("footer.blurb")}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                {t("footer.links")}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-brand transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                {t("footer.contact")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:contact@unityfoundation.org"
                    className="text-gray-600 hover:text-brand transition-colors"
                  >
                    contact@unityfoundation.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/unity_foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand transition-colors"
                  >
                    {t("footer.telegram")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} {t("siteName")}. {t("footer.allRights")}.
              </p>
              <div className="flex gap-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center md:text-left">
              {t("about.adminTitle")}: {t("about.adminText")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
