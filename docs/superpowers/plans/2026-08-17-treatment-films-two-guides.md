# Treatment Films and Two High-Intent Guides Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore cinematic treatment-film crops, install the supplied laser film, improve accurately matched licensed stock, and add two commercial-intent German guides.

**Architecture:** Treatment media metadata stays centralized in `treatments.tsx`, while reusable film components consume per-treatment crop positions. Guide copy remains data-driven in `ratgeber/articles.ts`; existing hub and dynamic article routes render the new entries automatically.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS, native HTML video, Playwright UI verification.

## Global Constraints

- No new package dependency.
- Use `object-fit: cover` and treatment-specific crop positions; never stretch video.
- Use only licensed footage that accurately represents the named procedure.
- Show no public price table or numeric euro price.
- Use careful German language without guaranteed outcomes or medical diagnosis.

---

### Task 1: Verification contract

**Files:**
- Modify: `scripts/verify-ui.mjs`

**Interfaces:**
- Consumes: current landing, service, and guide routes.
- Produces: assertions for five guide previews, two new routes, cover framing, and no public prices.

- [ ] Add failing checks for the new guide URLs and preview count.
- [ ] Add a computed-style check that hero, selector, and service videos use `object-fit: cover`.
- [ ] Run `npm run test:ui` and confirm the new checks fail before implementation.

### Task 2: Media provenance and crop configuration

**Files:**
- Create: `public/media/services/client-laser-aug-2026.mp4`
- Create: `public/media/services/client-laser-aug-2026-poster.jpg`
- Modify: `src/app/treatments.tsx`
- Modify: `src/app/components/HeroFilm.tsx`
- Modify: `src/app/components/ServiceFilm.tsx`
- Modify: `src/app/components/TreatmentFilmSelector.tsx`
- Modify: `src/app/landing.css`
- Modify: `src/app/service.css`
- Modify: `.impeccable/FORM.md`

**Interfaces:**
- Consumes: `video.objectPosition`, optional `video.mobileObjectPosition`, `src`, and `poster`.
- Produces: cover-framed videos with deliberate desktop/mobile focal positions and documented sources.

- [ ] Copy the approved client laser file and generate an optimized poster.
- [ ] Restore cover framing for landing hero, selector, and service film.
- [ ] Add per-treatment crop variables and responsive crop selection.
- [ ] Download only verified exact or honestly generic licensed footage; retain existing clips where exact procedure footage cannot be verified.
- [ ] Record source, creator, and license page for every new stock file.
- [ ] Capture desktop and mobile screenshots for visual crop review.

### Task 3: Two commercial-intent guides

**Files:**
- Modify: `src/app/ratgeber/articles.ts`
- Modify: `src/app/sitemap.ts`

**Interfaces:**
- Consumes: `GuideArticle` and the dynamic `/ratgeber/[slug]` renderer.
- Produces: `laser-haarentfernung-kosten-mannheim` and `aquafacial-oder-microneedling` article entries.

- [ ] Draft both articles around one search decision and a clear consultation next step.
- [ ] Run the copy through the no-AI-slop checks and remove vague claims, robotic rhythm, fake contrasts, and generic conclusions.
- [ ] Add named sources, related guides, and treatment links.
- [ ] Confirm the existing sitemap data import emits both routes.

### Task 4: Final verification

**Files:**
- Verify: all modified files.

**Interfaces:**
- Consumes: completed media and article changes.
- Produces: a production-ready local build.

- [ ] Run `npm run lint` and accept no new errors.
- [ ] Run `npm run build` and confirm all service and five guide pages are statically generated.
- [ ] Run `npm run test:ui` against the production server.
- [ ] Inspect landing, service, and Ratgeber screenshots at 390px and 1280px.
- [ ] Run the Impeccable detector and finish-review gate; apply only material fixes.

