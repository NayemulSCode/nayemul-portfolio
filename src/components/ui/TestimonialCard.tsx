import type { TESTIMONIALS } from "@/lib/data";

type Testimonial = (typeof TESTIMONIALS)[number];

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="glass-card !p-8 relative overflow-hidden group transition-colors duration-250 hover:border-white/[0.13]">
      {/* Top glow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Stars */}
      <div className="flex gap-[2px] !mb-5">
        {Array.from({ length: t.stars }).map((_, i) => (
          <span key={i} className="text-[0.85rem] text-[var(--cyan)] [text-shadow:0_0_8px_var(--cyan-glow)]">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[0.875rem] leading-[1.8] text-[var(--text2)] italic !mb-6">
        <span className="text-[var(--cyan)] opacity-30 font-serif text-[3rem] leading-0 align-[-0.8rem] mr-1">&quot;</span>
        {t.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white/[0.13] bg-gradient-to-br from-[var(--cyan-dim)] to-[var(--violet-dim)] flex items-center justify-center font-mono text-[0.75rem] font-semibold text-[var(--cyan)]">
          {t.initials}
        </div>
        <div>
          <p className="text-[0.875rem] font-semibold">{t.name}</p>
          <p className="font-mono text-[0.68rem] text-[var(--text3)]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}
