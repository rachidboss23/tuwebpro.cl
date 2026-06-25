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
    description:
      "Plataforma inmobiliaria moderna orientada a corredores y gestión de propiedades. Incluye tasador con IA, marketplace, autenticación avanzada y herramientas de prospección.",
    tags: ["Next.js", "Supabase", "TypeScript", "IA"],
    category: "SaaS Platform",
    image: "/images/corredoresapp.png",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    gradient: "from-blue-600/20 to-violet-600/20",
    year: "2026",
    live: true,
  },
  {
    title: "Musaika",
    url: "https://musaika.cl",
    description:
      "Plataforma web desarrollada para Musaika Escuela en Línea, enfocada en educación alternativa, acompañamiento homeschooling y experiencia digital moderna para familias y estudiantes.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    category: "Web Platform",
    image: "/images/musaika.png",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    gradient: "from-violet-600/20 to-pink-600/20",
    year: "2026",
    live: true,
  },
];

function ProjectImage({ project }: { project: typeof projects[0] }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-black/40">
      <Image
        src={project.image}
        alt={project.title}
        width={1280}
        height={720}
        className="w-full h-auto object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

function ComingSoonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="group glass rounded-2xl border border-white/[0.07] overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left: Info */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="code-label">2026</Badge>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              En progreso
            </span>
          </div>

          <h3
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Próximo proyecto
          </h3>

          <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
            Algo nuevo está siendo construido.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["???", "Next.js", "TypeScript"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-white/25 bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs text-white/25 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              2026 · En progreso
            </span>
          </div>
        </div>

        {/* Right: Mystery visual */}
        <div className="p-6 lg:p-8 flex items-center">
          <div className="w-full relative rounded-xl overflow-hidden border border-white/[0.06] bg-black/60 aspect-video flex items-center justify-center">
            {/* Blurred grid background */}
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10" />

            {/* Center content */}
            <div className="relative z-10 text-center px-6 filter blur-[1px]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✦</span>
              </div>
              <p className="text-white/50 text-sm font-mono">En construcción...</p>
              <p className="text-white/20 text-xs mt-1">Lanzamiento próximo</p>
            </div>

            {/* Corner badge */}
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
                2026 · En progreso
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="proyectos" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="code-label text-violet-400/70 block mb-4">{"// Proyectos"}</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trabajo real,
            <br />
            <span className="gradient-text">resultados reales</span>
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto">
            Proyectos lanzados en producción para clientes reales.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass rounded-2xl border ${project.borderColor} overflow-hidden card-hover`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Info */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="secondary" className="code-label">
                      {project.year}
                    </Badge>
                    <Badge variant="tech">{project.category}</Badge>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-white/40 bg-white/[0.05] border border-white/[0.06] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      Ver proyecto
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Right: Screenshot */}
                <div className="p-6 lg:p-8 flex items-center">
                  <div className="w-full">
                    <ProjectImage project={project} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming soon card */}
          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
}
