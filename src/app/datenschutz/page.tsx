import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/">← Zurück zur Startseite</Link>
        <p className="eyebrow">Rechtliche Angaben</p>
        <h1>Datenschutz</h1>
        <p className="legal-draft">
          Entwurf für die Vorschau: Die verantwortliche Person und die Angaben des späteren
          Vercel-Hostings müssen vor Veröffentlichung vollständig ergänzt und rechtlich geprüft werden.
        </p>
        <h2>Verantwortliche Stelle</h2>
        <p>
          S&O Beauty Salon<br />
          [Vollständiger Name der verantwortlichen Person ergänzen]<br />
          Q1, 7, 68161 Mannheim<br />
          E-Mail: info@beautyso.de
        </p>
        <h2>Technischer Betrieb</h2>
        <p>
          Die Website ist als datensparsame Landingpage angelegt. Sie verwendet derzeit keine
          Analyse- oder Marketing-Cookies und bindet das Hero-Video sowie Schriften lokal ein.
          Beim Aufruf können technisch notwendige Server-Protokolldaten durch den Hostinganbieter
          verarbeitet werden.
        </p>
        <h2>Kontakt über WhatsApp</h2>
        <p>
          Wenn Sie den WhatsApp-Link öffnen, verlassen Sie diese Website. Für die anschließende
          Verarbeitung gelten zusätzlich die Datenschutzbestimmungen des von Ihnen genutzten
          WhatsApp-Dienstes. Der Kontakt erfolgt freiwillig.
        </p>
      </div>
    </main>
  );
}
