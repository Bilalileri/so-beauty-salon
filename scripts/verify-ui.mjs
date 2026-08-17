import { chromium } from "playwright";

const baseUrl = process.env.UI_BASE_URL ?? "http://localhost:3000";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
const failures = [];

const viewports = [
  { name: "phone-360", width: 360, height: 800 },
  { name: "phone-390", width: 390, height: 844 },
  { name: "phone-430", width: 430, height: 932 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1024", width: 1024, height: 900 },
  { name: "desktop-1440", width: 1440, height: 1000 },
];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
    reducedMotion: "no-preference",
  });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const facts = await page.evaluate(() => {
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    const h1s = [...document.querySelectorAll("h1")];
    const allText = document.body.innerText;
    const targets = [...document.querySelectorAll("a, button")]
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          label: element.textContent?.trim().replace(/\s+/g, " ").slice(0, 60) || element.getAttribute("aria-label") || "unlabelled",
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      });

    return {
      title: document.title,
      h1: h1s[0]?.textContent?.trim().replace(/\s+/g, " ") ?? "",
      h1Count: h1s.length,
      textLength: allText.trim().length,
      overlay: Boolean(document.querySelector("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay")),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      whatsappLinks: document.querySelectorAll('a[href^="https://wa.me/"]').length,
      hasJsonLd: Boolean(jsonLd && JSON.parse(jsonLd.textContent || "{}")),
      hasPriceSection: Boolean(document.querySelector("#preise, .price-menu, .service-pricing")),
      hasPriceNavigation: [...document.querySelectorAll("nav a")].some((link) => /preise/i.test(link.textContent || "")),
      hasPublicEuroPrice: /(?:ab\s*)?\d{2,3}\s*€/.test(allText),
      selectorCount: document.querySelectorAll('[role="tab"]').length,
      selectedCount: document.querySelectorAll('[role="tab"][aria-selected="true"]').length,
      selectedVideoCount: document.querySelectorAll('[data-treatment-film="active"]').length,
      videoToggleCount: document.querySelectorAll('[data-video-toggle]').length,
      mobileBookingPresent: Boolean(document.querySelector("[data-mobile-booking]")),
      mobileBookingInitiallyVisible: document.querySelector("[data-mobile-booking]")?.getAttribute("data-visible") === "true",
      closedMenuFocusable: [...document.querySelectorAll('#rose-mobile-menu a')]
        .filter((element) => element.getAttribute("tabindex") !== "-1").length,
      journeyBodySize: Number.parseFloat(getComputedStyle(document.querySelector('.rose-journey-track p')).fontSize),
      footerBodySize: Number.parseFloat(getComputedStyle(document.querySelector('.rose-footer p')).fontSize),
      smallTargets: targets.filter((target) => target.width < 44 || target.height < 44),
      desktopNavSize: Number.parseFloat(getComputedStyle(document.querySelector('.rose-desktop-nav')).fontSize),
      hasRemovedHeroCaption: /Gesichtsbehandlung bei S&O/i.test(allText),
      heroVideoFit: getComputedStyle(document.querySelector('.rose-hero-media video')).objectFit,
      treatmentVideoFit: getComputedStyle(document.querySelector('.rose-film-stage video')).objectFit,
      heroVideoSource: document.querySelector('.rose-hero-media source')?.getAttribute('src') ?? '',
      firstTreatmentFilm: document.querySelector('.rose-film-tab strong')?.textContent?.trim() ?? '',
      hasHeroTreatmentLink: Boolean(document.querySelector('.rose-hero-actions a[href="#behandlungen"]')),
      filmCaption: document.querySelector('.rose-film-stage figcaption')?.textContent?.trim() ?? "",
      selectorServiceLinkCount: document.querySelectorAll('.rose-film-tabs a[href^="/behandlungen/"]').length,
      desktopServiceMenuCount: document.querySelectorAll('[data-desktop-service-menu] a[href^="/behandlungen/"]').length,
      mobileServiceMenuCount: document.querySelectorAll('[data-mobile-service-menu] a[href^="/behandlungen/"]').length,
      hasLazyGoogleMap: document.querySelector('.rose-map iframe')?.getAttribute('loading') === 'lazy',
      journeyProgress: Number.parseFloat(document.querySelector('[data-journey-progress]')?.getAttribute('data-progress') ?? ''),
    };
  });

  assert(facts.h1 === "Laser & Hautpflege in Mannheim.", `${viewport.name}: approved H1 is missing`);
  assert(facts.h1Count === 1, `${viewport.name}: expected exactly one H1, found ${facts.h1Count}`);
  assert(facts.textLength > 700, `${viewport.name}: page content is unexpectedly short`);
  assert(!facts.overlay, `${viewport.name}: framework error overlay is visible`);
  assert(facts.overflow <= 1, `${viewport.name}: page overflows horizontally by ${facts.overflow}px`);
  assert(facts.whatsappLinks >= 3, `${viewport.name}: expected repeated WhatsApp access points`);
  assert(facts.hasJsonLd, `${viewport.name}: LocalBusiness JSON-LD is missing or invalid`);
  assert(!facts.hasPriceSection, `${viewport.name}: a public price section is still rendered`);
  assert(!facts.hasPriceNavigation, `${viewport.name}: price navigation is still rendered`);
  assert(!facts.hasPublicEuroPrice, `${viewport.name}: a public euro price is still visible`);
  assert(!facts.hasRemovedHeroCaption, `${viewport.name}: removed hero caption is still visible`);
  assert(facts.heroVideoFit === "cover", `${viewport.name}: hero film should use a cinematic cover crop`);
  assert(facts.treatmentVideoFit === "cover", `${viewport.name}: treatment film should use a cinematic cover crop`);
  assert(facts.heroVideoSource === "/media/services/client-laser.mp4", `${viewport.name}: hero is not using the other client video`);
  assert(facts.firstTreatmentFilm === "Professionelle Hautpflege", `${viewport.name}: professional skincare is not the first treatment film`);
  assert(!facts.hasHeroTreatmentLink, `${viewport.name}: awkward secondary hero treatment link is still rendered`);
  assert(!/ohne Ton/i.test(facts.filmCaption), `${viewport.name}: film caption still says ohne Ton`);
  assert(!/Details/i.test(facts.filmCaption), `${viewport.name}: film overlay still contains a Details link`);
  assert(facts.selectorServiceLinkCount === 5, `${viewport.name}: expected five service links in the treatment selector`);
  assert(facts.desktopServiceMenuCount === 5, `${viewport.name}: desktop treatment dropdown is incomplete`);
  assert(facts.mobileServiceMenuCount === 5, `${viewport.name}: mobile treatment submenu is incomplete`);
  assert(facts.hasLazyGoogleMap, `${viewport.name}: lazy Google Maps embed is missing`);
  assert(Number.isFinite(facts.journeyProgress), `${viewport.name}: journey scroll progress is missing`);
  assert(facts.selectorCount === 5, `${viewport.name}: expected five treatment film selectors`);
  assert(facts.selectedCount === 1, `${viewport.name}: exactly one treatment selector must be active`);
  assert(facts.selectedVideoCount === 1, `${viewport.name}: exactly one treatment film must be active`);
  assert(facts.videoToggleCount === 2, `${viewport.name}: both autoplay films need visible pause controls`);
  assert(facts.mobileBookingPresent, `${viewport.name}: conditional mobile booking action is missing`);
  assert(!facts.mobileBookingInitiallyVisible, `${viewport.name}: mobile booking action should be hidden in the hero`);
  assert(facts.closedMenuFocusable === 0, `${viewport.name}: closed mobile menu contains focusable links`);

  if (viewport.width >= 1024) {
    assert(facts.desktopNavSize >= 14, `${viewport.name}: desktop navigation copy is below 14px`);
  }

  if (viewport.width <= 430) {
    const criticalSmallTargets = facts.smallTargets.filter(({ label }) => !/Impressum|Datenschutz/.test(label));
    assert(criticalSmallTargets.length === 0, `${viewport.name}: interactive targets below 44px: ${JSON.stringify(criticalSmallTargets)}`);
    assert(facts.journeyBodySize >= 16, `${viewport.name}: journey body copy is below 16px`);
    assert(facts.footerBodySize >= 14, `${viewport.name}: secondary footer copy is below 14px`);

    if (facts.mobileBookingPresent) {
      await page.locator(".rose-technology").evaluate((element) => element.scrollIntoView({ block: "center", behavior: "instant" }));
      await page.waitForTimeout(500);
      const bookingVisibleAfterHero = await page.locator("[data-mobile-booking]").getAttribute("data-visible");
      assert(bookingVisibleAfterHero === "true", `${viewport.name}: mobile booking action did not appear after the hero`);

      await page.locator("#behandlungen").scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      const bookingVisibleAtFilms = await page.locator("[data-mobile-booking]").getAttribute("data-visible");
      assert(bookingVisibleAtFilms !== "true", `${viewport.name}: mobile booking action covers treatment links`);

      await page.locator("#kontakt").scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      const bookingVisibleAtMap = await page.locator("[data-mobile-booking]").getAttribute("data-visible");
      assert(bookingVisibleAtMap !== "true", `${viewport.name}: mobile booking action covers the map`);

      await page.locator("footer").scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      const bookingVisibleAtFooter = await page.locator("[data-mobile-booking]").getAttribute("data-visible");
      assert(bookingVisibleAtFooter !== "true", `${viewport.name}: mobile booking action covers the footer`);
    }
  }

  if (facts.selectorCount >= 3) {
    const secondTab = page.locator('[role="tab"]').nth(1);
    await secondTab.click();
    await page.waitForTimeout(250);
    assert(await secondTab.getAttribute("aria-selected") === "true", `${viewport.name}: treatment selector did not change with pointer input`);
    await secondTab.press("ArrowRight");
    const thirdTab = page.locator('[role="tab"]').nth(2);
    assert(await thirdTab.getAttribute("aria-selected") === "true", `${viewport.name}: treatment selector did not change with keyboard input`);
  }

  if (Number.isFinite(facts.journeyProgress)) {
    await page.locator('[data-journey-progress]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(250);
    const progressed = Number.parseFloat(await page.locator('[data-journey-progress]').getAttribute('data-progress') ?? '');
    assert(progressed > facts.journeyProgress, `${viewport.name}: journey progress did not respond to scrolling`);
  }

  assert(consoleErrors.length === 0, `${viewport.name}: console errors: ${consoleErrors.join(" | ")}`);
  results.push({ viewport: viewport.name, ...facts, consoleErrors });
  await page.close();
}

