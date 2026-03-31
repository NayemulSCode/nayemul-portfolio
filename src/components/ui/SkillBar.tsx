"use client";

import { useInView } from "@/hooks/useInView";

interface SkillBarProps {
  name: string;
  pct: number;
}

export function SkillBar({ name, pct }: SkillBarProps) {
  const { ref, inView } = useInView(0.2);

  return (
    <div ref={ref} className="!mb-6">
      <div className="flex justify-between !mb-2">
        <span className="text-[0.85rem] font-medium">{name}</span>
        <span className="font-mono text-[0.72rem] text-[var(--cyan)]">{pct}%</span>
      </div>
      <div className="h-[2px] bg-white/[0.13] rounded-full overflow-visible relative">
        <div
          className="h-full rounded-full relative skill-fill-dot"
          style={{
            background: "linear-gradient(90deg, var(--cyan), var(--violet))",
            width: inView ? `${pct}%` : "0%",
            transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
    </div>
  );
}
