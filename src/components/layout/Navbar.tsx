"use client";

import { useEffect, useState } from "react";
import { useScrolled, useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about",        label: "About"    },
  { href: "#stack",        label: "Stack"    },
  { href: "#projects",     label: "Projects" },
  { href: "#gallery",      label: "Gallery"  },
  { href: "#contact",      label: "Contact"  },
];

const SECTION_IDS = ["about", "stack", "projects", "gallery", "testimonials", "contact"];

export function Navbar() {
  const scrolled = useScrolled(40);
  const activeId = useScrollSpy(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : (systemPrefersLight ? "light" : "dark");
    setTheme(initialTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between !py-5 !px-12",
          "bg-[rgba(4,6,16,0.7)] backdrop-blur-xl transition-all duration-300",
          scrolled && "border-b border-white/[0.07]"
        )}
      >
        {/* Logo */}
        <a href="#hero" className="font-mono text-[0.9rem] font-medium tracking-widest text-[var(--cyan)]">
          <span className="text-[var(--text3)]">~/</span>nayemul.dev
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[0.75rem] font-medium tracking-[0.14em] uppercase transition-colors duration-200",
                  "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-[var(--cyan)]",
                  "after:transition-transform after:duration-300 after:origin-left",
                  isActive
                    ? "text-[var(--cyan)] after:scale-x-100"
                    : "text-[var(--text2)] hover:text-[var(--cyan)] after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA + Theme + Mobile hamburger */}
        <div className="flex items-center gap-4">
          <button
            id="theme-toggle"
            aria-label="Toggle theme"
            title="Toggle dark/light mode"
            onClick={toggleTheme}
            className={cn(
              "inline-flex items-center justify-center w-10 h-10 rounded-full border text-sm transition-all duration-200",
              "border-white/20 text-[var(--cyan)] hover:border-[var(--cyan2)] hover:text-[var(--cyan2)]",
              theme === "light" ? "bg-white/90 text-[#0b0f1f]" : "bg-black/40"
            )}
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>

          <a
            href="#contact"
            className={cn(
              "hidden md:inline-flex px-8 py-3 rounded-[var(--radius-sm)]",
              "border border-[var(--cyan2)] text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--cyan)]",
              "relative overflow-hidden transition-all duration-200",
              "hover:shadow-[0_0_18px_var(--cyan-glow)]",
              "before:absolute before:inset-0 before:bg-[var(--cyan-dim)] before:opacity-0 before:transition-opacity",
              "hover:before:opacity-100"
            )}
          >
            Hire Me
          </a>

          <button
            className="md:hidden flex flex-col gap-[5px] p-[6px]"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span
              className={cn(
                "block w-[22px] h-px bg-[var(--text2)] transition-all duration-300",
                open && "rotate-45 translate-y-[6px]"
              )}
            />
            <span
              className={cn(
                "block w-[22px] h-px bg-[var(--text2)] transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-[22px] h-px bg-[var(--text2)] transition-all duration-300",
                open && "-rotate-45 -translate-y-[6px]"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 bottom-0 z-40 flex flex-col gap-8 p-10",
          "bg-[rgba(4,6,16,0.96)] backdrop-blur-2xl border-t border-white/[0.07]",
          "transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-2xl font-light tracking-[0.06em] text-[var(--text2)] border-b border-white/[0.07] pb-8 hover:text-[var(--cyan)] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 text-center py-3 rounded-[var(--radius-sm)] border border-[var(--cyan2)] text-[var(--cyan)] text-sm font-semibold tracking-widest uppercase"
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
