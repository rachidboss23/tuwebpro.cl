import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/siteConfig";

const LAST_UPDATED = "5 de noviembre de 2026";
const contactEmail = siteConfig.email.replace(/^mailto:/, "");
const whatsappNumber = new URL(siteConfig.socialLinks.whatsapp)
  .pathname.slice(1)
  .replace(/^56(\d)(\d{4})(\d{4})$/, "+56 $1 $2 $3");
const policyUrl = "https://www.tuwebpro.cl/politica-de-privacidad";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidad | TuWebPro" },
  description:
    "Cómo TuWebPro recoge, usa y protege tus datos personales: qué datos se recogen, para qué, con quién se comparten y cómo ejercer tus derechos.",
  alternates: {
    canonical: policyUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: policyUrl,
    siteName: "TuWebPro",
    title: "Política de Privacidad | TuWebPro",
    description:
      "Cómo TuWebPro recoge, usa y protege tus datos personales: qué datos se recogen, para qué, con quién se comparten y cómo ejercer tus derechos.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TuWebPro",
      },
    ],
  },
};

const sections = [
  "Quién es el responsable de tus datos",
  "A qué se aplica esta política",
  "Qué datos recojo, para qué y con qué base",
  "Cómo uso tus datos",
  "Con quién comparto tus datos",
  "Cuánto tiempo guardo tus datos",
  "Tus derechos",
  "Cookies y tecnologías similares",
  "Seguridad",
  "Menores de edad",
  "Cambios a esta política",
  "Contacto",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar homePath="/" />
      <main className="min-h-screen bg-[#090909] px-4 pb-20 pt-24 text-white sm:px-6 sm:pt-28 lg:px-8">
        <article className="mx-auto max-w-3xl text-base leading-[1.7] text-white/90 sm:text-lg">
          <Link
            href="/"
            className="mb-8 inline-flex min-h-11 items-center rounded-md text-sm font-medium text-blue-200 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Volver al inicio
          </Link>

          <header className="mb-8">
            <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="text-white/75">TuWebPro · tuwebpro.cl</p>
            <p className="mt-3 text-sm text-white/75">
              Última actualización: {LAST_UPDATED}
            </p>
          </header>

          <p className="mb-8">
            En esta página te explico, de forma simple, qué datos personales
            recojo cuando usas tuwebpro.cl, para qué los uso, con quién los
            comparto, cuánto tiempo los guardo y cómo puedes ejercer tus
            derechos. Esta política se rige por la Ley N° 19.628 sobre
            protección de la vida privada, modificada por la Ley N° 21.719
            sobre protección de los datos personales.
          </p>

          <nav
            aria-label="Índice de la política de privacidad"
            className="mb-10 rounded-2xl border border-white/15 bg-white/[0.04] p-5"
          >
            <h2 className="mb-3 text-base font-semibold text-white">
              En esta página
            </h2>
            <ol className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
              {sections.map((section, index) => (
                <li key={section}>
                  <a
                    href={`#seccion-${index + 1}`}
                    className="text-sm text-blue-200 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    {index + 1}. {section}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-9">
            <section id="seccion-1" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                1. Quién es el responsable de tus datos
              </h2>
              <p>
                El responsable del tratamiento de tus datos es Rachid Emanuel
                Boss Ibarra, quien opera la marca TuWebPro (tuwebpro.cl), con
                domicilio en Santiago, Chile. Para cualquier tema de privacidad
                puedes escribirme a{" "}
                <a className="break-all text-blue-200 underline" href={siteConfig.email}>
                  {contactEmail}
                </a>
                .
              </p>
            </section>

            <section id="seccion-2" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                2. A qué se aplica esta política
              </h2>
              <p>
                Esta política se aplica solo al sitio tuwebpro.cl y a la
                comunicación que tenemos a través de él: formulario, correo y
                WhatsApp. Los proyectos de mis clientes y los sitios a los que
                enlazo desde aquí, como GitHub, LinkedIn, WhatsApp o Google,
                tienen sus propias políticas de privacidad.
              </p>
            </section>

            <section id="seccion-3" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                3. Qué datos recojo, para qué y con qué base
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/15">
                <table className="w-full min-w-[48rem] border-collapse text-left text-sm leading-relaxed">
                  <thead className="bg-white/[0.08] text-white">
                    <tr>
                      <th scope="col" className="p-4 font-semibold">
                        Situación
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Datos
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Para qué y base legal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/85">
                    <tr>
                      <th scope="row" className="p-4 font-semibold text-white">
                        Formulario de contacto
                      </th>
                      <td className="p-4">
                        Nombre completo, correo electrónico, WhatsApp o
                        teléfono (opcional), tipo de necesidad seleccionada y
                        mensaje. El formulario no añade datos de página de
                        origen ni fecha de envío.
                      </td>
                      <td className="p-4">
                        Para: responder tu consulta, enviarte una propuesta y
                        coordinar el diagnóstico inicial sin costo. Base: tu
                        consentimiento al enviar el formulario y la atención de
                        tu solicitud antes de una eventual contratación.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-semibold text-white">
                        WhatsApp y correo
                      </th>
                      <td className="p-4">
                        Tu número o email, tu nombre de perfil y el contenido
                        de tus mensajes.
                      </td>
                      <td className="p-4">
                        Para: responder y dar seguimiento a tu consulta. Base:
                        la misma de arriba.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-semibold text-white">
                        Contratación de un servicio
                      </th>
                      <td className="p-4">
                        Los necesarios para ejecutar el servicio y emitir la
                        boleta de honorarios (por ejemplo, nombre o razón
                        social, RUT, correo y datos de facturación).
                      </td>
                      <td className="p-4">
                        Para: cumplir el contrato y mis obligaciones
                        tributarias. Base: ejecución del contrato y obligación
                        legal.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-4 font-semibold text-white">
                        Datos técnicos de navegación
                      </th>
                      <td className="p-4">
                        Datos técnicos que registra el hosting, como dirección
                        IP, navegador y fecha y hora de visita; estadísticas de
                        visitas con Vercel Analytics, como páginas vistas,
                        país aproximado, navegador y dispositivo.
                      </td>
                      <td className="p-4">
                        Para: que el sitio funcione, mantenerlo seguro y
                        entender su uso. Base: mi interés legítimo en la
                        seguridad y operación del sitio.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                No necesito datos sensibles (salud, creencias, origen étnico,
                etc.) para atenderte. Por favor no los incluyas en el
                formulario ni en tus mensajes.
              </p>
            </section>

            <section id="seccion-4" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                4. Cómo uso tus datos
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Solo los uso para las finalidades indicadas arriba.</li>
                <li>No vendo ni cedo tus datos para publicidad de terceros.</li>
                <li>
                  No te envío boletines ni publicidad si no lo aceptas
                  expresamente.
                </li>
                <li>
                  No tomo decisiones automatizadas sobre ti que tengan efectos
                  legales.
                </li>
              </ul>
            </section>

            <section id="seccion-5" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                5. Con quién comparto tus datos
              </h2>
              <p>
                Para operar el sitio uso proveedores que tratan datos por mi
                cuenta y siguiendo mis instrucciones: Vercel (hosting del sitio
                y estadísticas de visitas) y Web3Forms (recibe los mensajes que
                envías por el formulario y los reenvía a mi correo; puede
                conservar una copia durante 7 días). Estos proveedores pueden
                tratar datos fuera de Chile, por ejemplo en Estados Unidos,
                por lo que tus datos pueden transferirse a otros países. Elijo
                proveedores reconocidos que aplican medidas de seguridad
                adecuadas.
              </p>
              <p className="mt-4">
                Si usas el botón de WhatsApp, esa conversación también se rige
                por las condiciones de WhatsApp (Meta).
              </p>
              <p className="mt-4">
                Solo entrego datos a una autoridad cuando una ley o una
                resolución legal me lo exige.
              </p>
            </section>

            <section id="seccion-6" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                6. Cuánto tiempo guardo tus datos
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Consultas que no terminan en una contratación: hasta 24 meses
                  desde nuestro último contacto.
                </li>
                <li>
                  Clientes: mientras dure la relación y por los plazos que
                  exijan las normas tributarias y contables.
                </li>
                <li>
                  Copia del formulario en el servicio de formularios: hasta 7
                  días. El mensaje que me llega a mi correo se rige por los
                  plazos anteriores.
                </li>
                <li>
                  Pasado ese tiempo, elimino o anonimizo los datos. Puedes
                  pedirme antes que los elimine (ver sección 7).
                </li>
              </ul>
            </section>

            <section id="seccion-7" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                7. Tus derechos
              </h2>
              <p className="mb-3">Puedes pedirme, en cualquier momento:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Acceso: saber qué datos tuyos tengo y para qué los uso.
                </li>
                <li>
                  Rectificación: corregir datos inexactos o incompletos.
                </li>
                <li>Supresión: que elimine tus datos cuando corresponda.</li>
                <li>
                  Oposición: que deje de tratar tus datos para una finalidad
                  determinada.
                </li>
                <li>
                  Portabilidad: recibir tus datos en un formato estructurado y
                  de uso común.
                </li>
                <li>
                  Bloqueo temporal: que suspenda el uso de tus datos mientras
                  se resuelve una solicitud.
                </li>
                <li>
                  Retirar tu consentimiento, sin afectar lo hecho antes de
                  retirarlo.
                </li>
                <li>
                  No ser objeto de decisiones basadas únicamente en tratamiento
                  automatizado.
                </li>
              </ul>
              <p className="mt-4">
                Cómo ejercerlos: escríbeme a{" "}
                <a className="break-all text-blue-200 underline" href={siteConfig.email}>
                  {contactEmail}
                </a>{" "}
                con el asunto «Datos personales», indicando tu nombre, el
                correo o teléfono con el que me contactaste y lo que quieres
                hacer. Podré pedirte que acredites tu identidad. Responderé
                dentro de los plazos que fija la ley.
              </p>
              <p className="mt-4">
                Si crees que tus derechos no fueron respetados, también puedes
                reclamar ante la Agencia de Protección de Datos Personales o
                la autoridad que corresponda según la ley.
              </p>
            </section>

            <section id="seccion-8" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                8. Cookies y tecnologías similares
              </h2>
              <p>
                Este sitio no usa cookies de publicidad ni cookies de terceros
                para analítica. Mide las visitas con Vercel Analytics, que,
                según su documentación, identifica las visitas mediante un
                hash y descarta la sesión después de 24 horas. Solo se usan los
                elementos técnicos necesarios para que el sitio funcione. El
                código de la aplicación no accede a cookies, localStorage ni
                sessionStorage. Si en el futuro agrego alguna herramienta de
                seguimiento, actualizaré esta política y te pediré tu
                consentimiento cuando corresponda.
              </p>
            </section>

            <section id="seccion-9" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                9. Seguridad
              </h2>
              <p>
                El sitio funciona con conexión cifrada (HTTPS) y limito el
                acceso a tus datos a lo necesario para atenderte. Ningún
                sistema es completamente infalible: si ocurriera un incidente
                de seguridad que te afecte, te avisaré conforme a la ley.
              </p>
            </section>

            <section id="seccion-10" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                10. Menores de edad
              </h2>
              <p>
                Este sitio está dirigido a empresas y profesionales, no a
                menores de 14 años. Si crees que un menor me envió sus datos,
                escríbeme y los eliminaré.
              </p>
            </section>

            <section id="seccion-11" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                11. Cambios a esta política
              </h2>
              <p>
                Puedo actualizar esta política. Siempre publicaré aquí la
                versión vigente con su fecha de actualización y, si el cambio
                es importante, te lo informaré por un medio razonable.
              </p>
            </section>

            <section id="seccion-12" className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                12. Contacto
              </h2>
              <p>
                Rachid Boss Ibarra · TuWebPro. Email:{" "}
                <a className="break-all text-blue-200 underline" href={siteConfig.email}>
                  {contactEmail}
                </a>
                . WhatsApp:{" "}
                <a
                  className="text-blue-200 underline"
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {whatsappNumber}
                </a>
                . Santiago, Chile.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer homePath="/" />
    </>
  );
}
