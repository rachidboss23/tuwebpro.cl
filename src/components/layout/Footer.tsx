"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MessageSquare, Star } from "lucide-react";
import { GOOGLE_REVIEW_URL, trackReviewClick } from "@/lib/reviews";
import { trackGA4Event } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";

const socials = [
  { icon: Github, label: "GitHub", href: siteConfig.socialLinks.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.socialLinks.linkedin },
  { icon: MessageSquare, label: "WhatsApp", href: siteConfig.socialLinks.whatsapp },
  { icon: Mail, label: "Email", href: siteConfig.email },
];

const navLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Stack", href: "#stack" },
  { label: "Sobre mí", href: "#nosotros" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black/40">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 md:pb-14 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mb-12 md:gap-10">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo_tuwebpro_trim.png"
                alt="TuWebPro"
                width={640}
                height={156}
                sizes="180px"
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              Software y automatización para pymes en Chile: más orden, menos
              tareas manuales.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página" className="hidden md:block">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/75">
              Navegación
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-md text-sm text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/75">
              Contacto
            </p>
            <div className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  onClick={() => {
                    if (label === "WhatsApp") trackGA4Event("whatsapp_click");
                  }}
                  className="group flex min-h-11 items-center gap-3 rounded-lg text-sm text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <span className="flex h-8 w-8 max-md:h-11 max-md:w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] transition-colors group-hover:border-white/30">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="sr-only md:not-sr-only">{label}</span>
                </a>
              ))}
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackReviewClick}
                className="group flex min-h-11 items-center gap-3 rounded-lg text-sm text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <span className="flex h-8 w-8 max-md:h-11 max-md:w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] transition-colors group-hover:border-white/30">
                  <Star className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="sr-only md:not-sr-only">Reseña en Google</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            <p className="text-xs text-white/70">
              © {new Date().getFullYear()} TuWebPro · Rachid Boss Ibarra
            </p>
            <Link
              href="/privacidad"
              className="inline-flex min-h-11 items-center rounded text-xs text-white/75 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Política de privacidad
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
            <span className="text-xs text-white/75">
              Disponible para nuevos proyectos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
