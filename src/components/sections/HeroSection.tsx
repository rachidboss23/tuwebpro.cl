"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

function DashboardMockup() {
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
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-white/30 font-mono">app.tuwebpro.com/dashboard</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Ingresos", value: "$48.2K", change: "+12.5%", color: "emerald" },
              { label: "Usuarios", value: "1,847", change: "+8.3%", color: "blue" },
              { label: "Conversión", value: "4.92%", change: "+2.1%", color: "violet" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-3">
                <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-white font-display" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </p>
                <span
                  className={`text-xs font-medium ${
                    stat.color === "emerald"
                      ? "text-emerald-400"
                      : stat.color === "blue"
                      ? "text-blue-400"
                      : "text-violet-400"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="glass rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-white/50">Actividad en tiempo real</span>
              <span className="flex items-center gap-1 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
            {/* Bars */}
            <div className="flex items-end gap-1.5 h-16">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                  className="flex-1 rounded-sm origin-bottom"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 10
                        ? "linear-gradient(to top, rgb(59,130,246), rgb(139,92,246))"
                        : "rgba(255,255,255,0.08)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* AI Activity feed */}
          <div className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-3 h-3 text-blue-400" />
              <span className="text-xs text-white/40 font-mono">IA Automation Log</span>
            </div>
            <div className="space-y-2">
              {[
                { action: "Lead capturado vía WhatsApp", time: "2s ago", color: "blue" },
                { action: "CRM actualizado automáticamente", time: "8s ago", color: "emerald" },
                { action: "Email de bienvenida enviado", time: "15s ago", color: "violet" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.color === "blue"
                          ? "bg-blue-400"
                          : item.color === "emerald"
                          ? "bg-emerald-400"
                          : "bg-violet-400"
                      }`}
                    />
                    <span className="text-xs text-white/60">{item.action}</span>
                  </div>
                  <span className="text-xs text-white/25">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -left-4 top-1/3 glass-strong rounded-xl px-3 py-2 border border-white/[0.08]"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-yellow-400" />
          <span className="text-xs font-medium text-white">IA Activa</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute -right-4 bottom-1/3 glass-strong rounded-xl px-3 py-2 border border-white/[0.08]"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-white">Deploy en vivo</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div className="absolute inset-0 bg-mesh-gradient" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/[0.07] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/[0.07] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 border border-white/[0.08] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium text-white/60">
                Agencia tecnológica premium — Chile
              </span>
              <ChevronRight className="w-3 h-3 text-white/30" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-white">Tu negocio,</span>
              <br />
              <span className="gradient-text">sin límites.</span>
              <br />
              <span className="text-white">Software que</span>
              <br />
              <span className="text-white/40">trabaja solo.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed mb-10 max-w-md"
            >
              Desarrollamos plataformas SaaS, automatizaciones con IA y software a medida
              para empresas en Chile que quieren dejar de operar en Excel.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Button
                size="xl"
                variant="glow"
                className="group"
                onClick={() => handleScroll("#proyectos")}
              >
                Ver proyectos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                onClick={() => handleScroll("#contacto")}
              >
                Contactar
              </Button>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8"
            >
              {[
                { value: "30+", label: "Proyectos" },
                { value: "100%", label: "Clientes satisfechos" },
                { value: "48h", label: "Tiempo de respuesta" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/35">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none" />
    </section>
  );
}
