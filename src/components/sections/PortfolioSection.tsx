"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MobileCollapse } from "@/components/ui/mobile-collapse";
import { projects } from "@/lib/projects";

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
  return (
    <section id="proyectos" className="relative overflow-hidden py-14 sm:py-28">
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

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              id={`proyecto-${project.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`glass scroll-mt-20 overflow-hidden rounded-2xl border ${project.borderColor} ${
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
                <div className="flex items-center p-4 pb-0 max-md:order-first max-md:hidden md:p-7">
                  <ProjectImage project={project} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
