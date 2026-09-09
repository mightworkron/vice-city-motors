# Bitácora de decisiones — Proyecto Sitio Web / SEO

> Mismo formato y códigos que el workstream Blog (ver
> `docs/proyectos/blog/decisiones.md` para la tabla de referencia completa).
> Reconstruido el 9 sep 2026 a partir del `handoff.md` legacy de la raíz del
> repo (trabajo real de jul 2026, nunca antes categorizado formalmente).

---

## Log de decisiones

### ARQ-001 — Fuente única de verdad por tipo de dato
- **Fecha:** jul 2026 (fecha exacta no registrada en el original)
- **Estado:** Ratificada
- **Alcance:** Sitio Web
- **Descripción:** No duplicar el mismo dato (rating, reseñas, datos de negocio) copiado/pegado entre páginas — una sola fuente que las páginas consumen.

### PRO-001 — Prohibición de contenido inventado
- **Fecha:** jul 2026
- **Estado:** Ratificada
- **Alcance:** Sitio Web (aplica también a Blog por extensión de principio, aunque no está formalmente cruzada)
- **Descripción:** Reseñas, FAQs y copy siempre verbatim de la fuente real — nunca generado o parafraseado como si fuera dato real.

### PRO-002 — Brandline siempre en inglés
- **Fecha:** jul 2026
- **Estado:** Ratificada
- **Alcance:** Global (Sitio Web + Blog)
- **Descripción:** "YOUR CAR. OUR OBSESSION." nunca se traduce, en ningún idioma ni contexto. Ya reflejado también en `CLAUDE.md` raíz.

### PRC-001 — Merge a main requiere aprobación explícita
- **Fecha:** jul 2026
- **Estado:** Ratificada
- **Alcance:** Sitio Web (regla de repo, aplica de facto a cualquier workstream que toque código)
- **Descripción:** Ningún merge a `main` se ejecuta sin aprobación explícita del usuario, incluso con PR ya revisado.

### DAT-001 — Migraciones de Supabase sin versionar (pendiente)
- **Fecha:** jul 2026
- **Estado:** Pendiente de ejecutar
- **Alcance:** Sitio Web + Blog (infraestructura compartida)
- **Descripción:** El estado de las tablas de Supabase vive fuera del repo, sin migraciones versionadas. Pendiente mover a `supabase/migrations` con la CLI.

### PRO-003 — `Sales.tsx` con inventario vacío a propósito
- **Fecha:** jul 2026
- **Estado:** Ratificada
- **Alcance:** Sitio Web
- **Descripción:** El inventario vacío en `Sales.tsx` es diseño intencional, no un bug ni contenido faltante por descuido. No "completar" sin confirmar primero el motivo y el estado real de la línea Sales.

### INF-001 — Datos de Google Business Profile estáticos, no auto-actualizables
- **Fecha:** 29 jul 2026
- **Estado:** Ratificada (como limitación conocida, no como decisión definitiva de mantenerlo así)
- **Alcance:** Sitio Web
- **Descripción:** `GBP_RATING` y `GBP_REVIEW_COUNT` son datos fijos cargados manualmente el 29 jul 2026. No se autoactualizan — riesgo de quedar desactualizados con el tiempo.

### INF-002 — Accesos de terceros pendientes de transferencia
- **Fecha:** jul 2026
- **Estado:** Pendiente
- **Alcance:** Sitio Web
- **Descripción:** Accesos aún en manos del developer anterior (`mightworkron`): GitHub, Netlify, DNS, GTM/Google Ads/Search Console, JotForm, transferencia de Lovable.dev. Supabase ya no forma parte de este bloqueo (cuentas propias `theshowroommiami` ya existen).

### ARQ-002 — Hero del home protegido
- **Fecha:** jul 2026
- **Estado:** Ratificada
- **Alcance:** Sitio Web
- **Descripción:** El hero de la página principal no se modifica sin confirmación explícita del usuario, dado su rol central en primera impresión/conversión.

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
