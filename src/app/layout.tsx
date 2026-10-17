import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TuWebPro",
  url: "https://www.tuwebpro.cl",
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  sameAs: [
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.github,
    siteConfig.socialLinks.whatsapp,
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tuwebpro.cl"),
  title: {
    default: "Desarrollo web y software a medida para pymes | TuWebPro",
    template: "%s | TuWebPro",
  },
  description: `Desarrollo web en Santiago y software a medida en Chile. ${siteConfig.projectsInProduction} proyectos lanzados. Sistemas de gestión para pymes y automatización para empresas, con soluciones adaptadas a cada operación.`,
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
    "cuánto cuesta página web Chile",
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
    title: "TuWebPro — Software y automatización para pymes en Chile",
    description:
      "Desarrollo web, software a medida y sistemas de gestión para pymes en Chile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TuWebPro — Software y automatización para pymes en Chile",
    description:
      "Desarrollo web, software a medida y sistemas de gestión para pymes en Chile.",
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
        <meta name="geo.region" content="CL-RM" />
        <meta name="geo.placename" content="Santiago, Chile" />
        <meta name="language" content="es" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
