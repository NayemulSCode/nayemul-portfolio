"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function Reveal({ children, className, delay = 0, threshold = 0.12 }: RevealProps) {
  const { ref, inView } = useInView(threshold);

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700", className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {children}
    </div>
  );
}
