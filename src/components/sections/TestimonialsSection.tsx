"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GOOGLE_REVIEW_URL, trackReviewClick } from "@/lib/reviews";

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
  {
    quote:
      "Quería una presencia digital que hablara de mi trabajo sin necesidad de que yo explicara nada. El sitio que desarrollaron transmite exactamente la identidad de mi marca artística — clientes internacionales llegan directamente por la web.",
    author: "Paula Guerra Chamorro",
    company: "Paula Guerra",
    role: "Artista Ceramista y Muralista · España",
    stars: 5,
    color: "orange",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    bg: "from-orange-500/[0.05] to-transparent",
    initial: "P",
    avatarGradient: "from-orange-500 to-orange-700",
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
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                          : t.color === "violet"
                          ? "bg-violet-500/10 text-violet-400 border-violet-500/20"
                          : "bg-orange-500/10 text-orange-400 border-orange-500/20"
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

        <div className="glass card-hover glow-blue relative max-w-6xl mx-auto mt-8 overflow-hidden rounded-2xl border border-blue-500/30 p-7 sm:p-9 motion-reduce:transform-none motion-reduce:transition-none">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.12] via-violet-500/[0.05] to-transparent" />
          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="code-label mb-3 block text-blue-400/80">
                {"// Tu opinión"}
              </span>
              <h3
                className="mb-3 text-2xl font-bold text-white sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ¿Trabajaste con TuWebPro?
              </h3>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Tu reseña en Google ayuda a otros negocios a decidir. Cuéntanos
                cómo fue la experiencia.
              </p>
              <div
                className="mt-4 flex items-center gap-0.5"
                aria-hidden="true"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-base text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full shrink-0 md:w-auto">
              <Button
                asChild
                variant="glow"
                size="lg"
                className="min-h-11 w-full motion-reduce:transition-none md:w-auto"
              >
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackReviewClick}
                >
                  Dejar reseña en Google
                </a>
              </Button>
              <p className="mt-3 text-center text-xs leading-relaxed text-white/60 md:text-left">
                Toma menos de 1 minuto. Necesitas una cuenta de Google.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
