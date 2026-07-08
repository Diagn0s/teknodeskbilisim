import { testimonials } from "@/lib/site-data";
import { Marquee } from "@/components/ui/marquee";
import { TestimonialCard } from "@/components/testimonial-card";

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 6);

export function TestimonialsMarquee() {
  return (
    <div className="relative flex flex-col gap-4 overflow-hidden">
      <Marquee pauseOnHover className="[--duration:32s]">
        {firstRow.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:32s]">
        {secondRow.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background sm:w-32" />
    </div>
  );
}
