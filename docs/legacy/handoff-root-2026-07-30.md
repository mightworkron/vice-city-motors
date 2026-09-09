# handoff.md — memoria del proyecto showroommiami.com

Memoria persistente del proyecto. Actualizar al cerrar cada cambio relevante.
Ver también `CLAUDE.md` (reglas del repo) — ese archivo es sobre **cómo
trabajar acá**, este es sobre **qué se hizo y qué falta**.

**Última actualización:** 2026-07-30, commit `6487521` (main).

---

## 1. Objetivo

Retomar el sitio de The Showroom Miami (heredado de un developer anterior vía
Lovable) y dejarlo en condiciones de: cumplir SEO básico, ser accesible, no
tener contenido con riesgo legal (superlativos sin sustento, política de
privacidad genérica), mostrar datos reales de Google Business Profile (mapa,
rating, reseñas) en vez de placeholders inventados, y construir un blog
propio (Supabase) con flujo editorial (draft → revisión → aprobado →
publicado) por línea de negocio e idioma.

## 2. Estado actual

En producción en `https://showroommiami.com`, deploy automático vía Netlify
(sitio "theshowroommiami", id `84b07094-c825-42ef-832a-9fc34b983a34`) en cada
merge a `main`. 11 PRs mergeados (23–30 julio 2026, #1 a #11), todos
verificados en vivo tras el deploy. Nada bloqueado ni a medio hacer ahora
mismo — el repo está en un estado limpio y desplegable.

**Infraestructura de blog en Supabase (PR #11, 2026-07-30):** dos proyectos
Supabase propios bajo la cuenta `theshowroommiami` (antes solo había el
proyecto original con acceso admin pendiente del dev anterior):
- **Staging** — `qskzbdyegnjxqlyxtwnx` (`https://qskzbdyegnjxqlyxtwnx.supabase.co`)
- **Production** — `utbpwymlqioxwsarqeut` (`https://utbpwymlqioxwsarqeut.supabase.co`,
  el mismo proyecto que ya usaba el sitio en vivo)

En ambos: tablas `posts` (slug único, título/resumen/contenido, enum `linea`
de 6 valores de negocio, enum `status` con 5 estados editoriales, enum
`idioma` en/es, `grupo_traduccion` uuid para vincular versiones EN/ES del
mismo post, autoría/revisión IA) y `post_imagenes` (FK a `posts` con cascada,
`alt_text` obligatorio, `orden`), con índices en `status`, `slug`, `linea`,
`idioma`, `grupo_traduccion` y `post_id`. RLS habilitado (flag, no solo
policies) con una única policy de lectura pública por tabla, limitada a
`status = 'publicado'`. Sin policies de escritura para `anon` — todo insert/
update pasa por `service_role` (futuro backend del CMS). Verificado en
ambos entornos con inserts de prueba vía `service_role` + lectura vía `anon`
(draft invisible, publicado visible) antes de dar la migración por buena.

**Switch de entorno automático:** `client.ts` ahora lee de
`import.meta.env` en vez de tener la URL/key de producción hardcodeadas.
`.env.development` (staging) y `.env.production` (production) se cargan
solos según el modo de Vite (`vite dev` vs `vite build`), sin lógica custom.
Verificado con builds reales de ambos modos, inspeccionando el bundle
generado.

Flujo de trabajo: rama → commit(s) → push → PR con resumen y plan de pruebas
→ **el usuario aprueba explícitamente antes del merge** → deploy solo por
Netlify → verificar con `curl` (sin JS) contra el sitio real, no solo preview
local.

## 3. Decisiones de diseño

- **Una sola fuente de verdad por tipo de dato**, nunca copiar/pegar entre
  páginas: `src/utils/seo.ts` (SEO/FAQ/structured data), `src/config/business.ts`
  (perfil GBP), `src/config/reviews.ts` (reseñas reales). `prerender.js` no
  puede importar `.ts` directo (es Node puro), así que `src/entry-server.tsx`
  re-exporta esos datos para que el build los use también.
- **Nunca inventar contenido**: reseñas, FAQs y copy siempre verbatim de la
  fuente real (Google, o texto ya aprobado por el cliente). Si falta un dato
  real, se deja un placeholder `REPLACE_WITH_...` explícito, no un valor
  inventado.
- **Brandline "YOUR CAR. OUR OBSESSION."** siempre en inglés, incluso en
  contexto en español — decisión explícita del cliente.
- **`TrustBadge` (stat inventado "1000+ since 2018") eliminado**, reemplazado
  en las 8 páginas por `GoogleReviewBadge` con datos reales.
- **Alcance del CTA "discreet" de reseñas limitado a Collision Repair** (línea
  de negocio prioritaria) — no replicar en las otras 7 páginas.
- **Merge siempre requiere aprobación explícita del usuario**, nunca
  automático aunque el PR esté limpio y verificado.
- **Staging y production son proyectos Supabase separados**, no un solo
  proyecto con schemas distintos — misma migración aplicada a mano en cada
  uno, no hay CLI/CI de migraciones todavía.
- **Ningún secreto (service_role key, personal access token de Supabase)
  se guarda en el repo ni en archivos locales** — se usan solo de forma
  efímera en la sesión que los necesita. Los `.env*` commiteados solo
  contienen `anon` keys (públicas por diseño, seguras de exponer
  client-side).
- **Nombres/columnas en español** (`titulo`, `resumen`, `linea`, `idioma`,
  `grupo_traduccion`) para que el schema hable el mismo idioma que el
  contenido del blog; los *valores* de los enums de negocio quedan en
  inglés (`collision_repair_insurance`, etc.) porque así los pidió el
  usuario explícitamente.

## 4. Archivos y cambios

| Archivo | Qué hace |
|---|---|
| `src/utils/seo.ts` | Título/descripción/FAQ/structured-data por página |
| `src/config/business.ts` | Datos de Google Business Profile (place id, links, rating, teléfono/dirección) |
| `src/config/reviews.ts` | 6 reseñas reales de Google, texto verbatim |
| `src/components/conversion/GoogleReviewBadge.tsx` | Variantes `hero` (8 páginas), `cta` (bajo reseñas en `SocialProof.tsx`), `discreet` (solo Collision Repair) |
| `prerender.js` + `src/entry-server.tsx` | Inyectan metadata completa (no solo canonical) en el HTML de build |
| `src/components/Footer.tsx` | Mapa + link a reseñas de Google |
| `public/llms.txt` | Resumen del negocio para asistentes de IA |
| `src/pages/PrivacyPolicy.tsx` | Política de privacidad reescrita (15 secciones, específica del negocio) |
| `src/integrations/supabase/client.ts` | Ya no hardcodea URL/key — lee de `import.meta.env`, falla explícito si faltan |
| `.env` / `.env.development` | Apuntan a Supabase **staging** (`qskzbdyegnjxqlyxtwnx`) |
| `.env.production` | Apunta a Supabase **production** (`utbpwymlqioxwsarqeut`) |

**Fuera del repo** (estado vive en Supabase, no en archivos versionados):
tablas `posts` y `post_imagenes`, sus enums, índices y RLS policies —
replicadas idénticas en los proyectos staging y production. No hay
migraciones versionadas (`supabase/migrations/`) todavía; se aplicaron a
mano vía la Management API. Si se retoca el schema, considerar mover esto a
migraciones versionadas para no depender de memoria/handoff.

## 5. Intentos fallidos

- **Mapa del footer por `place_id`**: `https://maps.google.com/maps?q=place_id:<ID>&output=embed`
  (embed keyless) no falla con error — pero tampoco enfoca: cae a un mapa del
  mundo entero. No detectado hasta revisión visual post-merge (PR #9). Fix en
  PR #10: armar el query con nombre + dirección de texto (`BUSINESS_ADDRESS`)
  en vez de `place_id`, más `z=15` explícito. Si alguna vez hay API key de
  Google Places, se podría volver a intentar `place_id` vía el endpoint
  oficial `/maps/embed/v1/place`.
- **Buscar la frase exacta "South Florida's Best Since 2018"** pedida por el
  usuario: no existía en el código (sí variantes con "Miami's Auto Source
  Since 2018"). Lección: confirmar con grep antes de asumir que una frase
  citada por el usuario existe literalmente, y reportarlo en vez de adivinar
  a qué se refería.
- **Tablas creadas vía la Management API de Supabase no heredan los grants
  por defecto del dashboard**: el primer insert de prueba con `service_role`
  falló con `permission denied for table posts` (código `42501`) en
  staging, y se hubiera repetido igual en production de no anticiparlo.
  Hubo que correr un `GRANT SELECT, INSERT, UPDATE, DELETE ... TO
  service_role` + `GRANT SELECT ... TO anon, authenticated` explícito
  después del `CREATE TABLE` en ambos proyectos. Si se crea alguna tabla
  nueva por este mismo camino (API en vez de SQL Editor del dashboard),
  recordar este paso o el `service_role` no podrá tocarla.

## 6. Próximos pasos

- **Accesos pendientes del developer anterior** (`mightworkron`) — Admin en
  GitHub, Owner en Netlify, DNS del dominio, GTM/Google Ads/Search Console,
  cuenta de JotForm, transferencia del proyecto en Lovable. **Supabase ya
  no es parte de este bloqueo** — se resolvió creando proyectos propios
  (staging + production) bajo la cuenta `theshowroommiami` en vez de
  esperar acceso admin al proyecto original.
- `Sales.tsx` tiene el inventario de autos vacío a propósito, sin vehículos
  cargados.
- **Blog: falta todo el CMS/UI.** La infraestructura de datos (tablas, RLS)
  ya está en staging y production, pero no existe todavía: panel de
  administración para crear/editar/aprobar posts, páginas públicas del
  blog en el sitio (listado + detalle por slug/idioma), ni policies de
  escritura para un rol autenticado de editor (hoy solo `service_role`
  puede escribir). Definir primero cómo se autentican los editores antes
  de escribir esas policies.
- **Migraciones sin versionar**: mover el SQL de la migración del blog
  (ver sección 4) a `supabase/migrations/` con la CLI de Supabase (no
  instalada localmente todavía) para no depender de aplicar cambios a mano
  vía API cada vez que haya un ajuste de schema.
- Hero del home (`Index.tsx`) sigue diciendo "Miami's Premier Auto Experts" —
  no tocar sin confirmación explícita, el usuario ya dijo que no es la
  tagline a reemplazar.
- `GBP_RATING`/`GBP_REVIEW_COUNT` (5.0 / 239) son un dato fijo cargado el
  2026-07-29, no se actualiza solo — re-chequear contra el perfil real cada
  tanto.
- Bundle de JS pasa los 500kB (warning de Vite, no bloqueante) — candidato a
  code-splitting si se vuelve un problema real de performance.
