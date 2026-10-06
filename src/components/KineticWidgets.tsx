"use client";

import React, { useState } from "react";
import styles from "./KineticWidgets.module.css";

// Animated Audio Waveform
export function AudioWaveform() {
  return (
    <div className={styles.waveformContainer} title="Live Audio/Motion Sync">
      <div className={styles.waveBar} style={{ animationDelay: "0s" }} />
      <div className={styles.waveBar} style={{ animationDelay: "0.2s" }} />
      <div className={styles.waveBar} style={{ animationDelay: "0.4s" }} />
      <div className={styles.waveBar} style={{ animationDelay: "0.15s" }} />
      <div className={styles.waveBar} style={{ animationDelay: "0.35s" }} />
    </div>
  );
}

// Scrambled Glitch Text on Hover
export function GlitchText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(text);
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@!$%";

  const handleMouseEnter = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 25);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={`${styles.glitchText} ${className}`}
    >
      {displayText}
    </span>
  );
}

// Targeting Kinetic Crosshair Mark
export function KineticCrosshair() {
  return (
    <div className={styles.crosshair}>
      <div className={styles.crosshairH} />
      <div className={styles.crosshairV} />
      <div className={styles.crosshairCircle} />
    </div>
  );
}

// Pulsing Live Radar Signal
export function PulsingSignal({ label }: { label?: string }) {
  return (
    <div className={styles.signalWrapper}>
      <span className={styles.signalPill}>
        <span className={styles.pingDot} />
        <span className={styles.coreDot} />
      </span>
      {label && <span className={styles.signalLabel}>{label}</span>}
    </div>
  );
}
