# Service Pages and Ratgeber Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend Rosé Modernism to every treatment route, add a conversion-aware Ratgeber hub with three researched articles, enlarge navigation copy, and improve treatment-video framing without reintroducing prices.

**Architecture:** Expand the existing treatment data into a reusable content contract and render it through one responsive service-page composition. Keep article content in a focused TypeScript data module, use static App Router routes for the hub and article pages, and extend the existing Playwright verification before implementation so the new routes and behaviors are test-first.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, CSS, `next/image`, native video, JSON-LD, Playwright.

## Global Constraints

- Preserve the approved Rosé Modernism palette, typography and flat-by-tone component language.
- No public treatment prices, owner placeholders, fabricated testimonials, fake credentials or guaranteed results.
- Mobile widths 360px, 390px and 430px are primary acceptance targets.
- Use the client film only where it truthfully represents the treatment.
- Keep WhatsApp as the primary conversion path.

---

### Task 1: Lock new behavior in UI verification

**Files:**
- Modify: `scripts/verify-ui.mjs`

**Produces:** Checks for five redesigned service pages, the Ratgeber hub, three article routes, absence of banned copy/prices, six FAQs, navigation size and responsive overflow.

- [ ] Add failing assertions for the approved routes and content contract.
- [ ] Run `npm run test:ui` against the incumbent app and verify failure is caused by missing Ratgeber routes and thin service content.
- [ ] Keep the failing output as the red phase for implementation.

### Task 2: Expand treatment and article content models

**Files:**
- Modify: `src/app/treatments.tsx`
- Create: `src/app/ratgeber/articles.ts`

**Produces:** `Treatment` content with suitability, preparation, aftercare and six FAQs; `articles`, `getArticle(slug)` and article metadata for three guides.

- [ ] Add the new content fields without changing verified business facts.
- [ ] Write the three articles in plain, careful German and apply the no-AI-slop editing rules.
- [ ] Keep commercial and informational primary keywords separate.

### Task 3: Build the shared service-page composition

**Files:**
- Modify: `src/app/behandlungen/[slug]/page.tsx`
- Create: `src/app/components/ServiceFilm.tsx`
- Create: `src/app/service.css`
- Modify: `src/app/layout.tsx`

**Consumes:** Expanded treatment content from Task 2.

- [ ] Replace the old service header with `RoseSiteHeader`.
- [ ] Build the hero, answer, proof, connected process, preparation/aftercare, suitability, FAQ, related reading and Mannheim close.
- [ ] Use the client laser film truthfully and keep one video active per page.
- [ ] Remove capsule highlights, decorative step cards and temporary placeholder copy.

### Task 4: Build the Ratgeber hub and articles

**Files:**
- Create: `src/app/ratgeber/page.tsx`
- Create: `src/app/ratgeber/[slug]/page.tsx`
- Create: `src/app/ratgeber/ratgeber.css`

**Consumes:** `articles` and `getArticle()` from Task 2.

- [ ] Build an editorial hub with the laser cluster leading and related treatment links.
- [ ] Build readable article pages with semantic headings, sources, internal links and restrained booking actions.
- [ ] Add `Article` and `BreadcrumbList` JSON-LD to each article.

### Task 5: Complete shared navigation, video and SEO plumbing

**Files:**
- Modify: `src/app/components/RoseSiteHeader.tsx`
- Modify: `src/app/landing.css`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/page.tsx`

- [ ] Increase desktop navigation size without breaking the header grid.
- [ ] Remove `Gesichtsbehandlung bei S&O` from visible copy.
- [ ] Adjust video object position and maximum rendered size to preserve useful detail.
- [ ] Add Ratgeber navigation and sitemap entries.

### Task 6: Verify and close the design pass

**Files:**
- Modify as required by verification findings.
- Update: `.impeccable/review/*`

- [ ] Run `npm run lint` and fix all errors.
- [ ] Run `npm run build` and fix all errors.
- [ ] Run `npm run test:ui` against the production build.
- [ ] Capture desktop, phone and user-width service/Ratgeber screenshots in one batch.
- [ ] Run the Impeccable detector once, fix mechanical findings, then request the finish review.
- [ ] Preserve the local review state; do not push or deploy without separate user approval.

