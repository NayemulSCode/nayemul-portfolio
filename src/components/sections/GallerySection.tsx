"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GALLERY, type GalleryTab } from "@/lib/data";
import { cn } from "@/lib/utils";

const TABS: { label: string; value: GalleryTab }[] = [
  { label: "Personal",     value: "personal"     },
  { label: "Professional", value: "professional" },
];

export function GallerySection() {
  const [tab, setTab] = useState<GalleryTab>("personal");
  const items = GALLERY[tab];

  return (
    <section id="gallery" className="relative z-10 bg-[var(--bg2)]" style={{ padding: "7rem 3rem" }}>
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="Gallery"
          title={<>The human behind<br />the code</>}
        />

        {/* Tab toggle */}
        <div
          className="inline-flex mt-10 mb-10 rounded-[var(--radius-sm)] overflow-hidden border border-white/[0.07] bg-[var(--glass)] backdrop-blur-md"
        >
          {TABS.map((t) => (
            <button
              key={t.value}
              onClick={() => setTab(t.value)}
              className={cn(
                "px-6 py-[0.6rem] font-mono text-[0.72rem] tracking-[0.12em] uppercase transition-all duration-200 relative",
                tab === t.value
                  ? "bg-[var(--cyan-dim)] text-[var(--cyan)] shadow-[inset_0_0_0_1px_var(--cyan2)]"
                  : "text-[var(--text3)] hover:text-[var(--text)]"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          key={tab}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          style={{ animation: "fadeUp 0.4s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative rounded-[var(--radius)] border border-white/[0.07] overflow-hidden group",
                "aspect-[4/3] bg-[var(--glass)] cursor-pointer",
                "transition-all duration-300",
                "hover:border-[var(--cyan2)] hover:scale-[1.02] hover:shadow-[0_0_32px_var(--cyan-dim)]"
              )}
            >
              {/* BG */}
              <div
                className="absolute inset-0 transition-transform duration-500 hover:scale-[1.06]"
                style={{ background: item.gradient }}
              />

              {/* Scanline overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,245,255,0.015) 3px,rgba(0,245,255,0.015) 4px)",
                }}
              />

              {/* Icon + bottom label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[2.2rem]"
                  style={{ filter: "drop-shadow(0 0 12px rgba(0,245,255,0.5))" }}
                >
                  {item.icon}
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 text-[0.75rem] font-semibold tracking-[0.04em] text-[#e0f8ff]"
                style={{ background: "linear-gradient(to top, rgba(4,6,16,0.88), transparent)" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
