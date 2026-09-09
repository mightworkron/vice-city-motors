# CLAUDE.md — vice-city-motors (showroommiami.com)

Este archivo lo lee Claude Code automáticamente al iniciar una sesión sobre
este repositorio. Contiene el contexto y las reglas que aplican sin importar
desde qué Project de Claude.ai llegó el instructivo.

## Sobre el repositorio

- Sitio web de The Showroom Miami, empresa de servicios para vehículos de
  alta gama en el sureste de Florida (showroommiami.com).
- Código generado originalmente por Lovable.dev y sincronizado automáticamente
  con ese proyecto — cualquier cambio acá se refleja en el sitio publicado.
- Repositorio propiedad de un desarrollador externo (`mightworkron`); The
  Showroom Miami tiene acceso de colaborador, no de owner (transferencia de
  ownership pendiente).
- Stack: React / Vite / TypeScript / Tailwind / Supabase, desplegado en Netlify.

## Reglas generales de contenido y código

- Tono: profesional, sin promesas absolutas o no verificables (ej. evitar
  "we accept ALL insurance").
- El brandline **"YOUR CAR. OUR OBSESSION."** nunca se traduce, en ningún idioma.
- Antes de aplicar cambios sobre archivos que afecten copy legal o de seguros,
  mostrar el diff y esperar confirmación explícita antes de hacer commit/push.
- Nunca asumir el estado de negocio (líneas activas, nombres de enum, etc.)
  desde memoria o entrenamiento — siempre confirmar contra `/docs/proyectos/`
  o directamente contra Supabase antes de escribir código o copy.

## Esquema documental del proyecto (multi-workstream)

Este repo sirve a más de un workstream (Blog editorial, Sitio Web/SEO, y
futuros como Help Center). Cada workstream tiene su propio espacio de
documentación bajo `/docs/proyectos/`, para no mezclar contexto:

```
/docs/proyectos/
  blog/
    handoff.md        ← estado narrativo del proyecto, fuente de verdad principal
    workplan.yml       ← fases técnicas, estado y bloqueos, formato machine-readable
    decisiones.md       ← bitácora de decisiones tomadas, categorizadas por tipo
  web/
    handoff.md
    workplan.yml
    decisiones.md
  [futuros workstreams siguen el mismo patrón]
```

### Función de cada archivo

- **`handoff.md`** — resumen narrativo completo y actualizado del estado del
  proyecto: qué cambió recientemente, estado por ítem/línea, próximos pasos.
  Es lo primero que hay que leer para retomar contexto en cualquier sesión
  nueva, humana o de Claude.
- **`workplan.yml`** — tracker estructurado de fases de trabajo: qué fase
  está activa, qué la bloquea, quién es dueño, qué falta para desbloquearla.
  Legible tanto por humanos como para que Claude Code valide programáticamente
  el estado antes de ejecutar algo.
- **`decisiones.md`** — bitácora de decisiones de fondo (no de tareas
  operativas), categorizadas por tipo:
  - `ARQ` — Arquitectura (stack, integraciones, panel de admin, etc.)
  - `DAT` — Datos (schema, enums, taxonomía de contenido)
  - `PRO` — Producto / Contenido (qué se publica, cómo se trata algo)
  - `PRC` — Proceso (flujo de trabajo, cadencia, roles)
  - `INF` — Infraestructura (hosting, cuentas, deploy, permisos)

  Cada entrada incluye fecha, estado (`Propuesta` / `Pendiente de ratificar` /
  `Ratificada` / `Revertida`) y alcance (a qué workstream(s) afecta).

### Reglas de mantenimiento

1. **Un archivo por workstream, nunca compartido.** Si una decisión afecta a
   más de un workstream (ej. cambia el esquema de líneas de negocio, que
   toca tanto Blog como Web), se registra en `decisiones.md` de ambos, con
   el mismo ID de decisión, y se referencia cruzado.
2. **Actualizar al cierre de cada sesión con avances reales** — no hace falta
   actualizar por cada mensaje, sí cuando se cierra una fase, se toma una
   decisión, o cambia un bloqueo.
3. **Jerarquía de fuente de verdad:** si hay conflicto entre estos archivos y
   la memoria conversacional de Claude (en cualquier interfaz), **estos
   archivos ganan**. La memoria conversacional es una capa de conveniencia,
   no la fuente autoritativa.
4. **No crear un workstream nuevo en `/docs/proyectos/` sin que exista trabajo
   real que documentar** — evitar carpetas vacías especulativas.
5. Antes de hacer commit/push de cambios dentro de `/docs/proyectos/`, seguir
   la misma regla general del repo: mostrar el diff y esperar confirmación
   si el contenido toca decisiones sensibles (legal, seguros, líneas de
   negocio complementarias).

## Workstreams activos

- **Blog** (`/docs/proyectos/blog/`) — activo, en fase de migración de
  esquema de líneas de negocio (6 → 7). Ver `workplan.yml` de esa carpeta
  para el estado exacto de cada fase.
- **Sitio Web / SEO** (`/docs/proyectos/web/`) — sin trabajo activo aún;
  carpeta se crea cuando arranque el primer cambio real (landing, página
  nueva, optimización SEO puntual).
