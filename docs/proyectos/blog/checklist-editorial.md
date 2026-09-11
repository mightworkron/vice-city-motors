# Checklist editorial — Blog The Showroom Miami

**Última actualización:** 10 sep 2026 (F4, sesión 2)

Fuente de verdad del flujo de revisión editorial. Cada post pasa por este
checklist antes de cambiar `post_status` a `publicado`. Referenciado por §7
del instructivo v3 del proyecto Blog en Claude.ai.

## Cómo usar este archivo

- **Por post:** copiar el bloque "Checklist por post" a las notas de revisión
  del post (campo `notas_revision` de la tabla `posts` o al PR/issue si se
  usa Git para tracking editorial). Marcar cada casilla al validarla. Ningún
  post pasa a `publicado` con casillas sin marcar salvo justificación
  explícita en `notas_revision`.
- **Trimestral:** al cierre de cada trimestre, correr el bloque "Registro
  trimestral" contra el conjunto de posts publicados en el período. Los
  resultados quedan como entrada en `handoff.md` con fecha.
- **Nomenclatura de schema (importante):** el enum se llama
  `post_linea_negocio`, la columna en `posts` se llama `linea` (no
  `linea_negocio`). Ver DAT-002 en `decisiones.md`.

---

## Checklist por post

Copiar todo este bloque a las notas de revisión del post.

### 1. Marca y voz (antes de escribir)

- [ ] **Línea de negocio definida** con valor exacto del enum
  `post_linea_negocio`. Uno de: `collision_repair`, `towing`,
  `custom_builds`, `wrap_ppf_tint`, `exotic_rentals`, `financial`, `sales`.
- [ ] **Voz correcta según tipo de línea:**
  - Directa (`collision_repair`, `towing`, `custom_builds`): primera
    persona ("hacemos", "reparamos", "gestionamos").
  - Híbrida (`wrap_ppf_tint`): primera persona sobre gestión, criterio
    técnico y resultado — nunca sobre instalación propia ni taller de PPF
    in-house.
  - Partner (`exotic_rentals`, `financial`, `sales`): tono de
    recomendación/alianza — el enmarque de referido va en el cuerpo del
    post, no solo en disclaimer al pie.
- [ ] **Si es `collision_repair`:** audiencia segmentada explícitamente —
  (a) gama alta/exótica o (b) gama media-estándar. Mensaje, canal y oferta
  consistentes con esa audiencia.
- [ ] **Nomenclatura SEO de la línea principal:** si el post trata
  `collision_repair`, se refiere a la línea siempre como **"Luxury Collision
  Repair"** en título, H1/H2, slug, meta y copy. Nunca "Collision & Repair"
  ni variantes con "Insurance".

### 2. Contenido (durante la escritura)

- [ ] **Tipo de post identificado:** (a) servicio, trabajo realizado, caso
  de cliente o recomendación técnica de TSM, o (b) informativo, educativo,
  noticia, tendencia, reseña o análisis general.
- [ ] **Si es (a):** elemento propio verificable presente (obligatorio
  100%) — foto real, caso real, experiencia técnica del equipo, observación
  interna, dato propio (4.9/5, 1000+ clientes), prueba, comparación o
  recomendación profesional del taller. En posts partner
  (`exotic_rentals`, `financial`, `sales`), el elemento propio es sobre la
  **relación de confianza con el aliado** o la experiencia de clientes de
  TSM con esa alianza — nunca sobre la ejecución del servicio.
- [ ] **Si es (b):** fuentes externas confiables citadas y documentadas
  (link o referencia verificable en el cuerpo o al pie).
- [ ] **No es relleno intercambiable:** el post aporta valor informativo
  real o anclaje propio. Si no aporta ni uno ni otro, se rechaza (ver
  sección "Rechazo vs. corrección").
- [ ] **Sin promesas absolutas:** no aparece "aceptamos TODOS los seguros"
  ni variantes absolutas.
- [ ] **Sin superlativos no verificables:** no aparece "el mejor de Miami",
  "servicio incomparable" ni equivalentes.
- [ ] **Sin diferenciador exclusivo en coordinación con aseguradoras**
  (riesgo FL §626.854 — public adjuster).
- [ ] **Si es `towing`:** no afirma cobertura de highway/autopistas —
  nunca, ni implícito.
- [ ] **Si es `wrap_ppf_tint`:** no afirma instalación in-house ni taller
  propio de PPF. Si describe el proceso de instalación, lo encuadra como
  estándar que TSM exige y supervisa, no como operación propia.
