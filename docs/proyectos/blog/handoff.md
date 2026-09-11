# Handoff — Proyecto Blog The Showroom Miami

> **Cómo usar este archivo:** subirlo como Project Knowledge (archivo fijo) en
> el proyecto de Claude.ai. Actualizarlo al final de cada sesión donde haya
> avances o decisiones nuevas. Si abrís un chat nuevo dentro del proyecto,
> este archivo (más `workplan.yml` y `decisiones.md`) es la fuente de verdad —
> no confíes únicamente en la memoria automática de Claude para hechos
> críticos (nombres de enum, estados de bloqueo, decisiones editoriales).
>
> **Ubicación en el repo:** `/docs/proyectos/blog/handoff.md` (junto a
> `workplan.yml` y `decisiones.md` en la misma carpeta). El workstream de
> Sitio Web tiene su propia terna equivalente en `/docs/proyectos/web/`.

**Última actualización:** 11 sep 2026

---

## 1. Qué cambió recientemente (lo más importante primero)

- **11 sep 2026 — TD-04 cerrada: verificación independiente del enum
  `post_linea_negocio` contra Supabase staging y producción.** Ejecutada el
  2026-09-11 03:56:45 UTC, vía los MCP de Supabase scopeados por proyecto
  (`mcp__supabase-tsm-staging__execute_sql` y
  `mcp__supabase-tsm-prod__execute_sql`, ambos de solo lectura para esta
  operación — consistente con DT-002). Query SQL literal ejecutada, idéntica
  en los dos entornos:

  ```sql
  -- 1. Tipo enum: nombre real y valores en orden
  SELECT
    n.nspname     AS schema,
    t.typname     AS type_name,
    e.enumlabel   AS enum_value,
    e.enumsortorder AS sort_order
  FROM pg_type t
  JOIN pg_enum e         ON e.enumtypid  = t.oid
  JOIN pg_namespace n    ON n.oid        = t.typnamespace
  WHERE t.typname IN ('post_linea_negocio','linea_negocio')
  ORDER BY t.typname, e.enumsortorder;

  -- 2. Columna real en posts que usa ese tipo
  SELECT
    c.table_schema,
    c.table_name,
    c.column_name,
    c.data_type,
    c.udt_name
  FROM information_schema.columns c
  WHERE c.table_name = 'posts'
    AND c.column_name IN ('linea','linea_negocio')
  ORDER BY c.table_schema, c.column_name;

  -- 3. Cantidad de posts (esperado: 0, blog parte de cero)
  SELECT COUNT(*) AS total_posts FROM public.posts;
  ```

  Resultado: 7 valores del enum `post_linea_negocio`, idénticos en staging y
  producción, mismo `sort_order` 1 a 7: `collision_repair`, `towing`,
  `wrap_ppf_tint`, `exotic_rentals`, `custom_builds`, `financial`, `sales`.
  Columna `posts.linea` con `udt_name = post_linea_negocio` en ambos
  entornos. `total_posts = 0` en ambos. Ninguna ocurrencia de `sales_finance`
  ni `collision_repair_insurance` en ninguno de los dos entornos. Conclusión:
  TD-04 queda cerrada. TD-01 (regeneración de tipos en
  `src/integrations/supabase/types.ts`) sigue abierta — es tarea aparte, no
  se tocó en esta verificación.

  Siguiente paso concreto tras este cierre: se mantienen los pasos ya
  anotados — Hikashi pega el comunicado F0 en el chat del Master TSM si aún
  no lo hizo; Hikashi pasa los 9 archivos de F3 más DT-003 a Liza para
  revisión; cuando Liza apruebe, se abre una sesión nueva para commitear F3
  en `vice-city-motors` y DT-003 en `gobernanza-tsm`. TD-04 se retira de la
  lista "en paralelo, no bloquea F3" (sección 8) — ya no aplica, quedó
  cerrada.
- **10 sep 2026 — Cierre de sesión (F0 redactada, F4 cerrada, F3 en pausa).**
  F0 (comunicado al Eje de Control) quedó redactado y listo para pegar,
  esperando el envío por Hikashi al chat del Master TSM. F4 (checklist
  editorial) quedó cerrada y mergeada a `main` en el commit `f41cff8`. F3
  (banco de prompts) está en pausa esperando revisión de Liza: 9 archivos
  diseñados (README + Instructions + 7 plantillas) pero **no commiteados
  todavía** — viven solo en el chat de Claude.ai hasta que Liza apruebe.
  DT-003 también está diseñada pero no commiteada, por el mismo motivo.
  TD-04 (verificación independiente del enum contra Supabase) sigue abierta,
  no ejecutada.
