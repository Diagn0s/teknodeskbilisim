"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { stats } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import { Globe } from "@/components/ui/globe";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 3,
  baseColor: [0.2, 0.2, 0.2] as [number, number, number],
  markerColor: [244 / 255, 178 / 255, 130 / 255] as [number, number, number],
  glowColor: [0.7, 0.45, 0.3] as [number, number, number],
  markers: [
    { location: [41.0082, 28.9784] as [number, number], size: 0.12 },
    { location: [39.9334, 32.8597] as [number, number], size: 0.06 },
    { location: [38.4237, 27.1428] as [number, number], size: 0.05 },
    { location: [52.52, 13.405] as [number, number], size: 0.05 },
    { location: [51.5072, -0.1276] as [number, number], size: 0.05 },
    { location: [25.2048, 55.2708] as [number, number], size: 0.06 },
  ],
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <DotPattern
        glow
        className={cn(
          "text-primary/70",
          "[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <div className="group inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
              <Sparkles className="mr-2 size-3.5 text-primary" />
              <AnimatedShinyText className="text-xs font-medium text-foreground">
                Kurumsal BT altyapı çözüm ortağınız
              </AnimatedShinyText>
            </div>

            <h1 className="mt-6 text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.4rem]">
              Bilişim altyapınızı{" "}
              <span className="text-primary">kesintisiz, güvenli</span> ve
              geleceğe hazır kılıyoruz
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Yapısal kablolamadan veri merkezi kurulumuna, network
              çözümlerinden 7/24 bilgi işlem desteğine kadar kurumunuzun
              tüm BT ihtiyaçlarını tek noktadan yönetiyoruz.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-11 rounded-full px-6 text-base">
                <Link href="/iletisim">
                  Ücretsiz Keşif Talep Et
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-full px-6 text-base"
              >
                <Link href="/hizmetler">Hizmetlerimizi İnceleyin</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="size-5 text-primary" />
              12+ yıllık tecrübe ile 140+ kurumsal müşteriye hizmet veriyoruz
            </div>

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

          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center lg:max-w-none">
            <div className="relative flex size-full items-center justify-center overflow-hidden rounded-3xl border border-border/60 bg-card/60">
              <BorderBeam size={140} duration={8} colorFrom="#f4b282" colorTo="#3a2a1f" />
              <Globe config={GLOBE_CONFIG} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
