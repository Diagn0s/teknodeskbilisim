import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { navItems, services, siteConfig } from "@/lib/site-data";
import { Logo } from "@/components/layout/logo";
import { InstagramIcon, LinkedinIcon, XIcon } from "@/components/icons/social-icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: InstagramIcon, href: siteConfig.socials.instagram, label: "Instagram" },
                { icon: LinkedinIcon, href: siteConfig.socials.linkedin, label: "LinkedIn" },
                { icon: XIcon, href: siteConfig.socials.x, label: "X" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Hizmetler</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Kurumsal</h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">İletişim</h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-muted-foreground">
            Kurumsal bilişim altyapı çözümleri
          </p>
        </div>
      </div>
    </footer>
  );
}
