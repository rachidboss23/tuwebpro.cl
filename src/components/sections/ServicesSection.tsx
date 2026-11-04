"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Globe,
  Layers,
  MessageSquare,
  Plug,
  Settings2,
  Users,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

type ServicePackage = {
  name: string;
  summary: string;
  ideal: string;
  color: string;
  art: "web" | "chat" | "app";
  cta: string;
  openFirst?: boolean;
  services: Service[];
};

const packages: ServicePackage[] = [
  {
    name: "Presencia digital",
    summary:
      "Sitios web y tiendas online pensados para explicar lo que haces y facilitar el contacto.",
    ideal: "Ideal si hoy dependes solo de redes sociales.",
    color: "#3b82f6",
    art: "web",
    cta: "Cotizar mi web",
    openFirst: true,
    services: [
      {
        icon: Globe,
        title: "Desarrollo Web",
        description:
          "Sitios rápidos, que se ven bien en el celular y se encuentran en Google, con formulario de contacto y WhatsApp. También sitios corporativos y tiendas online con WordPress y WooCommerce.",
        tags: ["Next.js", "React", "TypeScript", "WordPress", "WooCommerce"],
      },
    ],
  },
  {
    name: "Automatización",
    summary:
      "Conecta tus herramientas y automatiza tareas repetitivas con flujos adaptados a tu operación.",
    ideal: "Ideal si pierdes tiempo en tareas repetitivas o copiando datos.",
    color: "#22d3ee",
    art: "chat",
    cta: "Cotizar una automatización",
    services: [
      {
        icon: Brain,
        title: "Automatización IA",
        description:
          "Flujos que leen, clasifican y responden por ti: correos, formularios, documentos y consultas de clientes, apoyados en IA.",
        tags: ["OpenAI", "LangChain", "n8n"],
      },
      {
        icon: Plug,
        title: "Conexión entre herramientas",
        description:
          "Hago que tus planillas, tu CRM, tu sistema de pagos y WhatsApp se comuniquen entre sí, para no copiar datos a mano.",
        tags: ["APIs", "Webhooks", "Google Sheets"],
      },
      {
        icon: MessageSquare,
        title: "Automatización WhatsApp",
        description:
          "Asistentes en WhatsApp Business que responden las consultas frecuentes y dan seguimiento a quienes te escriben.",
        tags: ["WhatsApp API", "IA", "CRM"],
      },
    ],
  },
  {
    name: "Sistema a medida",
    summary:
      "Software conectado a tus procesos para centralizar la gestión y consultar la información con claridad.",
    ideal: "Ideal si tu operación vive en planillas y mensajes.",
    color: "#8b5cf6",
    art: "app",
    cta: "Cotizar un sistema",
    services: [
      {
        icon: Layers,
        title: "Plataformas web (SaaS)",
        description:
          "Plataformas con usuarios y roles, planes de pago y varias empresas dentro del mismo sistema, listas para crecer.",
        tags: ["Supabase", "Stripe", "Vercel"],
      },
      {
        icon: BarChart3,
        title: "Dashboards",
        description:
          "Paneles con tus datos al día, gráficos claros e indicadores para decidir más rápido.",
        tags: ["Gráficos", "PostgreSQL", "Tiempo real"],
      },
      {
        icon: Settings2,
        title: "Sistemas Personalizados",
        description:
          "Software a medida para tu operación: inventarios, facturación, órdenes de trabajo y procesos internos.",
        tags: ["Node.js", "PostgreSQL", "Docker"],
      },
      {
        icon: Users,
        title: "Gestión de clientes (CRM)",
        description:
          "Seguimiento de clientes adaptado a tu industria: etapas de venta, historial y reportes.",
        tags: ["Clientes", "Seguimiento", "Reportes"],
      },
    ],
  },
];

