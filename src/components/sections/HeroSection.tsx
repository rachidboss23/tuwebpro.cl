"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Code2, LayoutDashboard, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroPanel from "@/components/sections/HeroPanel";
import StackMarquee from "@/components/sections/StackMarquee";
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
    <div className="relative mx-auto w-full max-w-2xl" style={{ perspective: 1800 }}>
      {/* Glow behind */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500/30 via-violet-500/25 to-cyan-500/20 blur-3xl" />

      <motion.div variants={floatVariants} initial="initial" animate="animate" className="relative">
        {/* Main window */}
        <div
          className="hp-gborder relative overflow-hidden rounded-2xl bg-[#0b0e18] shadow-[0_50px_90px_-30px_rgba(0,0,0,0.9)]"
          style={{ transform: "rotateY(-11deg) rotateX(4deg)", transformOrigin: "60% 50%" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-white/15" />
            <div className="w-3 h-3 rounded-full bg-white/15" />
            <div className="w-3 h-3 rounded-full bg-white/15" />
            <div className="ml-4 flex-1 bg-white/[0.05] rounded-md px-3 py-1">
              <span className="text-xs text-white/70">musaika.cl</span>
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative">
            <Image
              src="/images/musaika.png"
              alt="Musaika — sitio web de la escuela en línea"
              width={1357}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Bottom bar */}
          <div className="px-5 py-3 bg-white/[0.02] border-t border-white/[0.06] flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <Code2 className="w-3 h-3" />
              Next.js · TypeScript · Tailwind
            </span>
            <span className="text-xs font-medium text-white/80">
              El código es tuyo una vez pagado el proyecto
            </span>
          </div>
        </div>

        {/* Tarjeta de vidrio */}
        <div className="absolute -top-7 right-6 z-10 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0f1320]/70 px-4 py-3 shadow-2xl backdrop-blur-xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/15">
            <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight text-white">En producción</p>
            <p className="text-xs text-white/60">musaika.cl</p>
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-14 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="min-w-0">
            {/* Pill: qué hago, visible en todos los tamaños */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex max-w-full items-center gap-2 glass rounded-full px-3.5 sm:px-4 py-1.5 border border-white/[0.08] mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12.5px] sm:text-xs font-medium text-white/85 sm:text-white/70">
                Páginas web · Apps · Automatización con IA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="min-w-0 text-[32px] sm:text-5xl font-bold leading-[1.05] sm:leading-[1.1] tracking-[-0.03em] sm:tracking-tight mb-3 sm:mb-6"
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
              className="text-[15px] sm:text-lg text-white/70 leading-relaxed mb-5 sm:mb-6 max-w-xl"
            >
              Sistemas y automatizaciones para que tu empresa trabaje con más orden y menos
              tareas repetitivas.
            </motion.p>

            <ul className="hidden md:grid gap-3 mb-7 md:grid-cols-3">
              {[
                { icon: Clock, title: "Más tiempo", text: "menos trabajo repetitivo", color: "text-blue-300", box: "border-blue-400/30 bg-blue-400/10" },
                { icon: LayoutDashboard, title: "Más orden", text: "información en un solo lugar", color: "text-cyan-300", box: "border-cyan-400/30 bg-cyan-400/10" },
                { icon: Workflow, title: "Más control", text: "procesos conectados", color: "text-violet-300", box: "border-violet-400/30 bg-violet-400/10" },
              ].map((benefit) => (
                <li
                  key={benefit.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                >
                  <span className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg border ${benefit.box}`}>
                    <benefit.icon className={`h-4 w-4 ${benefit.color}`} aria-hidden="true" />
                  </span>
                  <strong className={`block text-sm ${benefit.color}`}>{benefit.title}</strong>
                  <span className="text-xs leading-snug text-white/70">{benefit.text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-1 sm:gap-3 sm:flex-row sm:flex-wrap mb-2 sm:mb-8"
            >
              <Button
                asChild
                size="xl"
                variant="glow"
                className="group w-full max-w-full whitespace-normal px-4 text-center leading-snug sm:w-auto sm:whitespace-nowrap sm:px-6"
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
                className="hidden sm:inline-flex sm:px-5"
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
                {
                  value: siteConfig.responseTime.replace(/\s*horas?$/i, " h"),
                  label: "tiempo de respuesta",
                },
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
            <p className="text-xs leading-relaxed text-white/75 sm:hidden mb-1">
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

          {/* Móvil y tablet: panel de producto ilustrativo */}
          <HeroPanel />
        </div>
      </div>

      {/* Franja de tecnologías (solo escritorio) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden lg:block">
        <StackMarquee />
      </div>

      {/* Bottom fade (solo escritorio) */}
      <div className="absolute bottom-0 left-0 right-0 hidden h-32 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none lg:block" />
    </section>
  );
}
