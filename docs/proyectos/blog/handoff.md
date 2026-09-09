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

**Última actualización:** 9 sep 2026

---

## 1. Qué cambió recientemente (lo más importante primero)

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
- **Pendiente crítico sin resolver:** el enum `linea_negocio` en Supabase
  (staging y prod) sigue con los 6 valores viejos. Hay discrepancia registrada
  entre `collision_repair` y `collision_repair_insurance` como nombre real de
  la línea principal — no usar ninguno de los dos en prompts, validaciones o
  inserts hasta confirmar contra Supabase directamente (fase 1 del workplan).

## 2. Estado por línea de negocio

| Línea | Tipo | Estado | Motivo si está bloqueada |
|---|---|---|---|
| Insurance, Collision & Repair | Core | Activa | — (nombre de enum sin confirmar) |
| Towing | Core | Activa | Nunca afirmar cobertura de autopistas |
| Custom Builds | Core | Bloqueada | Faltan 2–3 casos reales documentados con fotos (Liza) |
| PPF - Wrap & Tint | Core | Activa | — |
| Rental Exotic Cars | Complementaria | Bloqueada | Enum sin migrar; tratamiento pendiente de ratificar |
| Financial | Complementaria | Bloqueada | Enum nuevo sin migrar; falta doc. de Liza; tratamiento pendiente de ratificar |
| Sales | Complementaria | Bloqueada | Enum nuevo sin migrar; falta doc. de Liza; tratamiento pendiente de ratificar |

## 3. Plan de fases (ver `workplan.yml` para el detalle machine-readable)

0. Ratificar con el eje de control la decisión de tratamiento de líneas complementarias — **en progreso**
1. Confirmar nombre real del enum de línea principal en Supabase — **pendiente, bloquea todo lo demás**
2. Migrar enum `linea_negocio` de 6 a 7 valores (staging → prod) — **bloqueada por fase 1**
3. Actualizar plantillas de prompt (crear Financial, separar Sales) — **bloqueada por fase 2**
4. Actualizar checklist editorial y validaciones — **bloqueada por fase 2**
5. Reanudar producción de contenido (Post #1 y primer piloto de línea complementaria) — **bloqueada por fases 2–4**

## 4. Infraestructura (estado estable, no cambia con esta restructuración)

- Supabase dual: staging `qskzbdyegnjxqlyxtwnx`, prod `utbpwymlqioxwsarqeut`, cuenta `theshowroommiami`.
- Schema vivo en ambos entornos: tablas `posts` / `post_imagenes`, RLS activo, GRANTs explícitos aplicados.
- Repo: `github.com/mightworkron/vice-city-motors` — transferencia a cuenta TSM aún pendiente.
- PR #11 mergeado, deploy Netlify confirmado.
- Flujo de estados de post: `draft` → `en_revision` → `aprobado` → `publicado` → `rechazado`.

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

Redactar y ejecutar el instructivo de diagnóstico para Claude Code (fase 1):
consultar los valores reales del enum `linea_negocio` en Supabase staging y
prod, sin modificar nada todavía.
