"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";

export function CtaSection() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/10 px-6 py-16 sm:px-16">
      <DotPattern
        className={cn(
          "text-primary/40",
          "[mask-image:radial-gradient(500px_circle_at_top_right,white,transparent)]"
        )}
      />
      <Meteors number={12} />
      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          Kurumunuzun BT altyapısını birlikte planlayalım
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          Uzman ekibimiz ihtiyaçlarınızı yerinde inceler, size özel bir
          altyapı planı ve teklif sunar. İlk keşif görüşmesi ücretsizdir.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ShimmerButton
            onClick={() => router.push("/iletisim")}
            background="#f4b282"
            shimmerColor="#0a0a0a"
            className="h-12 px-7 text-sm font-semibold text-black"
          >
            Teklif Al
            <ArrowRight className="ml-2 size-4" />
          </ShimmerButton>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-7 text-sm"
          >
            <a href={siteConfig.phoneHref}>
              <Phone className="size-4" />
              Bize Ulaşın
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
