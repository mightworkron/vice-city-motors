---
plantilla: financial
version: 1.0
ultima_actualizacion: 2026-09-10
estado: activa
autor_original: Claude.ai (satelite Blog, F3)
---

# NEW POST — financial

**Line enum value:** `financial`
**Voice:** partner — recommendation tone, framing of alliance/referral in the BODY of the post
**Language:** en

---

## Operational note (temporary — remove when the input arrives)

The specific financing ally has not been confirmed yet. Until confirmed:

- Do NOT name any ally.
- Do NOT describe any ally's specific rates, terms, or approval criteria.
- Do NOT fabricate an ally name or details.
- Posts should stay at the level of general education about vehicle financing for high-end vehicles, or at TSM's general criteria for recommending a financing partner.

Once the ally is confirmed, remove this note, add the ally name and financing types as inputs in the walkthrough, bump version to 1.1, and log the change in the commit.

---

## Inputs (the model will walk through these with you conversationally)

- **Post type** (pick one — until the ally is confirmed, the first and last are the viable options):
  - Educational/contextual (how vehicle financing works for high-end vehicles, what to consider)
  - Ally-specific post (TSM's relationship with the financing ally) — requires ally confirmation
  - Client experience with a financing arrangement — requires ally confirmation
  - Informational / 30% bucket (external sources, industry context)

- **Angle / topic**

- **Target keyword(s)** — primary + up to 3 secondary

- **Verifiable element** — for partner lines, this is the TRUST relationship or the criteria TSM applies:
  - Criteria TSM applies when recommending a financing ally (until ally is confirmed)
  - Nature of TSM's relationship with the confirmed ally (once available)
  - Real client experience with the confirmed ally (once available)

- **Approximate length** — default 700–1100

- **Location focus** (if geographically framed): Miami-Dade / Broward / Palm Beach / Tri-county general

---

## Generate the post

Follow the Project Instructions. Apply everything specific to `financial`:

1. Partner voice. TSM does NOT operate vehicle financing — TSM recommends and connects clients with a trusted ally. Language like "we work with", "we connect our clients with", "we refer" is correct. Language like "our financing", "we finance", "our rates" is prohibited.
2. The referral/alliance framing goes in the BODY of the post, not only in a footer disclaimer.
3. Financial topics carry regulatory exposure. Do NOT claim guarantees on approval, rates, or terms. Do NOT compare an ally's rates to industry averages unless verified. Do NOT position any ally as "the best" or "the only option".
4. Until the ally is confirmed, do NOT name one. If the user asks for an ally-specific post or a client experience post, remind them of the status and stop.
5. TSM's role is exclusively that of a referral. Never suggest TSM plays any role in underwriting, approval, or servicing.

Deliver in the standard output format including the self-verification checklist.

---

## Reminders specific to this line

- Financial services attract more regulatory scrutiny than the other lines. Language must be careful: no promises of approval, no rate claims without verification, no positioning against competitors.
- If the post touches how TSM helps clients with the referral process, keep it at the level TSM actually operates (introduction, warm hand-off, follow-up on client satisfaction) — never lending, servicing, or advisory.
- The brandline "YOUR CAR. OUR OBSESSION." stays in English if used.
