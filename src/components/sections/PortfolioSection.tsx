"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
    color: "blue",
    gradient: "from-blue-600/20 to-violet-600/20",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    mockupBg: "bg-gradient-to-br from-blue-900/40 to-violet-900/40",
    year: "2024",
  },
  {
    title: "Musaika",
    url: "https://musaika.cl",
    description:
      "Plataforma musical moderna con catálogo de artistas, gestión de contenido y experiencia de usuario enfocada en el ecosistema musical chileno.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    category: "Web Platform",
    color: "violet",
    gradient: "from-violet-600/20 to-pink-600/20",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    mockupBg: "bg-gradient-to-br from-violet-900/40 to-pink-900/40",
    year: "2024",
  },
  {
    title: "React Pizzería",
    url: "https://react-ii-pizzeria.vercel.app",
    description:
      "Aplicación web moderna desarrollada en React enfocada en experiencia interactiva y frontend dinámico. UI fluida con carrito de compras y gestión de pedidos.",
    tags: ["React", "JavaScript", "CSS Modules"],
    category: "Web App",
    color: "orange",
    gradient: "from-orange-600/20 to-red-600/20",
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
    mockupBg: "bg-gradient-to-br from-orange-900/40 to-red-900/40",
    year: "2023",
  },
];

function ProjectMockup({ project }: { project: typeof projects[0] }) {
  return (
    <div className={`relative rounded-xl overflow-hidden ${project.mockupBg} border border-white/[0.06] aspect-[16/9]`}>
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 py-2 bg-black/30 border-b border-white/[0.05]">
        <div className="w-2 h-2 rounded-full bg-red-400/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
        <div className="w-2 h-2 rounded-full bg-green-400/50" />
        <div className="ml-2 flex-1 bg-white/[0.05] rounded px-2 py-0.5">
          <span className="text-[10px] text-white/25 font-mono">{project.url}</span>
        </div>
      </div>

      {/* Mockup content */}
      <div className="absolute inset-0 pt-8 p-4 flex items-center justify-center">
        <div className="w-full space-y-3">
          {/* Fake navbar */}
          <div className="flex items-center justify-between px-4 py-2 glass rounded-lg">
            <div className="w-16 h-2 bg-white/20 rounded" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-1.5 bg-white/10 rounded" />
              ))}
            </div>
          </div>
          {/* Fake hero */}
          <div className="px-4 py-6 text-center space-y-2">
            <div className="w-3/4 h-4 bg-white/20 rounded mx-auto" />
            <div className="w-1/2 h-3 bg-white/10 rounded mx-auto" />
            <div className="flex justify-center gap-2 mt-3">
              <div className="w-20 h-6 rounded-lg bg-blue-500/40" />
              <div className="w-20 h-6 rounded-lg bg-white/10" />
            </div>
          </div>
          {/* Fake cards */}
          <div className="grid grid-cols-3 gap-2 px-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-lg p-3 space-y-1.5">
                <div className="w-6 h-6 rounded-lg bg-blue-500/30" />
                <div className="w-full h-1.5 bg-white/15 rounded" />
                <div className="w-2/3 h-1.5 bg-white/08 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
    </div>
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
          <span className="code-label text-violet-400/70 block mb-4">{'// Proyectos'}</span>
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

        {/* Projects grid */}
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

                  <div className="flex items-center gap-3">
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

                {/* Right: Mockup */}
                <div className="p-6 lg:p-8 flex items-center">
                  <div className="w-full">
                    <ProjectMockup project={project} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
