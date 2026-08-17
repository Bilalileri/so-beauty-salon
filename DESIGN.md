---
name: S&O Beauty Salon
description: Personal beauty guidance in Mannheim through calm Rosé Modernism.
colors:
  rose-bone: "#f5f0ea"
  rose-paper: "#fffdfa"
  rose-blush: "#e3c4c0"
  rose-accent: "#c98f91"
  rose-wine: "#713746"
  rose-wine-dark: "#4b222e"
  rose-ink: "#21191c"
  rose-muted: "#766b6d"
  rose-line: "rgba(33, 25, 28, 0.18)"
  rose-light-line: "rgba(255, 253, 250, 0.25)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3.6rem, 5.25vw, 5.85rem)"
    fontWeight: 470
    lineHeight: 0.97
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3rem, 5.2vw, 5.4rem)"
    fontWeight: 470
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    lineHeight: 1.58
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 650
    lineHeight: 1.4
    letterSpacing: "0.15em"
rounded:
  control: "2px"
  circle: "50%"
components:
  button-ink:
    backgroundColor: "{colors.rose-ink}"
    textColor: "{colors.rose-paper}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-paper:
    backgroundColor: "{colors.rose-paper}"
    textColor: "{colors.rose-wine-dark}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.rose-paper}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-hover:
    backgroundColor: "{colors.rose-paper}"
    textColor: "{colors.rose-ink}"
    rounded: "{rounded.control}"
---

# Design System: S&O Beauty Salon

## Overview

**Creative North Star: "Rosé Modernism"**

Rosé Modernism presents personal beauty guidance as calm, qualified and contemporary. Bone, blush and wine color fields carry the identity while a modernist grid, generous whitespace and thin rules give the page structure. The result is premium through care and proportion, not luxury-template theatricality.

The system is restrained and copy-led. One neutral grotesk family handles every role; treatment media appears in cinematic 4:5 cover crops with deliberate focal positioning; controls stay rectangular and direct. Client-supplied footage is distinguished from honestly labeled licensed supporting footage. The system rejects oversized serif display type, decorative gradients, rounded card grids, floating badges, fabricated proof and imagery, and a green WhatsApp treatment that would break the world.

**Key Characteristics:**

- Warm bone, blush, rose and wine fields with ink-led contrast.
- Flat surfaces separated by tone, whitespace and 1px rules.
- One grotesk family with large, tightly tracked display scales.
- Near-square controls and 4:5 cinematic media crops tuned per breakpoint.
- Personal conversion through clear WhatsApp actions without pressure.

## Colors

The palette moves between quiet warm neutrals and a compact rosé-to-wine brand range; dark tones carry authority while blush and paper keep the experience personal and calm.

### Primary

- **Wine** (`#713746`): The principal branded dark, used for the location panel, timeline emphasis and wine-colored text accents.
- **Wine Dark** (`#4b222e`): The deepest brand field, used for the header, treatment-film section and persistent mobile booking action.

### Secondary

- **Blush** (`#e3c4c0`): The main warm field for the hero, consultation guidance and schematic map.
- **Rose** (`#c98f91`): A supporting accent field used behind the technology machine and for small active-state details.

### Neutral

- **Bone** (`#f5f0ea`): The soft page background and journey surface.
- **Paper** (`#fffdfa`): The lightest content surface and light-on-dark text color.
- **Ink** (`#21191c`): Primary text, dark buttons and the footer field.
- **Muted Body** (`#766b6d`): Supporting paragraphs and lower-emphasis information on light surfaces.
- **Ink Rule** (`rgba(33, 25, 28, 0.18)`): Dividers and borders on light fields.
- **Paper Rule** (`rgba(255, 253, 250, 0.25)`): Dividers and borders on wine and ink fields.

### Named Rules

**The Tonal Field Rule.** Build contrast with solid bone, blush, rose and wine fields plus fine rules; gradients and shadowed card stacks are outside this system.

## Typography

**Display Font:** Schibsted Grotesk (with Helvetica Neue, Helvetica, Arial and sans-serif fallbacks)
**Body Font:** Schibsted Grotesk (with Helvetica Neue, Helvetica, Arial and sans-serif fallbacks)

**Character:** One neutral grotesk family keeps the salon modern and credible. Personality comes from scale, tight display tracking, weight and whitespace instead of a decorative display face.

### Hierarchy