- **10 sep 2026 — F1 y F2 completadas.** Se consultó directamente Supabase
  (staging y producción) en vez de asumir nombres de la documentación previa.
  Hallazgos reales: el enum **no** se llama `linea_negocio`, se llama
  `post_linea_negocio`; la columna en `posts` **no** se llama `linea_negocio`,
  se llama `linea`; el valor real de la línea principal era
  `collision_repair_insurance` (no `collision_repair` como se especulaba).
  Con esos nombres confirmados se migró el enum de 6 a 7 valores en staging
  (validado) y luego en producción (validado por separado):
  `collision_repair_insurance` → renombrado a `collision_repair`; se
  agregaron `financial` y `sales`; se **eliminó por completo** `sales_finance`
  (diferencia con el plan original, que preveía mantenerlo como valor legado
  — decisión de Hikashi de que sean líneas totalmente separadas). Requirió
  recrear el tipo enum completo (Postgres no soporta `DROP VALUE` directo).
  Estado final, idéntico en ambos entornos:
  `{collision_repair, towing, wrap_ppf_tint, exotic_rentals, custom_builds, financial, sales}`.
  Verificado antes de migrar la columna: `count(*)` de filas con los valores
  antiguos = 0 en ambos entornos (el blog parte de cero, sin posts insertados).
- **Incidente durante la verificación:** un intento de verificación en una
  sesión de Claude Code terminó operando contra un proyecto distinto al
  esperado; se detectó, se pidió deshacer, y se reverificó con una sesión
  nueva — sin impacto en el resultado (staging ya estaba en el estado
  correcto cuando se reverificó). Verificación de solo lectura confirmó que
  producción nunca fue tocada por ese incidente — quedó intacta hasta la
  migración autorizada explícitamente.
- **1 sep 2026:** TSM pasó de 6 a 7 líneas de negocio. Se separaron
  `sales_finance` en `financial` y `sales`, y se reclasificaron las líneas en
  **core** (TSRM presta el servicio directo) vs. **complementarias** (solo
  referido/partner).
- **9 sep 2026:** Se tomó la decisión de tratamiento para las 3 líneas
  complementarias (exotic_rentals, financial, sales): el blog **sí** genera
  contenido para ellas, siempre enmarcado como referido/partner (nunca como
  servicio directo de TSRM), con **verificación y complemento manual** de todo
  ese contenido antes de publicar. ⚠️ Pendiente de ratificación formal con el
  eje de control (ver `workplan.yml`, fase 0).

## 2. Estado por línea de negocio

| Línea | Tipo | Estado | Motivo si está bloqueada |
|---|---|---|---|
| Luxury Collision Repair (`collision_repair`) | Core | Activa | — (enum migrado y confirmado) |
| Towing | Core | Activa | Nunca afirmar cobertura de autopistas |
| Custom Builds | Core | Bloqueada | Faltan 2–3 casos reales documentados con fotos (Liza) |
| PPF - Wrap & Tint | Core | Activa | — |
| Rental Exotic Cars | Complementaria | Bloqueada | Tratamiento pendiente de ratificar con eje de control (enum ya migrado, ya no es motivo de bloqueo) |
| Financial | Complementaria | Bloqueada | Falta doc. de Liza; tratamiento pendiente de ratificar (enum ya migrado, ya no es motivo de bloqueo) |
| Sales | Complementaria | Bloqueada | Falta doc. de Liza; tratamiento pendiente de ratificar (enum ya migrado, ya no es motivo de bloqueo) |

## 3. Plan de fases (ver `workplan.yml` para el detalle machine-readable)

