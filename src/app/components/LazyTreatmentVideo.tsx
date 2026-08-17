"use client";

import { useEffect, useRef, useState } from "react";

type LazyTreatmentVideoProps = {
  src: string;
  label: string;
};

export function LazyTreatmentVideo({ src, label }: LazyTreatmentVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "260px 0px" },
    );

    observer.observe(wrapper);

    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    videoRef.current?.play().catch(() => {
      // Autoplay can be interrupted by the browser; the visual fallback remains.
    });
  }, [shouldLoad]);

  return (
    <div className="lazy-treatment-video" ref={wrapperRef}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          aria-label={label}
        />
      ) : null}
    </div>
  );
}
