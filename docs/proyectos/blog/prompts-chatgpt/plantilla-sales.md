---
plantilla: sales
version: 1.0
ultima_actualizacion: 2026-09-10
estado: activa
autor_original: Claude.ai (satelite Blog, F3)
---

# NEW POST — sales

**Line enum value:** `sales`
**Voice:** partner — recommendation tone, framing of alliance/referral in the BODY of the post; Network Partner framing (see DT-003)
**Language:** en

---

## Operational note (temporary — remove when the input arrives)

The specific sales ally has not been confirmed yet. Until confirmed:

- Do NOT name any ally.
- Do NOT list specific inventory, makes/models available, pricing, or terms.
- Do NOT fabricate an ally name or details.
- Posts should stay at the level of general education (how to buy a high-end vehicle, what to consider) or TSM's general criteria for recommending a sales partner.

Once the ally is confirmed, remove this note, add the ally name and inventory focus as inputs in the walkthrough, bump version to 1.1, and log the change in the commit.

---

## Structural note (permanent — Network Partner status per DT-003)

TSM does NOT hold a Florida vehicle dealer license. TSM operates as a Network Partner: TSM refers qualified buyers to a trusted sales ally that holds the appropriate licensing. This is a structural fact, not a temporary status — it does not change with the confirmation of a specific ally.

Any language that could position TSM as a dealer, broker, sales agent, or as involved in negotiation/closing is prohibited. See DT-003 in `docs/decisiones-transversales.md` (repo `theshowroommiami/gobernanza-tsm`).

---

## Inputs (the model will walk through these with you conversationally)

- **Post type** (pick one — until the ally is confirmed, the first and last are the viable options):
  - Educational/contextual (how to buy a high-end vehicle, what to consider, buyer's guide)
  - Ally-specific post (TSM's relationship with the sales ally) — requires ally confirmation
  - Client experience with a purchase via our ally — requires ally confirmation
  - Informational / 30% bucket (external sources, industry context)

- **Angle / topic**

- **Target keyword(s)** — primary + up to 3 secondary

- **Verifiable element** — for partner lines, this is the TRUST relationship or the criteria TSM applies:
  - Criteria TSM applies when recommending a sales ally (until ally is confirmed)
  - Nature of TSM's relationship with the confirmed ally (once available)
  - Real client experience with the confirmed ally (once available)

- **Approximate length** — default 700–1100

- **Location focus** (if geographically framed): Miami-Dade / Broward / Palm Beach / Tri-county general

---

## Generate the post

Follow the Project Instructions. Apply everything specific to `sales`:

1. Partner voice + Network Partner framing. TSM does NOT sell vehicles — TSM refers qualified buyers to a licensed ally. Language like "we work with", "we connect our clients with", "we refer" is correct. Language like "our inventory", "we sell", "our vehicles for sale", "our dealership" is prohibited.
2. The referral/alliance framing goes in the BODY of the post, not only in a footer disclaimer. The reader should understand within the first two or three paragraphs that TSM is a bridge to a licensed dealer partner, not the seller.
3. Do NOT invent inventory. Do NOT list specific vehicles for sale. Do NOT claim availability of specific makes/models unless the ally has confirmed and TSM is authorized to reference them.
4. Do NOT position TSM or any ally as "the best" without verified basis.
5. Until the ally is confirmed, do NOT name one. If the user asks for an ally-specific post or a client purchase experience, remind them of the status and stop.
6. If the post touches how TSM helps clients with the referral process, keep it at the level TSM actually operates (introduction, criteria for referral, follow-up on satisfaction) — never sales, negotiation, or closing.

Deliver in the standard output format including the self-verification checklist. On the checklist, the "no positioning as licensed dealer/broker" item MUST be marked.

---

## Reminders specific to this line

- Sales carries FL dealer licensing and disclosure considerations. TSM's Network Partner position (DT-003) is what makes this line legally viable — respect it in every post.
- The referral framing must be clear enough that a reader landing on the post cold understands TSM is not the seller.
- The brandline "YOUR CAR. OUR OBSESSION." stays in English if used.
