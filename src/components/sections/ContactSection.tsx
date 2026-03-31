"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { contactSchema, type ContactFormData } from "@/types";
import { PERSONAL } from "@/lib/data";
import { cn } from "@/lib/utils";

const CHANNELS = [
  { icon: "✉",  label: PERSONAL.email,                    href: `mailto:${PERSONAL.email}` },
  { icon: "💼", label: "linkedin.com/in/nayemuldev",    href: PERSONAL.social.linkedin   },
  { icon: "🐙", label: "github.com/nayemulSCode",         href: PERSONAL.social.github     },
  { icon: "𝕏",  label: "@Nayemul_DEV",                   href: PERSONAL.social.twitter    },
];

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message ?? "Something went wrong");
      toast.success("// Signal received. I'll respond within 24h.");
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

  const inputCls = (hasError?: boolean) =>
    cn(
      "form-input",
      hasError && "!border-[var(--pink)] focus:!shadow-[0_0_0_3px_var(--pink-dim)]"
    );

  return (
    <section id="contact" className="relative z-10 overflow-hidden !py-12 !px-12">
      {/* Violet orb */}
      <div
        aria-hidden="true"
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          right: "-150px", top: "50%", transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto relative">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let&apos;s build the<br />next thing</>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 !mt-16">
          {/* Left */}
          <Reveal>
            <h3 className="text-[1.5rem] font-bold leading-[1.3] !mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Open to great<br />opportunities
            </h3>
            <p className="text-[0.9rem] text-[var(--text2)] leading-[1.8] !mb-10">
              Whether it&apos;s a product to architect, a team to join, or a challenging problem to crack
              — I&apos;m interested. Send a message and I&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-col gap-3">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-4 px-[1.1rem] py-[0.9rem] rounded-[var(--radius-sm)]",
                    "border border-white/[0.07] bg-[var(--glass)] backdrop-blur-md",
                    "text-[0.85rem] text-[var(--text2)] transition-all duration-200",
                    "hover:border-[var(--cyan2)] hover:text-[var(--cyan)] hover:bg-[var(--cyan-dim)] hover:shadow-[0_0_20px_var(--cyan-dim)]"
                  )}
                >
                  <div className="w-[34px] h-[34px] rounded-[var(--radius-sm)] border border-white/[0.13] bg-[var(--glass2)] flex items-center justify-center text-base flex-shrink-0">
                    {c.icon}
                  </div>
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={80}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[var(--text3)] !mb-2">
                    First Name
                  </label>
                  <input
                    {...register("firstName")}
                    placeholder="Jane"
                    className={inputCls(!!errors.firstName)}
                  />
                  {errors.firstName && (
                    <p className="!mt-1 font-mono text-[0.68rem] text-[var(--pink)]">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[var(--text3)]  !my-2">
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    placeholder="Smith"
                    className={inputCls(!!errors.lastName)}
                  />
                  {errors.lastName && (
                    <p className="!mt-1 font-mono text-[0.68rem] text-[var(--pink)]">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[var(--text3)] !my-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="jane@company.com"
                  className={inputCls(!!errors.email)}
                />
                {errors.email && (
                  <p className="!mt-1 font-mono text-[0.68rem] text-[var(--pink)]">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[var(--text3)] !my-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  placeholder="Project / Collaboration / Hiring…"
                  className={inputCls(!!errors.subject)}
                />
              </div>

              <div>
                <label className="block font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[var(--text3)] !my-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Describe your project or opportunity…"
                  className={cn("form-textarea", !!errors.message && "!border-[var(--pink)]")}
                />
                {errors.message && (
                  <p className="!mt-1 font-mono text-[0.68rem] text-[var(--pink)]">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-[var(--radius-sm)] mt-2",
                  "bg-gradient-to-r from-[var(--cyan)] to-[var(--cyan2)]",
                  "text-[var(--bg)] font-bold text-[0.82rem] tracking-[0.12em] uppercase",
                  "shadow-[0_0_24px_rgba(0,245,255,0.25)] transition-all duration-200",
                  "hover:shadow-[0_0_48px_rgba(0,245,255,0.45)] hover:-translate-y-[2px]",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                )}
              >
                {isSubmitting ? "Transmitting…" : "Transmit Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
