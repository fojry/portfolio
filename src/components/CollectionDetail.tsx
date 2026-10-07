"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkCollection, MediaItem, CONTACT_EMAIL } from "@/data/portfolioData";
import LazyVideo from "@/components/LazyVideo";
import styles from "./CollectionDetail.module.css";

interface CollectionDetailProps {
  collection: WorkCollection;
  allCollections?: WorkCollection[];
  onBack: () => void;
  onSelectMedia: (item: MediaItem) => void;
  onSelectCollection?: (slug: string) => void;
}

export default function CollectionDetail({
  collection,
  allCollections = [],
  onBack,
  onSelectMedia,
  onSelectCollection,
}: CollectionDetailProps) {
  // Handle escape key to go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onBack();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  // Lock body scroll while collection detail view is active
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const getPlatformLabel = (item: MediaItem): string => {
    if (
      item.type === "Trailer Short Film" ||
      item.type.toLowerCase().includes("trailer")
    )
      return "TRAILER SHORT FILM";
    if (collection.slug === "livestreaming-event") return "YOUTUBE";
    if (item.type === "youtube") return "YOUTUBE";
    if (item.type === "tiktok") return "TIKTOK";
    if (item.type === "behance" || item.src.includes("behance.net"))
      return "BEHANCE";
    if (item.type === "instagram") return "INSTAGRAM";
    if (item.type === "video") return "VIDEO";
    return item.type.toUpperCase();
  };

  const getPlatformWatchText = (item: MediaItem): string => {
    if (
      item.type === "Trailer Short Film" ||
      item.type.toLowerCase().includes("trailer")
    )
      return "Watch Trailer";
    if (collection.slug === "livestreaming-event") return "Watch on YouTube";
    if (item.type === "youtube") return "Watch on YouTube";
    if (item.type === "tiktok") return "Watch on TikTok";
    if (item.type === "behance" || item.src.includes("behance.net"))
      return "View on Behance";
    if (item.type === "instagram") return "View on Instagram";
    if (item.type === "video") return "Watch Video";
    if (item.type === "image") return "View Image";
    return "View Media";
  };

  return (
    <div
      className={styles.viewOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={collection.title}
    >
      {/* Topbar Navigation matching SECONDSLIDE.png */}
      <header className={styles.topbar}>
        <Link
          href="#/"
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          FAJRY RADIANT
        </Link>

        <nav className={styles.socialNav} aria-label="Social Links">
          <a
            href="https://www.instagram.com/fajryradiant/"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@simpangbojack"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            TikTok
          </a>
          <a
            href="https://www.youtube.com/@fojry"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            YouTube
          </a>
          <a
            href="https://discord.com/channels/@me/790150016642973707"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            Discord
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={styles.socialLink}
          >
            Email
          </a>
          <a
            href="https://saweria.co/fojry"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            Saweria
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className={styles.contentWrapper}>
        {/* Header Block: Back Button & Title Info */}
        <div className={styles.headerBlock}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={onBack}
            aria-label="Back to homepage"
          >
            <span className={styles.backArrow}>‹</span>
            <span>Back</span>
          </button>

          <div className={styles.titleArea}>
            <p className={styles.eyebrow}>
              {collection.detailTagline.toUpperCase()}
            </p>
            <h1 className={styles.collectionTitle}>{collection.title}</h1>
            <p className={styles.collectionDesc}>
              {collection.description || collection.summary}
            </p>
          </div>

          {/* Explicit Content & Loud Audio Warning Banner */}
          {collection.contentWarning && (
            <div className={styles.warningBox}>
              <div className={styles.warningBoxTop}>
                <svg
                  className={styles.warningIconBig}
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <div className={styles.warningBoxContent}>
                  <div className={styles.warningBoxBadge}>
                    {collection.contentWarning.badge}
                  </div>
                  <h3 className={styles.warningBoxTitle}>
                    {collection.contentWarning.title}
                  </h3>
                  <p className={styles.warningBoxDesc}>
                    {collection.contentWarning.description}
                  </p>
                </div>
              </div>
              {collection.contentWarning.tags && (
                <div className={styles.warningTagsRow}>
                  {collection.contentWarning.tags.map((tag) => (
                    <span key={tag} className={styles.warningTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Quick Collection Switcher Pills if multiple collections */}
          {allCollections.length > 1 && onSelectCollection && (
            <div className={styles.tabsBar} role="tablist">
              {allCollections.map((col) => {
                const isActive = col.slug === collection.slug;
                return (
                  <button
                    key={col.slug}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.tabPill} ${
                      isActive ? styles.tabPillActive : ""
                    }`}
                    onClick={() => onSelectCollection(col.slug)}
                  >
                    <span>{col.label || col.title}</span>
                    <span style={{ opacity: 0.5 }}>({col.media.length})</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 3-Column Responsive Media Grid */}
        <div className={styles.grid}>
          {collection.media.map((item) => {
            const platform = getPlatformLabel(item);
            const watchText = getPlatformWatchText(item);
            const thumbSrc =
              item.thumbnail ||
              item.src ||
              collection.thumbnailVideo ||
              "/projects/rosblox.png";
            const author =
              collection.slug === "edited-gaming-moments" ? "bojack" : "Fajry";
            const avatarSrc =
              collection.slug === "edited-gaming-moments"
                ? "/PP%20BARU%20bg%20white.png"
                : "/fajry-avatar.jpg";

            return (
              <article
                key={item.id}
                className={styles.card}
                onClick={() => onSelectMedia(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onSelectMedia(item);
                  }
                }}
              >
                {/* 16:9 Thumbnail Area */}
                <div className={styles.previewWrap}>
                  {/* Thumbnail Image or Video Preview */}
                  {thumbSrc.endsWith(".mp4") || thumbSrc.endsWith(".webm") ? (
                    <LazyVideo
                      src={thumbSrc}
                      className={styles.previewImage}
                      muted
                      playsInline
                      autoPlay={false}
                      loop={false}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      title={item.title}
                    />
                  ) : (
                    <Image
                      src={thumbSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.previewImage}
                    />
                  )}

                  {/* Shading Vignette */}
                  <div className={styles.previewGradient} />

                  {/* Channel / Author Badge in Top-Left */}
                  <div className={styles.authorBadge}>
                    <img
                      src={avatarSrc}
                      alt={author}
                      className={styles.authorAvatar}
                    />
                    <div className={styles.authorTexts}>
                      <span className={styles.authorVideoTitle}>
                        {item.title}
                      </span>
                      <span className={styles.authorName}>{author}</span>
                    </div>
                  </div>

                  {/* Warning Badge for Loud Sound / Explicit Language */}
                  {(item.warning || collection.slug === "edited-gaming-moments") && (
                    <span
                      className={styles.cardWarningBadge}
                      title="Warning: Explicit language & loud audio"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="10"
                        height="10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ display: "inline-block", verticalAlign: "-1px", marginRight: "4px" }}
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      16+ Loud / Explicit
                    </span>
                  )}

                  {/* Center Play Button Badge (omitted for image and design assets) */}
                  {item.type !== "image" &&
                    item.id !== "ds-2" &&
                    item.id !== "ds-3" &&
                    item.id !== "ds-4" && (
                      <div className={styles.centerPlay} aria-hidden="true">
                        {item.type === "youtube" ||
                        collection.slug === "livestreaming-event" ? (
                          <div className={styles.ytPlayBtn}>
                            <div className={styles.ytPlayIcon} />
                          </div>
                        ) : item.type === "behance" ||
                          item.src.includes("behance.net") ? (
                          <div className={styles.behanceCenterBtn}>
                            <span>Bē</span>
                          </div>
                        ) : (
                          <div className={styles.genericPlayBtn}>
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                              <polygon points="6 4 20 12 6 20 6 4" />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}

                  {/* Bottom Frosted Bar (Link + Platform Chip) */}
                  <div className={styles.previewBottomBar}>
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.linkIconBubble}
                      title="Open source"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </a>

                    <a
                      href={item.src}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.watchPlatformChip}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {(item.type === "youtube" ||
                        collection.slug === "livestreaming-event") && (
                        <span className={styles.ytRedIcon}>▶</span>
                      )}
                      <span>{watchText}</span>
                    </a>
                  </div>
                </div>

                {/* Lower Card Info Row */}
                <div className={styles.metaRow}>
                  <div className={styles.infoColumn}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.platformText}>{platform}</p>
                  </div>

                  <button
                    type="button"
                    className={styles.openBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectMedia(item);
                    }}
                  >
                    OPEN
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
