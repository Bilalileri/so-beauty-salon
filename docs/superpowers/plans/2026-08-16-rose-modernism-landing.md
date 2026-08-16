# Rosé Modernism Landing Implementation Plan

> **For Codex:** Execute this plan with `superpowers:executing-plans`, using test-first checks for each user-visible behavior and the Impeccable workflow for visual review, hardening, and documentation.

**Goal:** Replace the current landing page with the approved Rosé Modernism composition, remove all public price content, and deliver a mobile-first, accessible, video-conscious implementation without redesigning the service-page compositions yet.

**Architecture:** Keep the Next.js App Router structure and treatment data as the content source. Build the landing page with uniquely namespaced `rose-*` classes in a dedicated stylesheet so the approved visual system can replace the old landing page without destabilizing legal or service pages. Use small client components only where browser behavior is required: the active treatment film, responsive menu, and conditional mobile booking action.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, CSS, `next/image`, `next/font`, Playwright UI verification.

---

## Task 1: Lock the behavioral contract in Playwright

**Files:**
- Modify: `scripts/verify-ui.mjs`

1. Add assertions for the approved H1, one H1 only, no visible price section or price navigation, no horizontal overflow at 360/390/430/768/1024/1440, one selected treatment film, minimum touch targets, and the mobile booking action lifecycle.
2. Add service-page checks proving public pricing is absent from every treatment route.
3. Run the checks against the incumbent page and confirm they fail for the expected redesign reasons.

## Task 2: Prepare production brand and film assets

**Files:**
- Add: `public/brand/so-mark.png`
- Add: `public/media/services/client-laser.mp4`
- Add: `public/media/services/client-laser-poster.jpg`

1. Preserve the supplied source files and copy browser-ready derivatives into `public`.
2. Verify dimensions, transparency, video codec/container, and file size.
3. Keep client footage below the fold with `preload="metadata"`; do not add it to the critical request path.

## Task 3: Build and prove the shared header and hero

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Add: `src/app/landing.css`
- Add: `src/app/components/RoseSiteHeader.tsx`
- Add: `src/app/components/MobileBookingAction.tsx`

1. Replace the old display/body font pairing with one self-hosted neutral grotesk from `next/font`.
2. Implement the Wine Dark header, sharp text lockup, desktop nav, and accessible mobile menu.
3. Implement the contained Blush hero with readable copy-first mobile order, 4:5 media, poster-first video, actions, address, and hours.
4. Implement the mobile booking action so it is hidden in the first viewport and near the footer.
5. Capture desktop and mobile hero screenshots at `.impeccable/review/hero-repro.png` and `.impeccable/review/hero-repro-mobile.png` before continuing.

## Task 4: Replace the remaining landing composition

**Files:**
- Modify: `src/app/page.tsx`
- Add: `src/app/components/TreatmentFilmSelector.tsx`
- Modify: `src/app/components/CustomerJourneyTimeline.tsx`
- Modify: `src/app/landing.css`

1. Add the text-only personal introduction.
2. Add the one-active-video treatment stage with keyboard-operable selection, mobile horizontal selector, lazy loading, viewport pausing, and reduced-motion behavior.
3. Add the personal recommendation section with WhatsApp handoff.
4. Add the Soprano ICE Platinum technology section with careful comfort language and a restrained NiSV proof line.
5. Reduce the visit process to three clear steps and use responsive horizontal/vertical progress lines.
6. Add the Wine location panel, accessible map treatment/link, and full footer.

## Task 5: Remove all public price content

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/behandlungen/[slug]/page.tsx`
- Modify: `src/app/treatments.tsx`

1. Remove the landing price section, price navigation, price FAQ, price-related schema, and public price copy.
2. Remove all service-page price panels and package/zone price imports.
3. Remove unused public price structures once no route depends on them.
4. Keep consultation-driven calls to action in their place.

## Task 6: Responsive, accessibility, and performance hardening

**Files:**
- Modify: `src/app/landing.css`
- Modify: landing client components as needed
- Modify: `scripts/verify-ui.mjs`

1. Verify 360, 390, 430, 768, 1024, and 1440 widths with no unintended overflow.
2. Verify keyboard focus, menu and film selector behavior, one-H1 hierarchy, meaningful alternative text, 44px targets, and 200% zoom.
3. Verify only the selected treatment film plays, videos pause offscreen, and reduced motion leaves a usable poster state.
4. Verify the supplied PNG logo remains crisp without browser upscaling.

## Task 7: Impeccable visual closure

**Files:**
- Read immediately before phase: `.agents/skills/impeccable/reference/critique.md`
- Read immediately before phase: `.agents/skills/impeccable/reference/audit.md`
- Read immediately before phase: `.agents/skills/impeccable/reference/polish.md`
- Read immediately before phase: `.agents/skills/impeccable/reference/harden.md`
- Add/update: `.impeccable/review/*`

1. Capture one desktop, one mobile, and one intermediate-width screenshot set.
2. Run the Impeccable detector once and record findings.
3. Perform one critique/fix batch followed by one confirmation screenshot round.
4. Run the required fresh Impeccable finish reviewer, apply actionable findings, and close the review disposition.

## Task 8: Verification and design documentation

**Files:**
- Read immediately before phase: `.agents/skills/impeccable/reference/document.md`
- Add: `DESIGN.md` or the documenter-selected design sidecar

1. Run `npm run lint`, `npm run build`, and `npm run test:ui` against a production server.
2. Run the Impeccable documenter with the approved Rosé Modernism direction contract and production artifact paths.
3. Inspect `git diff` and confirm no unrelated user changes were discarded.
4. Hand off the local review URL and verification results; do not deploy or push until the user explicitly approves the production implementation.
