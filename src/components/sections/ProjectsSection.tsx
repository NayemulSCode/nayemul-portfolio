"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS, PROJECT_FILTERS, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered = PROJECTS.filter((p) => active === "all" || p.category === active);

  return (
    <section id="projects" className="relative z-10 bg-[var(--bg2)]" style={{ padding: "7rem 3rem" }}>
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader eyebrow="Projects" title="Selected builds" />

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mt-10 mb-8">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "px-4 py-[0.4rem] rounded-full border font-mono text-[0.7rem] tracking-[0.1em] uppercase",
                "bg-[var(--glass)] transition-all duration-200",
                active === f.value
                  ? "border-[var(--cyan2)] text-[var(--cyan)] bg-[var(--cyan-dim)]"
                  : "border-white/[0.07] text-[var(--text3)] hover:border-[var(--cyan2)] hover:text-[var(--cyan)] hover:bg-[var(--cyan-dim)]"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-3 text-center text-[var(--text3)] font-mono py-16">
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
