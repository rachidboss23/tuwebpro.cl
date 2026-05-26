"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="contacto" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="w-[400px] h-[200px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-10 sm:p-16 border border-white/[0.08] text-center relative overflow-hidden gradient-border"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.05] via-transparent to-violet-500/[0.05] rounded-3xl" />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 border border-white/[0.08] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white/60">Disponibles para proyectos</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Construyamos tu{" "}
              <br />
              <span className="gradient-text">próximo sistema</span>
              <br />
              inteligente
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/45 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            >
              Cuéntanos tu idea. En menos de 48 horas tendrás una propuesta
              clara con arquitectura, tiempos y presupuesto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="xl"
                variant="glow"
                className="group w-full sm:w-auto"
                onClick={() => window.open("mailto:rachidboss027@gmail.com", "_blank")}
              >
                <Mail className="w-4 h-4" />
                Escribir por email
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="group w-full sm:w-auto"
                onClick={() =>
                  window.open("https://wa.me/56900000000?text=Hola! Quiero hablar sobre un proyecto con TuWebPro", "_blank")
                }
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp directo
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30"
            >
              {[
                "✓ Respuesta en 24–48h",
                "✓ Propuesta sin costo",
                "✓ Código de calidad",
                "✓ Soporte continuo",
              ].map((item) => (
                <span key={item} className="font-medium">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
