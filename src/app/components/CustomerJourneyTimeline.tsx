"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "./ArrowUpRight";

type CustomerJourneyTimelineProps = {
  whatsappUrl: string;
};

const steps = [
  {
    label: "Anfragen",
    title: "Kurze Nachricht senden.",
    text: "Nennen Sie Ihre Wunschbehandlung und mögliche Termine.",
  },
  {
    label: "Abstimmen",
    title: "Persönlich einschätzen.",
    text: "Wir klären Ziel, Haut und den passenden Ablauf in Ruhe.",
  },
  {
    label: "Ankommen",
    title: "Ruhig behandeln.",
    text: "Behandlung und Nachpflege werden verständlich besprochen.",
  },
];

export function CustomerJourneyTimeline({ whatsappUrl }: CustomerJourneyTimelineProps) {
  const trackRef = useRef<HTMLOListElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const start = window.innerHeight * 0.74;
      const end = window.innerHeight * 0.3;
      const distance = Math.max(rect.height + start - end, 1);
      const next = Math.min(1, Math.max(0, (start - rect.top) / distance));
      setProgress((current) => Math.abs(current - next) > 0.002 ? next : current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol
      className="rose-journey-track"
      aria-label="Ablauf Ihres Termins bei S&O Beauty Salon"
      data-journey-progress
      data-progress={progress.toFixed(3)}
      ref={trackRef}
      style={{ "--journey-progress": progress } as CSSProperties}
    >
      <li className="rose-journey-progress" role="presentation" aria-hidden="true" />
      {steps.map((step, index) => (
        <li data-reached={progress >= index / (steps.length - 1) ? "true" : "false"} key={step.label}>
          <span className="rose-journey-dot" aria-hidden="true" />
          <span className="rose-journey-meta">{String(index + 1).padStart(2, "0")} · {step.label}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          {index === steps.length - 1 ? (
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Termin anfragen <ArrowUpRight /></a>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
