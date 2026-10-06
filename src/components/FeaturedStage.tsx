"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WorkCollection, MediaItem } from "@/data/portfolioData";
import styles from "./FeaturedStage.module.css";

interface FeaturedStageProps {
  works: WorkCollection[];
  onSelectMedia: (item: MediaItem) => void;
  onOpenCollection: (slug: string) => void;
}

export default function FeaturedStage({
  works,
  onSelectMedia,
  onOpenCollection,
}: FeaturedStageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = works.length;
  const currentWork = works[currentIndex] || works[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Representative thumbnail for the current work
  const heroMedia = currentWork.media[0];
  const thumbnailSrc =
    heroMedia?.thumbnail ||
    (currentWork.slug === "edited-gaming-moments"
      ? "/projects/tamnelbekrum2.png"
      : currentWork.slug === "design"
      ? "/character-banner.jpg"
      : "/projects/rosblox.png");

  return (
    <section className={styles.stageSection} id="works">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerWrap}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Since 2022
          </p>
          <h2 className={styles.title}>Featured Work</h2>
          <p className={styles.subtitle}>
            A curated showcase of video production, rhythm-driven gaming edits,
            kinetic motion graphics, and visual design systems.
          </p>
        </div>

        {/* Center Stage Card & Arrows */}
        <div className={styles.sliderWrap}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={handlePrev}
            aria-label="Previous work"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Main Stage Canvas */}
          <div
            className={styles.stageCard}
            data-cursor="view"
            onClick={() => {
              onOpenCollection(currentWork.slug);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onOpenCollection(currentWork.slug);
              }
            }}
          >
            {/* Background image preview */}
            <div className={styles.imageLayer}>
              <Image
                key={currentWork.slug}
                src={thumbnailSrc}
                alt={currentWork.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className={styles.stageImage}
                priority
              />
            </div>

            {/* Gradient shadow overlay */}
            <div className={styles.stageGradient} />

            {/* Top-left Counter Pill */}
            <span className={styles.counterBadge}>
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            {/* Top-right Tag */}
            <span className={styles.categoryBadge}>
              {currentWork.detailTagline}
            </span>

            {/* Bottom Content Info */}
            <div className={styles.stageInfo}>
              <h3 className={styles.stageTitle}>{currentWork.title}</h3>
              <p className={styles.stageDesc}>{currentWork.summary}</p>

              <div className={styles.stageActions}>
                <span
                  className={styles.actionChip}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCollection(currentWork.slug);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.stopPropagation();
                      onOpenCollection(currentWork.slug);
                    }
                  }}
                >
                  <span>Explore Collection ({currentWork.media.length})</span>
                  <span className={styles.arrowIcon}>↗</span>
                </span>
                {heroMedia && (
                  <span
                    className={styles.playChip}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectMedia(heroMedia);
                    }}
                  >
                    ▶ Play Preview
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            className={styles.navBtn}
            onClick={handleNext}
            aria-label="Next work"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Tab switcher row */}
        <div className={styles.tabsRow}>
          {works.map((work, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={work.slug}
                type="button"
                className={`${styles.tabBtn} ${
                  isActive ? styles.tabBtnActive : ""
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                {work.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
