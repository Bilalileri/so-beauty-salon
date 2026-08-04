import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { CustomerJourneyTimeline } from "./components/CustomerJourneyTimeline";
import { laserPackages, mapsUrl, treatments, whatsappUrl } from "./treatments";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Q1%2C%207%2C%2068161%20Mannheim&output=embed";

const faqs = [
  {
    question: "Wie vereinbare ich einen Termin?",
    answer:
      "Am schnellsten erreichen Sie uns per WhatsApp. Schreiben Sie uns einfach Ihre Wunschbehandlung und mögliche Termine - wir melden uns persönlich zurück.",
  },
  {
    question: "Wo finde ich S&O Beauty Salon?",
    answer:
      "Unser Studio befindet sich zentral in den Mannheimer Quadraten: Q1, 7, 68161 Mannheim.",
  },
  {
    question: "Wann ist das Studio geöffnet?",
    answer:
      "Montag bis Freitag von 10:00 bis 18:00 Uhr. Samstag und Sonntag bleibt das Studio geschlossen. Termine werden vorab vereinbart.",
  },
  {
    question: "Was kostet eine Behandlung?",
    answer:
      "Wimpernlifting kostet 49 € inkl. Färben, AquaFacial 89 € und Microneedling 99 €. Laser-Haarentfernung startet ab 24 € pro Einzelzone; Pakete starten ab 119 €.",
  },
  {
    question: "Gibt es vor der Laserbehandlung eine Beratung?",
    answer:
      "Ja. Vor der ersten Anwendung besprechen wir Hauttyp, Behandlungsbereich und relevante Hinweise, damit der Termin individuell geplant werden kann.",
  },
];

