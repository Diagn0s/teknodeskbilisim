import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/site-data";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "İnternet kablolama, network çözümleri, veri merkezi kurulumu, sunucu sanallaştırma, kamera sistemleri ve bilgi işlem desteği hizmetlerimizi keşfedin.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="İhtiyacınıza uygun kurumsal bilişim çözümleri"
        description="Yapısal kablolamadan bilgi işlem desteğine kadar, işletmenizin BT altyapısını uçtan uca yönetiyoruz. Detaylarını görmek istediğiniz hizmeti seçin."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors hover:border-primary/40"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-lg bg-background/90 text-primary backdrop-blur-sm">
                    <service.icon className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {service.tagline}
                  </span>
                  <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 pt-3 text-sm font-medium text-primary">
                    Detayları incele
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
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
