"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const stack = [
  "React.js", "Node.js", "JavaScript", "TypeScript",
  "PostgreSQL", "Express", "Git", "Supabase",
];

const specialties = [
  "Frontend & UI",
  "Backend & APIs",
  "Bases de datos",
  "Automatización IA",
  "Deploy & DevOps",
  "SaaS & Productos",
];

const stats = [
  { value: "4", label: "Proyectos lanzados" },
  { value: "2024", label: "Cert. Full Stack" },
  { value: "100%", label: "Remoto & disponible" },
];

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rachid-boss-ibarra/",
    icon: Linkedin,
    variant: "blue",
  },
  {
    label: "GitHub",
    href: "https://github.com/rachidboss23",
    icon: Github,
    variant: "default",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/56987257444",
    icon: MessageSquare,
    variant: "green",
  },
  {
    label: "Email",
    href: "mailto:contacto@tuwebpro.cl",
    icon: Mail,
    variant: "default",
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-28 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-500/[0.04] rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="code-label text-violet-400/70 block mb-4">
            {'// Quién está detrás'}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            El fundador
            <br />
            <span className="gradient-text">detrás del código</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl border border-white/[0.07] p-8 sm:p-12 gradient-border"
        >
          {/* Top row */}
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/20 flex-shrink-0">
              R
            </div>
            <div>
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Rachid Boss Ibarra
              </h3>
              <p className="text-sm text-white/38 mt-0.5">
                Fundador & Full Stack Developer — TuWebPro
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-white/48 leading-relaxed mb-10 max-w-2xl">
            Desarrollador Full Stack especializado en JavaScript, React y Node.js.
            Construyo los sistemas que ofrezco en TuWebPro: desde la arquitectura
            hasta el deploy. Sin intermediarios.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mb-10 pb-10 border-b border-white/[0.06]">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/28 uppercase tracking-widest mt-0.5 font-mono">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-white/[0.07]" />
                )}
              </div>
            ))}
          </div>

          {/* Two columns */}
          <div className="grid sm:grid-cols-2 gap-10 mb-10">
            {/* Stack */}
            <div>
              <p className="code-label text-white/22 mb-4">Stack principal</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-white/55 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-1.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <p className="code-label text-white/22 mb-4">Especialidades</p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium text-white/55 bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mb-6">
            {links.map(({ label, href, icon: Icon, variant }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-medium transition-all duration-200 hover:scale-[1.02] ${
                  variant === "blue"
                    ? "border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/15"
                    : variant === "green"
                    ? "border-emerald-500/25 bg-emerald-500/08 text-emerald-400 hover:bg-emerald-500/12"
                    : "border-white/10 bg-white/[0.04] text-white/55 hover:text-white/80 hover:bg-white/[0.07]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </a>
            ))}
          </div>

          {/* Available */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/30">
              Disponible para proyectos freelance y trabajo remoto
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
