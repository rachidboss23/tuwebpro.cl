"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    quote:
      "Necesitábamos una plataforma que centralizara propiedades, clientes y documentos en un solo lugar. TuWebPro entregó exactamente eso — y con un tasador IA que ningún competidor tiene. Hoy gestiono todo desde un panel, sin planillas ni caos.",
    author: "Cliente CorredoresApp",
    role: "Corredor de Propiedades · Santiago",
    project: "CorredoresApp",
    color: "blue",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    bg: "from-blue-500/[0.05] to-transparent",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    quote:
      "Teníamos una web WordPress lenta que no reflejaba lo que somos. TuWebPro migró todo a una plataforma moderna, rápida y con mejor experiencia para las familias. Las inscripciones aumentaron notablemente en las primeras semanas.",
    author: "Equipo Musaika",
    role: "Escuela en Línea · Chile",
    project: "Musaika",
    color: "violet",
    border: "border-violet-500/20",
    accent: "text-violet-400",
    bg: "from-violet-500/[0.05] to-transparent",
    badgeBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    quote:
      "Quería una presencia digital que hablara de mi trabajo sin necesidad de que yo explicara nada. El sitio que desarrollaron transmite exactamente la identidad de mi marca artística — clientes internacionales llegan directamente por la web.",
    author: "Paula Guerra Chamorro",
    role: "Artista Ceramista y Muralista · España",
    project: "paulaguerrachamorro.cl",
    color: "orange",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    bg: "from-orange-500/[0.05] to-transparent",
    badgeBg: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div
      className={`relative glass rounded-2xl p-7 border ${t.border} flex flex-col`}
      style={{ width: "320px", flexShrink: 0 }}
    >
      {/* Gradient bg */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${t.bg} pointer-events-none`}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header row: icon + badge */}
        <div className="flex items-start justify-between mb-5">
          <Quote className={`w-6 h-6 ${t.accent} opacity-60`} />
          <span
            className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${t.badgeBg}`}
          >
            {t.project}
          </span>
        </div>

        {/* Quote text */}
        <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
          <div
            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${
              t.color === "blue"
                ? "from-blue-500 to-blue-700"
                : t.color === "violet"
                ? "from-violet-500 to-violet-700"
                : "from-orange-500 to-orange-700"
            } flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
          >
            {t.author.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{t.author}</div>
            <div className="text-xs text-white/35">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-28 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-500/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="code-label text-blue-400/70 block mb-4">
              {"// Clientes"}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lo que dicen
              <br />
              <span className="gradient-text">quienes confiaron</span>
            </h2>
            <p className="text-white/45 text-lg max-w-lg mx-auto">
              Proyectos reales, resultados reales, clientes reales.
            </p>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Fade masks */}
          <div
            className="absolute inset-y-0 left-0 z-10 w-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--background)), transparent)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 z-10 w-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, hsl(var(--background)), transparent)",
            }}
          />

          <Marquee pauseOnHover duration="25s" gap="1.25rem" repeat={3}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} t={t} />
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
