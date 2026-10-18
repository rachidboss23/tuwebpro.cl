"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Globe,
  Layers,
  MessageSquare,
  Plug,
  Settings2,
  Users,
} from "lucide-react";
import { MobileCollapse } from "@/components/ui/mobile-collapse";

const packages = [
  {
    name: "Presencia digital",
    summary:
      "Sitios web y tiendas online pensados para explicar lo que haces y facilitar el contacto.",
    ideal: "Ideal si hoy dependes solo de redes sociales.",
    accent: "border-blue-400/30 from-blue-500/10",
    services: [
      {
        icon: Globe,
        title: "Desarrollo Web",
        description:
          "Sitios y aplicaciones web de alto rendimiento con las mejores tecnologías del mercado actual. También desarrollo sitios corporativos y soluciones WordPress optimizadas para conversión y SEO.",
        tags: ["Next.js", "React", "TypeScript", "WordPress", "WooCommerce"],
      },
    ],
  },
  {
    name: "Automatización",
    summary:
      "Conecta tus herramientas y automatiza tareas repetitivas con flujos adaptados a tu operación.",
    ideal: "Ideal si pierdes tiempo en tareas repetitivas o copiando datos.",
    accent: "border-cyan-400/30 from-cyan-500/10",
    services: [
      {
        icon: Brain,
        title: "Automatización IA",
        description:
          "Implemento flujos inteligentes con modelos de lenguaje, visión y razonamiento para automatizar tareas complejas.",
        tags: ["OpenAI", "LangChain", "n8n"],
      },
      {
        icon: Plug,
        title: "Integraciones API",
        description:
          "Conecto tus herramientas existentes: CRMs, ERPs, pasarelas de pago y servicios externos.",
        tags: ["REST", "GraphQL", "Webhooks"],
      },
      {
        icon: MessageSquare,
        title: "Automatización WhatsApp",
        description:
          "Bots inteligentes para WhatsApp Business que atienden consultas y hacen seguimiento a posibles clientes.",
        tags: ["WhatsApp API", "IA", "CRM"],
      },
    ],
  },
  {
    name: "Sistema a medida",
    summary:
      "Software conectado a tus procesos para centralizar la gestión y consultar la información con claridad.",
    ideal: "Ideal si tu operación vive en planillas y mensajes.",
    accent: "border-violet-400/30 from-violet-500/10",
    services: [
      {
        icon: Layers,
        title: "Apps SaaS",
        description:
          "Plataformas completas con autenticación, billing, roles y multi-tenancy listas para escalar.",
        tags: ["Supabase", "Stripe", "Vercel"],
      },
      {
        icon: BarChart3,
        title: "Dashboards",
        description:
          "Paneles de control interactivos con datos en tiempo real, gráficos avanzados y KPIs accionables.",
        tags: ["Recharts", "Postgres", "Real-time"],
      },
      {
        icon: Settings2,
        title: "Sistemas Personalizados",
        description:
          "Software empresarial a medida: ERP, inventarios, facturación y gestión de procesos internos.",
        tags: ["Node.js", "PostgreSQL", "Docker"],
      },
      {
        icon: Users,
        title: "CRM Empresariales",
        description:
          "Sistemas de gestión de clientes personalizados para tu industria, con pipelines, seguimiento y analítica.",
        tags: ["CRM", "Pipeline", "Analytics"],
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative overflow-hidden py-14 sm:py-28">
      <div className="absolute inset-0 dot-pattern opacity-25" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-16"
        >
          <span className="code-label mb-4 block text-blue-300">
            {"// Servicios"}
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">
            Soluciones para que tu empresa trabaje con más orden
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Desde una presencia digital clara hasta automatizaciones y sistemas
            que se adaptan a la forma en que trabaja tu negocio.
          </p>
        </motion.header>

        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((servicePackage, packageIndex) => (
            <motion.article
              key={servicePackage.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: packageIndex * 0.08 }}
              className={`glass card-hover rounded-2xl border ${servicePackage.accent.split(" ")[0]} bg-gradient-to-b ${servicePackage.accent.split(" ")[1]} to-transparent p-4 sm:p-6`}
            >
              <h3 className="mb-2 text-2xl font-bold text-white">
                {servicePackage.name}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-white/80">
                {servicePackage.summary}
              </p>
              <p className="mb-3 text-sm font-medium text-cyan-200 md:mb-6">
                {servicePackage.ideal}
              </p>

              <MobileCollapse label={`Ver servicios incluidos (${servicePackage.services.length})`}>
              <div className="space-y-4">
                {servicePackage.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <section
                      key={service.title}
                      className="rounded-xl border border-white/10 bg-black/25 p-4"
                    >
                      <div className="mb-2 flex items-center gap-2.5">
                        <Icon
                          className="h-4 w-4 shrink-0 text-cyan-200"
                          aria-hidden="true"
                        />
                        <h4 className="text-sm font-bold text-white">
                          {service.title}
                        </h4>
                      </div>
                      <p className="mb-3 text-sm leading-relaxed text-white/75">
                        {service.description}
                      </p>
                      <ul
                        aria-label={`Tecnologías de ${service.title}`}
                        className="flex flex-wrap gap-1.5"
                      >
                        {service.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-white/80"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>
              </MobileCollapse>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
