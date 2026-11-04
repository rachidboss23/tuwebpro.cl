"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { problems } from "@/lib/problems";

export default function ProblemsSection() {
  const [selected, setSelected] = useState(0);
  const [typing, setTyping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  function choose(index: number) {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setSelected(index);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setTyping(false);
      return;
    }

    setTyping(true);
    timer.current = setTimeout(() => setTyping(false), 600);
  }

  const current = problems[selected];

  return (
    <section id="soluciones" className="relative overflow-hidden py-14 sm:py-28">
      <div className="absolute inset-0 dot-pattern opacity-25" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-[1fr_1.05fr] md:items-center md:gap-14 lg:gap-20">
          {/* Columna izquierda (escritorio): título, situaciones y botón */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center md:mb-7 md:text-left"
            >
              <span className="code-label mb-4 block text-cyan-300">
                Soluciones
              </span>
              <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">
                ¿Te suena <span className="gradient-text">familiar?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:mx-0 md:max-w-md">
                Cada negocio es distinto. Identifico qué te hace perder tiempo y
                armo la solución que realmente necesitas.
              </p>
            </motion.div>

            <div role="group" aria-label="Situaciones" className="mb-8 hidden gap-2 md:grid">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                const active = index === selected;
                return (
                  <button
                    key={problem.client}
                    type="button"
                    aria-pressed={active}
                    onClick={() => choose(index)}
                    className={`group flex w-full items-center gap-3.5 rounded-2xl border px-4 py-3 text-left text-base font-semibold leading-snug text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 motion-reduce:transition-none ${
                      active
                        ? "border-violet-400/60 bg-gradient-to-r from-blue-500/30 to-violet-500/25 shadow-[0_0_0_1px_rgba(139,92,246,0.45)]"
                        : "border-white/10 bg-white/[0.03] hover:translate-x-0.5 hover:border-white/20 hover:bg-white/[0.06] motion-reduce:hover:translate-x-0"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                        active
                          ? "border-white/30 bg-white/15 text-white"
                          : "border-cyan-400/25 bg-cyan-400/10 text-cyan-200"
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="flex-1">{problem.client}</span>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-opacity ${
                        active ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <div className="hidden md:block">
              <p className="mb-4 max-w-md text-base leading-relaxed text-white/75">
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

          {/* Chat: móvil y escritorio */}
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-2xl md:max-w-none md:shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_90px_rgba(59,130,246,0.12)]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3 md:px-5 md:py-3.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white md:h-10 md:w-10"
                aria-hidden="true"
              >
                T
              </span>
              <div>
                <p className="text-sm font-bold leading-tight text-white">TuWebPro</p>
                <p className="text-xs text-emerald-300">
                  Cuéntame tu caso
                </p>
              </div>
            </div>

            <div
              aria-live="polite"
              className="flex min-h-[372px] flex-col gap-2.5 px-3 py-4 md:min-h-[420px] md:gap-3 md:px-5 md:py-6"
            >
              <p className="max-w-[88%] self-start rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.08] px-3.5 py-2.5 text-sm text-white/90 md:text-[15.5px]">
                Hola, soy Rachid. ¿Cuál de estas te pasa?
              </p>

              <p
                key={`q-${selected}`}
                className="max-w-[88%] animate-slide-up self-end rounded-2xl rounded-br-sm bg-gradient-to-br from-blue-500 to-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white motion-reduce:animate-none md:text-[15.5px]"
              >
                {current.client}
              </p>

              {typing ? (
                <div
                  className="flex gap-1 self-start rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.08] px-4 py-3.5"
                  aria-label="Escribiendo"
                >
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60 motion-reduce:animate-none"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              ) : (
                <div
                  key={`a-${selected}`}
                  className="max-w-[88%] animate-slide-up self-start rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.08] px-3.5 py-3 motion-reduce:animate-none md:px-4 md:py-3.5"
                >
                  <p className="mb-0.5 text-xs font-semibold text-blue-300">Solución</p>
                  <p className="text-sm leading-snug text-white/90 md:text-[15.5px] md:leading-normal">
                    {current.solution}
                  </p>
                  <div className="mt-3 border-t border-white/10 pt-3">
                    <p className="mb-0.5 text-xs font-semibold text-emerald-300">Beneficio</p>
                    <p className="flex gap-1.5 text-sm leading-snug text-white/90 md:text-[15.5px] md:leading-normal">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                      <span>{current.benefit}</span>
                    </p>
                  </div>
                  <Button asChild variant="glow" size="sm" className="mt-3 w-full md:w-auto">
                    <a href="#contacto">Cuéntame tu caso</a>
                  </Button>
                </div>
              )}
            </div>

            {/* Respuestas rápidas: solo móvil (en escritorio es la lista de la izquierda) */}
            <div className="border-t border-white/10 bg-black/25 p-3 md:hidden">
              <p className="mb-2 px-0.5 text-xs text-white/70">Respuestas rápidas</p>
              <div className="grid grid-cols-2 gap-2">
                {problems.map((problem, index) => (
                  <button
                    key={problem.short}
                    type="button"
                    aria-pressed={index === selected}
                    onClick={() => choose(index)}
                    className={`min-h-12 rounded-2xl border px-2.5 py-2 text-center text-[13px] font-semibold leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 motion-reduce:transition-none ${
                      index === selected
                        ? "border-transparent bg-gradient-to-br from-blue-500 to-violet-500 text-white"
                        : "border-cyan-400/40 bg-cyan-400/[0.06] text-cyan-100"
                    }`}
                  >
                    {problem.short}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cierre: solo móvil */}
        <div className="mt-8 flex flex-col items-center gap-5 text-center md:hidden">
          <p className="max-w-2xl text-sm leading-relaxed text-white/75">
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
