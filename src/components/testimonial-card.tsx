import { Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/site-data";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex w-80 shrink-0 flex-col gap-4 rounded-xl border border-border/60 bg-card p-6",
        className
      )}
    >
      <Quote className="size-6 text-primary/50" />
      <blockquote className="text-sm leading-relaxed text-foreground/90">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 border-t border-border/60 pt-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-medium text-foreground">
            {testimonial.name}
          </span>
          <span className="block text-xs text-muted-foreground">
            {testimonial.role} · {testimonial.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