- [ ] **Si es partner y el post pudiera dar a entender que TSM presta el
  servicio directamente:** reformular o rechazar. Ninguna línea indirecta
  se redacta "como si fuera" directa.
- [ ] **Estatutos FL citados donde apliquen:** §626.9743 (anti-steering) y
  §501.33 (Aftermarket Crash Parts Act) principalmente en
  `collision_repair`.

### 3. SEO y assets

- [ ] **Brandline sin traducir:** si aparece "YOUR CAR. OUR OBSESSION.",
  queda en inglés — incluso en posts en español. Nunca se traduce.
- [ ] **Title** menor a 60 caracteres.
- [ ] **Meta description** menor a 160 caracteres.
- [ ] **Sin duplicados** de title ni description en posts anteriores.
- [ ] **`alt_text` completado** en todas las filas de `post_imagenes`
  asociadas al post. Obligatorio a nivel de schema y accesibilidad.

### 4. Base de datos (antes de insertar)

- [ ] **Insert en tabla `posts`** con `post_status = 'draft'`.
- [ ] **Columna `linea`** con uno de los 7 valores válidos del enum
  `post_linea_negocio`.
- [ ] **`idioma`** = `en` o `es` según corresponda.
- [ ] **`grupo_traduccion`:** si el post tiene versión en el otro idioma,
  UUID compartido entre ambas versiones. Si es post monolingüe, `NULL` o
  UUID único.
- [ ] **`autor_ia`** registrado (modelo y proyecto de origen — ej.
  "ChatGPT Project GPT-4o / Blog TSM").

### 5. Revisión y publicación

- [ ] **Hikashi:** SEO y técnico validado. `notas_revision` actualizadas.
- [ ] **Liza:** voz de marca, exactitud operativa y aprobación de cara al
  cliente. Sin observaciones abiertas.
- [ ] **`post_status` cambia a `publicado`** por Claude Code manualmente,
  con aprobación humana explícita en el chat. Nunca por cron, panel
  autónomo ni automatización.

---

## Rechazo vs. corrección

Se **rechaza** (no se corrige, el post se descarta):

- Contenido de relleno, superficial o intercambiable con cualquier taller
  de Miami **que además no aporte valor informativo real**.
- Un post partner redactado como si TSM prestara el servicio directamente.
- Un post `wrap_ppf_tint` que afirme instalación in-house o taller propio
  de PPF.
- Un post `towing` que afirme cobertura de highway.
- Un post que traduzca el brandline "YOUR CAR. OUR OBSESSION."

Se **corrige** (el post se devuelve a `draft` con `notas_revision`,
se re-redacta):

- Superlativos no verificables recuperables en re-redacción.
- Promesas absolutas puntuales que se pueden reformular sin perder el
  mensaje.
- Falta de segmentación de audiencia en `collision_repair`.
- SEO fuera de rango de caracteres.
- Falta de `alt_text` en imágenes.
- Ausencia de citación cuando hay afirmación estatutaria de FL.

Un post **sin anclaje propio pero bien investigado y útil** no se rechaza
solo por eso — pasa como contenido informativo con fuentes documentadas
(regla 30% de §5.1 del instructivo).

---

## Registro trimestral

Copiar al cierre de cada trimestre. Resultados van a `handoff.md` con
fecha y responsable.

- [ ] **% de posts con elemento propio verificable ≥ 70%** del total
  publicado en el trimestre.
- [ ] **Desglose de ese % por línea de contenido** registrado
  explícitamente (una fila por línea con posts publicados).
- [ ] **Distribución por línea comparada contra la proporción objetivo**
  de §6 del instructivo v3:
  - `collision_repair`: 40%
  - `towing`: 15%
  - `wrap_ppf_tint`: 15%
  - `custom_builds`: 15%
  - `exotic_rentals`: 5%
  - `financial`: 5%
  - `sales`: 5%
- [ ] **Desviaciones justificadas** (bloqueos de línea, falta de casos
  reales, otros) documentadas en `handoff.md` con responsable y plan de
  corrección.

---

## Referencias cruzadas

- Instructivo del proyecto Blog (Claude.ai): §5 (reglas de contenido), §6
  (cadencia y proporción trimestral), §7 (checklist editorial base).
- `decisiones.md` (satélite Blog): DAT-001 (7 líneas), PRO-001 (voz
  partner/directa), DAT-002 (nomenclatura real del schema), ARQ-003
  (eliminación de `sales_finance`).
- `decisiones-transversales.md` (repo `theshowroommiami/gobernanza-tsm`):
  DT-001 (voz como norma de marca transversal).
- Estatutos FL de referencia: registrados en `overview.md` del Master TSM.
