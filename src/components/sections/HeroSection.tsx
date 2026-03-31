"use client";

import { useEffect, useRef } from "react";
import { LinkButton } from "@/components/ui/Button";
import { PERSONAL, STATS } from "@/lib/data";

export function HeroSection() {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const text = el.textContent ?? "";
    el.innerHTML = text
      .split("")
      .map((ch, i) =>
        ch === " "
          ? " "
          : `<span style="display:inline-block;opacity:0;transform:translateY(40px);animation:charIn 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 45}ms forwards">${ch}</span>`
      )
      .join("");
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: "8rem 3rem 4rem" }}
    >
      {/* Orbs */}
      <div
        aria-hidden="true"
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)",
          top: "-100px", right: "-100px",
          animation: "pulse1 6s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)",
          bottom: 0, left: "-80px",
          animation: "pulse2 8s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
          top: "40%", left: "35%",
          animation: "pulse1 10s ease-in-out infinite 2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px]">
        {/* Status badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--glass2)] border border-white/[0.13] backdrop-blur-md font-mono text-[0.72rem] tracking-[0.1em] text-[var(--green)] mb-8">
          <span
            className="w-[7px] h-[7px] rounded-full bg-[var(--green)] shadow-[0_0_8px_var(--green)]"
            style={{ animation: "blink 2s ease-in-out infinite" }}
          />
          {PERSONAL.availability}
        </div>

        {/* Title */}
        <h1
          className="font-extrabold leading-[1.0] tracking-[-0.02em] mb-4"
          style={{ fontSize: "clamp(3rem,7.5vw,6rem)", fontFamily: "var(--font-syne)" }}
        >
          <span ref={nameRef} className="block">{PERSONAL.name}</span>
          <span
            className="block mt-1 gradient-text font-mono font-light"
            style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)" }}
          >
            {PERSONAL.tagline}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[1rem] text-[var(--text2)] leading-[1.8] max-w-[560px] mt-6 mb-12"
          style={{ borderLeft: "2px solid var(--cyan2)", paddingLeft: "1.25rem" }}
        >
          I architect and ship full-stack applications with obsessive attention to performance,
          elegance, and developer experience. From zero to production — fast.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap mb-16">
          <LinkButton href="#projects" variant="primary">
            Explore Work
          </LinkButton>
          <LinkButton href="#contact" variant="glass">
            Get In Touch
          </LinkButton>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={[
                "px-8 py-5 text-center border border-white/[0.07] bg-[var(--glass)] backdrop-blur-md",
                "transition-colors duration-200 hover:border-[var(--cyan2)]",
                i === 0 ? "rounded-tl-[var(--r-sm)] rounded-tr-[var(--r-sm)] sm:rounded-tr-none sm:rounded-bl-[var(--r-sm)]" : "",
                i === STATS.length - 1 ? "rounded-bl-[var(--r-sm)] rounded-br-[var(--r-sm)] sm:rounded-bl-none sm:rounded-tr-[var(--r-sm)]" : "",
                i > 0 ? "border-t-0 sm:border-t sm:border-l-0" : "",
              ].join(" ")}
            >
              <span
                className="block text-[1.8rem] font-extrabold leading-none text-[var(--cyan)] mb-[5px]"
                style={{ textShadow: "0 0 20px var(--cyan-glow)", fontFamily: "var(--font-syne)" }}
              >
                {s.num}
              </span>
              <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-[var(--text3)]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
