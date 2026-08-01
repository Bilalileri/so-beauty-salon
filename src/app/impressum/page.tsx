import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/">← Zurück zur Startseite</Link>
        <p className="eyebrow">Rechtliche Angaben</p>
        <h1>Impressum</h1>
        <p className="legal-draft">
          Entwurf für die Vorschau: Vor Veröffentlichung müssen der vollständige Name
          der Inhaberin und gegebenenfalls weitere Pflichtangaben ergänzt und geprüft werden.
        </p>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          S&O Beauty Salon<br />
          [Vollständiger Name der Inhaberin ergänzen]<br />
          Q1, 7<br />
          68161 Mannheim<br />
          Deutschland
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 15565 855752<br />
          E-Mail: info@beautyso.de
        </p>
      </div>
    </main>
  );
}
