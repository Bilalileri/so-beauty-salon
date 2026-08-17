"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "./ArrowUpRight";

export type TreatmentFilm = {
  name: string;
  href: string;
  src: string;
  poster?: string;
  label: string;
  caption?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
};

type TreatmentFilmSelectorProps = {
  films: TreatmentFilm[];
};

export function TreatmentFilmSelector({ films }: TreatmentFilmSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stageRef = useRef<HTMLElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeFilm = films[activeIndex];

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || reducedMotion) {
        video.pause();
        return;
      }
      video.play().catch(() => undefined);
    }, { threshold: 0.35 });

    observer.observe(stage);
    return () => observer.disconnect();
  }, [activeIndex, reducedMotion]);

  const selectFilm = (index: number, focus = false) => {
    setActiveIndex(index);
    if (focus) window.requestAnimationFrame(() => tabRefs.current[index]?.focus());
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % films.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + films.length) % films.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = films.length - 1;
    if (nextIndex === index) return;
    event.preventDefault();
    selectFilm(nextIndex, true);
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => undefined);
    else video.pause();
  };

  return (
    <div className="rose-film-layout">
      <figure className="rose-film-stage" ref={stageRef}>
        <video
          key={activeFilm.src}
          ref={videoRef}
          data-treatment-film="active"
          muted
          loop
          playsInline
          preload="metadata"
          poster={activeFilm.poster}
          aria-label={activeFilm.label}
          style={{
            "--film-position": activeFilm.objectPosition ?? "50% 50%",
            "--film-position-mobile": activeFilm.mobileObjectPosition ?? activeFilm.objectPosition ?? "50% 50%",
          } as CSSProperties}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={activeFilm.src} type="video/mp4" />
        </video>
        <button
          className="rose-video-toggle"
          data-video-toggle
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? `${activeFilm.name} pausieren` : `${activeFilm.name} abspielen`}
        >
          {playing ? "Pause" : reducedMotion ? "Film abspielen" : "Abspielen"}
        </button>
        <figcaption>
          <span>{activeFilm.caption ?? activeFilm.name}</span>
        </figcaption>
      </figure>

      <div>
        <div className="rose-film-tabs" role="tablist" aria-label="Behandlungsfilm auswählen">
          {films.map((film, index) => {
            const selected = index === activeIndex;
            return (
              <div className="rose-film-tab-row" data-active={selected ? "true" : "false"} key={film.name}>
                <button
                  className="rose-film-tab"
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  onClick={() => selectFilm(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{film.name}</strong>
                  <span aria-hidden="true">{selected ? "Aktiv" : "Vorschau"}</span>
                </button>
                <Link className="rose-film-service-link" href={film.href} aria-label={`${film.name}: Behandlungsseite öffnen`}>
                  Zur Behandlung <ArrowUpRight />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
