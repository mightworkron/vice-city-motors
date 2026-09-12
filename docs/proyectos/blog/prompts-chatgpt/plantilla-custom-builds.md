---
plantilla: custom_builds
version: 1.1
ultima_actualizacion: 2026-09-11
estado: activa
autor_original: Claude.ai (satelite Blog, F3)
changelog:
  - v1.0 (2026-09-10): version de sesion 2
  - v1.1 (2026-09-11): tras revision de Liza. Se agrega clausula de ejecucion mixta
    (DT-006) y el input de ejecucion por caso, confirmado por Hikashi el 2026-09-11.
---

# NEW POST — custom_builds

**Line enum value:** `custom_builds`
**Voice:** direct, first person plural
**Language:** en

---

## Structural note (permanent — mixed execution, see DT-006)

TSM performs custom build work directly, and routes some specialties to third-party
shops (paint, upholstery, performance work, fabrication, depending on the build).

- The line is direct. First person plural is correct.
- Never claim that a build was executed entirely in-house.
- Never attribute execution of a specific stage to TSM unless the user has confirmed it
  as an input for that post.

Where execution is third-party, write about what TSM owns: the spec, the build plan,
the sourcing decisions, the standards required, the supervision, and the finished result.

---

## Operational note (temporary — remove when the input arrives)

Real case documentation for this line is being assembled (Liza is delivering 2–3
documented builds with photos). Until those cases arrive:

- Posts of type "Real case study", "Service explanation grounded in a specific case", or
  "Technical recommendation based on our team's work" REQUIRE a specific case reference
  to proceed. If the user cannot provide one during the walkthrough, redirect toward the
  informational bucket below OR stop and ask them to bring the case reference before
  generating.
- Posts of type "Informational / 30% bucket" (industry context, decision frameworks,
  build categories in the abstract) are the preferred format for now — no fabrication
  risk, external sources documented.

Once real cases are available, remove this note, keep `estado: activa`, bump version, and
log the change in the commit.

---

## Inputs (the model will walk through these with you conversationally)

- **Build category** (pick one):
  - Aesthetic customization (widebody, body kits, unique paint, wheel work)
  - Performance modification (engine, exhaust, suspension, brakes)
  - Interior customization (upholstery, trim, custom electronics)
  - Full bespoke build (multi-category, ground-up spec)

- **Post type** (pick one):
  - Real case study (specific build, before/after, process) — requires a case reference
  - Service explanation grounded in a specific case — requires a case reference
  - Technical recommendation based on our team's work — requires a case reference
  - Informational / 30% bucket (industry context, decision frameworks in the abstract)

- **Execution of the referenced build** (required whenever the post references a
  specific build): in-house / third-party specialist / mixed / not applicable. If mixed,
  ask which stages TSM executed and which it supervised.

- **Angle / topic**

- **Target keyword(s)** — primary + up to 3 secondary

- **TSM-specific verifiable element(s) available for this post:**
  - Real photo(s) of a build — describe
  - Real case reference — vehicle, scope of work, photos available
  - Team member experience or observation on a specific technique
  - Operating standard the team applies
  - None — this post must go through the 30% informational bucket with cited external sources

- **Approximate length** — default 900–1300, custom builds warrant depth

- **Location focus** (if geographically framed): Miami-Dade / Broward / Palm Beach / Tri-county general

---

## Generate the post

Follow the Project Instructions. Apply everything specific to `custom_builds`:

1. Direct voice — first person plural. Respect the mixed-execution note above.
2. If the post type is case-based or case-grounded and the user cannot provide a case
   reference, STOP and ask before generating. Do not fabricate a build.
3. If the post type is informational (30% bucket), external sources must be cited. Do not
   attribute claims to TSM's own experience when the input is external.
4. Technical specificity is welcome and expected: brand names, part references, technique
   descriptions, decision points during the build. When the post is case-based, this IS
   the verifiable element.
5. Do not fabricate parts, suppliers, costs, timelines, or performance outcomes.
6. Respect client confidentiality if applicable (do not name the client without confirmation).

Deliver in the standard output format including the self-verification checklist.

---

## Reminders specific to this line

- Custom builds is a line where SEO benefits directly from technical depth. Do not water
  down technical language for a general audience.
- Photo quality and case documentation are the differentiator — once cases arrive, posts
  should feel like the reader is watching over the shoulder of a specialist.
- Until then, informational posts should still feel like they come from a team that lives
  this work — write about the *decision frameworks* our team applies, without claiming a
  specific case behind them.
- The brandline "YOUR CAR. OUR OBSESSION." stays in English if used.
