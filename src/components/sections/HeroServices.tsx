import type { ReactNode } from "react";

type Row = {
  title: string;
  text: string;
  tint: string;
  art: ReactNode;
};

const rows: Row[] = [
  {
    title: "Páginas web",
    text: "Para que te encuentren y te contacten.",
    tint: "border-blue-400/40 bg-blue-500/[0.12]",
    art: (
      <svg viewBox="0 0 60 44" className="h-11 w-[60px]" aria-hidden="true">
        <rect x="2" y="3" width="56" height="38" rx="5" fill="#0b1220" stroke="#60a5fa" strokeWidth="1.5" />
        <path d="M2 12h56" stroke="#60a5fa" strokeWidth="1.5" />
        <circle cx="8" cy="7.5" r="1.4" fill="#60a5fa" />
        <circle cx="13" cy="7.5" r="1.4" fill="#60a5fa" />
        <rect x="8" y="17" width="30" height="4" rx="2" fill="#fff" />
        <rect x="8" y="24" width="22" height="3" rx="1.5" fill="#fff" opacity=".4" />
        <rect x="8" y="31" width="18" height="6" rx="3" fill="#22d3ee" />
        <rect x="42" y="17" width="12" height="20" rx="3" fill="#60a5fa" opacity=".25" />
      </svg>
    ),
  },
  {
    title: "Apps y sistemas a medida",
    text: "Reemplazan el Excel y los papeles sueltos.",
    tint: "border-cyan-400/40 bg-cyan-500/[0.12]",
    art: (
      <svg viewBox="0 0 60 44" className="h-11 w-[60px]" aria-hidden="true">
        <rect x="2" y="3" width="56" height="38" rx="5" fill="#0b1220" stroke="#22d3ee" strokeWidth="1.5" />
        <rect x="7" y="9" width="46" height="7" rx="2.5" fill="#22d3ee" opacity=".28" />
        <circle cx="12" cy="12.5" r="2.2" fill="#34d399" />
        <rect x="18" y="11" width="22" height="3" rx="1.5" fill="#fff" />
        <rect x="7" y="19" width="46" height="7" rx="2.5" fill="#fff" opacity=".1" />
        <circle cx="12" cy="22.5" r="2.2" fill="#fbbf24" />
        <rect x="18" y="21" width="18" height="3" rx="1.5" fill="#fff" opacity=".7" />
        <rect x="7" y="29" width="46" height="7" rx="2.5" fill="#fff" opacity=".1" />
        <circle cx="12" cy="32.5" r="2.2" fill="#60a5fa" />
        <rect x="18" y="31" width="26" height="3" rx="1.5" fill="#fff" opacity=".7" />
      </svg>
    ),
  },
  {
    title: "Automatizaciones con IA",
    text: "Respuestas y tareas que se hacen solas.",
    tint: "border-violet-400/40 bg-violet-500/[0.12]",
    art: (
      <svg viewBox="0 0 60 44" className="h-11 w-[60px]" aria-hidden="true">
        <rect x="2" y="3" width="36" height="14" rx="7" fill="#fff" opacity=".14" />
        <rect x="9" y="8" width="22" height="3" rx="1.5" fill="#fff" opacity=".7" />
        <rect x="22" y="20" width="36" height="14" rx="7" fill="#a78bfa" />
        <rect x="29" y="25" width="22" height="3" rx="1.5" fill="#fff" />
        {[8, 15, 22].map((cx, i) => (
          <circle
            key={cx}
            cx={cx}
            cy="40"
            r="2"
            fill="#a78bfa"
            className="animate-pulse motion-reduce:animate-none"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </svg>
    ),
  },
];

/** Solo móvil (< md): dice qué hago y qué resuelvo, sin repetir los proyectos. */
export default function HeroServices() {
  return (
    <ul aria-label="Qué hago" className="mb-6 mt-7 flex flex-col gap-2.5 md:hidden">
      {rows.map((row) => (
        <li key={row.title}>
          <a
            href="#servicios"
            className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-3 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 active:scale-[0.99] motion-reduce:transform-none"
          >
            <span
              className={`flex h-[54px] w-[72px] shrink-0 items-center justify-center rounded-xl border ${row.tint}`}
            >
              {row.art}
            </span>
            <span className="min-w-0">
              <strong
                className="mb-0.5 block text-[17px] font-bold leading-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {row.title}
              </strong>
              <span className="block text-sm leading-snug text-white/75">{row.text}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
