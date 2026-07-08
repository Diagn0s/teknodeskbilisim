import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-data";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { BorderBeam } from "@/components/ui/border-beam";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Projeniz için ücretsiz keşif ve teklif talebinde bulunmak üzere Tekno Desk Bilişim ile iletişime geçin.",
};

const contactItems = [
  {
    icon: Phone,
    title: "Telefon",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Mail,
    title: "E-posta",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Adres",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: siteConfig.workingHours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Projenizi konuşalım"
        description="Formu doldurun, uzman ekibimiz en kısa sürede sizinle iletişime geçsin. İlk keşif görüşmesi ücretsizdir."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
              <BorderBeam size={120} duration={9} colorFrom="#f4b282" colorTo="#3a2a1f" />
              <h2 className="text-xl font-semibold text-foreground">
                Teklif ve Bilgi Talep Formu
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Aşağıdaki formu doldurarak talebinizi iletebilirsiniz.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
