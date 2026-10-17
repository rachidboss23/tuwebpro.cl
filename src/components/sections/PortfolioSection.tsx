"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CorredoresApp",
    url: "https://corredoresapp.cl",
    problem: "La gestión de propiedades se llevaba con Excel y WhatsApp.",
    solution:
      "Plataforma inmobiliaria moderna orientada a corredores y gestión de propiedades. Incluye tasador con IA, marketplace, autenticación avanzada y herramientas de prospección.",
    result:
      "Fichas, clientes, visitas y documentos quedan centralizados, según el testimonio publicado.",
    tags: ["Next.js", "Supabase", "TypeScript", "IA"],
    category: "SaaS Platform",
    image: "/images/corredoresapp.png",
    borderColor: "border-blue-400/40 hover:border-blue-300/60",
    year: "2026",
    alt: "Captura de la plataforma inmobiliaria CorredoresApp",
  },
  {
    title: "Musaika",
    url: "https://musaika.cl",
    problem:
      "La web WordPress anterior era lenta y las planificaciones semanales en Word/PowerPoint se rompían.",
    solution:
      "Plataforma web para Musaika Escuela en Línea, enfocada en educación alternativa y acompañamiento homeschooling. Incluye un planificador semanal que reemplazó esas planificaciones.",
    result:
      "La migración buscó una experiencia digital moderna para familias y estudiantes.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    category: "Web Platform",
    image: "/images/musaika.png",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    year: "2026",
    alt: "Captura del sitio de Musaika Escuela en Línea",
  },
  {
    title: "Paula Guerra",
    url: "https://www.paulaguerrachamorro.com",
    problem: "Buscaba una presencia digital que hablara de su trabajo artístico.",
    solution:
      "Sitio web para Paula Guerra Chamorro, enfocado en arte en cerámica y mosaicos, identidad visual y experiencia digital moderna para una marca artística internacional.",
    result:
      "El sitio transmite la identidad de su marca artística; su testimonio indica que clientes internacionales llegan directamente por la web.",
    tags: ["WordPress", "Diseño Web", "Branding"],
    category: "Branding & Web",
    image: "/images/paulaguerra.png",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
    year: "2025",
    alt: "Captura del sitio artístico de Paula Guerra",
  },
];

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

function ComingSoonCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="glass overflow-hidden rounded-2xl border border-white/10"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center gap-3">
            <Badge variant="secondary" className="code-label">2026</Badge>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
              En progreso
            </span>
          </div>
          <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Próximo proyecto
          </h3>
          <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/75">
            Algo nuevo está siendo construido.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {["???", "Next.js", "TypeScript"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/75"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-sm text-white/75">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            2026 · En progreso
          </span>
        </div>
        <div className="flex items-center p-5 sm:p-7">
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/60">
            <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10"
              aria-hidden="true"
            />
            <div className="relative z-10 px-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 to-violet-500/30">
                <span className="text-2xl" aria-hidden="true">✦</span>
              </div>
              <p className="font-mono text-sm text-white/75">En construcción...</p>
              <p className="mt-1 text-xs text-white/70">Lanzamiento próximo</p>
            </div>
            <span className="absolute right-3 top-3 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-200">
              2026 · En progreso
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioSection() {
  return (
    <section id="proyectos" className="relative overflow-hidden py-24 sm:py-28">
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
          className="mb-12 text-center sm:mb-16"
        >
          <span className="code-label mb-4 block text-violet-300">
            {"// Proyectos"}
          </span>
          <h2 className="mb-5 text-4xl font-bold text-white sm:text-5xl">
            Trabajo real,
            <br />
            <span className="gradient-text">soluciones en producción</span>
          </h2>
          <p className="mx-auto max-w-lg text-base text-white/75 sm:text-lg">
            Casos desarrollados para clientes, presentados con el contexto
            disponible y sin promesas de resultados.
          </p>
        </motion.header>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`glass overflow-hidden rounded-2xl border ${project.borderColor} ${
                index === 0 ? "shadow-xl shadow-blue-950/20" : ""
              }`}
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="mb-5 flex flex-wrap items-center gap-2">
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
                  <h3 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>
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
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
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
                    className="mt-6 w-fit"
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
                <div className="flex items-center p-5 sm:p-7">
                  <ProjectImage project={project} />
                </div>
              </div>
            </motion.article>
          ))}
          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
}
