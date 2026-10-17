"use client";

import { motion } from "framer-motion";
import { Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "56987257444";
const WHATSAPP_BASE =
  "https://wa.me/56987257444?text=Hola%20Rachid%2C%20quiero%20cotizar%20un%20proyecto";

const plans = [
  {
    name: "Web Básica",
    result: "Tu primera presencia profesional online",
    price: "$150.000",
    currency: "CLP",
    idealFor: "Emprendedores que recién comienzan",
    time: "2–3 días hábiles",
    popular: false,
    color: "emerald",
    border: "border-white/[0.10] hover:border-emerald-400/50",
    gradient: "",
    badge: "Para partir",
    features: [
      "Sitio web de 1 a 3 páginas",
      "Diseño limpio y responsivo",
      "Formulario de contacto",
      "Dominio + deploy en producción",
      "SSL incluido",
      "1 semana de soporte post-lanzamiento",
    ],
    ctaLabel: "Lo quiero",
    ctaMessage: "Hola Rachid, me interesa el plan Web Básica",
  },
  {
    name: "Landing Page",
    result: "Una página que presenta tu servicio y capta contactos",
    price: "$290.000",
    currency: "CLP",
    idealFor: "Profesionales y emprendedores",
    time: "3–5 días hábiles",
    popular: false,
    color: "blue",
    border: "border-white/[0.10] hover:border-blue-400/50",
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
    ctaMessage: "Hola Rachid, me interesa el plan Landing Page",
  },
  {
    name: "Web Profesional",
    result: "Tu empresa online, con contenido y herramientas para crecer",
    price: "$590.000",
    currency: "CLP",
    idealFor: "Empresas y negocios establecidos",
    time: "1–2 semanas",
    popular: true,
    color: "violet",
    border: "border-violet-400/50 hover:border-violet-300/70",
    gradient: "bg-gradient-to-b from-violet-500/[0.10] to-transparent",
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
    ctaMessage: "Hola Rachid, me interesa el plan Web Profesional",
  },
  {
    name: "Automatización a medida",
    result: "Conecta tareas y herramientas de tu operación",
    price: "Cotiza según alcance",
    currency: "",
    idealFor: "Negocios que buscan conectar sus herramientas",
    time: "Según alcance del proyecto",
    popular: false,
    color: "cyan",
    border: "border-cyan-400/30 hover:border-cyan-300/60",
    gradient: "",
    badge: "",
    features: [
      "Flujos entre formularios, correo, planillas y WhatsApp",
      "Integraciones con tus herramientas",
      "Soporte según alcance",
    ],
    ctaLabel: "Cotizar automatización",
    ctaMessage: "Hola Rachid, quiero cotizar una automatización a medida",
  },
  {
    name: "Sistema / SaaS",
    result: "Tu proceso completo en un solo sistema",
    price: "desde $2.500.000",
    currency: "CLP",
    idealFor: "Empresas que necesitan software propio",
    time: "Según alcance del proyecto",
    popular: false,
    color: "cyan",
    border: "border-white/[0.10] hover:border-cyan-400/50",
    gradient: "",
    badge: "",
    features: [
      "Plataforma web completa a medida",
      "Autenticación y roles de usuario",
      "Base de datos + API propia",
      "Integraciones con servicios externos",
      "Automatizaciones con IA (opcional)",
      "3 meses de soporte y mantenimiento",
      "El código es tuyo una vez pagado el proyecto",
    ],
    ctaLabel: "Cotizar proyecto",
    ctaMessage: "Hola Rachid, quiero cotizar un sistema o SaaS",
  },
];

function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function PricingSection() {
  return (
    <section id="precios" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="code-label mb-4 block text-blue-300">
            {"// Precios"}
          </span>
          <h2 className="mb-5 text-4xl font-bold text-white sm:text-5xl">
            Inversión clara,
            <br />
            <span className="gradient-text">solución a tu medida</span>
          </h2>
          <p className="mx-auto max-w-lg text-base text-white/75 sm:text-lg">
            Precios en pesos chilenos. Sin sorpresas ni letra chica.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`relative flex flex-col rounded-2xl border p-5 transition-colors duration-300 sm:p-6 ${plan.border} ${plan.gradient} ${plan.popular ? "shadow-lg shadow-violet-950/30" : "glass"}`}
            >
              {plan.badge && (
                <span
                  className={`mb-4 inline-flex min-h-7 w-fit items-center rounded-full px-3 py-1 text-[10px] font-bold tracking-wide text-white ${
                    plan.popular
                      ? "bg-violet-600"
                      : "bg-emerald-700"
                  }`}
                >
                  {plan.badge}
                </span>
              )}
              <p className="mb-2 min-h-10 text-sm font-semibold leading-snug text-cyan-200">
                {plan.result}
              </p>
              <h3 className="mb-2 text-xl font-bold text-white">{plan.name}</h3>
              <p className="mb-5 min-h-10 text-sm text-white/75">
                Ideal para: {plan.idealFor}
              </p>
              <div className="mb-5 min-h-[4.5rem] border-b border-white/10 pb-4">
                <p className="text-2xl font-bold leading-tight text-white">
                  {plan.price}
                </p>
                {plan.currency && (
                  <p className="mt-1 text-sm text-white/70">{plan.currency}</p>
                )}
              </div>

              <ul className="mb-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-snug text-white/80"
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.color === "violet"
                          ? "text-violet-300"
                          : plan.color === "emerald"
                            ? "text-emerald-300"
                            : "text-cyan-300"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-5 text-sm text-white/75">
                <span className="mr-1" aria-hidden="true">⏱</span>
                <span className="sr-only">Plazo estimado: </span>
                {plan.time}
              </p>
              <Button
                asChild
                variant={plan.popular ? "glow" : "outline"}
                size="lg"
                className="w-full"
              >
                <a
                  href={getWhatsAppUrl(plan.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  {plan.ctaLabel}
                </a>
              </Button>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 space-y-3 text-center">
          <p className="text-sm leading-relaxed text-white/80">
            ¿Necesitas algo diferente?{" "}
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-200 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Escríbeme
            </a>{" "}
            y armamos una propuesta a medida sin costo.
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            Precios en CLP. Proyectos con integraciones o necesidades especiales
            se cotizan según alcance.
          </p>
        </div>
      </div>
    </section>
  );
}
