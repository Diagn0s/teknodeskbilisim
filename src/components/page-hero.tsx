import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 py-20 sm:py-24">
      <AnimatedGridPattern
        numSquares={24}
        maxOpacity={0.12}
        duration={3}
        className={cn(
          "text-primary",
          "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          {eyebrow}
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
