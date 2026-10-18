"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

function ProjectMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl rounded-3xl" />

      {/* Main window */}
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="relative glass-strong rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
          <div className="ml-4 flex-1 bg-white/[0.05] rounded-md px-3 py-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/75 font-mono">corredoresapp.cl</span>
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative">
          <Image
            src="/images/corredoresapp.png"
            alt="CorredoresApp — plataforma inmobiliaria con IA"
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
            priority
          />
          {/* Overlay gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="px-5 py-3 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              En producción
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <Code2 className="w-3 h-3" />
              Next.js · Supabase · IA
            </span>
            <span className="text-xs font-medium text-white/80">
              El código es tuyo una vez pagado el proyecto
            </span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex items-center pt-16 overflow-hidden lg:min-h-screen">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div className="absolute inset-0 bg-mesh-gradient" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/[0.07] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/[0.07] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 border border-white/[0.08] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium text-white/60">
                Software y automatización para pymes en Chile
              </span>
              <ChevronRight className="w-3 h-3 text-white/30" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-white">
                ¿Todo en Excel y WhatsApp?{" "}
              </span>
              <span className="gradient-text">Lo juntamos en un solo lugar.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/70 leading-relaxed mb-6 sm:mb-6 max-w-xl"
            >
              Sistemas y automatizaciones para que tu empresa trabaje con más orden y menos
              tareas repetitivas.
            </motion.p>

            <ul className="hidden md:grid gap-2 mb-6 text-sm text-white/75 md:grid-cols-3">
              <li><strong className="text-blue-300">Más tiempo:</strong> menos trabajo repetitivo</li>
              <li><strong className="text-cyan-300">Más orden:</strong> información en un solo lugar</li>
              <li><strong className="text-violet-300">Más control:</strong> procesos conectados</li>
            </ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap mb-6 sm:mb-8"
            >
              <Button
                asChild
                size="xl"
                variant="glow"
                className="group w-full sm:w-auto"
              >
                <a href="#contacto">
                  Cuéntame qué necesitas resolver
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="hidden sm:inline-flex"
              >
                <a href="#proyectos">Ver proyectos reales</a>
              </Button>
              <a
                href="#proyectos"
                className="inline-flex min-h-11 items-center justify-center rounded-lg text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 sm:hidden"
              >
                Ver proyectos reales
              </a>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden sm:flex sm:flex-wrap sm:items-center sm:gap-8"
            >
              {[
                {
                  value: String(siteConfig.projectsInProduction),
                  label: "proyectos en producción",
                },
                { value: "Respondo", label: `en menos de ${siteConfig.responseTime}` },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-xl sm:text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/75">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            <p className="text-xs leading-relaxed text-white/75 sm:hidden">
              {siteConfig.projectsInProduction} proyectos en producción · Respondo en menos de{" "}
              {siteConfig.responseTime}
            </p>
          </div>

          {/* Right: Project mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <ProjectMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none" />
    </section>
  );
}
