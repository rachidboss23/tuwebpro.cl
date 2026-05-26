import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tuwebpro.cl"),
  title: {
    default: "TuWebPro — Desarrollo Web, IA y Automatización en Chile",
    template: "%s | TuWebPro",
  },
  description:
    "Agencia tecnológica en Santiago, Chile. Desarrollamos plataformas SaaS, automatizaciones con IA, dashboards, apps web y software personalizado para empresas y emprendedores.",
  keywords: [
    "agencia tecnológica Chile",
    "desarrollo web Santiago",
    "automatización IA Chile",
    "software a medida Chile",
    "apps SaaS Chile",
    "Next.js Chile",
    "desarrollo web Chile",
    "programador freelance Chile",
    "sistemas personalizados Chile",
    "inteligencia artificial empresas Chile",
    "dashboard empresarial Chile",
    "TuWebPro",
  ],
  authors: [{ name: "Rachid Boss Ibarra", url: "https://tuwebpro.cl" }],
  creator: "TuWebPro",
  publisher: "TuWebPro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://tuwebpro.cl",
    siteName: "TuWebPro",
    title: "TuWebPro — Desarrollo Web, IA y Automatización en Chile",
    description:
      "Construimos sistemas inteligentes que automatizan, escalan y transforman negocios modernos. Plataformas SaaS, dashboards, bots IA y software personalizado.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TuWebPro — Agencia tecnológica en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TuWebPro — Desarrollo Web, IA y Automatización en Chile",
    description:
      "Construimos sistemas inteligentes que automatizan, escalan y transforman negocios modernos.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tuwebpro.cl",
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
        <link rel="canonical" href="https://tuwebpro.cl" />
        <meta name="geo.region" content="CL-RM" />
        <meta name="geo.placename" content="Santiago, Chile" />
        <meta name="language" content="es" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
