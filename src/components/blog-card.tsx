import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/site-data";

export function BlogCard({
  post,
  className,
}: {
  post: BlogPost;
  className?: string;
}) {
  const date = new Date(post.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-primary/40",
        className
      )}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        <span className="absolute top-3 left-3 rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="size-3.5" />
          {date}
          <span aria-hidden="true">·</span>
          {post.readingTime} okuma
        </div>
        <h3 className="text-lg font-semibold text-balance text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary">
          Devamını oku
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