for (const slug of ["laser-haarentfernung", "aquafacial", "microneedling", "wimpernlifting", "professionelle-hautpflege"]) {
  for (const viewport of [{ name: "mobile", width: 390, height: 844 }, { name: "desktop", width: 1280, height: 900 }]) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    await page.goto(`${baseUrl}/behandlungen/${slug}`, { waitUntil: "networkidle" });
    const serviceFacts = await page.evaluate(() => ({
      hasPriceSection: Boolean(document.querySelector("#preise, .service-pricing, .zone-price-panel, .single-price-panel")),
      hasPublicEuroPrice: /(?:ab\s*)?\d{2,3}\s*€/.test(document.body.innerText),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      h1Count: document.querySelectorAll("h1").length,
      faqCount: document.querySelectorAll("[data-service-faq] details").length,
      hasPreparation: Boolean(document.querySelector("[data-service-preparation]")),
      hasAftercare: Boolean(document.querySelector("[data-service-aftercare]")),
      hasSuitability: Boolean(document.querySelector("[data-service-suitability]")),
      relatedGuideCount: document.querySelectorAll('[data-related-guides] a[href^="/ratgeber"]').length,
      videoCount: document.querySelectorAll("video").length,
      hasTemporaryCopy: /Genau hier soll die Seite später Vertrauen aufbauen/i.test(document.body.innerText),
      videoFit: getComputedStyle(document.querySelector('.service-film video')).objectFit,
    }));
    assert(!serviceFacts.hasPriceSection, `${slug} ${viewport.name}: public price section is still rendered`);
    assert(!serviceFacts.hasPublicEuroPrice, `${slug} ${viewport.name}: public euro price is still visible`);
    assert(serviceFacts.overflow <= 1, `${slug} ${viewport.name}: page overflows horizontally by ${serviceFacts.overflow}px`);
    assert(serviceFacts.h1Count === 1, `${slug} ${viewport.name}: expected one H1`);
    assert(serviceFacts.faqCount >= 6, `${slug} ${viewport.name}: expected at least six FAQs`);
    assert(serviceFacts.hasPreparation, `${slug} ${viewport.name}: preparation guidance is missing`);
    assert(serviceFacts.hasAftercare, `${slug} ${viewport.name}: aftercare guidance is missing`);
    assert(serviceFacts.hasSuitability, `${slug} ${viewport.name}: suitability guidance is missing`);
    assert(serviceFacts.relatedGuideCount >= 1, `${slug} ${viewport.name}: related Ratgeber link is missing`);
    assert(serviceFacts.videoCount === 1, `${slug} ${viewport.name}: expected exactly one service film`);
    assert(!serviceFacts.hasTemporaryCopy, `${slug} ${viewport.name}: temporary trust copy is still visible`);
    assert(serviceFacts.videoFit === "cover", `${slug} ${viewport.name}: service film should use a cinematic cover crop`);
    await page.close();
  }
}

