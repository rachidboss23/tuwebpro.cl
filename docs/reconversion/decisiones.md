# Decisiones de reconversión

Decisiones confirmadas por el dueño el 16 de octubre de 2026. Prevalecen sobre las observaciones de auditoría y el plan anterior. Antes de comenzar cada fase, releer `inventario.md` y este documento. Al terminar cada fase, ejecutar el build, crear el commit correspondiente y detenerse para esperar aprobación.

## Contenido y afirmaciones

- Proyectos lanzados: **3** — CorredoresApp, Musaika y Paula Guerra. «Próximo proyecto» no cuenta.
- Eliminar «100% Entregas a tiempo» y conservar «Respondo en menos de 24 horas».
- En la portada, reemplazar «Entrega en 3–5 días» por «Webs desde 2–3 días hábiles».
- En el proceso, indicar que los tiempos son «Duración estimada por etapa» y añadir: «El plazo total depende del alcance del proyecto».
- Cambiar «Ongoing» por «Continuo».
- La afirmación de propiedad debe decir exactamente: «El código es tuyo una vez pagado el proyecto».
- Musaika autorizó el uso de su caso, incluido su planificador semanal que reemplazó planificaciones en Word/PowerPoint que se rompían. Presentar el antecedente como información autorizada, sin inventar métricas ni resultados cuantificados.
- Los tres testimonios existentes son reales y deben conservarse textualmente.

## Imagen social y analítica

- Crear `src/app/opengraph-image.tsx` con `ImageResponse` de `next/og`, incluido en Next.js. Diseño: fondo oscuro, azul/cian, nombre «TuWebPro» y título del sitio.
- Crear `src/app/twitter-image.tsx` si corresponde, reutilizando la solución nativa de Next.js y sin dependencias nuevas.
- Eliminar la referencia manual a `/og-image.png` de los metadatos; conservar el resto de SEO salvo ajustes necesarios y acordados por estas decisiones.
- Mantener Vercel Analytics y Google Analytics 4.

## Plan de fases aprobado

### Fase 2 — Portada, navbar y base visual

Actualizar portada, navegación y estilos base existentes. Aplicar los cambios de contenido confirmados arriba, manteniendo la identidad visual actual.

### Fase 3 — Problemas → Solución → Beneficio

Crear la sección `#soluciones` y presentar claramente problemas, solución y beneficio sin agregar afirmaciones cuantitativas no confirmadas.

### Fase 4 — Servicios, precios y stack

Actualizar Servicios a **3 paquetes** y Precios, y reordenar Stack. Conservar los ocho servicios y sus tecnologías, además de los cuatro planes, precios, bullets y plazos que constan en el inventario.

### Fase 5 — Proyectos, ejemplos de uso, testimonios, proceso y fundador

Actualizar estas secciones, incluir los ejemplos de uso autorizados de Musaika y mantener completos los proyectos/enlaces, los tres testimonios textuales, los cinco pasos, la información del fundador y sus enlaces. Aplicar las decisiones confirmadas sobre el conteo y la duración de etapas.

### Fase 6 — Formulario, SEO, analítica, lint y validación final

Mejorar presentación/accesibilidad del formulario sin cambiar su endpoint, envío ni integración; revisar SEO, mantener ambas analíticas, resolver lint y ejecutar la validación final. Crear las imágenes sociales nativas de Next.js en esta fase o en la fase de metadatos, sin dependencias nuevas.

## Orden final de la página

1. Hero
2. Problemas (`#soluciones`)
3. Servicios (`#servicios`)
4. Precios (`#precios`)
5. Proyectos (`#proyectos`), con Ejemplos de uso
6. Testimonios
7. Proceso (`#proceso`)
8. Stack (`#stack`)
9. Nosotros (`#nosotros`)
10. Contacto (`#contacto`)
11. Footer

Reutilizar los identificadores existentes donde ya existan; `#soluciones` es nuevo.

## Límites del trabajo y manejo de dudas

- Trabajar en la rama `reconversion`; nunca hacer push a `main` ni merges.
- No tocar `src/app/resenas/route.ts`, `src/lib/reviews.ts` (se permite importarlo o imitar su patrón de eventos), `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `package-lock.json` ni las imágenes existentes en `public/`.
- No modificar backend, API routes, envío del formulario ni integraciones, salvo que sea imprescindible; si llegara a serlo, explicar el motivo antes de proceder.
- No instalar dependencias nuevas ni migrar de framework.
- No agregar contenido que contradiga el inventario o inventar testimonios, clientes, métricas, ahorros, porcentajes, precios o funcionalidades.
- No hacer preguntas adicionales. Si surge una decisión no cubierta, elegir la opción más conservadora y señalarla explícitamente en el resumen de la fase.
- Mantener el archivo `.history/src/components/sections/ContactForm_20260729122756.tsx` fuera del trabajo y de los commits. Agregar archivos a Git de forma explícita; nunca usar `git add .` ni `git add -A`.
- El inventario `docs/reconversion/inventario.md` es temporal y debe eliminarse antes del merge final.
