import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/lib/siteConfig";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TuWebPro",
  url: "https://www.tuwebpro.cl",
  logo: "https://www.tuwebpro.cl/images/logo_tuwebpro_trim.png",
  image: "https://www.tuwebpro.cl/images/logo_tuwebpro_trim.png",
  description:
    "Desarrollo web, software a medida y automatización para pymes en Chile.",
  founder: { "@type": "Person", name: "Rachid Boss Ibarra" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contacto@tuwebpro.cl",
    telephone: "+56987257444",
    availableLanguage: "Spanish",
    areaServed: "CL",
  },
  sameAs: [
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.github,
    siteConfig.socialLinks.whatsapp,
  ],
};

// Se escapa "<" para que el JSON nunca pueda cerrar la etiqueta <script>.
const structuredDataJson = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tuwebpro.cl"),
  title: {
    default: "Desarrollo web y software a medida para pymes | TuWebPro",
    template: "%s | TuWebPro",
  },
  description: `Desarrollo web en Santiago y software a medida para pymes. Automatización y sistemas de gestión. ${siteConfig.projectsInProduction} proyectos lanzados.`,
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
        <meta name="geo.region" content="CL-RM" />
        <meta name="geo.placename" content="Santiago, Chile" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
