"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Llevaba años usando Excel y WhatsApp para gestionar mis propiedades. Con CorredoresApp tengo todo centralizado — fichas, clientes, visitas y documentos. El tasador con IA me ahorra horas cada semana. No volvería atrás.",
    author: "Pedro Q.",
    company: "CorredoresApp",
    role: "Corredor independiente · Santiago",
    stars: 5,
    color: "blue",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    bg: "from-blue-500/[0.05] to-transparent",
    initial: "C",
    avatarGradient: "from-blue-500 to-blue-700",
  },
  {
    quote:
      "Teníamos una web WordPress lenta que no reflejaba lo que somos. TuWebPro migró todo a una plataforma moderna, rápida y con mejor experiencia para las familias. Las inscripciones aumentaron notablemente en las primeras semanas.",
    author: "Equipo Musaika",
    company: "Musaika",
    role: "Escuela en Línea · Chile",
    stars: 5,
    color: "violet",
    border: "border-violet-500/20",
    accent: "text-violet-400",
    bg: "from-violet-500/[0.05] to-transparent",
    initial: "M",
    avatarGradient: "from-violet-500 to-violet-700",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-500/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="code-label text-blue-400/70 block mb-4">{"// Clientes"}</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lo que dicen quienes
            <br />
            <span className="gradient-text">trabajaron con nosotros</span>
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto">
            Proyectos reales, resultados reales, clientes reales.
          </p>
        </motion.div>

        {/* Grid 2 columnas desktop, 1 mobile */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass rounded-2xl p-7 border ${t.border} flex flex-col`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${t.bg} pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author}</div>
                    <div className="text-xs text-white/35">{t.role}</div>
                  </div>
                  <div className="ml-auto">
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                        t.color === "blue"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : "bg-violet-500/10 text-violet-400 border-violet-500/20"
                      }`}
                    >
                      {t.company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
