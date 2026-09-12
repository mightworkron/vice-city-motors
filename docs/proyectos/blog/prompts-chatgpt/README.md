---
tipo: readme
version: 1.2
ultima_actualizacion: 2026-09-11
---

# Prompts para ChatGPT Project "Blog TSM"

Banco de plantillas de prompt para la generación de posts del blog de The Showroom Miami (showroommiami.com) en el ChatGPT Project "Blog TSM".

## Fuente única de verdad

Este directorio es la **fuente única de verdad** de los prompts del blog. Cualquier cambio se hace aquí primero, con commit que explique el porqué. Las copias en el Sources del ChatGPT Project son sincronizaciones — nunca la fuente primaria.

Si hay discrepancia entre lo que dice el Sources y lo que dice este repo, el repo gana.

## Orden de precedencia

Cuando dos documentos se contradicen, gana el de más arriba:

1. **Decisiones transversales** — `docs/decisiones-transversales.md` en el repo `theshowroommiami/gobernanza-tsm`. Definen qué puede afirmar TSM sobre sí misma, en cualquier canal. Ninguna plantilla puede contradecirlas.
2. **`project-instructions.md`** — reglas editoriales transversales del Project.
3. **`plantilla-<linea>.md`** — aplicación de esas reglas a cada línea.

Si una plantilla contradice una decisión transversal, la plantilla está mal y se corrige — no al revés.

## Estructura del banco

- `project-instructions.md` — se copia al campo "Instructions" del ChatGPT Project, no al Sources. Se versiona aquí por si el Project se rehace desde cero. **Límite duro de 8000 caracteres en el campo destino — hoy el contenido pegable ocupa 7942. El campo está saturado: cualquier regla nueva obliga a comprimir otra o a moverla a un archivo del Sources.**
- `plantilla-<linea>.md` — una por cada una de las 7 líneas de negocio. Se cargan en el Sources del Project. En un chat nuevo se referencia la plantilla específica ("usá `plantilla-collision-repair.md`") y el modelo hace el walkthrough conversacional de los inputs antes de generar.

## Flujo de generación de post

1. Chat nuevo dentro del ChatGPT Project "Blog TSM".
2. Mensaje inicial: "Voy a generar un post de <línea>. Usá `plantilla-<linea>.md` como base."
3. El modelo confirma la línea y el tipo de voz, surfacea las notas estructurales y operativas, y **hace el walkthrough conversacional de los inputs por bloques**. No es un formulario — es una conversación guiada.
4. Después de cada bloque, el modelo confirma qué entendió y avanza. Si el usuario responde algo ambiguo, pide clarificación antes de seguir.
5. Al terminar, el modelo resume todos los inputs y pide confirmación explícita.
6. Solo con confirmación, genera el post en el formato de output definido en Instructions, con la self-verification checklist marcada.
7. El post se pasa por el checklist editorial (`docs/proyectos/blog/checklist-editorial.md`) antes de insertar en Supabase con `post_status = 'draft'`.

## Flujo de actualización de plantilla

1. Editar el archivo en este directorio (o pedirle a Claude.ai el diseño y Claude Code hace el commit).
2. Bumpear versión en el frontmatter: `1.x` para ajustes menores, `2.0` para reescritura estructural.
3. Actualizar `ultima_actualizacion` y agregar entrada en `changelog`.
4. Commit + push a main con mensaje que explique el cambio.
5. Descargar el archivo actualizado del repo.
6. En el Sources del ChatGPT Project, reemplazar el archivo anterior por el nuevo. Mantener el mismo nombre de archivo para no romper referencias en chats existentes.

Si cambian las Instructions del Project, además de actualizar el archivo aquí, hay que copiar el contenido nuevo al campo "Instructions" del Project en ChatGPT.

## Revisión de vigencia (trimestral)

Las plantillas contienen afirmaciones estructurales sobre licencias, aliados, modelo de ejecución y métricas propias. Esas afirmaciones **no son permanentes por estar escritas** — describen el estado del negocio en la fecha del commit. Al cierre de cada trimestre, junto con el registro trimestral del checklist editorial, revisar:

- **Licencias y estatus regulatorio.** ¿Sigue siendo cierto que TSM no tiene licencia de dealer de Florida (DT-003)? ¿Cambió algún registro?
- **Aliados.** ¿Se confirmó algún aliado de Rental, Financial o Sales? Si sí, quitar la nota operativa correspondiente y bumpear la plantilla.
- **Modelo de ejecución (DT-006).** ¿Sigue siendo mixta la ejecución de `collision_repair` y `custom_builds`? Si pasa a ser íntegramente propia, la restricción se levanta con una DT nueva, no editando la plantilla en silencio.
- **Métricas propias.** Rating, cantidad de reseñas y cantidad de clientes se verifican contra la fuente y se registran con fecha en `handoff.md`. Ninguna cifra se usa en un post sin fecha de verificación.

Quien detecte que una afirmación estructural dejó de ser cierta la corrige antes de generar el siguiente post de esa línea, no después.

## Estados posibles de una plantilla

Definidos en el frontmatter, campo `estado`:

- `activa` — línea operativa, plantilla lista para usar. Puede tener notas operativas temporales dentro del archivo sin que eso la haga menos utilizable.

Otros estados existieron en versiones anteriores (`parcial`, `bloqueada`) y se descartaron: si una plantilla puede usarse con restricciones, esas restricciones viven como nota operativa dentro del archivo, no como bloqueo formal.

## Estado actual (al 11 sep 2026)

Todas las plantillas están activas.

| Plantilla | Versión | Nota estructural / operativa |
|---|---|---|
| collision_repair | 1.2 | Ejecución mixta (DT-006) — nunca afirmar que todo es in-house ni atribuir ejecución de un caso sin confirmar. |
| towing | 2.0 | No es towing company (DT-005). Dos modos: Complimentary Accident Towing / Luxury & Exotic Vehicle Transport. Sin cobertura de highway. |
| wrap_ppf_tint | 1.2 | TSM gestiona e inspecciona; el aliado instala. Sin lenguaje de garantía. |
| custom_builds | 1.1 | Ejecución mixta (DT-006). Hasta contar con 2–3 casos reales documentados (Liza), priorizar el bucket informativo del 30%. |
| exotic_rentals | 1.1 | Hasta confirmar aliado (Liza), no nombrarlo. Posts contextuales/editoriales OK. |
| financial | 1.0 | Hasta confirmar aliado, no nombrarlo. Posts educativos genéricos OK. |
| sales | 1.0 | Hasta confirmar aliado, no nombrarlo. TSM opera como Network Partner (DT-003), no dealer. |

## Referencias cruzadas

- `docs/proyectos/blog/checklist-editorial.md` — checklist de revisión editorial post-generación
- `docs/proyectos/blog/decisiones.md` — decisiones locales del satélite (DAT-001, PRO-001, DAT-002, ARQ-003)
- `docs/decisiones-transversales.md` en repo `theshowroommiami/gobernanza-tsm`:
  - DT-001 — voz como norma de marca transversal
  - DT-002 — acceso MCP a Supabase
  - DT-003 — TSM opera como Network Partner, no dealer
  - DT-004 — estados canónicos de tareas
  - DT-005 — transporte de vehículos: cortesía, no towing público
  - DT-006 — ejecución mixta y regla de no afirmar in-house sin confirmación
  - DT-007 — "insurance" es keyword permitida, con límite de alcance
- Instructivo v5 del proyecto Blog en Claude.ai — reglas de contenido §5, cadencia y proporción trimestral §6