- **Display** (470, `clamp(3.6rem, 5.25vw, 5.85rem)`, 0.97): The landing H1; it is copy-led, tightly tracked at `-0.04em` and allowed to wrap naturally.
- **Headline** (470, typically `clamp(3rem, 5.2vw, 5.4rem)`, 0.98): Major section statements. Individual sections tune the fluid maximum between 5.2rem and 5.8rem while retaining the same weight and `-0.04em` tracking floor.
- **Title** (500, `1.65rem`, 1.15): Journey-step titles. Treatment-selector titles use a related fluid scale with the same `-0.025em` tracking.
- **Body** (regular, `17px`, 1.58): Default reading text; mobile reduces to `16px`. Lead copy opens to approximately 1.62–1.65 line-height and stays near a 560–590px measure.
- **Label** (650, `0.72rem`, `0.15em`, uppercase): Short factual metadata only. Smaller 0.62–0.68rem variants identify facts, states and numbered steps.

### Named Rules

**The One-Family Rule.** Use Schibsted Grotesk throughout; hierarchy comes from proportion, weight, tracking and space, never from adding a fashionable serif or decorative display font.

**The Natural Compound Rule.** Keep mobile service and guide display text at `-0.04em` or looser, with hyphenation disabled and normal wrapping; never force a German compound into an orphaned fragment.

## Layout

The main shell is centered at a maximum width of 1340px with 48px desktop gutters. At 980px the shell narrows to a 900px maximum with 28px gutters; at 820px it becomes a 680px maximum with 20px gutters. A final 380px breakpoint protects the smallest supported layout.

Desktop sections use editorial two-column grids with intentionally unequal fractions: a wider copy column beside the landing's narrower 4:5 client film, a 4:5 film beside a treatment list, and paired copy/evidence compositions. Large sections carry roughly 118–130px vertical padding; mobile sections compress to roughly 86–96px. At 820px, primary landing grids stack, actions become full width, the technology copy precedes its machine image, the journey rotates from a horizontal to a vertical timeline, and contact precedes the map. Film frames retain 4:5 on mobile; only their focal position changes. The treatment selector is the only intentional horizontal overflow region and reveals the next item edge.

Service pages preserve the same copy-first hierarchy with one contained 4:5 film. Their supporting sequence is a flat Wine Dark proof field, connected process steps, paired preparation and aftercare fields, suitability guidance, a rule-line FAQ and related reading. These layouts move from four to two process columns at 960px and to a single natural-reading column at 760px; compact action and heading adjustments land at 520px.

The Ratgeber hub uses full-row editorial article links separated by rules. Article pages pair a sticky contents rail with a readable body column capped at 780px, then include a clearly differentiated disclaimer, sources and related reading. At 760px the rail returns to normal document flow and the layout becomes one column.

## Elevation & Depth

The system is flat and tonal. It does not use gradients or shadows as an elevation vocabulary; depth comes from adjacent color fields, 1px rules, image overlays used for caption legibility and generous whitespace. The journey's current-step halo is a flat blush ring around a wine dot, not a reusable surface shadow.

### Named Rules

**The Flat-by-Tone Rule.** Separate hierarchy with color fields, rules and spacing; do not lift ordinary surfaces with drop shadows.

## Shapes

Controls use a near-square 2px radius, while major content sections, film frames and panels remain square. Borders are typically 1px rules in Ink Rule or Paper Rule. Landing-hero, treatment-selector and service films all use a 4:5 portrait frame. Circles are reserved for semantic geometry—the journey dots and the Q1 map marker—not used as decorative badges or generic controls.

## Components

### Buttons

- **Shape:** Restrained rectangular controls with a 2px radius, minimum 52px desktop height and 22px inline padding; on mobile primary actions become full width.
- **Primary:** Ink background with Paper text and a 1px Ink border.
- **Paper:** Paper background and border with Wine Dark text, used inside the mobile menu.
- **Outline:** Transparent on wine fields with a translucent Paper border and Paper text.
- **Hover / Focus:** All button variants move to light tonal contrast in 160ms ease transitions. Focus uses a visible 3px outline with 4px offset; the outline is Wine on light page fields and Paper on dark chrome.
- **Icon:** A hand-authored 16px up-right arrow with square line caps; never substitute a text glyph.

### Text Links

Text links are compact, semibold and underlined by a 1px current-color rule. They keep a minimum 44px interactive height and may pair with the same authored up-right arrow.

### Navigation

The desktop header is an 88px Wine Dark bar with a three-column logo/navigation/action grid. Navigation is 0.9rem with 28px gaps, includes Behandlungen, Technologie, Ablauf, Ratgeber and Kontakt, and uses opacity rather than decorative underlines for hover. At 820px the header becomes 74px, desktop navigation is replaced by a bordered rectangular menu control, and the opened menu drops as a flat Wine Dark panel with rule-separated 54px links.

### Treatment Film Selector

The selector pairs one active 4:5 film with rule-separated treatment tabs. Film content uses `object-fit: cover`, with each treatment supplying desktop and mobile focal positions through `--film-position` and `--film-position-mobile`. Desktop tabs are a vertical list; mobile tabs become 84%-width horizontal snap items with 1px Paper Rule borders. The active state changes text to Blush and exposes a textual state label, so color is not the only signal. Only the selected film plays, and arrow, Home and End keys move selection.

