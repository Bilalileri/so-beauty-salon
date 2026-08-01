import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];

for (const viewport of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.7) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(250);
  await page.screenshot({
    path: `/tmp/so-${viewport.name}.png`,
    fullPage: true,
  });

  const facts = await page.evaluate(() => {
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    return {
      title: document.title,
      h1: document.querySelector("h1")?.textContent?.trim() ?? "",
      textLength: document.body.innerText.trim().length,
      overlay: Boolean(
        document.querySelector(
          "[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay",
        ),
      ),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      whatsappLinks: document.querySelectorAll('a[href^="https://wa.me/"]').length,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
      hasJsonLd: Boolean(jsonLd && JSON.parse(jsonLd.textContent || "{}")),
      videoReady: Boolean(document.querySelector("video source")),
    };
  });

  await page.locator("details").first().locator("summary").click();
  const faqOpened = await page.locator("details").first().evaluate((element) => element.open);
  results.push({ viewport: viewport.name, ...facts, faqOpened, consoleErrors });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));

const failed = results.some(
  (result) =>
    result.textLength < 500 ||
    !result.h1 ||
    result.overlay ||
    result.overflow > 1 ||
    result.whatsappLinks < 1 ||
    !result.hasJsonLd ||
    !result.videoReady ||
    !result.faqOpened ||
    result.consoleErrors.length > 0,
);

if (failed) process.exit(1);
