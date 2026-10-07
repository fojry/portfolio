"use client";

import React, { useState, useRef } from "react";
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
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | "none">("none");
  const [animatingKey, setAnimatingKey] = useState(0);

  // Swipe / Drag interactive state
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const isPointerDown = useRef(false);
  const hasMoved = useRef(false);

  const total = works.length;
  const currentWork = works[currentIndex] || works[0];

  const goToSlide = (newIndex: number, direction: "next" | "prev") => {
    setSlideDirection(direction);
    setCurrentIndex(newIndex);
    setAnimatingKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    const newIdx = currentIndex === 0 ? total - 1 : currentIndex - 1;
    goToSlide(newIdx, "prev");
  };

  const handleNext = () => {
    const newIdx = currentIndex === total - 1 ? 0 : currentIndex + 1;
    goToSlide(newIdx, "next");
  };

  const handleTabClick = (idx: number) => {
    if (idx === currentIndex) return;
    goToSlide(idx, idx > currentIndex ? "next" : "prev");
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    isPointerDown.current = true;
    hasMoved.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPointerDown.current) return;
    const diff = e.touches[0].clientX - dragStartX.current;
    if (Math.abs(diff) > 8) {
      hasMoved.current = true;
      setIsDragging(true);
      setDragOffset(diff * 0.7);
    }
  };

  const handleTouchEnd = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    setIsDragging(false);

    if (dragOffset < -50) {
      handleNext();
    } else if (dragOffset > 50) {
      handlePrev();
    }
    setDragOffset(0);
  };

  // Mouse handlers for desktop swipe/drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    dragStartX.current = e.clientX;
    isPointerDown.current = true;
    hasMoved.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPointerDown.current) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 8) {
      hasMoved.current = true;
      setIsDragging(true);
      setDragOffset(diff * 0.7);
    }
  };

  const handleMouseUp = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    setIsDragging(false);

    if (dragOffset < -50) {
      handleNext();
    } else if (dragOffset > 50) {
      handlePrev();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isPointerDown.current) {
      handleMouseUp();
    }
  };

  const handleCardClick = () => {
    if (hasMoved.current) {
      // Swiped, do not trigger modal/collection
      return;
    }
    onOpenCollection(currentWork.slug);
  };

  // Representative thumbnail for the current work
  const heroMedia = currentWork.media[0];
  const activePreviewMedia =
    (currentWork.slug === "design"
      ? currentWork.media.find((m) => m.id === "ds-3")
      : heroMedia) || heroMedia;

  const thumbnailSrc =
    currentWork.thumbnail ||
    (currentWork.slug === "design"
      ? "/projects/kecoapng.png"
      : currentWork.slug === "motion-graphic"
      ? "/projects/bukaruangg.png"
      : currentWork.slug === "edited-gaming-moments"
      ? "/projects/tamnelbekrum2.png"
      : heroMedia?.thumbnail || "/projects/rosblos.png");

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

          {/* Main Stage Canvas with Drag & Slide */}
          <div
            className={`${styles.stageCard} ${isDragging ? styles.isDragging : ""}`}
            data-cursor="view"
            onClick={handleCardClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                handlePrev();
              } else if (e.key === "ArrowRight") {
                handleNext();
              } else if (e.key === "Enter" || e.key === " ") {
                handleCardClick();
              }
            }}
          >
            {/* Animated Slide Content */}
            <div
              key={animatingKey}
              className={`${styles.slideContent} ${
                slideDirection === "next"
                  ? styles.slideFromRight
                  : slideDirection === "prev"
                  ? styles.slideFromLeft
                  : ""
              }`}
              style={{
                transform: dragOffset !== 0 ? `translateX(${dragOffset}px)` : undefined,
                transition: isDragging ? "none" : undefined,
              }}
            >
              {/* Background image preview */}
              <div className={styles.imageLayer}>
                <Image
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
                {currentWork.contentWarning && (
                  <div className={styles.stageWarningPill}>
                    <svg
                      className={styles.warningPillIcon}
                      viewBox="0 0 24 24"
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>Warning: Explicit Language &amp; Loud Audio</span>
                  </div>
                )}
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
                    <span className={styles.arrowIcon} aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </span>
                  {activePreviewMedia && (
                    <span
                      className={styles.playChip}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectMedia(activePreviewMedia);
                      }}
                    >
                      {activePreviewMedia.type === "image" ? (
                        <>
                          <svg
                            viewBox="0 0 24 24"
                            width="13"
                            height="13"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginRight: 6, display: "inline-block", verticalAlign: "-2px" }}
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          <span>View Preview</span>
                        </>
                      ) : (
                        <>
                          <svg
                            viewBox="0 0 24 24"
                            width="11"
                            height="11"
                            fill="currentColor"
                            style={{ marginRight: 6, display: "inline-block", verticalAlign: "-1px" }}
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          <span>Play Preview</span>
                        </>
                      )}
                    </span>
                  )}
                </div>
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
                onClick={() => handleTabClick(idx)}
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
