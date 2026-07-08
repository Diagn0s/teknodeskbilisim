import { Clock, FileCheck2, ShieldCheck, Users } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Uzman Kadro",
    description:
      "Network, sistem ve güvenlik alanlarında deneyimli mühendis ve teknisyenlerden oluşan ekibimizle çalışıyoruz.",
  },
  {
    icon: Clock,
    title: "Hızlı Müdahale",
    description:
      "7/24 destek hattımız sayesinde arıza ve kesinti anlarında en kısa sürede yanınızda oluyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir Altyapı",
    description:
      "Tüm projelerimizi uluslararası standartlara ve en iyi uygulama prensiplerine uygun olarak hayata geçiriyoruz.",
  },
  {
    icon: FileCheck2,
    title: "Şeffaf Süreç",
    description:
      "Net fiyatlandırma, düzenli raporlama ve açık iletişim ile süreç boyunca sizi bilgilendiriyoruz.",
  },
];

export function WhyUs() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="group rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
        >
          <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-105">
            <item.icon className="size-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
