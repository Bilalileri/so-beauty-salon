import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./components/ArrowUpRight";
import { CustomerJourneyTimeline } from "./components/CustomerJourneyTimeline";
import { HeroFilm } from "./components/HeroFilm";
import { MobileBookingAction } from "./components/MobileBookingAction";
import { RoseSiteHeader } from "./components/RoseSiteHeader";
import { TreatmentFilmSelector, type TreatmentFilm } from "./components/TreatmentFilmSelector";
import { mapsUrl, treatments, whatsappUrl } from "./treatments";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beautyso.de";

const films: TreatmentFilm[] = [...treatments]
  .sort((a, b) => Number(b.slug === "professionelle-hautpflege") - Number(a.slug === "professionelle-hautpflege"))
  .map((treatment) => ({
  name: treatment.name,
  href: treatment.href,
  src: treatment.video.src,
  poster: "poster" in treatment.video ? treatment.video.poster : undefined,
  objectPosition: treatment.video.objectPosition,
  mobileObjectPosition: "mobileObjectPosition" in treatment.video ? treatment.video.mobileObjectPosition : undefined,
  label: `${treatment.name} bei S&O Beauty Salon Mannheim`,
  caption: "caption" in treatment.video ? treatment.video.caption : undefined,
  }));

const salonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${siteUrl}/#salon`,
  name: "S&O Beauty Salon",
  url: siteUrl,
  telephone: "+49 15565 855752",
  email: "info@beautyso.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Q1, 7",
    postalCode: "68161",
    addressLocality: "Mannheim",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  areaServed: ["Mannheim", "Ludwigshafen am Rhein", "Rhein-Neckar"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beauty-Behandlungen",
    itemListElement: treatments.map((treatment) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: treatment.name,
        url: `${siteUrl}${treatment.href}`,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      {/*
        THESIS: Personal beauty guidance in Mannheim, presented as a calm modernist salon rather than a luxury-template catalogue.
        OWN-WORLD: Bone, blush and wine fields; flat rule-line structure; neutral grotesk type; restrained rectangular controls.
        STORY: Understand the treatments, see one real treatment film, trust the qualified process, then ask personally on WhatsApp.
        FIRST VIEWPORT: Wine header above a blush, copy-led hero; consultation copy and actions left, contained 4:5 film right; mobile stacks copy before film.
        FORM: Rosé Modernism, grounded candidate 1 and user-pinned choice; Impeccable direction seed 5bd160d6 corroborates the completed decision round.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(salonJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <RoseSiteHeader whatsappUrl={whatsappUrl} />

      <main className="rose-page">
        <section className="rose-hero" id="start" data-booking-hero>
          <div className="rose-shell rose-hero-grid">
            <div className="rose-hero-copy">
              <p className="rose-label">S&amp;O Beauty Salon · Mannheim Q1</p>
              <h1>Laser &amp; Hautpflege in Mannheim.</h1>
              <p className="rose-lead">
                Wir nehmen uns Zeit für eine persönliche Beratung und wählen gemeinsam die Behandlung,
                die zu Ihnen passt.
              </p>
              <div className="rose-hero-actions">
                <a className="rose-button rose-button-ink" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Termin über WhatsApp <ArrowUpRight />
                </a>
              </div>
              <dl className="rose-hero-facts">
                <div>
                  <dt>Adresse</dt>
                  <dd>Q1, 7 · 68161 Mannheim</dd>
                </div>
                <div>
                  <dt>Öffnungszeiten</dt>
                  <dd>Mo–Fr · 10:00–18:00</dd>
                </div>
              </dl>
            </div>

            <figure className="rose-hero-media">
              <HeroFilm />
            </figure>
          </div>
        </section>

        <section className="rose-intro">
          <div className="rose-shell rose-intro-grid">
            <h2>Ein Termin, der mit Zuhören beginnt.</h2>
            <div>
              <p>
                Persönliche Beratung bedeutet für uns: Wir schauen zuerst auf Ihr Ziel, Ihre Haut und
                das, was sich für Sie richtig anfühlt. Danach empfehlen wir den passenden nächsten Schritt.
              </p>
            </div>
          </div>
        </section>

        <section className="rose-films" id="behandlungen" data-booking-suppress>
          <div className="rose-shell">
            <div className="rose-section-head rose-section-head-light">
              <div>
                <h2>Wählen Sie, was Sie interessiert.</h2>
              </div>
              <p>
                Einblicke in ausgewählte Anwendungen. Alle Details finden Sie auf der jeweiligen
                Behandlungsseite.
              </p>
            </div>
            <TreatmentFilmSelector films={films} />
          </div>
        </section>

        <section className="rose-guidance">
          <div className="rose-shell rose-guidance-grid">
            <div>
              <h2>Noch nicht sicher, was passt?</h2>
              <p>
                Schreiben Sie uns kurz, was Sie sich wünschen. Wir klären gemeinsam, welche Behandlung
                sinnvoll ist und wie der Termin abläuft.
              </p>
              <a className="rose-button rose-button-ink" href={whatsappUrl} target="_blank" rel="noreferrer">
                Kurz auf WhatsApp fragen <ArrowUpRight />
              </a>
            </div>
            <ol className="rose-guidance-list" aria-label="Themen der persönlichen Beratung">
              <li><span>Ihr Ziel</span><span>01</span></li>
              <li><span>Haut und Voraussetzungen</span><span>02</span></li>
              <li><span>Passender Ablauf</span><span>03</span></li>
            </ol>
          </div>
        </section>

        <section className="rose-technology" id="technologie">
          <div className="rose-machine-stage">
            <Image
              src="/media/soprano-ice-platinum.png"
              alt="Soprano ICE Platinum Lasersystem"
              width={676}
              height={1017}
              loading="eager"
              sizes="(max-width: 820px) 84vw, 44vw"
            />
          </div>
          <div className="rose-technology-copy">
            <p className="rose-label">Soprano ICE Platinum</p>
            <h2>Kontrollierte Wärme. Kontinuierliche Kühlung.</h2>
            <p>
              Der Applikator wird gleichmäßig über die Haut geführt. Die integrierte Kühlung unterstützt
              ein möglichst angenehmes Behandlungsgefühl. Das persönliche Empfinden kann variieren.
            </p>
            <div className="rose-proof">
              <strong>NiSV</strong>
              <span>
                Fachkundig durchgeführt und individuell auf Haut, Haarstruktur und Behandlungsbereich eingestellt.
              </span>
            </div>
            <Link className="rose-text-link" href="/behandlungen/laser-haarentfernung">
              Laser-Haarentfernung ansehen
            </Link>
          </div>
        </section>

        <section className="rose-journey" id="ablauf" data-booking-suppress>
          <div className="rose-shell">
            <h2>Von der Nachricht bis zur Nachpflege.</h2>
            <CustomerJourneyTimeline whatsappUrl={whatsappUrl} />
          </div>
        </section>

        <section className="rose-location" id="kontakt" data-booking-suppress>
          <div className="rose-location-copy">
            <h2>Ihr Termin beginnt in Q1.</h2>
            <p>
              Zentral in den Quadraten und bequem erreichbar. Termine vereinbaren wir persönlich per WhatsApp.
            </p>
            <dl>
              <div><dt>Adresse</dt><dd>Q1, 7 · 68161 Mannheim</dd></div>
              <div><dt>Geöffnet</dt><dd>Mo–Fr · 10:00–18:00</dd></div>
            </dl>
            <a className="rose-button rose-button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp öffnen <ArrowUpRight />
            </a>
          </div>
          <div className="rose-map">
            <iframe
              src="https://www.google.com/maps?q=Q1%207%2C%2068161%20Mannheim&output=embed"
              title="Google Maps Karte von S&O Beauty Salon, Q1 7 in Mannheim"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="rose-map-place" aria-hidden="true"><strong>S&amp;O Beauty Salon</strong><small>Q1, 7</small></span>
            <a className="rose-map-link" href={mapsUrl} target="_blank" rel="noreferrer">
              Route in Google Maps <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="rose-footer" data-booking-footer>
        <div className="rose-footer-grid">
          <div>
            <div className="rose-footer-brand">
              <span className="rose-logo-window" aria-hidden="true">
                <Image src="/brand/so-mark.png" alt="" width={2000} height={2000} sizes="128px" />
              </span>
              <span className="rose-wordmark">S&amp;O<small>Beauty Salon</small></span>
            </div>
            <p>Persönliche Beauty-Behandlungen in Mannheim Q1.</p>
          </div>
          <nav aria-label="Behandlungen im Footer">
            {treatments.map((treatment) => <Link href={treatment.href} key={treatment.slug}>{treatment.name}</Link>)}
          </nav>
          <address>
            Q1, 7 · 68161 Mannheim<br />
            <a href="tel:+4915565855752">+49 15565 855752</a><br />
            <a href="mailto:info@beautyso.de">info@beautyso.de</a>
          </address>
        </div>
        <div className="rose-footer-bottom">
          <span>© S&amp;O Beauty Salon</span>
          <span><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></span>
        </div>
      </footer>

      <MobileBookingAction whatsappUrl={whatsappUrl} />
    </>
  );
}
