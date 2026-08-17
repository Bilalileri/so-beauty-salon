"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ServiceFilmProps = {
  label: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
  poster?: string;
  src: string;
};

export function ServiceFilm({ label, mobileObjectPosition, objectPosition = "50% 50%", poster, src }: ServiceFilmProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setReducedMotion(motionQuery.matches);
      if (motionQuery.matches) video.pause();
    };
    updateMotion();

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || motionQuery.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => undefined);
    }, { threshold: 0.35 });

    observer.observe(video);
    motionQuery.addEventListener("change", updateMotion);
    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => undefined);
    else video.pause();
  };

  return (
    <figure className="service-film">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        style={{
          "--film-position": objectPosition,
          "--film-position-mobile": mobileObjectPosition ?? objectPosition,
        } as CSSProperties}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        className="rose-video-toggle service-film-toggle"
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? `${label} pausieren` : `${label} abspielen`}
      >
        {playing ? "Pause" : reducedMotion ? "Film abspielen" : "Abspielen"}
      </button>
    </figure>
  );
}