0. Comunicado de cierre al Eje de Control (DT-001, hallazgos F1, DT-002) — **redactado, listo para envío por Hikashi**
1. Confirmar nombre real del enum de línea principal en Supabase — **completada**
2. Migrar enum `post_linea_negocio` de 6 a 7 valores (staging → prod) — **completada**
3. Actualizar plantillas de prompt (crear Financial, separar Sales) — **en pausa, esperando revisión de Liza (9 archivos diseñados, sin commitear)**
4. Actualizar checklist editorial y validaciones — **completada**
5. Reanudar producción de contenido (Post #1 y primer piloto de línea complementaria) — **bloqueada por fase 3**

## 4. Infraestructura (estado estable salvo lo indicado)

- Supabase dual: staging `qskzbdyegnjxqlyxtwnx`, prod `utbpwymlqioxwsarqeut`, cuenta `theshowroommiami`.
- Schema vivo en ambos entornos: tablas `posts` / `post_imagenes`, RLS activo, GRANTs explícitos aplicados. Columna real de línea de negocio: `posts.linea` (enum `post_linea_negocio`).
- Repo: `github.com/mightworkron/vice-city-motors` — transferencia a cuenta TSM aún pendiente.
- PR #11 mergeado, deploy Netlify confirmado.
- Flujo de estados de post: `draft` → `en_revision` → `aprobado` → `publicado` → `rechazado`.
- **Acceso MCP a Supabase (10 sep 2026):** la conexión inicial usaba un legacy token de acceso a toda la cuenta, no scopeado a proyecto. Se reemplazó por dos tokens nuevos scopeados por proyecto y limitados a permisos de Database, hecho desde Claude Code en terminal; el legacy token fue revocado. Decisión y detalle completo en DT-002 (`docs/decisiones-transversales.md`, repo `theshowroommiami/gobernanza-tsm`) — es transversal, no se repite acá.

## 5. Cumplimiento — activo y bloqueado

- **Activo:** diagnóstico de lenguaje absoluto tipo "aceptamos TODOS los seguros" en componentes/JSON/configs — sin cambios de código ejecutados aún.
- **Bloqueado:** número de registro FDACS — no se puede agregar hasta confirmar registro real.
- **Guardrail nuevo:** ningún post de las 3 líneas complementarias puede insinuar que TSRM presta el servicio directamente.
- **Guardrail vigente:** sin claims de diferenciador exclusivo en coordinación con aseguradoras.

## 6. Elementos verificables (E-E-A-T) disponibles

**Confirmados (5):** rating Google (4.9/5, 1000+ clientes), fotos del taller (incl. piso epóxico), cobertura geográfica, limitación de towing en autopistas, brandline.
**Restringido (1):** coordinación con aseguradoras (solo uso descriptivo, no diferenciador exclusivo).
**Bloqueados (3):** casos/fotos de vehículos reales, estado Sales/Financial, fotos de mural (pendiente derechos).

## 7. Decisiones de arquitectura que NO se revisan sin escalar al eje de control

- Panel de admin custom: rechazado — Supabase Studio es suficiente.
- Traducción automática bilingüe: rechazada — pares de contenido revisados humanamente.

## 8. Próxima acción concreta

**Hikashi — acción inmediata:** pegar el comunicado F0 (ya redactado) en el
chat del Master TSM. F0 no es una ratificación abierta: DT-001 cerró
transversalmente la decisión de tratamiento el 10 sep 2026, así que F0 es un
reporte de cierre, no un ítem a ratificar. El comunicado cubre tres cosas ya
resueltas localmente: (a) que el satélite Blog opera bajo DT-001 en todo el
flujo editorial (voz partner/directa/híbrida como norma de marca
transversal); (b) los hallazgos de nomenclatura real de schema (F1,
documentados en DAT-002); (c) toma de nota de DT-002 (acceso MCP a
Supabase).

**Hikashi — segunda acción:** pasar los 9 archivos del banco de prompts (F3)
más DT-003 a Liza para revisión. Ninguno de los dos está commiteado todavía.

**Cuando Liza apruebe:** abrir una nueva sesión del satélite Blog para
commitear F3 en `vice-city-motors` y DT-003 en `gobernanza-tsm`.

**En paralelo, no bloquea F3:** la auditoría de voz del satélite Sitio
web/SEO (acción derivada de DT-001 + DT-003). TD-04 (verificación
independiente del enum contra Supabase) ya se ejecutó y cerró el 11 sep
2026 — ver punto 1 más arriba.

**F4 (checklist editorial) ya está cerrada** — mergeada a `main` en el
commit `f41cff8`.

Pendiente transversal (no de este satélite): ver
`docs/decisiones-transversales.md` del repo `theshowroommiami/gobernanza-tsm`
— DT-002, acceso MCP de Claude Code a Supabase (staging + producción).

**Fuentes de verdad del satélite:**

- `docs/proyectos/blog/checklist-editorial.md` — checklist de revisión por
  post y registro trimestral. Fuente de verdad del flujo de revisión
  editorial (F4).
- `docs/proyectos/blog/decisiones.md` — decisiones locales del satélite.
- `docs/proyectos/blog/workplan.yml` — estado real de fases y deuda
  técnica.
