"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type MobileCollapseProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * En móvil (< md) el contenido se oculta detrás de un botón; en md+ siempre se ve.
 * El contenido siempre está en el DOM (SEO y lectores de pantalla) y no usa
 * matchMedia, así que no hay diferencias entre servidor y cliente.
 */
export function MobileCollapse({ label, children, className }: MobileCollapseProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-1.5 rounded-lg text-sm font-semibold text-cyan-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
      >
        {open ? "Ver menos" : label}
        <ChevronDown
          className={`h-4 w-4 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div id={id} className={open ? "mt-2 block md:mt-0" : "hidden md:block"}>
        {children}
      </div>
    </div>
  );
}
