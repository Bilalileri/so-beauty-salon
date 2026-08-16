# Treatment Films and Two High-Intent Guides

## Approved direction

Restore the cinematic crop used before the recent contain-framing change. Use the supplied client video for laser, framed around the moving Alma applicator and treated leg. Replace the remaining stock films only with cleaner licensed footage that accurately represents the service; never present eyelash extensions as Wimpernlifting or a generic facial as Microneedling.

## Media behavior

- Landing hero, landing treatment selector, and service films use `object-fit: cover`.
- Each treatment owns desktop and mobile `object-position` values so the subject remains visible.
- Laser uses `/Users/bilal/Downloads/WhatsApp Video 2026-08-06 at 19.37.58.mp4`, copied into the site media directory with a generated poster.
- Prefer native 1080p or 4K stock. Store source URL, creator, and license context in the project media provenance record.
- Keep a single playing treatment film, metadata preload, poster, pause control, reduced-motion handling, and intersection-based playback.
- If exact-procedure licensed footage is not available, retain the existing film rather than mislabel footage.

## New guides

1. **Laser-Haarentfernung Kosten in Mannheim: Wovon hängt der Preis ab?**
   - Commercial-intent query cluster: laser haarentfernung kosten mannheim, dauerhafte haarentfernung mannheim kosten, laser kosten nach körperzone.
   - Explain treatment-zone size, time, hair/skin assessment, number of appointments, packages, consultation, and what a useful quote should contain.
   - Do not show a public price table or competitor prices.

2. **AquaFacial oder Microneedling: Welche Behandlung passt zu meiner Haut?**
   - Commercial-comparison query cluster: aquafacial oder microneedling, microneedling vs aquafacial, gesichtsbehandlung mannheim.
   - Compare purpose, skin state, recovery expectations, preparation, reasons to postpone, and consultation questions.
   - Avoid medical promises and diagnose no skin condition.

Both guides use the existing Article and Breadcrumb structured data, appear on `/ratgeber`, enter the sitemap, link to service pages and WhatsApp, cite named authoritative sources, and carry the same medical-information disclaimer as existing guides.

## Acceptance checks

- Exactly five guide previews appear on `/ratgeber`.
- Both new guide routes return 200, have one H1, no mobile overflow, Article JSON-LD, sources, internal service links, and no public euro prices.
- Laser footage is the supplied 576×1024 client video and is cropped with the applicator visible at 390px and 1280px widths.
- Every treatment film uses cover framing without stretching.
- Existing lint, build, UI, reduced-motion, navigation, and mobile-booking checks pass.

