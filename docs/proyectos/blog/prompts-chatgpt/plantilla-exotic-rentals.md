---
plantilla: exotic_rentals
version: 1.1
ultima_actualizacion: 2026-09-11
estado: activa
autor_original: Claude.ai (satelite Blog, F3)
changelog:
  - v1.0 (2026-09-10): version de sesion 2
  - v1.1 (2026-09-11): tras revision de Liza. Se elimina la cita de FL §626.854 como
    justificacion de la voz partner en esta linea — es un estatuto de public adjusting,
    propio del contexto de reclamos de seguro, no de rentals. Se reemplaza por la
    exposicion que realmente aplica.
---

# NEW POST — exotic_rentals

**Line enum value:** `exotic_rentals`
**Voice:** partner — recommendation tone, framing of alliance/referral in the BODY of the post
**Language:** en

---

## Operational note (temporary — remove when the input arrives)

The specific exotic rental ally has not been confirmed yet (Liza is confirming). Until confirmed:

- Do NOT name any ally.
- Do NOT describe any specific ally's inventory, pricing, or policies.
- Do NOT fabricate an ally name or details.
- Posts should stay at the level of TSM's general approach: why we recommend renting instead of buying in certain cases, what criteria we apply when recommending a rental partner, how we think about the exotic rental experience for our clients.

Once the ally is confirmed, remove this note, add the ally name and elemento de confianza as inputs in the walkthrough, bump version to 1.1, and log the change in the commit.

---

## Inputs (the model will walk through these with you conversationally)

- **Post type** (pick one — until the ally is confirmed, the first two are the viable options):
  - Contextual/generic (why rent, when it makes sense, what to look for) — no ally named
  - Editorial/opinion (how TSM thinks about the exotic rental experience, philosophy, criteria) — no ally named
  - Ally-specific post — requires ally confirmation
  - Client experience with a rental via our ally — requires ally confirmation

- **Angle / topic**

- **Target keyword(s)** — primary + up to 3 secondary

- **Verifiable element** — for partner lines, this is the TRUST relationship or the criteria TSM applies:
  - TSM's general criteria for recommending exotic rentals (until ally is confirmed)
  - Nature of TSM's relationship with the confirmed ally (once available)
  - Real client experience with a confirmed ally (once available)

- **Approximate length** — default 700–1000

- **Location focus** (if geographically framed): Miami-Dade / Broward / Palm Beach / Tri-county general

---

## Generate the post

Follow the Project Instructions. Apply everything specific to `exotic_rentals`:

1. Partner voice. TSM does NOT operate exotic rentals — TSM recommends and connects clients with a trusted ally. Language like "we work with", "we connect our clients with", "we recommend" is correct. Language like "our fleet", "our rentals", "we offer rentals" is prohibited.
2. The referral/alliance framing goes in the BODY of the post, not only in a footer disclaimer. The reader should understand within the first two or three paragraphs that TSM is a bridge to a trusted ally, not the operator.
3. Until the ally is confirmed, do NOT name any ally, do NOT invent one, and do NOT describe specific inventory/pricing/policies. If the user asks for an ally-specific post or a client experience post while the operational note above is still in effect, remind them of the status and stop.
4. The referral framing must be clear enough that a reader landing on the post cold understands TSM is not the operator.

Deliver in the standard output format including the self-verification checklist.

---

## Reminders specific to this line

- Partner voice is a legal/exposure choice per DT-001. Presenting TSM as the operator of a service TSM does not operate carries misrepresentation, licensing and operational-accuracy exposure as applicable. Do NOT cite FL §626.854 here — that statute belongs to the insurance-claims context and has no application to exotic rentals.
- TSM's "verifiable element" on partner posts is about the TRUST — how TSM chose the ally, what criteria TSM applies, what standard TSM maintains. NOT about the ally's inventory or operational details.
- The brandline "YOUR CAR. OUR OBSESSION." stays in English if used.
