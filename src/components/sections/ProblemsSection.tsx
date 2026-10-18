"use client";

import { motion } from "framer-motion";
import { ArrowRight, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileCollapse } from "@/components/ui/mobile-collapse";

const problems = [
  {
    client: "Tengo todo en Excel y WhatsApp",
    solution: "Un sistema que centraliza clientes, solicitudes e historial.",
    benefit: "Todo en un solo lugar, fácil de consultar.",
  },
  {
    client: "Se me pierden las cotizaciones y los seguimientos",
    solution: "Registro de contactos y cotizaciones con recordatorios de seguimiento.",
    benefit: "Menos oportunidades olvidadas.",
  },
  {
    client: "No sé en qué va cada pedido o trabajo",
    solution: "Un panel con el estado de cada trabajo y su historial.",
    benefit: "Claridad sin tener que preguntar a nadie.",
  },
  {
    client: "Me preguntan lo mismo todo el día",
    solution:
      "Formularios, respuestas automáticas y, cuando corresponde, asistentes con IA o bots de WhatsApp.",
    benefit: "Menos tiempo en tareas repetitivas.",
  },
  {
    client: "Copio los mismos datos en tres lugares",
    solution: "Integraciones y automatizaciones entre tus herramientas.",
    benefit: "Menos errores y menos trabajo manual.",
  },
  {
    client: "No sé cómo va realmente mi negocio",
    solution: "Dashboards con indicadores y reportes.",
    benefit: "Decisiones con la información a mano.",
  },
  {
    client: "Mi web no me trae clientes",
    solution: "Un sitio profesional con SEO, formularios y WhatsApp.",
    benefit: "Una puerta de entrada clara para quienes te buscan.",
  },
];

export default function ProblemsSection() {
  return (
    <section id="soluciones" className="relative overflow-hidden py-14 sm:py-28">
      <div className="absolute inset-0 dot-pattern opacity-25" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-16"
        >
          <span className="code-label mb-4 block text-cyan-300">
            {"// Soluciones"}
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">
            ¿Te suena familiar?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Cada negocio es distinto. Identifico qué te hace perder tiempo y
            armo la solución que realmente necesitas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="glass card-hover rounded-2xl border border-white/10 p-4 sm:p-6"
            >
              <div className="mb-2 flex items-start gap-3 md:mb-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200">
                  <Workflow className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="pt-1 text-base font-bold leading-snug text-white">
                  {problem.client}
                </h3>
              </div>
              <MobileCollapse label="Ver solución y beneficio">
              <dl className="space-y-4">
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
                    Solución
                  </dt>
                  <dd className="text-sm leading-relaxed text-white/80">
                    {problem.solution}
                  </dd>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    Beneficio
                  </dt>
                  <dd className="text-sm leading-relaxed text-white/80">
                    {problem.benefit}
                  </dd>
                </div>
              </dl>
              </MobileCollapse>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 text-center sm:mt-12">
          <p className="max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Cada solución se adapta a tu empresa. Cuéntame tu caso y te propongo
            algo a la medida.
          </p>
          <Button asChild size="lg" variant="glow">
            <a href="#contacto">
              Cuéntame qué necesitas resolver
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
