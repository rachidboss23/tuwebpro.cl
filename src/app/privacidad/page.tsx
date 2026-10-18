import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos recoge tuwebpro.cl, para qué los uso y cómo puedes pedirme que los elimine.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPolicyPage() {
  const email = siteConfig.email.replace(/^mailto:/, "");

  return (
    <main className="relative min-h-screen bg-[#090909] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 flex min-h-11 items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded text-sm text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            ← Volver al inicio
          </Link>
          <Link
            href="/"
            aria-label="TuWebPro, ir al inicio"
            className="inline-flex min-h-11 items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <Image
              src="/images/logo_tuwebpro_trim.png"
              alt="TuWebPro"
              width={640}
              height={156}
              sizes="180px"
              className="h-9 w-auto"
            />
          </Link>
        </header>

        <article className="glass rounded-2xl border border-white/10 p-5 sm:p-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Política de privacidad
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
            Última actualización: 18 de octubre de 2026. Esta política explica
            qué datos recoge este sitio, para qué los uso y cómo puedes pedirme
            que los elimine.
          </p>

          <section>
            <h2 className="mt-8 text-xl font-bold text-white">Quién soy</h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Soy Rachid Boss Ibarra, desarrollador a cargo de TuWebPro, en
              Santiago de Chile. Soy el responsable de los datos que recojo en
              tuwebpro.cl. Puedes escribirme a{" "}
              <a
                href={`mailto:${email}`}
                className="text-cyan-200 underline underline-offset-4 hover:text-white"
              >
                {email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-xl font-bold text-white">
              Qué datos recojo y cuándo
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/80 sm:text-base">
              <li>
                Si usas el formulario de contacto: tu nombre, tu email y/o tu
                WhatsApp o teléfono (al menos uno), lo que quieres resolver y el
                mensaje que escribas.
              </li>
              <li>
                Si me escribes por WhatsApp: tu número y los mensajes que me
                envíes, que quedan en esa aplicación.
              </li>
              <li>
                Al navegar el sitio: datos de visita en forma agregada, como
                páginas vistas, tipo de dispositivo y ubicación aproximada, a
                través de herramientas de analítica.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 text-xl font-bold text-white">
              Para qué los uso
            </h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Uso tus datos solo para responder tu consulta y, si corresponde,
              preparar una propuesta. No vendo tus datos ni los cedo a terceros
              con fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-xl font-bold text-white">
              Servicios externos que participan
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/80 sm:text-base">
              <li>Web3Forms: entrega el contenido del formulario a mi correo.</li>
              <li>WhatsApp (Meta): si me escribes por ahí.</li>
              <li>Google Analytics y Vercel Analytics: analítica del sitio.</li>
              <li>Vercel: aloja el sitio.</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              Estos servicios tienen sus propias políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-xl font-bold text-white">
              Cookies y analítica
            </h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Este sitio usa Google Analytics 4 y Vercel Analytics para entender
              cuántas personas lo visitan y qué secciones usan. Puedes bloquear
              o borrar las cookies desde la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-xl font-bold text-white">
              Cuánto tiempo los conservo
            </h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Conservo tu consulta mientras sea necesaria para responderte y,
              si trabajas conmigo, durante la relación comercial. Después la
              elimino o la anonimizo.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-xl font-bold text-white">Tus derechos</h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Puedes pedirme acceso a tus datos, que los corrija, que los
              elimine o que deje de usarlos. Escríbeme a{" "}
              <a
                href={`mailto:${email}`}
                className="text-cyan-200 underline underline-offset-4 hover:text-white"
              >
                {email}
              </a>{" "}
              y te respondo en un plazo razonable.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-xl font-bold text-white">Cambios</h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Si cambio esta política, actualizaré la fecha de arriba.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
