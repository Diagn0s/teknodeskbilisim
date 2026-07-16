"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

import { stats } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

type HeroSlide = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustLine: string;
};

const heroSlides: HeroSlide[] = [
  {
    image: "/images/services/veri-merkezi-kurulumu.jpg",
    imageAlt: "Kurumsal veri merkezi sunucu odası",
    eyebrow: "Kurumsal BT altyapı çözüm ortağınız",
    titleBefore: "Bilişim altyapınızı",
    titleHighlight: "kesintisiz, güvenli",
    titleAfter: "ve geleceğe hazır kılıyoruz",
    description:
      "Yapısal kablolamadan veri merkezi kurulumuna, network çözümlerinden 7/24 bilgi işlem desteğine kadar kurumunuzun tüm BT ihtiyaçlarını tek noktadan yönetiyoruz.",
    primaryCta: { label: "Ücretsiz Keşif Talep Et", href: "/iletisim" },
    secondaryCta: { label: "Hizmetlerimizi İnceleyin", href: "/hizmetler" },
    trustLine: "12+ yıllık tecrübe ile 140+ kurumsal müşteriye hizmet veriyoruz",
  },
];

const AUTOPLAY_INTERVAL = 7000;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const hasMultipleSlides = heroSlides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [hasMultipleSlides]);

  const slide = heroSlides[activeSlide];

  const goToSlide = (index: number) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden border-b border-border/60 lg:min-h-[760px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="group inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
                <Sparkles className="mr-2 size-3.5 text-primary" />
                <AnimatedShinyText className="text-xs font-medium text-foreground">
                  {slide.eyebrow}
                </AnimatedShinyText>
              </div>

              <h1 className="mt-6 text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.4rem]">
                {slide.titleBefore}{" "}
                <span className="text-primary">{slide.titleHighlight}</span>{" "}
                {slide.titleAfter}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="h-11 rounded-full px-6 text-base">
                  <Link href={slide.primaryCta.href}>
                    {slide.primaryCta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-full px-6 text-base backdrop-blur-sm"
                >
                  <Link href={slide.secondaryCta.href}>{slide.secondaryCta.label}</Link>
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
                <ShieldCheck className="size-5 text-primary" />
                {slide.trustLine}
              </div>
            </motion.div>
          </AnimatePresence>

          {hasMultipleSlides && (
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Önceki slayt"
                onClick={() => goToSlide(activeSlide - 1)}
                className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground backdrop-blur-sm transition hover:border-primary/50 hover:text-primary"
              >
                <ChevronLeft className="size-4" />
              </button>
              <div className="flex items-center gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`${index + 1}. slayta git`}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      index === activeSlide
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-border/60 hover:bg-primary/40"
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Sonraki slayt"
                onClick={() => goToSlide(activeSlide + 1)}
                className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground backdrop-blur-sm transition hover:border-primary/50 hover:text-primary"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="flex items-baseline gap-0.5 text-2xl font-semibold text-foreground">
                  <NumberTicker value={stat.value} className="text-foreground" />
                  <span className="text-primary">{stat.suffix}</span>
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
