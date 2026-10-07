"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  title?: string;
}

export default function LazyVideo({
  src,
  poster,
  className,
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  playsInline = true,
  title,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      // Fallback for environments without IntersectionObserver
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When within 250px of viewport, load the video
            setShouldLoad(true);
            if (autoPlay && el) {
              const playPromise = el.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => setIsPlaying(true))
                  .catch(() => {
                    // Autoplay might be restricted before interaction
                  });
              }
            }
          } else {
            // Pause when out of view to save CPU, GPU & battery
            if (el && !el.paused) {
              el.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        rootMargin: "250px 0px 250px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  const mimeType = src.endsWith(".webm") ? "video/webm" : "video/mp4";

  return (
    <video
      ref={videoRef}
      poster={poster}
      className={className}
      style={style}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline={playsInline}
      preload={shouldLoad ? "metadata" : "none"}
      title={title}
      aria-label={title}
    >
      {shouldLoad && <source src={src} type={mimeType} />}
    </video>
  );
}
