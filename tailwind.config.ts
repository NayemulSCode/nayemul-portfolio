import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#040610",
          2: "#060916",
          3: "#0b1025",
        },
        surface: {
          DEFAULT: "rgba(255,255,255,0.04)",
          2: "rgba(255,255,255,0.07)",
          3: "rgba(255,255,255,0.11)",
        },
        cyan: {
          DEFAULT: "#00f5ff",
          dim: "rgba(0,245,255,0.12)",
          glow: "rgba(0,245,255,0.25)",
          2: "#00c4cc",
        },
        violet: {
          neon: "#a855f7",
          dim: "rgba(168,85,247,0.12)",
        },
        neon: {
          green: "#00ff88",
          pink: "#ff2d78",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          2: "rgba(255,255,255,0.13)",
          3: "rgba(255,255,255,0.22)",
        },
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        blink: "blink 2s ease-in-out infinite",
        pulse1: "pulse1 6s ease-in-out infinite",
        pulse2: "pulse2 8s ease-in-out infinite",
        "fade-up": "fadeUp 0.4s cubic-bezier(0.22,1,0.36,1) both",
        scanMove: "scanMove 8s linear infinite",
      },
      keyframes: {
        shimmer: {
          "from": { backgroundPosition: "200% 0" },
          "to": { backgroundPosition: "-200% 0" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        pulse1: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.7" },
        },
        pulse2: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.9)", opacity: "0.8" },
        },
        fadeUp: {
          "from": { opacity: "0", transform: "translateY(16px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        scanMove: {
          "from": { backgroundPosition: "0 0" },
          "to": { backgroundPosition: "0 100px" },
        },
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
