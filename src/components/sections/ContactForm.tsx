"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { trackGA4Event } from "@/lib/analytics";

type Status = "idle" | "sending" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-base text-white placeholder:text-white/60 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300/60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    const formData = new FormData(form);
    formData.append("access_key", "10748499-4eab-455f-868c-2e9b029018a2");
    formData.append("subject", "Nuevo mensaje desde tuwebpro.cl");
    formData.append("from_name", "TuWebPro Formulario");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        form.reset();
        trackGA4Event("form_submit");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[250px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="h-[150px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
            <span
              className="h-2 w-2 rounded-full bg-blue-300"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-white/80">
              Contacto directo
            </span>
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Cuéntame qué necesitas resolver
          </h2>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            Respondo en menos de 24 horas con una propuesta clara y sin costo.
          </p>
        </motion.header>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          aria-busy={status === "sending"}
          className="glass-strong space-y-5 rounded-2xl border border-white/10 p-5 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-white/90">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Juan Pérez"
                className={inputClassName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-white/90">
                Tu email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="juan@empresa.cl"
                className={inputClassName}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-white/90">
              WhatsApp o teléfono (opcional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+56 9 1234 5678"
              className={inputClassName}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-sm font-medium text-white/90">
              ¿Qué quieres resolver?
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              required
              className={`${inputClassName} [color-scheme:dark]`}
            >
              <option value="" disabled className="bg-white text-black">
                Selecciona una opción
              </option>
              <option className="bg-white text-black">
                Ordenar mis clientes y seguimientos
              </option>
              <option className="bg-white text-black">
                Automatizar tareas repetitivas
              </option>
              <option className="bg-white text-black">
                Sitio web o landing
              </option>
              <option className="bg-white text-black">
                Sistema o app a medida
              </option>
              <option className="bg-white text-black">
                No estoy seguro, necesito orientación
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-white/90">
              Cuéntame qué necesitas
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Describe brevemente tu proyecto o proceso."
              className={`${inputClassName} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909] disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          <p
            role="status"
            aria-live="polite"
            className="min-h-6 text-center text-sm font-medium text-emerald-200"
          >
            {status === "success"
              ? "Mensaje enviado. Te respondo en menos de 24 horas."
              : status === "sending"
                ? "Enviando tu mensaje..."
                : ""}
          </p>

          {status === "error" && (
            <p
              role="alert"
              aria-live="assertive"
              className="text-center text-sm font-medium text-red-200"
            >
              Hubo un problema al enviar el mensaje.{" "}
              <a
                href="https://wa.me/56987257444"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
              >
                Escríbeme por WhatsApp.
              </a>
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
