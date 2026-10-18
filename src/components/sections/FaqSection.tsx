import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta una página web?",
    a: "La Web Básica (1 a 3 páginas) parte en $150.000 CLP. La Landing Page cuesta $290.000 y la Web Profesional $590.000. Los sistemas a medida parten desde $2.500.000 y las automatizaciones se cotizan según alcance.",
  },
  {
    q: "¿Los precios llevan IVA?",
    a: "No. Emito boleta de honorarios y los valores publicados no llevan IVA adicional.",
  },
  {
    q: "¿Cuánto se demora?",
    a: "Web Básica: 2–3 días hábiles. Landing Page: 3–5 días hábiles. Web Profesional: 1–2 semanas. Los sistemas y las automatizaciones dependen del alcance del proyecto.",
  },
  {
    q: "¿El código del proyecto es mío?",
    a: "Sí. El código es tuyo una vez pagado el proyecto.",
  },
  {
    q: "¿Qué soporte incluyen los planes?",
    a: "Web Básica: 1 semana. Landing Page: 2 semanas. Web Profesional: 1 mes. Sistema / SaaS: 3 meses de soporte y mantenimiento.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Cuéntame qué necesitas por el formulario o por WhatsApp. Respondo en menos de 24 horas con una propuesta clara y sin costo.",
  },
];

export default function FaqSection() {
  return (
    <section id="preguntas" className="relative overflow-hidden py-12 sm:py-24">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6 text-center sm:mb-10">
          <span className="code-label mb-3 block text-cyan-300">{"// Preguntas"}</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Preguntas frecuentes</h2>
        </header>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group glass rounded-2xl border border-white/10 open:border-cyan-300/30"
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:px-5 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-cyan-200 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-4 pb-4 text-sm leading-relaxed text-white/80 sm:px-5 sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
