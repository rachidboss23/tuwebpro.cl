"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import StackMarquee from "@/components/sections/StackMarquee";

const kpis = [
  { label: "Consultas", value: "24", delta: "+12%", path: "M0 16C10 14 14 17 24 11S40 12 48 7 66 9 80 2" },
  { label: "Respuesta", value: "4 min", delta: "", path: "M0 5C12 8 18 4 28 10S46 9 56 14 70 12 80 17" },
  { label: "Cotizaciones", value: "9", delta: "+3", path: "M0 15C14 15 18 9 30 10S48 5 58 8 72 3 80 4" },
];

const rows = [
  { initial: "C", color: "#3b82f6", title: "Cotización · Sitio web", via: "WhatsApp", status: "Nueva", tone: "hp-s1" },
  { initial: "P", color: "#8b5cf6", title: "Pedido · Sistema de órdenes", via: "Formulario web", status: "En curso", tone: "hp-s2" },
  { initial: "R", color: "#059669", title: "Reserva · Agenda online", via: "Correo", status: "Listo", tone: "hp-s3" },
];

/**
 * Solo móvil y tablet (< lg). Panel de gestión ilustrativo con datos de ejemplo,
 * hecho solo con HTML, SVG y CSS (sin imágenes pesadas).
 */
export default function HeroPanel() {
  const [count, setCount] = useState(24);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    let frame = 0;
    let start: number | null = null;
    const tick = (time: number) => {
      start = start ?? time;
      const progress = Math.min(1, (time - start) / 1300);
      setCount(Math.round(24 * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-w-0 lg:hidden">
      <div
        className="hp-stage"
        role="img"
        aria-label="Ilustración de ejemplo: un panel de gestión con indicadores, un gráfico de actividad y una lista de consultas"
      >
        <div className="hp-toast">
          <i>
            <Check aria-hidden="true" />
          </i>
          <div>
            <b>Nueva consulta</b>
            <span>WhatsApp · hace 2 s</span>
          </div>
        </div>

        <div className="hp-win">
          <div className="hp-tb">
            <i />
            <i />
            <i />
            <span className="hp-url">panel.tuempresa.cl</span>
          </div>
          <div className="hp-bd">
            <div className="hp-sb">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="hp-mi">
              <div className="hp-hd">
                <b>Resumen</b>
                <span>Hoy</span>
              </div>

              <div className="hp-kp">
                {kpis.map((kpi) => (
                  <div className="hp-k" key={kpi.label}>
                    <small>{kpi.label}</small>
                    <div>
                      <b>{kpi.label === "Consultas" ? count : kpi.value}</b>
                      {kpi.delta && <em>{kpi.delta}</em>}
                    </div>
                    <svg viewBox="0 0 80 20" preserveAspectRatio="none" aria-hidden="true">
                      <path className="hp-sp" pathLength={1} d={kpi.path} />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="hp-ch">
                <small>Actividad de la semana</small>
                <svg viewBox="0 0 400 70" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="hp-sg" x1="0" x2="1">
                      <stop offset="0" stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#a78bfa" />
                    </linearGradient>
                    <linearGradient id="hp-fg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#3b82f6" stopOpacity=".35" />
                      <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 52C40 46 60 56 100 38S170 42 210 26 290 32 330 14 380 20 400 8V70H0Z"
                    fill="url(#hp-fg)"
                  />
                  <path
                    className="hp-ln"
                    pathLength={1}
                    d="M0 52C40 46 60 56 100 38S170 42 210 26 290 32 330 14 380 20 400 8"
                  />
                </svg>
              </div>

              {rows.map((row) => (
                <div className="hp-tr" key={row.title}>
                  <span className="hp-av" style={{ background: row.color }}>
                    {row.initial}
                  </span>
                  <div>
                    <b>{row.title}</b>
                    <span>{row.via}</span>
                  </div>
                  <span className={`hp-st ${row.tone}`}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <StackMarquee className="-mx-4 sm:-mx-6" />
      <p className="hp-note">Panel de ejemplo con datos ilustrativos, no de un cliente.</p>
    </div>
  );
}
