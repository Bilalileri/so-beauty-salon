"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  HeartHandshake,
  MessageCircle,
  Sparkles,
} from "lucide-react";

type CustomerJourneyTimelineProps = {
  whatsappUrl: string;
};

const customerJourney = [
  {
    title: "WhatsApp schreiben",
    text: "Sie senden kurz Ihre Wunschbehandlung und mögliche Zeiten. Wir melden uns persönlich zurück.",
    icon: MessageCircle,
  },
  {
    title: "Termin & Beratung",
    text: "Wir klären offene Fragen, bestätigen den Termin und besprechen vor Ort Haut, Ziel und Ablauf.",
    icon: HeartHandshake,
  },
  {
    title: "Behandlung & Pflege",
    text: "Die Anwendung läuft ruhig und passend zu Ihnen. Danach erhalten Sie klare Hinweise zur Nachpflege.",
    icon: Sparkles,
  },
];

export function CustomerJourneyTimeline({ whatsappUrl }: CustomerJourneyTimelineProps) {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (!timelineRef.current) {
        return;
      }

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * 0.7;
      const end = rect.height - viewportHeight * 0.18;
      const nextProgress = (start - rect.top) / Math.max(end, 1);

      setProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const timelineStyle = {
    "--journey-progress": progress,
  } as CSSProperties;

  return (
    <div
      className="customer-journey timeline-journey"
      ref={timelineRef}
      style={timelineStyle}
      aria-label="Kundenablauf bei S&O Beauty Salon"
    >
      <div className="timeline-rail" aria-hidden="true">
        <span className="timeline-rail-fill" />
        <span className="timeline-runner" />
      </div>

      {customerJourney.map((step, index) => {
        const Icon = step.icon;
        const isFinalStep = index === customerJourney.length - 1;

        return (
          <article className="timeline-step" key={step.title}>
            <div className="timeline-point" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
              </div>
              <p className="timeline-kicker">Schritt {index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {isFinalStep ? (
                <a className="timeline-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Termin per WhatsApp <ArrowUpRight aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
