# Balanced Blog CTA Implementation Plan

> **For Codex:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Give every guide one relevant next-step link and one final WhatsApp booking action with a recognizable icon, without increasing CTA pressure elsewhere.

**Architecture:** Reuse each article's existing `primaryService` metadata in the shared guide template. Insert the contextual treatment link after the second editorial section and enhance the existing closing booking action with a small decorative WhatsApp SVG. Extend the responsive production UI test so all five guide routes enforce the approved CTA rhythm.

**Tech Stack:** Next.js App Router, TypeScript, CSS, Playwright UI verification.

---

### Task 1: Lock the CTA contract with a failing UI test

**Files:**
- Modify: `scripts/verify-ui.mjs`

- [x] Add guide-page facts for contextual service CTAs, final WhatsApp CTAs, and WhatsApp SVG icons.
- [x] Assert exactly one of each on every article route while leaving the guide index exempt.
- [x] Run `UI_BASE_URL=http://localhost:3011 npm run test:ui` and confirm the new assertions fail before implementation.

### Task 2: Implement the restrained guide CTAs

**Files:**
- Create: `src/app/components/WhatsAppIcon.tsx`
- Modify: `src/app/ratgeber/[slug]/page.tsx`
- Modify: `src/app/ratgeber/ratgeber.css`

- [x] Add an accessible decorative WhatsApp SVG component using `currentColor`.
- [x] Render one editorial treatment link after the second article section using `article.primaryService`.
- [x] Add the WhatsApp icon and test hooks to the existing final booking CTA.
- [x] Style the contextual link as a quiet rule-line callout and preserve 44px touch targets on mobile.
- [x] Run the guide UI test and confirm the new CTA assertions pass.

### Task 3: Verify the full production experience

**Files:**
- Verify: `src/app/ratgeber/[slug]/page.tsx`
- Verify: `src/app/ratgeber/ratgeber.css`
- Verify: `scripts/verify-ui.mjs`

- [x] Run `npm run build`.
- [x] Start the fresh production build on an unused local port.
- [x] Run the full responsive UI suite against that production build.
- [x] Run `npm run lint`, `git diff --check`, and the Impeccable detector.
- [x] Inspect mobile and desktop screenshots of one article's contextual and final CTAs.
