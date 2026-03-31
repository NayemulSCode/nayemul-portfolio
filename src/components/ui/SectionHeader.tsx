import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("!mb-4", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.01em] mb-4"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[0.95rem] text-[var(--text2)] max-w-[480px] leading-[1.8]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