const ratgeberRoutes = [
  { path: "/ratgeber", h1: "Ratgeber für Haut, Laser und Pflege." },
  { path: "/ratgeber/laser-haarentfernung-vorbereitung", h1: "Vor der Laser-Haarentfernung: richtig vorbereiten und rasieren." },
  { path: "/ratgeber/laser-haarentfernung-wie-viele-sitzungen", h1: "Wie viele Sitzungen braucht eine Laser-Haarentfernung?" },
  { path: "/ratgeber/microneedling-nachsorge", h1: "Microneedling danach: Was Ihre Haut jetzt braucht." },
  { path: "/ratgeber/laser-haarentfernung-kosten-mannheim", h1: "Laser-Haarentfernung Kosten in Mannheim: Wovon hängt der Preis ab?" },
  { path: "/ratgeber/aquafacial-oder-microneedling", h1: "AquaFacial oder Microneedling: Welche Behandlung passt zu meiner Haut?" },
];

for (const route of ratgeberRoutes) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const response = await page.goto(`${baseUrl}${route.path}`, { waitUntil: "networkidle" });
  const guideFacts = await page.evaluate(() => ({
    h1: document.querySelector("h1")?.textContent?.trim().replace(/\s+/g, " ") ?? "",
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    articleCount: document.querySelectorAll("article").length,
    hasPrice: /(?:ab\s*)?\d{2,3}\s*€/.test(document.body.innerText),
    contextualServiceCtaCount: document.querySelectorAll("[data-guide-service-cta]").length,
    finalWhatsappCtaCount: document.querySelectorAll("[data-guide-whatsapp-cta]").length,
    finalWhatsappIconCount: document.querySelectorAll("[data-guide-whatsapp-cta] svg[data-whatsapp-icon]").length,
  }));
  assert(response?.status() === 200, `${route.path}: expected HTTP 200`);
  assert(guideFacts.h1 === route.h1, `${route.path}: expected H1 ${JSON.stringify(route.h1)}, got ${JSON.stringify(guideFacts.h1)}`);
  assert(guideFacts.overflow <= 1, `${route.path}: mobile page overflows horizontally by ${guideFacts.overflow}px`);
  assert(!guideFacts.hasPrice, `${route.path}: public euro price is visible`);
  if (route.path === "/ratgeber") {
    assert(guideFacts.articleCount >= 5, `${route.path}: expected five guide previews`);
  } else {
    assert(guideFacts.contextualServiceCtaCount === 1, `${route.path}: expected one contextual service CTA`);
    assert(guideFacts.finalWhatsappCtaCount === 1, `${route.path}: expected one final WhatsApp CTA`);
    assert(guideFacts.finalWhatsappIconCount === 1, `${route.path}: expected one WhatsApp icon in the final CTA`);
  }
  await page.close();
}

await browser.close();
console.log(JSON.stringify({ results, failures }, null, 2));

if (failures.length > 0) process.exit(1);
