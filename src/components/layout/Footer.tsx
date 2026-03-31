import { PERSONAL } from "@/lib/data";

const NAV = [
  { href: "#about",    label: "About"    },
  { href: "#projects", label: "Projects" },
  { href: "#gallery",  label: "Gallery"  },
  { href: "#contact",  label: "Contact"  },
];

const SOCIALS = [
  { href: PERSONAL.social.github,   label: "GitHub",   icon: "🐙" },
  { href: PERSONAL.social.linkedin, label: "LinkedIn", icon: "💼" },
  { href: PERSONAL.social.twitter,  label: "Twitter",  icon: "𝕏"  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] bg-[var(--bg2)] px-12 py-10"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
      <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-6">
        {/* Logo */}
        <div className="font-mono text-[0.85rem] tracking-[0.1em] text-[var(--cyan)]">
          ~/nayemul.dev
        </div>

        {/* Nav */}
        <nav className="flex gap-6 flex-wrap">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-[var(--text3)] hover:text-[var(--cyan)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={[
                "w-9 h-9 rounded-full border border-white/[0.07] bg-[var(--glass)]",
                "flex items-center justify-center text-[0.9rem] text-[var(--text3)]",
                "transition-all duration-200",
                "hover:border-[var(--cyan2)] hover:text-[var(--cyan)] hover:shadow-[0_0_14px_var(--cyan-dim)]",
              ].join(" ")}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="font-mono text-[0.65rem] text-[var(--text3)] w-full text-center md:w-auto md:text-left">
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
