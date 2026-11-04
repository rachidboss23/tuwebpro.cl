"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Idea & Descubrimiento",
    description:
      "Analizo tu negocio, tus problemas y tus objetivos. Defino qué se va a hacer, en qué orden y cuánto toma.",
    duration: "1–2 días",
    color: "yellow",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/20",
    bgColor: "bg-yellow-500/10",
    glowColor: "shadow-yellow-500/20",
  },
  {
    number: "02",
    icon: Palette,
    title: "Diseño",
    description:
      "Preparo bocetos y prototipos para que veas cómo quedará antes de programar. Todo pensado para que sea fácil de usar y refleje tu marca.",
    duration: "3–5 días",
    color: "violet",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/10",
    glowColor: "shadow-violet-500/20",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    description:
      "Construyo el sistema con entregas parciales que puedes revisar, para ajustar sobre la marcha.",
    duration: "2–6 semanas",
    color: "blue",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/10",
    glowColor: "shadow-blue-500/20",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Automatización",
    description:
      "Conecto tus herramientas y dejo flujos automáticos, con IA si corresponde, para que haya menos trabajo manual.",
    duration: "1–2 semanas",
    color: "cyan",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/10",
    glowColor: "shadow-cyan-500/20",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Publicación y soporte",
    description:
      "Publico el proyecto, reviso que funcione bien y te acompaño después del lanzamiento.",
    duration: "Continuo",
    color: "emerald",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/10",
    glowColor: "shadow-emerald-500/20",
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-14 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-500/[0.04] rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-20"
        >
          <span className="code-label text-cyan-300 block mb-4">Proceso</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Así trabajo,
            <br />
            <span className="gradient-text">paso a paso</span>
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto">
            Trabajo por etapas y te aviso el avance en cada una.
          </p>
          <p className="mt-4 text-sm font-semibold text-cyan-200">
            Duración estimada por etapa
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div
            role="region"
            aria-label="Etapas del proceso"
            tabIndex={0}
            className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative w-[78%] shrink-0 snap-center sm:w-auto"
                >
                  {/* Number + icon */}
                  <div className="hidden lg:flex flex-col items-center mb-6">
                    <div
                      className={`relative w-12 h-12 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center mb-0 shadow-lg ${step.glowColor} z-10 bg-[#090909]`}
                    >
                      <Icon className={`w-5 h-5 ${step.iconColor}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`glass rounded-2xl p-5 border ${step.borderColor} hover:bg-white/[0.03] transition-colors duration-300`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-white/70 font-mono">
                        {step.number}
                      </span>
                      <span
                        className={`text-xs font-medium ${step.iconColor} bg-white/[0.04] rounded-full px-2.5 py-0.5 border border-white/[0.06]`}
                      >
                        {step.duration}
                      </span>
                    </div>

                    <h3
                      className="text-sm font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-xs text-white/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-2 text-center text-xs text-white/60 sm:hidden" aria-hidden="true">
            Desliza para ver las etapas →
          </p>
        </div>

        <p className="mt-6 text-center text-sm leading-relaxed text-white/75 sm:mt-8">
          Estas etapas aplican a sistemas y automatizaciones. Las páginas web se entregan en los plazos indicados en cada plan.
        </p>
        <p className="mt-6 text-center text-base font-semibold text-cyan-100">
          Diagnóstico inicial sin costo: conversamos tu caso y te propongo una
          solución.
        </p>
      </div>
    </section>
  );
}
