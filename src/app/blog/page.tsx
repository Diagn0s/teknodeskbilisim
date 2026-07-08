import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Network güvenliği, veri merkezi, sanallaştırma ve bilişim altyapısı üzerine güncel yazılarımızı okuyun.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Bilişim dünyasından güncel içerikler"
        description="Kurumsal BT altyapısı, network güvenliği ve teknoloji trendleri hakkında hazırladığımız yazıları inceleyin."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </section>
    </>
  );
}
