"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Layers,
  BarChart3,
  Plug,
  Settings2,
  MessageSquare,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Automatización IA",
    description:
      "Implementamos flujos inteligentes con modelos de lenguaje, visión y razonamiento para automatizar tareas complejas.",
    tags: ["OpenAI", "LangChain", "n8n"],
    color: "blue",
    gradient: "from-blue-500/10 to-blue-500/[0.03]",
    border: "border-blue-500/20 hover:border-blue-500/40",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios y aplicaciones web de alto rendimiento con las mejores tecnologías del mercado actual.",
    tags: ["Next.js", "React", "TypeScript"],
    color: "violet",
    gradient: "from-violet-500/10 to-violet-500/[0.03]",
    border: "border-violet-500/20 hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: Layers,
    title: "Apps SaaS",
    description:
      "Plataformas completas con autenticación, billing, roles y multi-tenancy listas para escalar.",
    tags: ["Supabase", "Stripe", "Vercel"],
    color: "cyan",
    gradient: "from-cyan-500/10 to-cyan-500/[0.03]",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/10 text-cyan-400",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description:
      "Paneles de control interactivos con datos en tiempo real, gráficos avanzados y KPIs accionables.",
    tags: ["Recharts", "Postgres", "Real-time"],
    color: "emerald",
    gradient: "from-emerald-500/10 to-emerald-500/[0.03]",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Plug,
    title: "Integraciones API",
    description:
      "Conectamos tus herramientas existentes: CRMs, ERPs, pasarelas de pago y servicios externos.",
    tags: ["REST", "GraphQL", "Webhooks"],
    color: "orange",
    gradient: "from-orange-500/10 to-orange-500/[0.03]",
    border: "border-orange-500/20 hover:border-orange-500/40",
    iconBg: "bg-orange-500/10 text-orange-400",
  },
  {
    icon: Settings2,
    title: "Sistemas Personalizados",
    description:
      "Software empresarial a medida: ERP, inventarios, facturación y gestión de procesos internos.",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    color: "pink",
    gradient: "from-pink-500/10 to-pink-500/[0.03]",
    border: "border-pink-500/20 hover:border-pink-500/40",
    iconBg: "bg-pink-500/10 text-pink-400",
  },
  {
    icon: MessageSquare,
    title: "Automatización WhatsApp",
    description:
      "Bots inteligentes para WhatsApp Business que atienden, califican y nutren leads 24/7.",
    tags: ["WhatsApp API", "IA", "CRM"],
    color: "green",
    gradient: "from-green-500/10 to-green-500/[0.03]",
    border: "border-green-500/20 hover:border-green-500/40",
    iconBg: "bg-green-500/10 text-green-400",
  },
  {
    icon: Users,
    title: "CRM Empresariales",
    description:
      "Sistemas de gestión de clientes personalizados para tu industria, con pipelines, seguimiento y analítica.",
    tags: ["CRM", "Pipeline", "Analytics"],
    color: "indigo",
    gradient: "from-indigo-500/10 to-indigo-500/[0.03]",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    iconBg: "bg-indigo-500/10 text-indigo-400",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-28 relative">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="code-label text-blue-400/70 block mb-4">
            {'// Servicios'}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Todo lo que tu empresa
            <br />
            <span className="gradient-text">necesita para escalar</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Desde sistemas simples hasta plataformas complejas. Tecnología a medida para negocios que quieren crecer.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={item}
                className={`group relative glass rounded-2xl p-6 border ${service.border} card-hover shine cursor-default`}
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/45 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-white/30 bg-white/[0.04] border border-white/[0.06] rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
