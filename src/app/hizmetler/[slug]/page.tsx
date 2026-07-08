import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { CtaSection } from "@/components/home/cta-section";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="border-b border-border/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Tüm hizmetler
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="size-7" />
              </span>
              <span className="mt-6 block text-xs font-semibold tracking-widest text-primary uppercase">
                {service.tagline}
              </span>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
                {service.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {service.detail}
              </p>
              <Button asChild size="lg" className="mt-8 h-11 rounded-full px-6">
                <Link href="/iletisim">
                  Bu hizmet için teklif alın
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60">
              <BorderBeam size={100} duration={7} colorFrom="#f4b282" colorTo="#3a2a1f" />
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Kapsam
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Diğer hizmetlerimiz
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/hizmetler/${other.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-primary/40"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <other.icon className="size-4.5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                    {other.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {other.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaSection />
        </div>
      </section>
    </>
  );
}
