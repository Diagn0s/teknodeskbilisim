"use client";

import { useMemo, useState } from "react";

import { blogPosts } from "@/lib/site-data";
import { BlogCard } from "@/components/blog-card";
import { cn } from "@/lib/utils";

export function BlogList() {
  const categories = useMemo(
    () => ["Tümü", ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    []
  );
  const [active, setActive] = useState("Tümü");

  const filtered =
    active === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === category
                ? "border-primary bg-primary/10 text-primary"
                : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
