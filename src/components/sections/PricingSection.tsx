"use client";

import { motion } from "framer-motion";
import { Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_BASE =
  "https://wa.me/56987257444?text=Hola%20Rachid%2C%20quiero%20cotizar%20un%20proyecto";

const plans = [
  {
    name: "Landing Page",
    price: "$290.000",
    currency: "CLP",
    idealFor: "Profesionales y emprendedores",
    time: "3–5 días hábiles",
    popular: false,
    color: "blue",
    border: "border-white/[0.07] hover:border-blue-500/30",
    gradient: "",
    badge: "",
    features: [
      "1 página profesional completa",
      "Diseño moderno y responsivo",
      "Formulario de contacto",
      "SEO básico incluido",
      "SSL + deploy en producción",
      "2 semanas de soporte post-lanzamiento",
    ],
    ctaLabel: "Lo quiero",
    ctaMessage: "Hola%20Rachid%2C%20me%20interesa%20el%20plan%20Landing%20Page",
  },
  {
    name: "Web Profesional",
    price: "$590.000",
    currency: "CLP",
    idealFor: "Empresas y negocios establecidos",
    time: "1–2 semanas",
    popular: true,
    color: "violet",
    border: "border-violet-500/40 hover:border-violet-500/60",
    gradient: "bg-gradient-to-b from-violet-500/[0.07] to-transparent",
    badge: "MÁS POPULAR",
    features: [
      "Hasta 6 páginas a medida",
      "Blog o sección de noticias",
      "Formularios avanzados",
      "Integración WhatsApp + Google Maps",
      "Panel de administración básico",
      "SEO optimizado",
      "1 mes de soporte",
    ],
    ctaLabel: "Lo quiero",
    ctaMessage: "Hola%20Rachid%2C%20me%20interesa%20el%20plan%20Web%20Profesional",
  },
  {
    name: "Sistema / SaaS",
    price: "desde $2.500.000",
    currency: "CLP",
    idealFor: "Empresas que necesitan software propio",
    time: "Según alcance del proyecto",
    popular: false,
    color: "cyan",
    border: "border-white/[0.07] hover:border-cyan-500/30",
    gradient: "",
    badge: "",
    features: [
      "Plataforma web completa a medida",
      "Autenticación y roles de usuario",
      "Base de datos + API propia",
      "Integraciones con servicios externos",
      "Automatizaciones con IA (opcional)",
      "3 meses de soporte y mantenimiento",
    ],
    ctaLabel: "Cotizar proyecto",
    ctaMessage: "Hola%20Rachid%2C%20quiero%20cotizar%20un%20sistema%20o%20SaaS",
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="py-28 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-violet-500/[0.04] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="code-label text-blue-400/70 block mb-4">{"// Precios"}</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Inversión clara,
            <br />
            <span className="gradient-text">resultado real</span>
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto">
            Precios en pesos chilenos. Sin sorpresas ni letra chica.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass rounded-2xl border ${plan.border} p-8 flex flex-col transition-colors duration-300 ${plan.popular ? "scale-[1.02] md:scale-105" : ""}`}
            >
              {/* Popular gradient overlay */}
              {plan.gradient && (
                <div className={`absolute inset-0 rounded-2xl ${plan.gradient} pointer-events-none`} />
              )}

              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-violet-500 text-white shadow-lg shadow-violet-500/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Plan name */}
                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold mb-1 ${
                      plan.popular ? "text-violet-300" : "text-white"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs text-white/35">
                    Ideal para: {plan.idealFor}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/[0.06]">
                  <div
                    className="text-3xl font-bold text-white leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price}
                  </div>
                  <div className="text-xs text-white/30 mt-1">{plan.currency}</div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.popular
                            ? "text-violet-400"
                            : plan.color === "cyan"
                            ? "text-cyan-400"
                            : "text-blue-400"
                        }`}
                      />
                      <span className="text-sm text-white/55 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Time */}
                <div className="mb-6">
                  <span className="text-xs text-white/28 font-mono">
                    ⏱ {plan.time}
                  </span>
                </div>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "glow" : "outline"}
                  size="lg"
                  className="w-full group"
                  onClick={() =>
                    window.open(
                      `https://wa.me/56987257444?text=${plan.ctaMessage}`,
                      "_blank"
                    )
                  }
                >
                  <MessageSquare className="w-4 h-4" />
                  {plan.ctaLabel}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-white/35"
        >
          ¿Necesitas algo diferente?{" "}
          <a
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 underline underline-offset-2 hover:text-white transition-colors"
          >
            Escríbeme
          </a>{" "}
          y armamos una propuesta a medida sin costo.
        </motion.p>
      </div>
    </section>
  );
}
