"use client";

import React, { useEffect, useCallback } from "react";
import styles from "./MediaModal.module.css";
import { MediaItem } from "@/data/portfolioData";

interface MediaModalProps {
  item: MediaItem | null;
  onClose: () => void;
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    if (url.includes("shorts/")) {
      const parts = url.split("shorts/");
      const id = parts[1]?.split(/[?&]/)[0];
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
    }
    if (url.includes("youtu.be/")) {
      const parts = url.split("youtu.be/");
      const id = parts[1]?.split(/[?&]/)[0];
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
    }
    if (url.includes("watch?v=")) {
      const urlObj = new URL(url);
      const id = urlObj.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export default function MediaModal({ item, onClose }: MediaModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (item) {
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const isPortrait =
    item.type === "tiktok" ||
    (item.type === "youtube" && item.src.includes("shorts")) ||
    (item.type === "instagram" && item.src.includes("reel"));

  const ytEmbed = item.type === "youtube" ? getYouTubeEmbedUrl(item.src) : null;
  const isDirectVideo =
    item.type === "video" ||
    item.type === "Trailer Short Film" ||
    item.type.toLowerCase().includes("trailer") ||
    item.src.endsWith(".mp4") ||
    item.src.endsWith(".webm");

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className={styles.mediaModal}>
        <button
          className={styles.modalClose}
          type="button"
          onClick={onClose}
          aria-label="Close media"
        >
          Close
        </button>

        <div className={styles.modalBody}>
          <div
            className={`${styles.modalMediaWrap} ${
              isPortrait ? styles.isPortraitMedia : ""
            }`}
          >
            {item.warning && (
              <div className={styles.modalWarningBanner}>
                <svg
                  className={styles.modalWarningIcon}
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#fca5a5"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <div className={styles.modalWarningContent}>
                  <strong className={styles.modalWarningTitle}>
                    Content Warning: Explicit Language &amp; Loud Audio
                  </strong>
                  <span className={styles.modalWarningText}>
                    This video contains explicit language and sudden loud audio effects. Please adjust your audio volume before watching.
                  </span>
                </div>
              </div>
            )}

            {ytEmbed ? (
              <iframe
                className={styles.modalEmbed}
                src={ytEmbed}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : isDirectVideo ? (
              <video
                className={styles.modalEmbed}
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source
                  src={item.src}
                  type={item.src.endsWith(".webm") ? "video/webm" : "video/mp4"}
                />
                Your browser does not support the video tag.
              </video>
            ) : item.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={styles.modalImage}
                src={item.src}
                alt={item.title}
              />
            ) : item.type === "behance" || item.src.includes("behance.net") ? (
              <div className={styles.behanceCard}>
                {item.thumbnail ? (
                  <div className={styles.behanceImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={styles.behanceImage}
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <div className={styles.behanceImageOverlay} />
                  </div>
                ) : null}
                <div className={styles.behanceContent}>
                  <div className={styles.behanceBadge}>
                    <span className={styles.behanceBadgeIcon}>Bē</span>
                    <span>Behance Project</span>
                  </div>
                  <h2 className={styles.behanceTitle}>{item.title}</h2>
                  <p className={styles.behanceDesc}>
                    Lihat dokumentasi visual, sinematografi, dan stills lengkap dari proyek ini langsung di Behance.
                  </p>
                  <a
                    className={styles.behanceCta}
                    href={item.src}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buka di Behance ↗
                  </a>
                </div>
              </div>
            ) : (
              <div
                style={{
                  padding: "3rem 1.5rem",
                  textAlign: "center",
                  display: "grid",
                  gap: "1rem",
                  placeItems: "center",
                }}
              >
                <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
                  {item.title}
                </p>
                <p style={{ margin: 0, color: "var(--muted)" }}>
                  Direct playback for {item.type} can be viewed directly on the
                  platform.
                </p>
              </div>
            )}

            {item.type !== "behance" && !item.src.includes("behance.net") && (
              <a
                className={styles.modalSourceLink}
                href={item.src}
                target="_blank"
                rel="noreferrer"
              >
                Open original
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
