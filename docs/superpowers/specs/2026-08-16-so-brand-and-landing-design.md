# S&O Brand Kit and Landing Page Concept

## Status

Design direction approved in conversation. Mockup-first; production website code remains unchanged until the visual concept is reviewed.

## Product truth carried forward

S&O is a local beauty salon in Mannheim Q1 offering laser hair removal and skin-focused treatments. The website should build enough confidence for a visitor to start a personal WhatsApp conversation. Public treatment prices are removed. Trust must come from real treatment footage, Soprano ICE Platinum, NiSV qualification, location, process clarity, and—when supplied—the owner and studio.

## Direction: Personal confidence with editorial restraint

“Editorial restraint” means the page feels premium through proportion, typography, image choice, and whitespace. It does not imitate luxury with gradients, floating capsules, ornamental badges, repeated cards, or large amounts of decorative copy. The visitor should remember a calm local specialist and real treatment evidence, not a UI style.

### Design contract

- **THESIS:** S&O makes considered beauty treatment feel personal and understandable. Refuse the generic spa landing page made of repeated rounded feature cards.
- **OWN-WORLD:** Warm ivory paper, deep espresso type, one muted terracotta accent, quiet hairline rules, large real photography, editorial asymmetry, and compact action controls.
- **STORY:** Understand the salon, browse treatments, see real proof and technology, learn the simple visit process, then ask for a personal recommendation on WhatsApp.
- **FIRST VIEWPORT:** A slim cream header; an asymmetrical 55/45 hero with a large local promise and restrained action on the left, cinematic treatment imagery on the right; address and hours sit as useful facts, not badges.
- **FORM:** Owner-led treatment journal. It uses an editorial index, contact-sheet imagery, proof captions, and measured sequences rather than a catalogue grid.
- **FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Brand system

### Brand idea

**Ruhe, die Vertrauen schafft. Präzision, die man versteht.**

S&O should sound warm, direct, and qualified. Short sentences. Specific facts. No exaggerated transformation language.

### Color

- Porcelain `#F7F3ED`: primary page surface.
- Paper `#ECE3D9`: quiet secondary surface.
- Espresso `#241F1C`: primary text and strongest actions.
- S&O Clay `#9B625B`: restrained brand accent and focus state.
- Dusty Rose `#D8BBB4`: supporting tint drawn from the existing identity.
- Sage Grey `#9A9B90`: rare technology/supporting neutral.

White and black remain functional colors. No gradients. Accent color should stay below roughly fifteen percent of any viewport.

### Typography

- **Newsreader:** display voice for important headings and editorial quotations. Use optical size and deliberate line breaks; never let long German words overflow.
- **Karla:** body, navigation, labels, and controls. Its warm humanist shapes feel more personal and less generic than the current Instrument Sans while staying highly readable.
- Display headings should normally stay below `clamp(3.2rem, 7vw, 6rem)` and use a maximum width based on the actual German copy.

### Logo

Keep the interlocking S&O symbol and wordmark relationship. The current repository SVG embeds a raster image, so a true vector redraw is required before the identity is considered production-ready. Until then, use the current file at conservative sizes and never enlarge it as a hero graphic.

### Components

- Buttons: compact rectangles with a 4–8px radius, strong text, and no capsule shape.
- Links: plain editorial text links with a small authored arrow.
- Rules: 1px hairlines for rhythm and grouping.
- Treatments: an editorial image index, not five identical cards.
- NiSV: written proof lockup beside the technology copy, not a floating circular badge.
- WhatsApp: one primary action per section; no bright green full-width floating bar.

### Photography and video

- Lead with quiet, close treatment detail and hands at work.
- Use the client-supplied laser-leg footage as “real treatment” proof in the page body.
- Avoid AI-generated people, generic flower/spa still lifes, and over-retouched skin.
- Future owner portrait: natural window light, half-body or environmental portrait in the studio, calm expression, direct but not corporate.
- Future studio set: entrance/location, treatment room, consultation moment, machine in context, hygiene/detail shot, owner portrait.

### Motion

One authored moment: the treatment index changes its large media panel as the visitor moves through services. On mobile this becomes a native horizontal snap gallery. The visit process may use a single progress line and dot linked to scroll, with reduced-motion fallback. Other sections remain still.

## Landing-page structure

1. Header and asymmetrical hero with local category, promise, WhatsApp action, address, and hours.
2. Owner-led introduction with a reserved portrait position until client imagery arrives.
3. Editorial treatment index with real media and direct links to service pages.
4. Real laser-treatment proof using the client video and a concise explanation of what the visitor is seeing.
5. Personal recommendation section replacing all public pricing: visitor goals, suitability, and WhatsApp consultation.
6. Soprano ICE Platinum and NiSV proof, with honest comfort wording and the machine shown at useful scale.
7. Three-step visit journey: ask, personal check, treatment and aftercare.
8. Short FAQ focused on booking, suitability, preparation, and expectations.
9. Owner/studio trust section, Google map/location details, opening hours, and final WhatsApp action.
10. Legal footer and contact details.

## Responsive behavior

- Mobile is the primary decision surface.
- Hero stacks copy before media; the first action remains visible without covering content.
- Treatment index becomes a horizontal snap gallery with one almost-full card and a visible edge of the next item.
- Desktop two-column sections become one-column narratives, with typography capped to prevent overflow.
- Video defaults to a fast poster frame and loads motion only when near view; meaningful videos have text alternatives.
- A compact dark booking bar may appear after the hero on mobile, but it must never cover reading content or the footer.

## Copy principles

- Primary line: “Schönheit, die sich nach Ihnen richtet.”
- Supporting line: “Laser-Haarentfernung und Gesichtsbehandlungen in Q1, Mannheim—persönlich geplant und ruhig durchgeführt.”
- Primary action: “Termin anfragen”.
- Price replacement: “Welche Behandlung passt zu mir?” with personal consultation, not hidden price teasing.
- Avoid “Premium”, “perfekt”, “makellos”, guaranteed outcomes, and repetitive “Mehr erfahren” controls.

## Proof and content still needed

- True vector logo master.
- Owner name, role, short biography, portrait, and explicit permission to publish.
- NiSV certificate or exact qualification wording and named holder.
- Six-shot studio photography set.
- Verified Google review excerpts with consent/source, or no testimonials.
- Confirmation of the main audience and whether male laser clients should receive dedicated copy.

## Acceptance criteria for mockups

- Brand kit shows logo treatment, palette, type, controls, image direction, and voice.
- Desktop and mobile mockups represent the same system and landing-page story.
- No public prices, fake proof, pills, floating badges, repeated generic card grids, or green full-width CTA.
- Real client laser footage is visibly planned as proof.
- The machine, owner placeholder, location, and WhatsApp journey each have a clear place.
- German text remains legible without overflow at 1440px and 390px widths.
