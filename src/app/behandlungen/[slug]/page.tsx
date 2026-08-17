import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "../../components/ArrowUpRight";
import { MobileBookingAction } from "../../components/MobileBookingAction";
import { RoseFooter } from "../../components/RoseFooter";
import { RoseSiteHeader } from "../../components/RoseSiteHeader";
import { ServiceFilm } from "../../components/ServiceFilm";
import { getTreatment, treatments, whatsappUrl } from "../../treatments";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beautyso.de";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = getTreatment((await params).slug);
  if (!treatment) return {};
  return {
    title: treatment.seoTitle,
    description: treatment.seoDescription,
    alternates: { canonical: treatment.href },
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
  const treatment = getTreatment((await params).slug);
  if (!treatment) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${treatment.href}#service`,
    name: `${treatment.name} Mannheim`,
    description: treatment.seoDescription,
    areaServed: ["Mannheim", "Ludwigshafen am Rhein", "Rhein-Neckar"],
    provider: { "@id": `${siteUrl}/#salon` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Behandlungen", item: `${siteUrl}/#behandlungen` },
      { "@type": "ListItem", position: 3, name: treatment.name, item: `${siteUrl}${treatment.href}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <RoseSiteHeader whatsappUrl={whatsappUrl} />

      <main className="service-redesign" data-booking-hero>
        <section className="service-redesign-hero rose-shell">
          <div className="service-redesign-copy">
            <nav className="service-breadcrumb" aria-label="Brotkrümelnavigation">
              <Link href="/">Startseite</Link><span>/</span><Link href="/#behandlungen">Behandlungen</Link>
            </nav>
            <h1>{treatment.seoTitle}</h1>
            <p className="service-lead">{treatment.intro}</p>
            <div className="service-redesign-actions">
              <a className="rose-button rose-button-wine" href={whatsappUrl} target="_blank" rel="noreferrer">
                Termin anfragen <ArrowUpRight />
              </a>
              <Link className="service-text-link" href="/#behandlungen">Alle Behandlungen ansehen <ArrowUpRight /></Link>
            </div>
          </div>
          <ServiceFilm
            src={treatment.video.src}
            label={treatment.video.label}
            objectPosition={treatment.video.objectPosition}
            mobileObjectPosition={"mobileObjectPosition" in treatment.video ? treatment.video.mobileObjectPosition : undefined}
            poster={"poster" in treatment.video ? treatment.video.poster : undefined}
          />
        </section>

        <section className="service-answer rose-shell" aria-labelledby="service-answer-title">
          <div>
            <h2 id="service-answer-title">{treatment.overviewTitle}</h2>
            <p>{treatment.overview}</p>
          </div>
        </section>

        <section className={`service-proof ${treatment.slug === "laser-haarentfernung" ? "service-proof-machine" : ""}`}>
          <div className="rose-shell service-proof-inner">
            <div className="service-proof-copy">
              <h2>{treatment.proofTitle}</h2>
              <p>{treatment.proof}</p>
              <ul>{treatment.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            </div>
            {treatment.slug === "laser-haarentfernung" && (
              <figure className="service-machine-figure">
                <Image src="/media/soprano-ice-platinum.png" alt="Soprano ICE Platinum Lasergerät" width={676} height={1017} sizes="(max-width: 820px) 80vw, 38vw" />
                <figcaption>NiSV-Fachkunde · Soprano ICE Platinum</figcaption>
              </figure>
            )}
          </div>
        </section>

        <section className="service-process-redesign rose-shell" data-service-process>
          <header>
            <h2>So läuft Ihr Termin ab.</h2>
            <p>Vier klare Schritte – persönlich abgestimmt auf Haut, Ziel und Behandlung.</p>
          </header>
          <div className="service-process-track">
            {treatment.processSteps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-care" data-service-preparation data-service-aftercare>
          <div className="service-care-column service-care-before">
            <div>
              <p className="service-index">Vor dem Termin</p>
              <h2>Gut vorbereitet.</h2>
              <ul>{treatment.preparation.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <div className="service-care-column service-care-after">
            <div>
              <p className="service-index">Nach dem Termin</p>
              <h2>Ruhig nachpflegen.</h2>
              <ul>{treatment.aftercare.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="service-suitability rose-shell" data-service-suitability>
          <div>
            <h2>Eine ehrliche Einschätzung gehört dazu.</h2>
          </div>
          <div className="service-suitability-list">
            <article>
              <h3>Kann gut passen, wenn …</h3>
              <ul>{treatment.suitability.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <h3>Bitte vorher ansprechen …</h3>
              <ul>{treatment.askFirst.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className="service-faq-redesign rose-shell" data-service-faq>
          <header>
            <h2>Vor dem Termin kurz geklärt.</h2>
          </header>
          <div className="service-faq-list">
            {treatment.faq.map((item, index) => (
              <details key={item.question}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden="true">+</i></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="service-reading rose-shell" data-related-guides>
          <header>
            <h2>Mehr wissen, ruhiger entscheiden.</h2>
          </header>
          <div>
            {treatment.relatedGuides.map((guide) => (
              <Link href={guide.href} key={guide.href}><span>{guide.title}</span><ArrowUpRight /></Link>
            ))}
          </div>
        </section>

        <section className="service-close">
          <div className="rose-shell">
            <p>Noch unsicher, ob {treatment.name} zu Ihnen passt?</p>
            <h2>Schreiben Sie uns. Wir beraten persönlich.</h2>
            <a className="rose-button rose-button-paper" href={whatsappUrl} target="_blank" rel="noreferrer">Über WhatsApp anfragen <ArrowUpRight /></a>
          </div>
        </section>
      </main>

      <RoseFooter />
      <MobileBookingAction whatsappUrl={whatsappUrl} />
    </>
  );
}
