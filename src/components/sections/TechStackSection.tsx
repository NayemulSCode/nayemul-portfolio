import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TECH_STACK } from "@/lib/data";

export function TechStackSection() {
  return (
    <section id="stack" className="relative z-10 py-12 px-12">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="Tech Stack"
          title="My arsenal"
          subtitle="Tools I reach for to ship fast, scalable, production-grade systems."
        />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4 !mt-14">
          {TECH_STACK.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 30}>
              <div
                className={[
                  "p-6 rounded-[var(--radius)] border border-white/[0.07] bg-[var(--glass)]",
                  "backdrop-blur-md text-center relative overflow-hidden",
                  "transition-all duration-250",
                  "before:absolute before:inset-0 before:bg-radial-[circle_at_50%_0%] before:from-[var(--cyan-dim)] before:to-transparent before:opacity-0 before:transition-opacity before:duration-300",
                  "hover:border-[var(--cyan2)] hover:-translate-y-1 hover:shadow-[0_0_30px_var(--cyan-dim)]",
                  "hover:before:opacity-100",
                ].join(" ")}
              >
                <div className="text-[1.8rem] !mb-[6px]">{tech.icon}</div>
                <div className="text-[0.78rem] font-semibold tracking-[0.04em]">{tech.name}</div>
                <div className="font-mono text-[0.62rem] text-[var(--text3)] mt-[2px] tracking-[0.06em]">
                  {tech.category}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
