import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBar } from "@/components/ui/SkillBar";
import { Reveal } from "@/components/ui/Reveal";
import { PERSONAL, FACTS, SKILLS } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 bg-[var(--bg2)]" style={{ padding: "7rem 3rem" }}>
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title={<>Engineer by logic,<br />creator by instinct</>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 mt-16">
          {/* Left — Bio + Facts */}
          <Reveal>
            <div className="space-y-5">
              {PERSONAL.bio.map((p, i) => (
                <p key={i} className="text-[0.95rem] text-[var(--text2)] leading-[1.85]">
                  {i === 0 ? (
                    <>
                      I&apos;m <span className="text-[var(--cyan)]">{PERSONAL.name}</span>
                      {p.slice(p.indexOf(","))}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {FACTS.map((f) => (
                <div
                  key={f.key}
                  className="glass-card-sm p-5 transition-colors duration-200 hover:border-[var(--cyan-glow)]"
                >
                  <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--text3)] mb-1">
                    {f.key}
                  </p>
                  <p
                    className="text-[0.875rem] font-semibold"
                    style={f.highlight ? { color: "var(--green)" } : undefined}
                  >
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — Skills */}
          <Reveal delay={80}>
            <h4 className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--text3)] mb-7">
              Core Proficiencies
            </h4>
            {SKILLS.map((s) => (
              <SkillBar key={s.name} name={s.name} pct={s.pct} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
