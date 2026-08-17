"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

export function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPreference = () => {
      setReducedMotion(motionQuery.matches);
      if (motionQuery.matches) video.pause();
    };
    applyMotionPreference();

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || motionQuery.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => undefined);
    }, { threshold: 0.35 });

    observer.observe(video);
    motionQuery.addEventListener("change", applyMotionPreference);
    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", applyMotionPreference);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => undefined);
    else video.pause();
  };

  return (
    <>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/services/client-laser-poster.jpg"
        aria-label="Laser-Haarentfernung im S&O Beauty Salon"
        style={{
          "--film-position": "50% 50%",
          "--film-position-mobile": "50% 50%",
        } as CSSProperties}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/media/services/client-laser.mp4" type="video/mp4" />
      </video>
      <button
        className="rose-video-toggle"
        data-video-toggle
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? "Hero-Film pausieren" : "Hero-Film abspielen"}
      >
        {playing ? "Pause" : reducedMotion ? "Film abspielen" : "Abspielen"}
      </button>
    </>
  );
}
