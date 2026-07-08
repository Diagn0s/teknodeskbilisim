import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { blogPosts } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Hero } from "@/components/home/hero";
import { ServicesBento } from "@/components/home/services-bento";
import { WhyUs } from "@/components/home/why-us";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { TestimonialsMarquee } from "@/components/home/testimonials-marquee";
import { CtaSection } from "@/components/home/cta-section";
import { BlogCard } from "@/components/blog-card";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-border/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Güvenini kazandığımız kurumlardan bazıları
          </p>
          <LogoMarquee />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Uçtan uca kurumsal bilişim çözümleri"
            description="Kablolamadan sunucu sanallaştırmaya, kamera sistemlerinden bilgi işlem desteğine kadar ihtiyacınız olan her hizmeti tek bir çatı altında sunuyoruz."
          />
          <div className="mt-12">
            <ServicesBento />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Neden Tekno Desk"
            title="Kurumunuzun teknoloji ortağı olmaya hazırız"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <WhyUs />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Referanslar"
            title="Müşterilerimiz bizim için ne diyor?"
            align="center"
            className="mx-auto"
          />
        </div>
        <div className="mt-12">
          <TestimonialsMarquee />
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/referanslar">
              Tüm referansları gör
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Blog"
              title="Bilişim dünyasından güncel içerikler"
            />
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog">
                Tüm yazılar
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
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
