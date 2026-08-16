# S&O Beauty Salon: Rosé Modernism Landing Design

## Status

Approved visual direction. The responsive mockup is available at `docs/brand-kit-v2/landing.html`; the associated system board is at `docs/brand-kit-v2/brand-kit.html`. Production pages remain unchanged until the implementation plan is approved.

## Scope

This specification covers the landing page and the shared visual and responsive rules that later service-page redesigns must inherit. It does not approve a new composition for each service page; those pages require their own review after the landing foundation is implemented.

## Goal

Present S&O as a personal, qualified beauty salon in Mannheim Q1 and make starting a WhatsApp conversation easy. The page must explain the salon quickly, remain calm and readable on a phone, and use video without becoming a reel feed.

## Product truth

- Location: Q1, 7, 68161 Mannheim.
- Opening hours: Monday to Friday, 10:00–18:00.
- Booking: personal conversation through WhatsApp.
- Treatments: laser hair removal, AquaFacial, microneedling, eyelash lifting and professional skincare.
- Technology: Soprano ICE Platinum.
- Qualification: NiSV expertise; final public wording must match the client's actual qualification evidence.

## Explicit exclusions

- No public treatment prices.
- No owner portrait, biography or placeholder until the client supplies approved material.
- No testimonials without a verifiable source and publication permission.
- No invented transformation claims, guaranteed results or unsupported “painless” promises.
- No floating circular NiSV badge, decorative capsules or green full-width WhatsApp bar.
- No simultaneous autoplay of several treatment videos.

## Direction: Rosé Modernism

The identity combines warm beauty colors with a restrained modernist grid. It avoids the usual luxury-template formula of oversized serif headlines, repeated rounded cards and decorative gradients.

### Color tokens

- Bone `#F5F0EA`: neutral page background.
- Paper `#FFFDFA`: light content surface.
- Blush `#E3C4C0`: primary warm brand field.
- Rose `#C98F91`: supporting accent.
- Wine `#713746`: location and emphasis sections.
- Wine Dark `#4B222E`: header, film section and mobile booking action.
- Ink `#21191C`: primary text and dark buttons.

No gradients are part of the brand system. Video overlays may use a restrained dark transparency only when captions require contrast.

### Typography

Use a neutral grotesk system stack: `Helvetica Neue`, `Helvetica`, `Arial`, sans-serif. Character comes from proportion, whitespace and weight rather than a fashionable display font.

- Body copy: at least 16px on mobile with a line-height near 1.6.
- Navigation and labels: 11–13px, uppercase only for short factual labels.
- Landing H1: responsive, approximately 48–60px on mobile and 58–94px on larger screens; line-height must stay near 0.96–1.0.
- Paragraph line length: normally no more than 60–65 characters.
- German words must never overflow or rely on awkward manual breaks.

### Logo

Use the supplied transparent 2000×2000 PNG. The source contains generous transparent space, so the interface may display it through a clipped logo window. Keep the source file unchanged. The production implementation must provide explicit dimensions, preserve aspect ratio and avoid browser upscaling that causes mobile blur.

## Landing-page composition

### 1. Header

- Wine Dark background with the light S&O symbol and a simple text lockup.
- Desktop navigation: treatments, technology, process and contact.
- One outlined “Termin anfragen” action.
- Mobile: logo and compact menu control; no full desktop navigation squeezed into the header.

### 2. Hero

The approved hero is contained rather than a perfect 50/50 full-screen split.

- Background: Blush.
- Desktop: copy occupies the wider column; a contained 4:5 treatment film sits in the narrower column with generous space around it.
- Mobile: copy comes first, followed by the 4:5 film.
- Eyebrow: `S&O Beauty Salon · Mannheim Q1`.
- H1: `Laser & Hautpflege in Mannheim.`
- Supporting copy: `Wir nehmen uns Zeit für eine persönliche Beratung und wählen gemeinsam die Behandlung, die zu Ihnen passt.`
- Primary action: `Termin über WhatsApp`.
- Secondary action: `Behandlungen ansehen`.
- Address and opening hours appear as two compact factual blocks below the actions.
- The persistent mobile booking action is hidden in the first viewport and appears only after the visitor passes the hero.

### 3. Personal introduction

Use text only. The message is that a visit begins with listening and personal assessment. Do not reserve empty space for a future owner image.

### 4. Treatments in motion

The film module is the treatment overview and the home for current and future client footage.

