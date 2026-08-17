import Image from "next/image";
import Link from "next/link";
import { treatments } from "../treatments";

export function RoseFooter() {
  return (
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
          {treatments.map((treatment) => (
            <Link href={treatment.href} key={treatment.slug}>{treatment.name}</Link>
          ))}
          <Link href="/ratgeber">Ratgeber</Link>
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
  );
}
