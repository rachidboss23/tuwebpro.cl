"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MobileCollapse } from "@/components/ui/mobile-collapse";
import { projects } from "@/lib/projects";

const BASE_TOP = 76; // Offset en px bajo el navbar fijo (64px)
const STEP = 14;     // Escalón en px para que asome la card anterior
const TRANSITION_RANGE = 280; // Distancia en px para la transición suave

function ProjectImage({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <Image
        src={project.image}
        alt={project.alt}
        width={1350}
        height={630}
        className="h-auto w-full object-contain"
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
      />
    </div>
  );
}

export default function PortfolioSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let isMobile = mediaQuery.matches;
    let prefersReducedMotion = motionQuery.matches;
    let rafId: number | null = null;

    const clearTransforms = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const inner = card.querySelector<HTMLElement>("[data-card-inner]");
        if (inner) {
          inner.style.transform = "";
          inner.style.filter = "";
          inner.style.opacity = "";
        }
      });
    };

    const updateTransforms = () => {
      rafId = null;

      if (!isMobile || prefersReducedMotion) {
        clearTransforms();
        return;
      }

      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const numCards = cards.length;
      if (numCards === 0) return;

      // Calcular el progreso de llegada de cada card a su posición sticky
      const arrivalProgress: number[] = new Array(numCards).fill(0);
      for (let j = 1; j < numCards; j++) {
        const targetTop = BASE_TOP + j * STEP;
        const rect = cards[j].getBoundingClientRect();
        const dist = rect.top - targetTop;

        if (dist <= 0) {
          arrivalProgress[j] = 1;
        } else if (dist < TRANSITION_RANGE) {
          const raw = 1 - dist / TRANSITION_RANGE;
          // Smoothstep easing para suavidad orgánica
          arrivalProgress[j] = raw * raw * (3 - 2 * raw);
        } else {
          arrivalProgress[j] = 0;
        }
      }

      // Aplicar scale, brightness y opacidad a cada card según las que la cubren
      for (let i = 0; i < numCards; i++) {
        const card = cards[i];
        const inner = card.querySelector<HTMLElement>("[data-card-inner]");
        if (!inner) continue;

        if (i === numCards - 1) {
          // La última card nunca se cubre
          inner.style.transform = "";
          inner.style.filter = "";
          inner.style.opacity = "";
          continue;
        }

        const pNext = arrivalProgress[i + 1] || 0;
        let deeperCover = 0;
        for (let j = i + 2; j < numCards; j++) {
          deeperCover += (arrivalProgress[j] || 0) * 0.02;
        }

        const scaleReduction = pNext * 0.08 + deeperCover;
        const scale = Math.max(0.86, 1 - scaleReduction);

        const brightnessReduction = pNext * 0.22 + deeperCover * 2.5;
        const brightness = Math.max(0.68, 1 - brightnessReduction);

        const opacityReduction = pNext * 0.15 + deeperCover * 2;
        const opacity = Math.max(0.75, 1 - opacityReduction);

        inner.style.transform = `scale(${scale.toFixed(4)})`;
        inner.style.filter = `brightness(${brightness.toFixed(3)})`;
        inner.style.opacity = opacity.toFixed(3);
      }
    };

    const onScroll = () => {
      if (!rafId && isMobile && !prefersReducedMotion) {
        rafId = window.requestAnimationFrame(updateTransforms);
      }
    };

    const onResize = () => {
      isMobile = mediaQuery.matches;
      prefersReducedMotion = motionQuery.matches;
      if (isMobile && !prefersReducedMotion) {
        updateTransforms();
      } else {
        clearTransforms();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    mediaQuery.addEventListener?.("change", onResize);
    motionQuery.addEventListener?.("change", onResize);

    // Ejecución inicial al montar
    updateTransforms();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mediaQuery.removeEventListener?.("change", onResize);
      motionQuery.removeEventListener?.("change", onResize);
      clearTransforms();
    };
  }, []);

  return (
    <section id="proyectos" className="relative py-14 sm:py-28">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-16"
        >
          <span className="code-label mb-4 block text-violet-300">
            {"// Proyectos"}
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">
            Trabajo real,
            <br />
            <span className="gradient-text">soluciones en producción</span>
          </h2>
          <p className="mx-auto max-w-lg text-base text-white/75 sm:text-lg">
            Casos reales desarrollados para clientes.
          </p>
        </motion.header>

        <div className="space-y-0 md:space-y-6 pb-20 md:pb-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              id={`proyecto-${project.slug}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="project-card-sticky-wrapper scroll-mt-24"
              style={
                {
                  "--stack-top": `${BASE_TOP + index * STEP}px`,
                  "--stack-z": 10 + index,
                } as React.CSSProperties
              }
            >
              <article
                data-card-inner
                className={`project-card-inner glass scroll-mt-20 overflow-hidden rounded-2xl border ${project.borderColor} ${
                  index === 0 ? "shadow-xl shadow-blue-950/20" : ""
                }`}
              >
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                    <div className="mb-3 flex flex-wrap items-center gap-2 md:mb-5">
                      <Badge variant="secondary" className="code-label">
                        {project.year}
                      </Badge>
                      <Badge variant="tech">{project.category}</Badge>
                      <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
                        Proyecto real
                      </span>
                      {index === 0 && (
                        <span className="rounded-full border border-blue-300/30 bg-blue-400/10 px-2.5 py-1 text-xs font-semibold text-blue-100">
                          Caso principal
                        </span>
                      )}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:mb-5">
                      {project.title}
                    </h3>
                    <MobileCollapse label="Ver el caso" openOnHash={`proyecto-${project.slug}`}>
                      <dl className="space-y-4">
                        <div>
                          <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
                            Problema
                          </dt>
                          <dd className="text-sm leading-relaxed text-white/80">
                            {project.problem}
                          </dd>
                        </div>
                        <div>
                          <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                            Solución
                          </dt>
                          <dd className="text-sm leading-relaxed text-white/80">
                            {project.solution}
                          </dd>
                        </div>
                        <div>
                          <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-200">
                            Resultado
                          </dt>
                          <dd className="text-sm leading-relaxed text-white/80">
                            {project.result}
                          </dd>
                        </div>
                      </dl>
                    </MobileCollapse>
                    <ul className="mt-4 flex flex-wrap gap-2 md:mt-6" aria-label={`Tecnologías de ${project.title}`}>
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-4 w-fit md:mt-6"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver proyecto
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center p-3.5 pb-0 max-md:order-first md:p-7">
                    <ProjectImage project={project} />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
