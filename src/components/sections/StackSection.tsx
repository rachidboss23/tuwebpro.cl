"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    name: "React",
    icon: "⚛️",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    textColor: "text-cyan-300",
    description: "UI Library",
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "from-white/10 to-white/5",
    border: "border-white/15",
    textColor: "text-white",
    description: "Framework",
  },
  {
    name: "TypeScript",
    icon: "TS",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    textColor: "text-blue-300",
    description: "Tipado fuerte",
    isText: true,
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
    textColor: "text-green-300",
    description: "Backend",
  },
  {
    name: "Supabase",
    icon: "⚡",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    textColor: "text-emerald-300",
    description: "BaaS + DB",
  },
  {
    name: "Firebase",
    icon: "🔥",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
    textColor: "text-orange-300",
    description: "Google Cloud",
  },
  {
    name: "OpenAI",
    icon: "◉",
    color: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/20",
    textColor: "text-teal-300",
    description: "AI Models",
  },
  {
    name: "Tailwind",
    icon: "🌊",
    color: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/20",
    textColor: "text-sky-300",
    description: "CSS Framework",
  },
  {
    name: "Vercel",
    icon: "▲",
    color: "from-white/10 to-white/5",
    border: "border-white/10",
    textColor: "text-white/80",
    description: "Deployment",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function StackSection() {
  return (
    <section id="stack" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="code-label text-emerald-400/70 block mb-4">{'// Stack Tecnológico'}</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Herramientas de
            <br />
            <span className="gradient-text">clase mundial</span>
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto">
            Usamos las tecnologías más modernas y confiables del ecosistema actual.
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-3"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`group flex flex-col items-center gap-3 p-4 rounded-2xl bg-gradient-to-b ${tech.color} border ${tech.border} cursor-default transition-all duration-300 hover:shadow-lg`}
            >
              <div className="text-2xl leading-none">
                {tech.isText ? (
                  <span className={`text-lg font-bold font-mono ${tech.textColor}`}>
                    {tech.icon}
                  </span>
                ) : (
                  tech.icon
                )}
              </div>
              <div className="text-center">
                <div className={`text-xs font-bold ${tech.textColor}`} style={{ fontFamily: "var(--font-display)" }}>
                  {tech.name}
                </div>
                <div className="text-[10px] text-white/25 mt-0.5">{tech.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8 border border-white/[0.06] text-center"
        >
          <p className="text-white/40 text-sm leading-relaxed max-w-2xl mx-auto">
            También trabajamos con{" "}
            <span className="text-white/70">PostgreSQL</span>,{" "}
            <span className="text-white/70">Redis</span>,{" "}
            <span className="text-white/70">Docker</span>,{" "}
            <span className="text-white/70">AWS</span>,{" "}
            <span className="text-white/70">Stripe</span>,{" "}
            <span className="text-white/70">n8n</span>,{" "}
            <span className="text-white/70">Make (Integromat)</span> y más.{" "}
            El stack se adapta a las necesidades de cada proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
