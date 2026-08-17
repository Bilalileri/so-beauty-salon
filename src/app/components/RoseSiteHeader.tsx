"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "./ArrowUpRight";
import { treatments } from "../treatments";

type RoseSiteHeaderProps = {
  whatsappUrl: string;
};

const navigation = [
  { href: "/#technologie", label: "Technologie" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function RoseSiteHeader({ whatsappUrl }: RoseSiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="rose-header">
      <Link className="rose-brand" href="/#start" aria-label="S&O Beauty Salon Startseite">
        <span className="rose-logo-window" aria-hidden="true">
          <Image
            src="/brand/so-mark.png"
            alt=""
            width={2000}
            height={2000}
            sizes="96px"
            priority
          />
        </span>
        <span className="rose-wordmark">
          S&amp;O
          <small>Beauty Salon</small>
        </span>
      </Link>

      <nav className="rose-desktop-nav" aria-label="Hauptnavigation">
        <div className="rose-treatment-nav">
          <Link href="/#behandlungen">Behandlungen <span aria-hidden="true">↓</span></Link>
          <div className="rose-treatment-menu" data-desktop-service-menu>
            {treatments.map((treatment) => (
              <Link href={treatment.href} key={treatment.slug}>{treatment.name}<ArrowUpRight /></Link>
            ))}
          </div>
        </div>
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>{item.label}</Link>
        ))}
      </nav>

      <a className="rose-button rose-button-outline rose-header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        Termin anfragen <ArrowUpRight />
      </a>

      <button
        ref={menuButtonRef}
        className="rose-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="rose-mobile-menu"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true">{open ? "×" : "Menü"}</span>
      </button>

      <div
        className="rose-mobile-menu"
        id="rose-mobile-menu"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile Navigation">
          <Link href="/#behandlungen" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Behandlungen</Link>
          <div className="rose-mobile-treatment-menu" data-mobile-service-menu>
            {treatments.map((treatment) => (
              <Link href={treatment.href} key={treatment.slug} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                {treatment.name}<ArrowUpRight />
              </Link>
            ))}
          </div>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
        <a className="rose-button rose-button-paper" href={whatsappUrl} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
          Termin über WhatsApp <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
