# Landing Interaction Refinements Implementation Plan

> **For Codex:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make treatment discovery, the customer journey, navigation, and the Mannheim location section feel clear and genuinely interactive on mobile and desktop.

**Architecture:** Keep the treatment film preview and service navigation as two explicit actions inside each selector row. Add a scroll-driven CSS progress variable to the journey component. Replace the decorative map mockup with a lazy Google Maps embed and route link. Extend the shared header with an accessible desktop dropdown and visible mobile service submenu.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS, Playwright UI verification.

---

### Task 1: Add failing interaction assertions

**Files:**
- Modify: `scripts/verify-ui.mjs`

- [x] Assert the film overlay has no “ohne Ton” or “Details” copy.
- [x] Assert all five selector rows contain service-page links.
- [x] Assert the desktop and mobile navigation expose all five services.
- [x] Assert a lazy Google Maps iframe is present.
- [x] Assert the journey exposes a numeric scroll progress value that changes after scrolling.

### Task 2: Refine treatment and navigation discovery

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/components/TreatmentFilmSelector.tsx`
- Modify: `src/app/components/RoseSiteHeader.tsx`
- Modify: `src/app/landing.css`

- [x] Remove the awkward secondary hero link.
- [x] Remove “ohne Ton” and the overlay “Details” link.
- [x] Put a clear service-page link in every treatment selector row while preserving preview switching.
- [x] Add a desktop treatment dropdown and mobile treatment submenu.

### Task 3: Add the map and working scroll journey

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/components/CustomerJourneyTimeline.tsx`
- Modify: `src/app/landing.css`

- [x] Replace the decorative block map with a lazy Google Maps embed and retain the route link.
- [x] Add a scroll-driven progress line and moving marker to the journey.
- [x] Respect reduced-motion preferences and keep all copy readable.

### Task 4: Production verification

**Files:**
- Verify: `scripts/verify-ui.mjs`
- Verify: `src/app/landing.css`

- [x] Run the full responsive UI suite against a fresh production build.
- [x] Run lint, `git diff --check`, and the Impeccable detector.
- [x] Inspect landing screenshots at mobile and desktop widths.
