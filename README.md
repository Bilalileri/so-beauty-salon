# S&O Beauty Salon Mannheim

Conversion-focused landing page for S&O Beauty Salon in the Mannheim Quadrate. The first version combines a premium editorial design with local SEO foundations and WhatsApp appointment requests.

## Included

- responsive Next.js 16 landing page
- locally hosted stock hero video and poster
- supplied S&O logo and Soprano ICE Platinum machine artwork
- treatment overview for laser hair removal, AquaFacial, microneedling, lash lifting, and skincare
- WhatsApp CTAs using `+49 15565 855752`
- verified opening hours: Monday-Friday, 10:00-18:00
- Google Maps link for Q1, 7, 68161 Mannheim
- `BeautySalon` and FAQ structured data
- canonical metadata, sitemap, robots, manifest, and favicon
- no analytics, third-party embeds, or marketing cookies in version one
- indexing is locked until `NEXT_PUBLIC_ALLOW_INDEXING=true` is explicitly set for the final launch

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
npm run test:ui
npm audit --omit=dev
```

`npm run test:ui` expects the site to be running at `http://localhost:3000` and uses the installed Google Chrome application.

## Environment

Copy `.env.example` to `.env.local` when a non-default canonical domain is needed.

```bash
NEXT_PUBLIC_SITE_URL=https://beautyso.de
NEXT_PUBLIC_ALLOW_INDEXING=false
```

## Media sources

- Logo: supplied by the client as `SO LOGO.svg`.
- Soprano ICE Platinum machine PNG: supplied by the client as `Alma-Prime_hr-1-3.png`.
- Technology wording: based on [Alma Lasers' official Soprano ICE Platinum information](https://www.alma-soprano.com/soprano-ice-platinum/); the personal sensation disclaimer remains visible.
- Hero video: [Mixkit clip 52148](https://mixkit.co/free-stock-video/a-young-beautiful-woman-laying-on-the-spa-bed-receives-52148/), used under the Mixkit Stock Video Free License.

## Required before the production-domain launch

- replace the legal-page placeholders with the salon owner's complete legal details and review the texts professionally
- verify the exact NiSV documentation and the right to publish the NiSV claim
- confirm the right to publish the supplied Soprano ICE Platinum product image
- add the final price list
- connect `beautyso.de` to Vercel and verify HTTPS, redirects, canonical URLs, Search Console, and sitemap submission
- set `NEXT_PUBLIC_ALLOW_INDEXING=true` only after the production launch checklist is complete
- keep the Google Business Profile as a distinct S&O listing with its own signage, phone, and precise suite/floor details because another business operates at the same street address

The wider local SEO rollout is documented in [docs/SEO-LAUNCH-PLAN.md](docs/SEO-LAUNCH-PLAN.md).