function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "@id": "https://beautyso.de/#salon",
        name: "S&O Beauty Salon",
        url: "https://beautyso.de",
        telephone: "+49 15565 855752",
        email: "info@beautyso.de",
        image: "https://beautyso.de/media/soprano-ice-platinum.png",
        description:
          "Kosmetikstudio in Mannheim für Laser-Haarentfernung, AquaFacial, Microneedling, Wimpernlifting und professionelle Hautpflege.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Q1, 7",
          postalCode: "68161",
          addressLocality: "Mannheim",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 49.4888999,
          longitude: 8.4674839,
        },
        areaServed: ["Mannheim", "Ludwigshafen am Rhein", "Rhein-Neckar"],
        hasMap: mapsUrl,
        priceRange: "€€",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "18:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Beauty-Behandlungen",
          itemListElement: treatments.map((treatment) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: treatment.name,
              areaServed: "Mannheim",
            },
          })),
        },
        sameAs: [mapsUrl],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo-lockup${light ? " logo-lockup-light" : ""}`}>
      <Image
        src="/brand/so-logo.svg"
        alt="S&O Beauty Salon Logo"
        width={2000}
        height={2000}
        className="logo-mark"
        priority
        unoptimized
      />
      <span className="logo-type">
        <strong>S&O</strong>
        <small>Beauty Salon</small>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <header className="site-header">
        <Link href="#start" aria-label="S&O Beauty Salon Startseite">
          <Logo />
        </Link>
        <nav aria-label="Hauptnavigation">
          <a href="#behandlungen">Behandlungen</a>
          <a href="#preise">Preise</a>
          <a href="#technologie">Technologie</a>
          <a href="#studio">Studio</a>
          <a href="#fragen">Fragen</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          <span>Termin anfragen</span>
        </a>
      </header>

      <main>
        <section className="hero" id="start">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/hero-facial-poster.png"
            aria-label="Ruhige Beauty-Behandlung in einem Salon"
          >
            <source src="/media/hero-facial.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-content shell">
            <p className="eyebrow light">Kosmetikstudio Mannheim · Q1</p>
            <h1>Schönheit, die zu Ihnen passt.</h1>
            <p className="hero-lead">
              Individuelle Beauty-Behandlungen, moderne Technologie und Zeit für Sie -
              mitten in den Mannheimer Quadraten.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Termin per WhatsApp
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="button button-ghost" href="#behandlungen">
                Behandlungen entdecken
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-meta shell" aria-label="Schnellinformationen">
            <span><MapPin aria-hidden="true" /> Q1, 7 · Mannheim</span>
            <span><Clock3 aria-hidden="true" /> Mo-Fr · 10:00-18:00</span>
            <span><ShieldCheck aria-hidden="true" /> NiSV-Fachkunde</span>
          </div>
        </section>

        <section className="intro shell" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow">S&O Beauty Salon</p>
            <h2 id="intro-title">Ihre Zeit. Ihre Haut. Ihr Wohlgefühl.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Bei S&O Beauty Salon stehen nicht möglichst viele Anwendungen im Mittelpunkt,
              sondern die Behandlung, die wirklich zu Ihnen passt. In ruhiger Atmosphäre
              nehmen wir uns Zeit für Beratung, Pflege und ein natürlich schönes Ergebnis.
            </p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Persönlich beraten lassen <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="treatments section-pad" id="behandlungen">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Unsere Behandlungen</p>
                <h2>Pflege mit Ruhe und Präzision.</h2>
              </div>
              <p>
                Von langanhaltend glatter Haut bis zu einem frischen Hautgefühl:
                Jede Anwendung beginnt mit einem persönlichen Blick auf Ihre Wünsche.
              </p>
            </div>

            <div className="treatment-grid">
              {treatments.map((treatment) => (
                <article className="treatment-card" key={treatment.name}>
                  <Link className="treatment-media" href={treatment.href} aria-label={`${treatment.name} ansehen`}>
                    <video
                      src={treatment.video.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      aria-hidden="true"
                    />
                  </Link>
                  <div className="treatment-body">
                    <h3>{treatment.name}</h3>
                    <p>{treatment.shortDescription}</p>
                    <Link href={treatment.href} aria-label={`${treatment.name} ansehen`}>
                      Mehr erfahren <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing section-pad shell" id="preise">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Preise</p>
              <h2>Klar geplant. Schön zurückhaltend.</h2>
            </div>
            <p>
              Die wichtigsten Preise auf einen Blick. Bei Laser-Haarentfernung
              stimmen wir Zonen und Pakete persönlich auf Ihre Wünsche ab.
            </p>
          </div>

          <div className="pricing-layout">
            <div className="price-menu">
              <div className="price-menu-heading">
                <span>Behandlung</span>
                <span>Preis</span>
              </div>
              {treatments.map((treatment) => (
                <Link className="price-row" href={treatment.href} key={treatment.name}>
                  <div>
                    <span>{treatment.name}</span>
                    <small>{treatment.price.detail}</small>
                  </div>
                  <i aria-hidden="true" />
                  <strong>{treatment.price.label}</strong>
                </Link>
              ))}
            </div>

            <aside className="laser-package-panel" aria-label="Laser-Paketpreise">
              <p className="eyebrow">Laser-Pakete</p>
              <h3>Mehrere Zonen werden günstiger.</h3>
              <p>
                Besonders sinnvoll, wenn mehrere Bereiche in einem Termin geplant werden.
                Die genaue Auswahl stimmen wir persönlich per WhatsApp ab.
              </p>
              <div>
                {laserPackages.slice(0, 3).map((item) => (
                  <Link className={item.featured ? "package-row featured" : "package-row"} href="/behandlungen/laser-haarentfernung" key={item.name}>
                    <div>
                      <span>{item.name}</span>
                      <small>{item.detail}</small>
                    </div>
                    <i aria-hidden="true" />
                    <strong>{item.price}</strong>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="technology section-pad shell" id="technologie">
          <div className="technology-visual">
            <Image
              src="/media/soprano-ice-platinum.png"
              alt="Soprano ICE Platinum Lasergerät von Alma Lasers"
              width={676}
              height={1017}
              sizes="(max-width: 900px) 100vw, 52vw"
              className="technology-image"
            />
            <div className="nisv-badge" aria-label="NiSV-Fachkunde">
              <ShieldCheck aria-hidden="true" />
              <span>NiSV</span>
              <small>Fachkunde</small>
            </div>
          </div>

          <div className="technology-copy">
            <p className="eyebrow">Soprano ICE Platinum</p>
            <h2>Premium-Technologie für spürbar mehr Komfort.</h2>
            <p>
              Soprano ICE Platinum kombiniert drei Laserwellenlängen in einem Applikator.
              So können unterschiedliche Tiefen des Haarfollikels gezielt angesprochen werden.
              Die SHR™ In-Motion-Technik erwärmt die Haut schrittweise, während ICE™ die
              Hautoberfläche kontinuierlich kühlt - für eine gleichmäßige und nahezu
              schmerzfreie Anwendung.*
            </p>
            <div className="technology-highlights" aria-label="Vorteile der Soprano ICE Platinum Technologie">
              <article>
                <strong>3-in-1</strong>
                <span>755, 810 und 1064 nm in einem Applikator</span>
              </article>
              <article>
                <strong>ICE™</strong>
                <span>Kontinuierliche Kühlung für mehr Hautkomfort</span>
              </article>
              <article>
                <strong>SHR™</strong>
                <span>Sanfte, schrittweise Wärme mit In-Motion-Technik</span>
              </article>
            </div>
            <div className="technology-care">
              <ShieldCheck aria-hidden="true" />
              <p><strong>Fachkundig und individuell:</strong> Einstellungen und Ablauf werden auf Hauttyp, Haarstruktur und Behandlungsbereich abgestimmt.</p>
            </div>
            <small className="technology-footnote">
              *„Virtually painless“ laut Hersteller Alma Lasers. Das persönliche Empfinden kann variieren.
            </small>
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              Beratung anfragen <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="experience section-pad" id="studio">
          <div className="shell">
            <div className="experience-heading">
              <p className="eyebrow light">Ihr Termin bei S&O</p>
              <h2>In drei Schritten zu Ihrem Beauty-Termin.</h2>
              <p>
                Schnell, persönlich und ohne komplizierte Buchungsmaske:
                Wir planen Ihren Termin direkt per WhatsApp.
              </p>
            </div>
            <CustomerJourneyTimeline whatsappUrl={whatsappUrl} />
          </div>
        </section>

        <section className="faq section-pad shell" id="fragen">
          <div className="faq-heading">
            <p className="eyebrow">Gut zu wissen</p>
            <h2>Ihre Fragen, klar beantwortet.</h2>
            <p>Noch etwas offen? Schreiben Sie uns einfach direkt bei WhatsApp.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="kontakt">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Mitten in Mannheim</p>
              <h2>Ihr Moment beginnt in Q1.</h2>
              <p>
                Zentral in den Quadraten gelegen und bequem erreichbar. Termine vereinbaren
                wir persönlich per WhatsApp.
              </p>
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp öffnen <MessageCircle aria-hidden="true" />
              </a>
            </div>
            <div className="contact-card">
              <div className="map-panel">
                <div className="map-marker-card">
                  <MapPin aria-hidden="true" />
                  <span>S&O Beauty Salon</span>
                  <strong>Q1, 7 · Mannheim</strong>
                </div>
                <iframe
                  src={mapEmbedUrl}
                  title="S&O Beauty Salon Standort in Mannheim Q1"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a href={mapsUrl} target="_blank" rel="noreferrer">
                  Route öffnen <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div>
                <MapPin aria-hidden="true" />
                <span>Adresse</span>
                <strong>Q1, 7<br />68161 Mannheim</strong>
                <a href={mapsUrl} target="_blank" rel="noreferrer">Route in Google Maps <ArrowUpRight aria-hidden="true" /></a>
              </div>
              <div>
                <Clock3 aria-hidden="true" />
                <span>Öffnungszeiten</span>
                <strong>Montag-Freitag<br />10:00-18:00 Uhr</strong>
                <small>Samstag & Sonntag geschlossen</small>
              </div>
              <div>
                <MessageCircle aria-hidden="true" />
                <span>Kontakt</span>
                <strong>+49 15565 855752</strong>
                <a href="mailto:info@beautyso.de">info@beautyso.de</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <Logo light />
          <p>Ihre Schönheit. Ihre Zeit.<br />Beauty-Behandlungen im Herzen von Mannheim.</p>
          <div className="footer-links">
            <a href="#behandlungen">Behandlungen</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer">Standort</a>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} S&O Beauty Salon</span>
          <span>Q1, 7 · 68161 Mannheim</span>
        </div>
      </footer>

      <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" /> Termin per WhatsApp
      </a>
    </>
  );
}
