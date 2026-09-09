# Bitácora de decisiones — Proyecto Blog The Showroom Miami

> **Cómo usar este archivo:** cada decisión relevante (no cada tarea) se
> registra acá con un ID único, tipo, fecha y estado. Se actualiza en el
> mismo chat/sesión donde se toma la decisión. Sirve como fuente de verdad
> junto con `handoff.md` (estado narrativo) y `workplan.yml` (fases técnicas).

**Códigos de tipo:**
| Código | Categoría | Ejemplos |
|---|---|---|
| ARQ | Arquitectura | Stack, panel de admin, integraciones |
| DAT | Datos | Schema, enums, taxonomía de contenido |
| PRO | Producto / Contenido | Qué se publica, cómo se trata una línea de negocio |
| PRC | Proceso | Flujo de trabajo, cadencia, roles |
| INF | Infraestructura | Hosting, cuentas, deploy, permisos |

**Estados posibles:** `Propuesta` · `Pendiente de ratificar` (requiere eje de control) · `Ratificada` · `Revertida`

---

## Log de decisiones

### DAT-001 — Restructuración de líneas de negocio (6 → 7)
- **Fecha:** 1 sep 2026
- **Estado:** Ratificada (esquema en sí); implementación técnica pendiente (ver workplan fase 1–2)
- **Alcance:** Blog + Sitio Web (ambos deben reflejar el mismo esquema)
- **Descripción:** Se reemplaza el esquema de 6 líneas por 7: 4 core (TSRM presta directo) + 3 complementarias (solo referido/partner). Separa `sales_finance` en `financial` y `sales`.
- **Pendiente derivado:** confirmar nombre real del enum de la línea principal en Supabase (`collision_repair` vs. `collision_repair_insurance`).

### PRO-001 — Tratamiento editorial de las 3 líneas complementarias
- **Fecha:** 9 sep 2026
- **Estado:** Pendiente de ratificar (eje de control) — tratada como decisión funcional operativa mientras tanto
- **Alcance:** Blog (impacta Sitio Web si en el futuro se publica copy de estas líneas ahí)
- **Descripción:** El blog sí genera contenido para exotic_rentals, financial y sales, pero siempre enmarcado como referido/partner — nunca como servicio directo de TSRM. Todo el contenido de estas 3 líneas se verifica y complementa manualmente antes de publicar.
- **Origen:** definida en el chat de Blog, sin escalar formalmente aún al eje de control.

### ARQ-001 — Rechazo de panel de administración custom
- **Fecha:** anterior a esta sesión (registrada en instructivo original)
- **Estado:** Ratificada
- **Alcance:** Blog
- **Descripción:** Supabase Studio es suficiente para la gestión editorial. Construir un panel propio requeriría Auth, nuevas políticas RLS de escritura y mantenimiento continuo — no se justifica.

### ARQ-002 — Rechazo de traducción automática bilingüe
- **Fecha:** anterior a esta sesión (registrada en instructivo original)
- **Estado:** Ratificada
- **Alcance:** Blog (con implicación futura en Sitio Web cuando se aborde F3 / UI bilingüe)
- **Descripción:** Se prefieren pares de contenido EN/ES revisados humanamente en lugar de traducción automática, por riesgo legal/SEO en contenido de seguros referenciando estatutos de Florida.

### PRC-001 — Flujo editorial sin automatización autónoma
- **Fecha:** anterior a esta sesión (registrada en instructivo original)
- **Estado:** Ratificada
- **Alcance:** Blog
- **Descripción:** Generación (ChatGPT) → Insert como `draft` → Revisión (Hikashi + Liza) → Publicación manual por Claude Code. Ningún paso se automatiza sin aprobación humana explícita.

### INF-001 — GRANTs explícitos obligatorios en tablas creadas vía Management API
- **Fecha:** anterior a esta sesión (registrada en instructivo original)
- **Estado:** Ratificada
- **Alcance:** Blog (infraestructura Supabase)
- **Descripción:** Las tablas creadas vía MCP no reciben GRANTs automáticos — deben aplicarse explícitamente a `service_role`, `anon` y `authenticated` en cada tabla nueva.

### PRC-002 — Esquema documental multi-workstream establecido
- **Fecha:** 9 sep 2026
- **Estado:** Ratificada
- **Alcance:** Blog + Sitio Web (estructura aplica a ambos)
- **Descripción:** Se establece CLAUDE.md en la raíz del repo como fuente de reglas para Claude Code, y /docs/proyectos/<workstream>/ (handoff.md, workplan.yml, decisiones.md) como esquema de documentación viva por workstream, separado de la memoria conversacional de cualquier interfaz.
- **Origen:** definida en el chat de Blog.

---

## Plantilla para nueva entrada

```
### [TIPO]-[NÚMERO] — [Título corto]
- **Fecha:**
- **Estado:**
- **Alcance:** Blog / Sitio Web / Global
- **Descripción:**
- **Origen / quién decide:**
```
