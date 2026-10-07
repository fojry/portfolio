"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./IntroSection.module.css";

interface AudiencePersona {
  id: string;
  label: string;
  statement: string;
  tags: string[];
}

const PERSONAS: AudiencePersona[] = [
  {
    id: "anyone",
    label: "For anyone",
    statement:
      "I'm Fajry — a Visual Communication Design graduate who blends visual storytelling, video production, and a little creative chaos into edits that feel genuinely memorable and entertaining.",
    tags: ["Visual Storytelling", "Video Production", "Creative Edits"],
  },
  {
    id: "recruiters",
    label: "Recruiters",
    statement:
      "Trained across 4 years at Telkom University Purwokerto in graphic design, motion systems, and video workflows. Reliable, deadline-oriented, and adaptable across diverse commercial pipelines.",
    tags: ["DKV Telkom Univ", "Adobe Creative Suite", "Commercial Delivery"],
  },
  {
    id: "directors",
    label: "Creative Directors",
    statement:
      "A sharp eye for composition, color harmony, typography hierarchies, and frame pacing. I turn raw footage and creative briefs into polished cinematic narratives with intentional rhythm.",
    tags: ["Art Direction", "Frame Pacing", "Color & Hierarchy"],
  },
  {
    id: "creators",
    label: "Content Creators",
    statement:
      "Specialized in gaming moment edits, subtitle comedic timing, meme retention pacing, and viral short-form delivery across YouTube, TikTok, and Reels.",
    tags: ["Gaming Memes", "Kinetic Subtitles", "Viral Retention"],
  },
  {
    id: "collaborators",
    label: "Collaborators",
    statement:
      "Always excited to push visual boundaries, teaming up on experimental shorts, livestreaming event setups, sound syncs, and high-energy audiovisual cuts.",
    tags: ["Livestreaming Event", "Sound Design Sync", "Experimental Cuts"],
  },
];

export default function IntroSection() {
  const [activeId, setActiveId] = useState("anyone");
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<"below" | "visible" | "passed">("below");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setScrollState("visible");
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!cardRef.current) {
            ticking = false;
            return;
          }
          const rect = cardRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // When top of card is below 85% of viewport: not reached yet (below)
          // When bottom of card is above 120px: scrolled past it (passed)
          // Otherwise: in view (visible)
          if (rect.top > windowHeight * 0.85) {
            setScrollState("below");
          } else if (rect.bottom < 120) {
            setScrollState("passed");
          } else {
            setScrollState("visible");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const currentPersona =
    PERSONAS.find((p) => p.id === activeId) || PERSONAS[0];

  return (
    <section className={styles.introSection} id="about">
      <div className={styles.container}>
        {/* Left Column: Title & Audience Selector */}
        <div className={styles.leftCol}>
          <h2 className={styles.sectionTitle}>Intro</h2>

          <nav className={styles.personaNav} aria-label="Intro Audience Selector">
            {PERSONAS.map((p) => {
              const isActive = p.id === activeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  className={`${styles.personaBtn} ${
                    isActive ? styles.personaBtnActive : ""
                  }`}
                >
                  <span
                    className={`${styles.indicatorLine} ${
                      isActive ? styles.lineActive : ""
                    }`}
                  />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Column: Editorial Statement Card */}
        <div className={styles.rightCol}>
          <div
            ref={cardRef}
            className={`${styles.notepadCard} ${
              scrollState === "visible"
                ? styles.cardVisible
                : scrollState === "passed"
                ? styles.cardPassed
                : styles.cardBelow
            }`}
          >
            <div className={styles.badgeRow}>
              {currentPersona.tags.map((tag, idx) => (
                <span key={idx} className={styles.tagBadge}>
                  {tag}
                </span>
              ))}
            </div>

            <p key={currentPersona.id} className={styles.statementText}>
              {currentPersona.statement}
            </p>

            <div className={styles.cardFooter}>
              <span className={styles.locationTag}>
                📍 Jakarta, Indonesia &amp; Remote Available
              </span>
              <span className={styles.statusLive}>
                <span className={styles.livePulse} />
                Open for Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
