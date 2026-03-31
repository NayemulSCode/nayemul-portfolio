import { cn } from "@/lib/utils";
import type { PROJECTS } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "glass-card overflow-hidden group",
        "transition-all duration-300",
        "hover:-translate-y-[5px] hover:border-white/[0.13]",
        "hover:shadow-[0_24px_48px_rgba(0,0,0,0.4),0_0_40px_var(--cyan-dim)]"
      )}
    >
      {/* Thumbnail */}
      <div className="h-[170px] relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ background: project.gradient }}
        />
        <span className="relative z-10 text-[2.5rem] drop-shadow-[0_0_16px_rgba(0,245,255,0.4)]">
          {project.icon}
        </span>
        {project.featured && (
          <span className="absolute top-3 right-3 px-3 py-[3px] rounded-full font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase bg-gradient-to-r from-[var(--cyan)] to-[var(--cyan2)] text-[var(--bg)]">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div>
        <div className="flex flex-wrap gap-[5px] !mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="!px-[0.55rem] py-[0.18rem] rounded-[4px] font-mono text-[0.62rem] tracking-[0.06em] bg-[var(--glass2)] text-[var(--text3)] border border-white/[0.07]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-[1.05rem] font-bold tracking-[-0.01em] !mb-2">{project.title}</h3>
        <p className="text-[0.85rem] text-[var(--text2)] leading-[1.7] !mb-5">{project.description}</p>
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            className="font-mono text-[0.72rem] font-medium tracking-[0.08em] text-[var(--cyan)] hover:text-[var(--cyan2)] hover:[text-shadow:0_0_12px_var(--cyan-glow)] transition-all"
          >
            Live Demo →
          </a>
          <a
            href={project.githubUrl}
            className="font-mono text-[0.72rem] font-medium tracking-[0.08em] text-[var(--cyan)] hover:text-[var(--cyan2)] hover:[text-shadow:0_0_12px_var(--cyan-glow)] transition-all"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
