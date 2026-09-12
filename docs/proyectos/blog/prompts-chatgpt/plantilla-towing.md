---
plantilla: towing
version: 2.0
ultima_actualizacion: 2026-09-11
estado: activa
autor_original: Claude.ai (satelite Blog, F3)
changelog:
  - v1.1 (2026-09-10): version de sesion 2
  - v2.0 (2026-09-11): reescritura estructural tras revision de Liza. Se elimina el
    encuadre de "TSM performs towing directly" como servicio publico de towing. Se
    introducen dos modos de servicio (Complimentary Accident Towing / Luxury & Exotic
    Vehicle Transport) que el modelo pregunta al inicio del walkthrough. Nueva nota
    estructural permanente. Ver DT-005.
---

# NEW POST — towing

**Line enum value:** `towing`
**Public SEO names:** `Complimentary Accident Towing` (Mode A) · `Luxury & Exotic Vehicle Transport` (Mode B)
**Voice:** direct, first person plural
**Language:** en

---

## Structural note (permanent — see DT-005)

TSM operates its own flatbed. TSM is **not** a towing company and must never be
marketed as one.

What TSM actually provides:

- **Complimentary accident towing** to TSM's facility for vehicles coming in for
  collision repair, and back to the customer when the repair is complete. It is a
  benefit attached to the repair relationship, not a separately sold or separately
  billed service.
- **Flatbed transport** where TSM's equipment and handling criteria matter most:
  luxury, exotic, high-value and low-clearance vehicles.

TSM does **not** operate a public emergency towing service, does not dispatch to the
general public, does not publish rates, and does not sell towing as a standalone
product.

The enum value `towing` is an internal technical identifier. It is **never** the
public name of the service in copy, titles, H1/H2, slugs or meta descriptions.

---

## Service mode (ASK THIS FIRST — before any other input)

Before walking through the inputs, ask the user which of the two modes this post is
about. The rest of the walkthrough and the applicable rules depend on the answer.

- **Mode A — Complimentary Accident Towing.** Free tow to our facility after a
  collision and back to the customer on completion. Naturally adjacent to
  `collision_repair` content.
- **Mode B — Luxury & Exotic Vehicle Transport.** Flatbed transport, handling of
  low-clearance and high-value vehicles, transport considerations for exotics.

If the user is unsure, ask what the reader is meant to do after reading the post. If
the answer is "bring their car to us after an accident", it is Mode A. If it is
"understand how an exotic should be moved", it is Mode B.

---

## Inputs (the model will walk through these with you conversationally)

- **Service mode** (required — A or B, per the section above)

- **Post type** (pick one):
  - Mode A: how complimentary accident towing works for our repair customers
  - Mode A: what to do in the moments after a collision (transport angle)
  - Mode B: transport considerations for luxury / exotic vehicles
  - Mode B: safe flatbed transport for low-clearance vehicles
  - Real case (either mode) — requires a confirmed case as input
  - Technical recommendation — requires a confirmed basis as input
  - Informational / 30% bucket (external sources)

- **Vehicle / use-case focus**, if applicable:
  - High-end / exotic vehicle
  - Low-clearance / special-handling concern
  - Collision-damaged / non-drivable vehicle
  - Standard passenger vehicle

- **Eligibility conditions confirmed for this post** (Mode A — required if the post
  describes the benefit): which conditions the user has confirmed as true and
  publishable. If none are confirmed, the post describes the benefit in general terms
  and states that conditions apply, without inventing what they are.

- **Angle / topic**

- **Target keyword(s)** — primary + up to 3 secondary

- **TSM-specific verifiable element(s) available for this post:**
  - Real transport case — vehicle, situation, handling considerations, photos available
  - Real photos of TSM's flatbed or a transport in progress
  - Team technical experience or observation on handling
  - Operating standard or handling criterion TSM applies
  - Professional recommendation grounded in TSM experience
  - None — this post must go through the 30% informational bucket with cited external sources

- **Approximate length** — default 700–1000

- **Location focus** (if geographically framed): Miami-Dade / Broward / Palm Beach / Tri-county general

---

## Generate the post

Follow the Project Instructions. Apply everything specific to `towing`:

1. Direct voice — first person plural. TSM operates its own flatbed and performs this
   transport itself.
2. NEVER present TSM as a towing company, a public emergency towing provider, or a
   dispatch service. NEVER write "call us for a tow", "24/7 towing", "emergency towing
   service", or any equivalent.
3. NEVER publish rates, response times, coverage radii, availability windows, or
   dispatch promises. NEVER imply the transport is separately sold or separately billed.
4. Mode A: the correct spelling is **complimentary** (free of charge), never
   "complementary". The benefit is tied to the repair relationship — write it as a
   benefit our repair customers receive, with conditions that apply, never as an open
   offer to the public.
5. NEVER write "all accidents", "any vehicle", "anywhere", "always available" or any
   other absolute. Eligibility conditions apply and are confirmed case by case; if the
   user has not confirmed them as inputs, say conditions apply without specifying them.
6. NEVER claim, imply, or SEO-frame highway or interstate coverage. Not even by
   implication. This is absolute.
7. The public name in copy is "complimentary accident towing" (Mode A) or "luxury and
   exotic vehicle transport" (Mode B). Never use the enum value `towing` as a service
   name.
8. If the post discusses a real case, work performed, or a technical recommendation, a
   verifiable TSM-specific element is mandatory. If none is available, stop or redirect
   to an informational / 30% bucket post.
9. Do not fabricate equipment specifications, vehicle capacities, recovery capabilities,
   photos, timelines, or client cases unless confirmed as inputs.
10. For luxury/exotic transport, handling detail is the differentiator: clearance,
    loading approach, ramp angle, wheel and tire concerns, securement points, protection
    during transport — only to the extent supported by user-provided facts or cited
    sources.

Deliver in the standard output format including the self-verification checklist.

---

## Reminders specific to this line

- The highway restriction is absolute for copy: no highway/interstate coverage claim,
  not even by implication.
- Mode A is the strongest commercial angle TSM has on this line, because it is a real,
  concrete, free benefit that most shops do not offer. Write it plainly and let it work
  — it does not need superlatives.
- Mode B is where technical depth earns E-E-A-T. Handling criteria for a low-clearance
  car are the kind of detail a generic shop cannot write.
- Local geographic framing is fine when confirmed, but never turn location language into
  an unsupported coverage guarantee.
- The brandline "YOUR CAR. OUR OBSESSION." stays in English if used.
