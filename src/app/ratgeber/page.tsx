import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { MobileBookingAction } from "../components/MobileBookingAction";
import { RoseFooter } from "../components/RoseFooter";
import { RoseSiteHeader } from "../components/RoseSiteHeader";
import { whatsappUrl } from "../treatments";
import { articles } from "./articles";

export const metadata: Metadata = {
  title: "Ratgeber für Haut, Laser und Pflege",
  description: "Verständliche Hinweise zu Laser-Haarentfernung, Microneedling und Hautpflege vom S&O Beauty Salon Mannheim.",
  alternates: { canonical: "/ratgeber" },
};

export default function GuidePage() {
  return (
    <>
      <RoseSiteHeader whatsappUrl={whatsappUrl} />
      <main className="guide-hub">
        <section className="guide-hub-hero rose-shell">
          <p>Ratgeber · S&amp;O Beauty Salon Mannheim</p>
          <h1>Ratgeber für Haut, Laser und Pflege.</h1>
          <div>
            <p>Was ist vor einer Behandlung wichtig? Was gehört zur Nachpflege? Hier erklären wir die Fragen, die im Beratungsgespräch immer wieder auftauchen – ruhig, konkret und ohne Ergebnisversprechen.</p>
            <Link href="/#behandlungen">Behandlungen ansehen <ArrowUpRight /></Link>
          </div>
        </section>

        <section className="guide-index rose-shell" aria-label="Alle Ratgeberartikel">
          {articles.map((article, index) => (
            <article key={article.slug}>
              <div className="guide-index-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{article.category}</span>
                <span>{article.readingTime}</span>
              </div>
              <Link className="guide-index-link" href={`/ratgeber/${article.slug}`} aria-label={`${article.shortTitle} lesen`}>
                <span>
                  <h2>{article.shortTitle}</h2>
                  <p>{article.description}</p>
                </span>
                <i aria-hidden="true"><ArrowUpRight /></i>
              </Link>
            </article>
          ))}
        </section>

        <section className="guide-hub-close">
          <div className="rose-shell">
            <p>Ihre Frage ist noch offen?</p>
            <h2>Schreiben Sie uns direkt.</h2>
            <a className="rose-button rose-button-paper" href={whatsappUrl} target="_blank" rel="noreferrer">Über WhatsApp fragen <ArrowUpRight /></a>
          </div>
        </section>
      </main>
      <RoseFooter />
      <MobileBookingAction whatsappUrl={whatsappUrl} />
    </>
  );
}
