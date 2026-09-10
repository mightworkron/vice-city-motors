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

**Última actualización:** 10 sep 2026

---

## 1. Qué cambió recientemente (lo más importante primero)

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

0. Ratificar con el eje de control la decisión de tratamiento de líneas complementarias + hallazgos de schema (F1) + DT-002 — **en progreso, única fase bloqueante activa**
1. Confirmar nombre real del enum de línea principal en Supabase — **completada**
2. Migrar enum `post_linea_negocio` de 6 a 7 valores (staging → prod) — **completada**
3. Actualizar plantillas de prompt (crear Financial, separar Sales) — **pendiente, ya desbloqueada**
4. Actualizar checklist editorial y validaciones — **pendiente, ya desbloqueada**
5. Reanudar producción de contenido (Post #1 y primer piloto de línea complementaria) — **bloqueada por fases 3–4**

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

**F0 — Ratificación con el eje de control** sigue abierta y es la única fase
bloqueante activa. Incluye tres cosas a reportar: (a) la decisión de
tratamiento de líneas complementarias como referido/partner; (b) los
hallazgos de nomenclatura real de schema (F1); (c) DT-002 (acceso MCP a
Supabase). Responsable: Hikashi.

En paralelo, **F3 (plantillas de prompt)** y **F4 (checklist editorial)** ya
están desbloqueadas y pueden avanzar sin esperar a F0.

Pendiente transversal (no de este satélite): ver
`docs/decisiones-transversales.md` del repo `theshowroommiami/gobernanza-tsm`
— DT-002, acceso MCP de Claude Code a Supabase (staging + producción).
