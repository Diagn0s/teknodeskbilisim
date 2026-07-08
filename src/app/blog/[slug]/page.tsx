import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import { blogPosts } from "@/lib/site-data";
import { BlogCard } from "@/components/blog-card";
import { CtaSection } from "@/components/home/cta-section";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Tüm yazılar
          </Link>

          <div className="mt-6 flex items-center gap-4 text-xs font-medium tracking-widest text-primary uppercase">
            <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
              {post.category}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readingTime} okuma
            </span>
          </div>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-border/60">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-5 border-t border-border/60 pt-10 text-base leading-relaxed text-foreground/90">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-border/60 bg-card/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Diğer yazılar
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
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
