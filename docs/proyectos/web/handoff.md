# Handoff — Proyecto Sitio Web / SEO — The Showroom Miami

> **Cómo usar este archivo:** subirlo como Project Knowledge en el Project
> de Claude.ai "Sitio/SEO". Reconstruido el 9 sep 2026 a partir de un
> `handoff.md` legacy que vivía suelto en la raíz del repo (nunca comiteado,
> mezclaba contenido de sitio y de blog). Este archivo separa la parte que
> corresponde exclusivamente al workstream Web.
>
> **Ubicación en el repo:** `/docs/proyectos/web/handoff.md`

**Última actualización:** 9 sep 2026 (reconstrucción) — último trabajo real
documentado: 30 jul 2026, commit `6487521` (main).

---

## 1. Objetivo del workstream

Retomar el sitio de The Showroom Miami (heredado de un developer anterior vía
Lovable.dev) para: SEO básico, accesibilidad, eliminar contenido con riesgo
legal (superlativos sin sustento, política de privacidad genérica), mostrar
datos reales de Google Business Profile (mapa, rating, reseñas) en vez de
placeholders. La infraestructura de blog en Supabase nació dentro de este
mismo esfuerzo (PR #11) pero su seguimiento vive ahora en
`docs/proyectos/blog/`.

## 2. Estado actual (al 30 jul 2026 — pendiente de sesión de verificación)

- Sitio en producción en showroommiami.com, deploy automático vía Netlify en
  cada merge a `main`.
- 11 PRs mergeados (23–30 jul 2026, #1 a #11), todos verificados en vivo en su momento.
- El PR #11 creó la infraestructura de Supabase que hoy es la base del
  workstream Blog (ver `docs/proyectos/blog/` para su estado actual, más
  actualizado que este documento).
- Switch de entorno automático vía `import.meta.env` en `client.ts`.
- Flujo de trabajo estándar: rama → PR → aprobación del usuario → merge →
  deploy → verificación con `curl`.

⚠️ **No confirmado en esta sesión:** si este estado sigue vigente tal cual
(han pasado ~6 semanas desde la última actualización real). Antes de asumir
que nada cambió, verificar contra el repo directamente.

## 3. Decisiones de diseño heredadas (ver detalle categorizado en `decisiones.md`)

- Una sola fuente de verdad por tipo de dato, sin copiar/pegar contenido entre páginas.
- Nunca inventar contenido — reseñas, FAQs y copy siempre verbatim de la fuente real.
- Brandline "YOUR CAR. OUR OBSESSION." siempre en inglés, sin excepción.
- Merge a `main` siempre requiere aprobación explícita del usuario.
- Staging y producción son proyectos Supabase separados; sin CLI de migraciones todavía.
- Ningún secreto se guarda en el repo.
- Nombres de columnas en español, valores de enum en inglés.

## 4. Archivos/rutas tocados en el trabajo original (jul 2026)

`seo.ts`, `business.ts`, `reviews.ts`, `GoogleReviewBadge.tsx`,
`prerender.js` + `entry-server.tsx`, `Footer.tsx`, `llms.txt`,
`PrivacyPolicy.tsx`, `client.ts`, archivos `.env`.

## 5. Guardrails operativos activos (no perder de vista)

- **Hero del home:** no se toca sin confirmación explícita.
- **`Sales.tsx`:** inventario vacío **a propósito** — no es un bug, es diseño intencional. No "arreglar" sin confirmar primero.
- **`GBP_RATING` / `GBP_REVIEW_COUNT`:** dato fijo cargado el 29 jul 2026, **no se autoactualiza**. Si pasa mucho tiempo, puede estar desactualizado — evaluar si necesita refresco.
- **Bundle de JS:** pasa 500kB, candidato a code-splitting (no ejecutado aún).

## 6. Intentos fallidos / aprendizajes técnicos

- Mapa del footer por `place_id` no enfocaba correctamente — resuelto en PR #10.
- Búsqueda de una frase exacta que no existía literalmente en el código (falso positivo en un diagnóstico).
- Tablas creadas vía Management API de Supabase no heredan GRANTs por defecto — mismo aprendizaje que quedó documentado en el workstream Blog (`INF-001`).

## 7. Próximos pasos / pendientes

- **Accesos pendientes de transferencia** del developer anterior (`mightworkron`): GitHub, Netlify, DNS, GTM/Google Ads/Search Console, JotForm. Transferencia de Lovable también pendiente (Supabase ya no es parte de este bloqueo).
- Blog: falta todo el CMS/UI (paneles, páginas públicas, policies de escritura para editor autenticado) — este ítem hoy se sigue desde `docs/proyectos/blog/`.
- Migraciones de Supabase sin versionar — pendiente mover a `supabase/migrations` con la CLI.
- Bundle JS >500kB — candidato a code-splitting.

## 8. Nota de reconstrucción

Este documento se armó a partir de un `handoff.md` que vivía sin trackear en
la raíz del repo desde el 30 jul 2026. El original se archivó en
`/docs/legacy/handoff-root-2026-07-30.md` por seguridad, en vez de borrarlo.
Antes de dar por buena cualquier sección de "estado actual", conviene una
sesión de verificación real contra el repo — han pasado ~6 semanas.
