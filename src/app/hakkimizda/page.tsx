import type { Metadata } from "next";
import { Compass, HeartHandshake, Lightbulb, Target } from "lucide-react";

import { stats } from "@/lib/site-data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { Cable } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Tekno Desk Bilişim olarak kurumsal bilişim altyapı projelerinde 12 yılı aşkın tecrübemizle yanınızdayız.",
};

const values = [
  {
    icon: Target,
    title: "Amaca Odaklılık",
    description:
      "Her projede kurumunuzun operasyonel hedeflerine hizmet eden, ölçülebilir sonuçlar üretiyoruz.",
  },
  {
    icon: HeartHandshake,
    title: "Güvenilirlik",
    description:
      "Verdiğimiz sözleri zamanında ve eksiksiz tutarak uzun soluklu iş ortaklıkları kuruyoruz.",
  },
  {
    icon: Lightbulb,
    title: "Sürekli Gelişim",
    description:
      "Teknolojideki gelişmeleri yakından takip ederek çözümlerimizi sürekli güncel tutuyoruz.",
  },
  {
    icon: Compass,
    title: "Şeffaflık",
    description:
      "Süreç boyunca net iletişim kurar, her aşamada kurumunuzu düzenli olarak bilgilendiririz.",
  },
];

const process = [
  {
    step: "01",
    title: "Keşif & Analiz",
    description:
      "Mevcut altyapınızı yerinde inceleyip ihtiyaçlarınızı ve önceliklerinizi birlikte belirliyoruz.",
  },
  {
    step: "02",
    title: "Planlama & Tasarım",
    description:
      "İhtiyaç analizine göre bütçe ve zaman planlamasıyla uyumlu bir proje tasarımı hazırlıyoruz.",
  },
  {
    step: "03",
    title: "Kurulum & Devreye Alma",
    description:
      "Uzman ekibimizle kurulumu gerçekleştirir, sistemi testlerle birlikte devreye alırız.",
  },
  {
    step: "04",
    title: "Destek & Bakım",
    description:
      "Kurulum sonrası düzenli bakım ve 7/24 teknik destek ile sistemlerinizin sürekliliğini sağlarız.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Kurumsal bilişim altyapınız için güvenilir çözüm ortağınız"
        description="Tekno Desk Bilişim olarak, işletmelerin teknoloji altyapılarını güvenli, verimli ve geleceğe hazır hale getirmek için çalışıyoruz."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Hikayemiz"
              title="Yapısal kablolamadan bilgi işlem desteğine kadar tek adres"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Tekno Desk Bilişim, kurumların bilişim altyapısı ihtiyaçlarına
                uçtan uca çözüm sunmak amacıyla kuruldu. Yapısal kablolama ve
                network kurulumlarıyla başlayan uzmanlığımızı; veri merkezi
                projeleri, sunucu sanallaştırma, güvenlik kamerası sistemleri
                ve bilgi işlem destek hizmetleriyle genişlettik.
              </p>
              <p>
                Bugün küçük ölçekli ofislerden büyük kurumsal yapılara kadar
                geniş bir müşteri portföyüne, her ölçekte projeye uyarlanabilir
                çözümler sunuyoruz. Amacımız yalnızca bir tedarikçi değil,
                işletmenizin teknoloji yol arkadaşı olmak.
              </p>
              <p>
                Sahada edindiğimiz tecrübeyi güncel standartlarla
                birleştirerek; kesintisiz çalışan, güvenli ve genişletilebilir
                altyapılar tasarlıyoruz.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8">
              <BorderBeam size={100} duration={7} colorFrom="#f4b282" colorTo="#3a2a1f" />
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Cable className="size-5" />
                </span>
                <span className="text-lg font-semibold text-foreground">
                  Rakamlarla Tekno Desk
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-baseline gap-0.5 text-3xl font-semibold text-foreground">
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
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Misyon & Vizyon"
            title="Neden yaptığımızı ve nereye gittiğimizi biliyoruz"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card p-8">
              <h3 className="text-lg font-semibold text-primary">Misyonumuz</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                İşletmelerin teknoloji altyapısını; güvenli, kesintisiz ve
                ölçeklenebilir şekilde kurmak, işletmelerin asıl işlerine
                odaklanmasını sağlamak.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-8">
              <h3 className="text-lg font-semibold text-primary">Vizyonumuz</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Kurumsal bilişim hizmetlerinde, güvenilirliği ve teknik
                uzmanlığıyla tercih edilen ilk çözüm ortağı olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Değerlerimiz"
            title="Çalışma prensiplerimiz"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border/60 bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Çalışma Şeklimiz"
            title="Projelerimizi dört adımda hayata geçiriyoruz"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary/30">
                    {item.step}
                  </span>
                  {index < process.length - 1 ? (
                    <span className="hidden h-px flex-1 bg-border sm:block" />
                  ) : null}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
