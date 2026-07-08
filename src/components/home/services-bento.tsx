import Image from "next/image";

import { services } from "@/lib/site-data";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

export function ServicesBento() {
  return (
    <BentoGrid className="grid-cols-1 auto-rows-[22rem] gap-4 md:grid-cols-3">
      {services.map((service) => (
        <BentoCard
          key={service.slug}
          name={service.title}
          description={service.description}
          Icon={service.icon}
          href={`/hizmetler/${service.slug}`}
          cta="Detayları gör"
          className="col-span-1"
          background={
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/20" />
            </div>
          }
        />
      ))}
    </BentoGrid>
  );
}
