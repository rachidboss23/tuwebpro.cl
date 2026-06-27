"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "10748499-4eab-455f-868c-2e9b029018a2");
    formData.append("subject", "Nuevo mensaje desde tuwebpro.cl");
    formData.append("from_name", "TuWebPro Formulario");
    try {
      const endpoint = "https://" + "api.web3forms.com/submit";
      const response = await fetch(endpoint, { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[250px] bg-violet-500/8 rounded-full blur-3xl" />
        <div className="w-[300px] h-[150px] bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 border border-white/[0.08] mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium text-white/60">Contacto directo</span>
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {"Cuentame tu "}
            <span className="gradient-text">proyecto</span>
          </h2>

          <p className="text-white/45 text-base sm:text-lg leading-relaxed">
            Respondo en menos de 24 horas con una propuesta clara y sin costo.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Juan Perez"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Tu email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="juan@empresa.cl"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium text-white/50 uppercase tracking-wider">
              {"Cuentame que necesitas"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Cuentame que necesitas..."
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <Send className="w-4 h-4" />
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm font-medium text-emerald-400 py-1"
            >
              {"Mensaje enviado. Te respondo en menos de 24 horas."}
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm font-medium text-red-400 py-1"
            >
              {"Hubo un problema. "}
              <a
                href={"https://wa.me/56987257444"}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-red-300 transition-colors"
              >
                {"Escribeme por WhatsApp."}
              </a>
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}