- Desktop: one large active film plus a vertical list of treatments.
- Mobile: one 4:5 active film plus a horizontally scrollable treatment selector.
- Only the selected video plays.
- Keep one quiet caption such as `Aus dem Studio · ohne Ton`; do not repeatedly advertise that the footage is real.
- Current treatment names: Laser-Haarentfernung, AquaFacial, Microneedling, Wimpernlifting and Hautpflege.
- New client films can replace individual sources without changing the layout.

### 5. Personal recommendation

Replace price-led browsing with a short consultation prompt. Ask the visitor to share their goal through WhatsApp, then explain that suitability and treatment choice are discussed personally.

### 6. Technology and qualification

- Show the Soprano ICE Platinum machine at a useful scale.
- Explain controlled warmth and continuous cooling in plain German.
- Present NiSV as a simple proof line beside the technology copy.
- Use careful wording: comfort varies and the setting is selected for the person's skin, hair and treatment area.

### 7. Visit process

Use three steps only:

1. Send a short WhatsApp request.
2. Discuss goals, skin and the appropriate treatment.
3. Attend the treatment and receive aftercare guidance.

Desktop uses a horizontal progress line. Mobile uses a vertical line so the sequence remains easy to scan.

### 8. Location and final action

- Wine-colored contact panel with address, hours and WhatsApp action.
- Adjacent Mannheim-Quadrate map treatment or an accessible Google Maps embed in production.
- Contact information must match the Google Business Profile exactly.

### 9. Footer

Include salon name, treatment links, full contact information, Impressum and Datenschutz. The mobile booking action must not cover the footer.

## Video behavior and performance

- Hero video: muted, looping, `playsInline`, with a lightweight poster visible immediately.
- Treatment videos: load metadata or poster first and load/play only the selected film.
- Pause videos when they leave the viewport.
- Respect `prefers-reduced-motion`; show the poster instead of forced motion.
- Do not load all full-resolution films on the initial request.
- Compress client video into browser-friendly MP4/WebM and preserve the original file separately.
- Every meaningful video needs a useful text label; decorative motion should be ignored by assistive technology.

## Mobile usability contract

Mobile is a primary layout, not a reduced desktop page.

- Supported content widths: 360px and above; verify explicitly at 390px and 430px.
- No unintentional horizontal page overflow.
- Minimum interactive target: 44×44px.
- Page gutters: approximately 20px on common phone widths.
- Headings must fit without clipped letters or single-character orphan lines.
- Body copy remains at least 16px and uses comfortable line spacing.
- Main actions may become full width; secondary links stay visually separate.
- The treatment selector is the only intentional horizontal scroll region and must reveal the edge of the next item.
- The 4:5 videos must preserve their frame without stretching.
- The process becomes a vertical timeline.
- The technology section stacks copy before the machine image.
- The location section stacks contact information before the map.
- The sticky WhatsApp action appears only after the hero, respects the bottom safe area, and hides before it would cover the footer.
- Menu, buttons and media must remain usable at 200% browser zoom.

## Accessibility

- Maintain WCAG AA contrast for text and controls.
- Provide visible keyboard focus states.
- Use semantic headings in order and one H1 only.
- Give informative images useful alternative text; decorative marks use empty alt text.
- The treatment selector must work with keyboard controls and expose the active selection.
- Do not rely on color alone to communicate state.

## SEO foundation

- The landing H1 includes the primary local topic: laser and skincare in Mannheim.
- Title and description must use natural German and the verified salon name and location.
- Include LocalBusiness/BeautySalon structured data with matching name, address, phone, URL and opening hours.
- Link every treatment name to its corresponding service page.
- Use one crawlable contact/location section and an accessible map link.
- Keep visual copy concise, then use service pages and the FAQ for deeper search intent.

## Acceptance criteria

- The production landing page matches the approved Rosé Modernism mockup in structure, color and typographic character.
- No owner placeholder and no public price list appears.
- Desktop and mobile present the same content hierarchy.
- The page has no unintended overflow at 360px, 390px, 430px, 768px, 1024px and 1440px.
- Hero copy remains readable and the H1 does not overflow at any tested width.
- The mobile booking action is absent in the first viewport, appears after the hero and never covers footer content.
- Only one treatment video plays at a time.
- The first viewport has a poster or usable media state before video playback begins.
- All buttons and treatment selectors meet the minimum touch-target size.
- Keyboard navigation, reduced motion and 200% zoom remain usable.
- Lighthouse checks show no critical accessibility or layout-shift failures before deployment.

## Mockup references

- Brand kit: `docs/brand-kit-v2/brand-kit.html`
- Landing mockup: `docs/brand-kit-v2/landing.html`
- Desktop capture: `docs/brand-kit-v2/captures/landing-desktop.png`
- Mobile capture: `docs/brand-kit-v2/captures/landing-mobile.png`