### Media Frames

Landing hero, treatment selector and service-page films use square-cornered 4:5 stages with `object-fit: cover`. Cropping is cinematic rather than automatic: `--film-position` controls the desktop focal point, while `--film-position-mobile` takes over below 820px on the landing and below 760px on service pages. The mobile value falls back to the desktop value, then to `50% 50%`; the frame never stretches and does not switch to `contain`.

The landing hero uses the client-supplied clip and poster at `/media/services/client-laser.mp4` and `/media/services/client-laser-poster.jpg`. The Laser-Haarentfernung treatment surface uses the alternate client clip at `/media/services/client-laser-leg.mp4` with `/media/services/client-laser-leg-poster.jpg`. Licensed supporting footage is described as the visible treatment step rather than presented as client-supplied studio evidence: AquaFacial uses “Einblick in einen Reinigungsschritt,” and professional skin care uses “Einblick in apparative Hautpflege.” Retained Microneedling and Wimpernlifting clips are supporting footage and must not be replaced by visually attractive but procedurally inaccurate media.

| Treatment film | Desktop focal point | Mobile focal point |
| --- | --- | --- |
| Laser-Haarentfernung / landing hero | `48% 52%` | `52% 50%` |
| AquaFacial | `50% 48%` | `50% 46%` |
| Microneedling | `54% 50%` | `58% 50%` |
| Wimpernlifting | `52% 46%` | `56% 48%` |
| Professionelle Hautpflege | `57% 48%` | `78% 48%` |

Captions sit on restrained translucent Ink panels where present, and an explicit bordered playback control remains available. Playback pauses outside the viewport, respects reduced-motion preference and loads from a poster/metadata state.

**The Focal Crop Rule.** Keep every treatment film in its 4:5 cover frame and move the crop with per-breakpoint focal variables; never stretch the footage or switch mobile to `contain`.

**The Media Truth Rule.** Name client-supplied footage directly; label licensed stock as a supporting treatment step and never imply false studio provenance or an inaccurately represented procedure.

### Service Page Sequence

Service pages open with copy first and one contained film, then move through an answer, a flat Wine Dark proof field, four visibly connected process steps, paired Blush/Wine preparation and aftercare fields, bordered suitability guidance, a rule-line FAQ and related reading. The sequence stays editorial and evidence-led: no card grid, carousel or duplicated media interrupts the reading path.

### Ratgeber Hub and Articles

The Ratgeber hub presents each article as a full-row editorial link with index, category, reading time, headline, description and a 44px arrow target. Articles use a two-column reading structure: a sticky numbered contents rail and a body column capped at 780px. Body sections are divided by rules and conclude with an explicit Blush disclaimer, linked sources and related reading; on mobile, the contents rail becomes static and precedes the article body.

### Journey Timeline

Three steps sit on a 1px Wine rule with 20px outlined dots; the current step is filled Wine with a flat Blush halo. Below 820px the rule becomes vertical and the content stacks beside it.

### Mobile Booking Action

Below 820px, a 310px-wide fixed Wine Dark action appears only after the hero leaves view and hides again when the footer enters view. It sits 14px from the right and respects the bottom safe area, with a 56px minimum height and a 180ms opacity/translation transition.

## Do's and Don'ts

### Do:

- Do use solid Bone, Paper, Blush, Rose and Wine fields to establish hierarchy.
- Do keep display tracking at or above the implemented `-0.04em` floor and preserve natural German wrapping.
- Do use 4:5 `object-fit: cover` film frames with treatment-specific desktop and mobile focal positions.
- Do keep the client-supplied laser clip as the direct salon evidence and label licensed stock by the supporting step it visibly shows.
- Do preserve copy-first service pages and full-row editorial Ratgeber links as the extension pattern for deeper content.
- Do use visible 3px focus outlines, 44px minimum interaction targets and authored SVG arrows.
- Do keep WhatsApp actions personal, rectangular and context-aware on mobile.

### Don't:

- Don't introduce gradients, rounded card grids, pills, capsules or shadow-led elevation.
- Don't introduce oversized serif display type or turn short factual labels into repeated decorative kickers.
- Don't use floating circular badges, a full-width green WhatsApp bar or multiple autoplaying videos.
- Don't stretch film, switch mobile crops to `contain`, or reuse one focal point when the subject needs a breakpoint-specific adjustment.
- Don't present licensed supporting footage as client-supplied studio material or as a different procedure.
- Don't fabricate owner imagery, testimonials, proof, treatment outcomes or beauty imagery.
- Don't use text glyphs where the implemented system uses authored SVG icons.
