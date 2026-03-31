import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10" style={{ padding: "7rem 3rem" }}>
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader eyebrow="Testimonials" title="What they said" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 60}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
