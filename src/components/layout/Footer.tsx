"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/rachidboss23" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rachid-boss-ibarra/" },
  { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/56987257444" },
  { icon: Mail, label: "Email", href: "mailto:contacto@tuwebpro.cl" },
];

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo_tuwebpro.png"
                alt="TuWebPro"
                width={440}
                height={132}
                className="object-contain h-[112px] w-auto"
              />
            </div>
            <p className="text-white/38 text-sm leading-relaxed max-w-xs">
              Sistemas inteligentes que automatizan, escalan y transforman negocios modernos.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/22">
            © {new Date().getFullYear()} TuWebPro · Rachid Boss Ibarra
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/28">Disponible para nuevos proyectos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
