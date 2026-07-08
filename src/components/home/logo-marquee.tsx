import { clientLogos } from "@/lib/site-data";
import { Marquee } from "@/components/ui/marquee";

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden">
      <Marquee pauseOnHover className="[--duration:28s] [--gap:3rem]">
        {clientLogos.map((logo) => (
          <span
            key={logo}
            className="flex shrink-0 items-center text-lg font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-primary"
          >
            {logo}
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background sm:w-32" />
    </div>
  );
}
