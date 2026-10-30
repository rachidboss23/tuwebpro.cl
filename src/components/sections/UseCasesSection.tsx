"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, PackageSearch, Wrench, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileCollapse } from "@/components/ui/mobile-collapse";

/** Estados de una orden de trabajo: avanzan solos para mostrar cómo se vería. */
function OrderMini() {
  const steps = ["Recibido", "En reparación", "Listo"];
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setActive((value) => (value + 1) % steps.length), 2200);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <>
      <div className="flex gap-1.5">
        {steps.map((step, index) => (
          <span
            key={step}
            className={`flex-1 whitespace-nowrap rounded-full px-1 py-2 text-center text-[11px] font-semibold transition-colors duration-500 motion-reduce:transition-none ${
              index === active
                ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white"
                : index < active
                  ? "bg-emerald-400/20 text-emerald-300"
                  : "bg-white/[0.07] text-white/60"
            }`}
          >
            {step}
          </span>
        ))}
      </div>
      {[70, 45].map((width, index) => (
        <div key={width} className="flex h-[30px] items-center gap-2 rounded-lg bg-white/[0.07] px-2.5">
          <span className={`h-[7px] w-[7px] rounded-full ${index === 0 ? "bg-blue-400" : "bg-amber-400"}`} />
          <span className="h-[5px] rounded-full bg-white/30" style={{ width: `${width}%` }} />
        </div>
      ))}
    </>
  );
}

function AgendaMini() {
  return (
    <>
      {["10:00", "11:00", "12:00"].map((hour) => (
        <div key={hour} className="flex items-center gap-2.5 text-xs text-white/60">
          <span className="w-9">{hour}</span>
          {hour === "11:00" ? (
            <div className="flex h-[30px] flex-1 items-center rounded-lg bg-gradient-to-r from-blue-500/55 to-violet-500/45 px-3 text-xs font-semibold text-white">
              Cita reservada
            </div>
          ) : (
            <div className="h-[30px] flex-1 rounded-lg border border-dashed border-white/10 bg-white/[0.06]" />
          )}
        </div>
      ))}
      <span className="self-end rounded-xl rounded-br-sm bg-emerald-200 px-2.5 py-1.5 text-[11.5px] font-semibold text-emerald-950">
        Recordatorio enviado
      </span>
    </>
  );
}

function StockMini() {
  const rows = [
    { name: "Producto A", level: 80, low: false },
    { name: "Producto B", level: 55, low: false },
    { name: "Producto C", level: 14, low: true },
  ];
  return (
    <>
      {rows.map((row) => (
        <div key={row.name} className="flex items-center gap-2.5 text-xs text-white/70">
          <span className="w-20 whitespace-nowrap">{row.name}</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
            <div
              className={`h-full rounded-full ${
                row.low ? "bg-orange-400" : "bg-gradient-to-r from-blue-500 to-cyan-400"
              }`}
              style={{ width: `${row.level}%` }}
            />
          </div>
          {row.low && (
            <em className="animate-pulse rounded-full bg-orange-400/15 px-2 py-0.5 text-[11px] font-bold not-italic text-orange-300 motion-reduce:animate-none">
              Reponer
            </em>
          )}
        </div>
      ))}
    </>
  );
}

const examples: {
  field: string;
  description: string;
  icon: LucideIcon;
  mini: ReactNode;
}[] = [
  {
    field: "Taller mecánico",
    description:
      "Órdenes de trabajo con estados: recibido, en reparación y listo para entregar.",
    icon: Wrench,
    mini: <OrderMini />,
  },
  {
    field: "Centro de estética o peluquería",
    description: "Reservas y recordatorios de citas.",
    icon: CalendarDays,
    mini: <AgendaMini />,
  },
  {
    field: "Tienda pequeña",
    description: "Inventario y alertas de reposición.",
    icon: PackageSearch,
    mini: <StockMini />,
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
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {examples.map((example, index) => {
              const Icon = example.icon;
              return (
                <motion.article
                  key={example.field}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-black/35"
                >
                  <div
                    aria-hidden="true"
                    className="flex h-[178px] flex-col justify-center gap-2.5 border-b border-dashed border-cyan-200/25 bg-gradient-to-b from-white/[0.05] to-transparent p-4"
                  >
                    {example.mini}
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2.5">
                      <Icon className="h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
                      <h3 className="text-lg font-bold text-white">{example.field}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/80">
                      {example.description}
                    </p>
                    <p className="mt-4 border-t border-dashed border-cyan-200/20 pt-3 text-xs font-semibold text-cyan-100">
                      Ejemplo de uso, no es un cliente
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </MobileCollapse>

        <div className="mt-6 flex flex-col items-center gap-4 text-center sm:mt-8 sm:flex-row sm:justify-between sm:text-left">
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
