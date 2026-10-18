"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, PackageSearch, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileCollapse } from "@/components/ui/mobile-collapse";

const examples = [
  {
    field: "Taller mecánico",
    description:
      "Órdenes de trabajo con estados: recibido, en reparación y listo para entregar.",
    icon: Wrench,
  },
  {
    field: "Centro de estética o peluquería",
    description: "Reservas y recordatorios de citas.",
    icon: CalendarDays,
  },
  {
    field: "Tienda pequeña",
    description: "Inventario y alertas de reposición.",
    icon: PackageSearch,
  },
];

export default function UseCasesSection() {
  return (
    <section
      aria-labelledby="use-cases-title"
      className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl border border-dashed border-cyan-300/30 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-cyan-500/[0.05] p-5 sm:p-9 lg:p-10">
        <div className="mb-4 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="code-label mb-3 block text-cyan-200">
              {"// Ejemplos de uso"}
            </span>
            <h2
              id="use-cases-title"
              className="text-2xl font-bold text-white sm:text-4xl"
            >
              Así podría funcionar en tu rubro
            </h2>
          </div>
          <span className="inline-flex w-fit rounded-full border border-dashed border-cyan-200/40 bg-cyan-400/[0.08] px-3 py-2 text-xs font-semibold text-cyan-100">
            Ejemplos hipotéticos
          </span>
        </div>

        <MobileCollapse label="Ver ejemplos por rubro">
        <div className="grid gap-4 md:grid-cols-3">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <motion.article
                key={example.field}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-dashed border-cyan-200/30 bg-black/30 p-5"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/25 bg-cyan-300/10 text-cyan-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {example.field}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {example.description}
                </p>
                <p className="mt-4 border-t border-dashed border-cyan-200/20 pt-3 text-xs font-semibold text-cyan-100">
                  Ejemplo de uso, no es un cliente
                </p>
              </motion.article>
            );
          })}
        </div>
        </MobileCollapse>

        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-base font-medium text-white">
            ¿Tu rubro es otro? Cuéntame tu caso.
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="#contacto">
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
