import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TuWebPro — Automatización, IA y Software a Medida",
  description:
    "Agencia tecnológica especializada en inteligencia artificial, automatización de procesos, desarrollo web, apps SaaS, dashboards y software empresarial.",
  keywords: ["agencia tecnológica", "inteligencia artificial", "automatización", "desarrollo web", "apps SaaS", "software personalizado", "Chile"],
  authors: [{ name: "TuWebPro" }],
  openGraph: {
    title: "TuWebPro — Automatización, IA y Software a Medida",
    description: "Transformamos negocios con inteligencia artificial y software de alto impacto.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
