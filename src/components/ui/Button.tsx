import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
}

const base =
  "inline-flex items-center gap-2 font-semibold tracking-[0.1em] uppercase transition-all duration-200 cursor-none";

const variants = {
  primary: [
    "bg-gradient-to-r from-[var(--cyan)] to-[var(--cyan2)] text-[var(--bg)]",
    "shadow-[0_0_24px_rgba(0,245,255,0.3)]",
    "hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] hover:-translate-y-[2px]",
    "rounded-[var(--r-sm)] px-8 py-[0.875rem] text-[0.8rem]",
  ].join(" "),
  glass: [
    "bg-[var(--glass2)] border border-white/[0.13] text-[var(--text)]",
    "backdrop-blur-md rounded-[var(--r-sm)] px-8 py-[0.875rem] text-[0.8rem]",
    "hover:border-[var(--violet)] hover:text-[var(--violet)] hover:bg-[var(--violet-dim)]",
  ].join(" "),
  outline: [
    "border border-[var(--cyan2)] text-[var(--cyan)] bg-transparent",
    "rounded-[var(--r-sm)] px-6 py-[0.5rem] text-[0.72rem]",
    "hover:bg-[var(--cyan-dim)] hover:shadow-[0_0_18px_var(--cyan-glow)]",
  ].join(" "),
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ variant = "primary", className, children, ...props }: LinkButtonProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
