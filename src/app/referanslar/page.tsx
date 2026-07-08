import type { Metadata } from "next";

import { stats, testimonials } from "@/lib/site-data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Farklı sektörlerden kurumsal müşterilerimizin Tekno Desk Bilişim hakkındaki görüşleri.",
};

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslar"
        title="Farklı sektörlerden kurumların güvendiği çözüm ortağı"
        description="Lojistikten üretime, sigortadan inşaata kadar birçok sektörde kurumsal müşterilerimize hizmet veriyoruz."
      />

      <section className="border-b border-border/60 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-baseline justify-center gap-0.5 text-3xl font-semibold text-foreground sm:text-4xl">
                  <NumberTicker value={stat.value} className="text-foreground" />
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Hizmet verdiğimiz kurumlardan bazıları
          </p>
          <LogoMarquee />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Müşteri Görüşleri"
            title="Müşterilerimiz projelerimizi nasıl değerlendiriyor?"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaSection />
        </div>
      </section>
    </>
  );
}
