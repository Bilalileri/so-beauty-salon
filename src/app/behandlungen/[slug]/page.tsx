import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { getTreatment, laserPackages, laserZones, mapsUrl, treatments, whatsappUrl } from "../../treatments";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beautyso.de";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    return {};
  }

  return {
    title: treatment.seoTitle,
    description: treatment.seoDescription,
    alternates: {
      canonical: treatment.href,
    },
    openGraph: {
      type: "website",
      url: treatment.href,
      title: `${treatment.seoTitle} | S&O Beauty Salon`,
      description: treatment.seoDescription,
      images: treatment.slug === "laser-haarentfernung" ? ["/media/soprano-ice-platinum.png"] : undefined,
    },
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  const Icon = treatment.icon;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${treatment.href}#service`,
    name: `${treatment.name} Mannheim`,
    description: treatment.seoDescription,
    areaServed: ["Mannheim", "Ludwigshafen am Rhein", "Rhein-Neckar"],
    provider: {
      "@type": "BeautySalon",
      "@id": `${siteUrl}/#salon`,
      name: "S&O Beauty Salon",
      telephone: "+49 15565 855752",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Q1, 7",
        postalCode: "68161",
        addressLocality: "Mannheim",
        addressCountry: "DE",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="service-header">
        <Link href="/" className="service-logo" aria-label="S&O Beauty Salon Startseite">
          <Image
            src="/brand/so-logo.svg"
            alt="S&O Beauty Salon Logo"
            width={2000}
            height={2000}
            className="logo-mark"
            priority
            unoptimized
          />
          <span>
            <strong>S&O</strong>
            <small>Beauty Salon</small>
          </span>
        </Link>
        <nav aria-label="Behandlungsnavigation">
          <Link href="/#behandlungen">Behandlungen</Link>
          <Link href="/#technologie">Technologie</Link>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Standort</a>
        </nav>
        <a className="header-cta header-cta-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          <span>Termin anfragen</span>
        </a>
      </header>

      <main className="service-page">
        <section className="service-hero shell">
          <div className="service-hero-copy">
            <p className="eyebrow">S&O Beauty Salon</p>
            <h1>{treatment.seoTitle}</h1>
            <p>{treatment.intro}</p>
            <div className="service-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Termin per WhatsApp
                <ArrowUpRight aria-hidden="true" />
              </a>
              <Link className="button button-soft" href="/#behandlungen">
                Alle Behandlungen
              </Link>
            </div>
          </div>
          <div className="service-hero-panel" aria-label={`${treatment.name} Kurzüberblick`}>
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-label={treatment.video.label}
            >
              <source src={treatment.video.src} type="video/mp4" />
            </video>
            <div className="service-video-shade" />
            <div className="service-video-copy">
              <Icon aria-hidden="true" />
              <strong>{treatment.name}</strong>
              <p>{treatment.promise}</p>
              <div>
                {treatment.highlights.map((highlight) => (
                  <small key={highlight}>{highlight}</small>
                ))}
              </div>
            </div>
          </div>
        </section>

        {treatment.slug === "laser-haarentfernung" && (
          <section className="service-machine shell" aria-labelledby="laser-device-title">
            <div>
              <p className="eyebrow">Soprano ICE Platinum</p>
              <h2 id="laser-device-title">Komfortable Laser-Technologie mit Fachkunde.</h2>
              <p>
                Drei Wellenlängen, In-Motion-Technik und kontinuierliche ICE-Kühlung:
                Genau hier soll die Seite später Vertrauen aufbauen, weil Kundinnen in Mannheim
                nicht nur nach Preis suchen, sondern nach Sicherheit, Komfort und ehrlicher Beratung.
              </p>
            </div>
            <div className="service-machine-visual">
              <Image
                src="/media/soprano-ice-platinum.png"
                alt="Soprano ICE Platinum Lasergerät"
                width={676}
                height={1017}
                sizes="(max-width: 900px) 86vw, 34vw"
              />
              <span><ShieldCheck aria-hidden="true" /> NiSV-Fachkunde</span>
            </div>
          </section>
        )}

        <section className="service-pricing section-pad" id="preise">
          <div className="shell">
            <div className="service-section-heading">
              <p className="eyebrow">Preise</p>
              <h2>
                {treatment.slug === "laser-haarentfernung"
                  ? "Laserpreise klar im Überblick."
                  : treatment.price.label === "auf Anfrage"
                    ? `${treatment.name} individuell geplant.`
                    : `${treatment.name} ab ${treatment.price.label}.`}
              </h2>
              <p>
                {treatment.slug === "laser-haarentfernung"
                  ? "Einzelzonen eignen sich für gezielte Bereiche. Pakete lohnen sich, wenn mehrere Zonen zusammen geplant werden."
                  : treatment.price.detail}
              </p>
            </div>

            {treatment.slug === "laser-haarentfernung" ? (
              <>
                <div className="service-package-grid" aria-label="Laser Paketpreise">
                  {laserPackages.map((item) => (
                    <article className={item.featured ? "featured" : ""} key={item.name}>
                      <span>{item.name}</span>
                      <strong>{item.price}</strong>
                      <p>{item.detail}</p>
                      <small>{item.note}</small>
                    </article>
                  ))}
                </div>
                <div className="zone-price-panel">
                  <div>
                    <p className="eyebrow">Einzelzonen</p>
                    <h3>Gezielt buchen ab 24 €.</h3>
                  </div>
                  <div className="zone-price-list">
                    {laserZones.map((zone) => (
                      <div key={`${zone.group}-${zone.name}`}>
                        <span>{zone.name}</span>
                        <strong>{zone.price}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="single-price-panel">
                <Icon aria-hidden="true" />
                <span>{treatment.price.note}</span>
                <strong>{treatment.price.label}</strong>
                <p>{treatment.price.detail}</p>
                <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Termin anfragen <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="service-details section-pad">
          <div className="shell service-detail-grid">
            <div>
              <p className="eyebrow">Warum diese Behandlung</p>
              <h2>Was Kundinnen daran schätzen.</h2>
            </div>
            <div className="service-list">
              {treatment.benefits.map((benefit) => (
                <article key={benefit}>
                  <Check aria-hidden="true" />
                  <p>{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-process shell">
          <div className="service-section-heading">
            <p className="eyebrow">Behandlungsablauf</p>
            <h2>So läuft der Termin ab.</h2>
            <p>
              Der genaue Ablauf hängt immer von Haut, Ziel und Behandlung ab.
              Diese Schritte geben Ihnen aber ein ehrliches Gefühl dafür, was vor Ort passiert.
            </p>
          </div>
          <div className="service-steps">
            {treatment.processSteps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-faq section-pad shell">
          <div className="service-section-heading">
            <p className="eyebrow">Fragen</p>
            <h2>Vor dem Termin kurz geklärt.</h2>
          </div>
          <div className="faq-list">
            {treatment.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="service-cta">
          <div className="shell">
            <p className="eyebrow light">S&O Beauty Salon Mannheim</p>
            <h2>{treatment.name} anfragen.</h2>
            <p>Schreiben Sie uns kurz per WhatsApp. Wir melden uns persönlich zurück und klären den passenden Termin.</p>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp öffnen
              <MessageCircle aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
