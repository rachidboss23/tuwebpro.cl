import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tuwebpro.cl"),
  title: {
    default: "TuWebPro — Desarrollo Web y SaaS en Chile | Software a Medida",
    template: "%s | TuWebPro",
  },
  description:
    "Desarrollo web profesional en Santiago, Chile. Sitios web, plataformas SaaS y automatización con IA para pymes y emprendedores. 2 proyectos lanzados, respuesta en 24h.",
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
    "desarrollo web precio Chile",
    "crear sitio web Santiago",
    "cuanto cuesta pagina web Chile",
    "freelancer desarrollo web Chile",
  ],
  authors: [{ name: "Rachid Boss Ibarra", url: "https://www.tuwebpro.cl" }],
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
    url: "https://www.tuwebpro.cl",
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
    canonical: "https://www.tuwebpro.cl",
  },
  verification: {
    google: "spOTAGzWNeqWTcm5STstXO5ahuxBdMm8CvfTosCQo_A",
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
        <link rel="canonical" href="https://www.tuwebpro.cl" />
        <meta name="geo.region" content="CL-RM" />
        <meta name="geo.placename" content="Santiago, Chile" />
        <meta name="language" content="es" />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DN93NXFZNQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DN93NXFZNQ');
          `}
        </Script>
      </body>
    </html>
  );
}