function PackageArt({ kind, color }: { kind: ServicePackage["art"]; color: string }) {
  const common = "h-[124px] w-[170px] transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none";
  if (kind === "web") {
    return (
      <svg viewBox="0 0 60 44" className={common} aria-hidden="true">
        <rect x="2" y="3" width="56" height="38" rx="5" fill="#0b1220" stroke="#60a5fa" strokeWidth="1.2" />
        <path d="M2 12h56" stroke="#60a5fa" strokeWidth="1.2" />
        <circle cx="8" cy="7.5" r="1.4" fill="#60a5fa" />
        <circle cx="13" cy="7.5" r="1.4" fill="#60a5fa" />
        <rect x="8" y="17" width="30" height="4" rx="2" fill="#fff" />
        <rect x="8" y="24" width="22" height="3" rx="1.5" fill="#fff" opacity=".4" />
        <rect x="8" y="31" width="18" height="6" rx="3" fill="#22d3ee" />
        <rect x="42" y="17" width="12" height="20" rx="3" fill="#60a5fa" opacity=".25" />
      </svg>
    );
  }
  if (kind === "chat") {
    return (
      <svg viewBox="0 0 60 44" className={common} aria-hidden="true">
        <rect x="2" y="3" width="36" height="14" rx="7" fill="#fff" opacity=".14" />
        <rect x="9" y="8" width="22" height="3" rx="1.5" fill="#fff" opacity=".7" />
        <rect x="22" y="20" width="36" height="14" rx="7" fill={color} />
        <rect x="29" y="25" width="22" height="3" rx="1.5" fill="#06222a" />
        {[8, 15, 22].map((cx, i) => (
          <circle
            key={cx}
            cx={cx}
            cy="40"
            r="2"
            fill={color}
            className="animate-pulse motion-reduce:animate-none"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 44" className={common} aria-hidden="true">
      <rect x="2" y="3" width="56" height="38" rx="5" fill="#0b1220" stroke="#a78bfa" strokeWidth="1.2" />
      <rect x="7" y="9" width="46" height="7" rx="2.5" fill="#a78bfa" opacity=".28" />
      <circle cx="12" cy="12.5" r="2.2" fill="#34d399" />
      <rect x="18" y="11" width="22" height="3" rx="1.5" fill="#fff" />
      <rect x="7" y="19" width="46" height="7" rx="2.5" fill="#fff" opacity=".1" />
      <circle cx="12" cy="22.5" r="2.2" fill="#fbbf24" />
      <rect x="18" y="21" width="18" height="3" rx="1.5" fill="#fff" opacity=".7" />
      <rect x="7" y="29" width="46" height="7" rx="2.5" fill="#fff" opacity=".1" />
      <circle cx="12" cy="32.5" r="2.2" fill="#60a5fa" />
      <rect x="18" y="31" width="26" height="3" rx="1.5" fill="#fff" opacity=".7" />
    </svg>
  );
}

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
          className="mx-auto mb-8 max-w-4xl text-center sm:mb-14"
        >
          <span className="code-label mb-4 block text-blue-300">
            Servicios
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">
            Soluciones para que tu empresa trabaje con{" "}
            <span className="gradient-text">más orden</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Desde una presencia digital clara hasta automatizaciones y sistemas
            que se adaptan a la forma en que trabaja tu negocio.
          </p>
        </motion.header>

        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((pkg, packageIndex) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: packageIndex * 0.08 }}
              style={{ "--c": pkg.color } as CSSProperties}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_var(--c)] motion-reduce:transition-none"
            >
              <div
                className="hidden h-[150px] items-center justify-center border-b border-white/10 md:flex"
                style={{
                  background: `radial-gradient(70% 90% at 50% 0, ${pkg.color}4d, transparent 75%), ${pkg.color}14`,
                }}
              >
                <PackageArt kind={pkg.art} color={pkg.color} />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">{pkg.name}</h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">{pkg.summary}</p>
                <p
                  className="mb-5 border-l-[3px] py-0.5 pl-3 text-sm font-semibold text-cyan-100"
                  style={{ borderColor: pkg.color }}
                >
                  {pkg.ideal}
                </p>

                <div className="mb-5 border-t border-white/10">
                  {pkg.services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <details
                        key={service.title}
                        open={pkg.openFirst && index === 0}
                        className="group/d border-b border-white/10"
                      >
                        <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2.5 text-[15px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 [&::-webkit-details-marker]:hidden">
                          <Icon
                            className="h-4 w-4 shrink-0"
                            style={{ color: pkg.color }}
                            aria-hidden="true"
                          />
                          {service.title}
                          <span
                            aria-hidden="true"
                            className="ml-auto text-xl leading-none text-white/60 transition-transform group-open/d:rotate-45 motion-reduce:transition-none"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mb-3 text-sm leading-relaxed text-white/75">
                          {service.description}
                        </p>
                        <ul
                          aria-label={`Tecnologías de ${service.title}`}
                          className="mb-4 flex flex-wrap gap-1.5"
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
                      </details>
                    );
                  })}
                </div>

                <a
                  href="#contacto"
                  className="mt-auto inline-flex min-h-11 items-center gap-1.5 rounded-lg text-[15px] font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
