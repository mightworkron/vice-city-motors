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
- **Estado:** Ratificada. Implementación técnica completada en staging y producción el 10 sep 2026 (fases 1–2 del workplan). Nomenclatura real de schema documentada en DAT-002; eliminación de `sales_finance` (en vez de conservarlo como legado) documentada en ARQ-003.
- **Alcance:** Blog + Sitio Web (ambos deben reflejar el mismo esquema)
- **Descripción:** Se reemplaza el esquema de 6 líneas por 7: 4 core (TSRM presta directo) + 3 complementarias (solo referido/partner). Separa `sales_finance` en `financial` y `sales`.
- **Pendiente derivado:** Resuelto en fase 1 (10 sep 2026): el nombre real del enum es `post_linea_negocio` y el valor original de la línea principal era `collision_repair_insurance`, renombrado a `collision_repair` en la migración de fase 2. Ver DAT-002.

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

### DAT-002 — Corrección de nombres reales de schema
- **Fecha:** 10 sep 2026
- **Estado:** Ratificada
- **Alcance:** Blog (impacta Sitio Web si en el futuro valida o inserta contra el mismo schema)
- **Descripción:** El enum se llama `post_linea_negocio`, no `linea_negocio`. La columna en `posts` se llama `linea`, no `linea_negocio`. Estos nombres deben usarse en todo prompt o instrucción futura sobre este schema — la documentación previa tenía ambos incorrectos.
- **Origen:** confirmado directamente contra Supabase (staging y producción) en la fase 1 del workplan.

### ARQ-003 — Eliminación de sales_finance del enum
- **Fecha:** 10 sep 2026
- **Estado:** Ratificada
- **Alcance:** Blog
- **Descripción:** `financial` y `sales` quedan como líneas completamente separadas, no como alias de un valor combinado legado. `sales_finance` se eliminó del enum `post_linea_negocio` en staging y producción (requirió recreación completa del tipo, ya que Postgres no soporta `DROP VALUE` directo).
- **Origen:** decisión de Hikashi — no tiene sentido mantener el valor legado una vez que las dos líneas tienen enum propio; mantenerlo habría sido solo ruido.

### PRC-003 — Referencia cruzada a decisión transversal DT-002
- **Fecha:** 10 sep 2026
- **Estado:** Ratificada
- **Alcance:** Blog (decisión en sí es transversal a todos los satélites)
- **Descripción:** La configuración de acceso MCP a Supabase (tokens, scoping, permisos) es decisión transversal — ver DT-002 en `docs/decisiones-transversales.md` del repo `theshowroommiami/gobernanza-tsm`. No se repite el detalle acá.
- **Origen:** definida en el chat de Blog, registrada formalmente como DT-002 en el repo de gobernanza.

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
