# S&O Service Pages and Ratgeber Design

## Status

Approved for implementation on 2026-08-16. This work extends the established Rosé Modernism system from the landing page to all service pages and adds a German-language Ratgeber hub.

## Goal

Turn each treatment route into a useful decision page for local visitors, then support those commercial pages with a small set of high-intent educational articles. The visitor should understand suitability, preparation, the appointment process and the next step without prices, inflated promises or generic beauty filler.

## Scope

- Redesign all five routes under `/behandlungen/[slug]`.
- Add `/ratgeber` and three initial articles.
- Increase desktop navigation text size across the shared Rosé header.
- Remove the phrase `Gesichtsbehandlung bei S&O` wherever it appears.
- Improve video sharpness where source quality allows and stop important subjects from being cropped.
- Keep all public price content removed.

## Service-page composition

1. A shared Rosé header and copy-first hero with one service-specific film.
2. A compact answer block explaining what the treatment is and who normally considers it.
3. A treatment-specific proof section: Soprano ICE Platinum and NiSV only for laser; honest method and consultation proof for other services.
4. A connected process sequence with four meaningful steps.
5. Preparation and aftercare guidance in a flat split layout.
6. A suitability section that distinguishes ordinary goals from reasons to postpone or ask for professional clarification.
7. Six useful FAQs derived from current search questions.
8. Two related Ratgeber articles or service links.
9. A local Mannheim Q1 close with WhatsApp booking.

The pages must not use pill badges, numbered decorative card grids, repeated eyebrows, gradients, floating seals or fabricated proof. The visual system remains flat, tonal and rectangular.

## Ratgeber structure

The hub lives at `/ratgeber`, uses Read mode, and presents editorial summaries rather than a generic card wall. Initial articles:

1. `/ratgeber/laser-haarentfernung-vorbereitung` targeting preparation and shaving intent.
2. `/ratgeber/laser-haarentfernung-wie-viele-sitzungen` targeting treatment-cycle questions.
3. `/ratgeber/microneedling-nachsorge` targeting aftercare questions.

Every article includes a clear title, short introduction, table of contents, scannable sections, a source note, related internal links, `Article` and `BreadcrumbList` structured data, and a restrained WhatsApp/service CTA. Medical or safety-adjacent content uses careful language and tells readers to seek professional or medical clarification where appropriate.

## Video contract

- Use the client laser film for the laser service page.
- Use `object-fit: contain` or treatment-specific `object-position` when cover cropping removes the applicator or treatment area.
- Use source-native resolution; never upscale a low-resolution source beyond a size where it appears visibly soft.
- Use a poster immediately, `preload="metadata"`, muted inline playback and a visible playback control.
- Respect reduced motion and pause offscreen video.
- No more than one autoplaying film per page.

## SEO contract

- Commercial local phrases remain on service pages: `[treatment] Mannheim`.
- Ratgeber articles target informational questions and link back to exactly one primary service page.
- Service pages link to relevant articles with descriptive anchors.
- Add Ratgeber routes to the sitemap.
- Keep NAP data consistent with Q1, 7, 68161 Mannheim and +49 15565 855752.
- Do not add fake search volumes, fake author credentials, review markup, FAQ rich-result schema or outcome guarantees.

## Mobile contract

- Verify 360px, 390px and 430px explicitly.
- No horizontal page overflow.
- Hero copy precedes film; reading content stays at least 16px.
- Process steps become a vertical connected sequence.
- Preparation and suitability splits stack in the correct reading order.
- Ratgeber article body stays within a comfortable reading measure.
- The mobile WhatsApp action must not cover article navigation or the footer.

## Acceptance criteria

- All five service pages visibly belong to the Rosé Modernism landing system.
- The service hero title never overflows at desktop or mobile widths.
- `Gesichtsbehandlung bei S&O` and all public euro prices are absent.
- Shared desktop navigation copy is visibly larger without wrapping.
- Videos preserve their useful subject and provide a poster state.
- `/ratgeber` and all three articles render, link correctly and appear in the sitemap.
- Every service page has at least six FAQs and preparation/aftercare content.
- Lint, production build and responsive UI verification pass.

