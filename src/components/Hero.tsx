"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  onScrollDown?: () => void;
}

const PHRASES = ["Hello everyone, its-", "Fajry Radiant"];
const FINAL_NAME = "Fajry Radiant";

export default function Hero({ onScrollDown }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Smooth small-to-large kinetic blooming sequence:
  // 1. "Hello everyone, its-" grows smoothly from small to full size -> holds -> smooth fade/exit
  // 2. "Fajry Radiant" blooms into full focus -> subtitle smoothly appears
  useEffect(() => {
    let isCancelled = false;
    const timeouts: Array<ReturnType<typeof setTimeout>> = [];

    const schedule = (fn: () => void, delay: number) => {
      const id = setTimeout(() => {
        if (!isCancelled) fn();
      }, delay);
      timeouts.push(id);
      return id;
    };

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPhraseIndex(PHRASES.length - 1);
      setShowSubtitle(true);
      return;
    }

    // Phase 1: "Hello everyone, its-" grows smoothly from small to full size
    // Start exit at 1200ms
    schedule(() => {
      setIsExiting(true);
    }, 1200);

    // Phase 2: Mount final "Fajry Radiant" at 1600ms (after 400ms smooth exit)
    schedule(() => {
      setPhraseIndex(1);
      setIsExiting(false);
    }, 1600);

    // Reveal subtitle after final name settles smoothly
    schedule(() => {
      setShowSubtitle(true);
    }, 2250);

    return () => {
      isCancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // Subtle ambient floating dust/particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      dx: number;
      dy: number;
    }> = [];

    const numParticles = Math.min(35, Math.floor(width / 35));
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.35 + 0.1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className={styles.heroSection} id="top">
      {/* Canvas ambient background */}
      <canvas ref={canvasRef} className={styles.canvasBg} aria-hidden="true" />

      {/* Main hero typography & copy */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle} aria-label={FINAL_NAME}>
          <span
            key={phraseIndex}
            className={`${styles.heroName} ${
              phraseIndex === PHRASES.length - 1
                ? styles.heroNameFinal
                : isExiting
                ? styles.heroNameExit
                : styles.heroNameEnter
            }`}
            aria-hidden="true"
          >
            {PHRASES[phraseIndex]}
            {phraseIndex === PHRASES.length - 1 && (
              <span className={styles.heroDot}>.</span>
            )}
          </span>
        </h1>

        <p
          className={`${styles.heroSubtitle} ${
            showSubtitle ? styles.heroSubtitleVisible : ""
          }`}
        >
          Visual Communication Designer &amp; Creative Video Editor who loves
          beautiful things and blends creativity, rhythm, and kinetic motion
          into every build.
        </p>
      </div>

      {/* Scroll cue indicator */}
      <div
        className={styles.scrollCue}
        onClick={onScrollDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll to content"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onScrollDown?.();
          }
        }}
      >
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollTrack} aria-hidden="true">
          <div className={styles.scrollBar} />
        </div>
      </div>
    </section>
  );
}
