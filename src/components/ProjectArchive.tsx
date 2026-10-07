"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { MediaItem, WorkCollection, WORKS_DATA } from "@/data/portfolioData";
import styles from "./ProjectArchive.module.css";

interface ArchiveItem {
  id: string;
  name: string;
  category: string;
  year: string;
  image: string;
  media: MediaItem;
}

const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "arc-1",
    name: "ROBOKOP",
    category: "Every Table Has a Story",
    year: "2024",
    image: "/projects/robokop.jpg",
    media: {
      id: "robokop-film",
      type: "behance",
      title: "ROBOKOP : Every Table Has a Story",
      src: "https://www.behance.net/gallery/213382551/ROBOKOP-Every-Table-Has-a-Story",
      thumbnail: "/projects/robokop.jpg",
      sourceHref: "https://www.behance.net/gallery/213382551/ROBOKOP-Every-Table-Has-a-Story",
    },
  },
  {
    id: "arc-2",
    name: "Commercial Poster",
    category: "Commercial Banner Design",
    year: "2024",
    image: "/projects/periklanan.jpg",
    media: {
      id: "ds-2",
      type: "image",
      title: "Commercial Poster",
      src: "/projects/periklanan.jpg",
      thumbnail: "/projects/periklanan.jpg",
    },
  },
  {
    id: "arc-3",
    name: "Volume Gigs : podcast session",
    category: "Podcast Session",
    year: "2026",
    image: "/projects/IMG_9535.PNG",
    media: {
      id: "live-2",
      type: "youtube",
      title: "Volume Gigs : podcast session",
      src: "https://www.youtube.com/watch?v=If0YjC4801w&t=716s",
      thumbnail: "/projects/IMG_9535.PNG",
    },
  },
  {
    id: "arc-4",
    name: "Askara Social Series",
    category: "Visual Identity & Social Feeds",
    year: "2024",
    image: "/projects/phe.jpg",
    media: {
      id: "ds-4",
      type: "image",
      title: "Social Media Post - Askara",
      src: "/projects/phe.jpg",
      thumbnail: "/projects/phe.jpg",
    },
  },
  {
    id: "arc-5",
    name: "NOTIFIKASI",
    category: "Trailer Short Film",
    year: "2024",
    image: "/projects/POSTER NOTIFIKASI 1;1.png",
    media: {
      id: "edit-5",
      type: "Trailer Short Film",
      title: "NOTIFIKASI (2024) - Short Film",
      src: "/projects/OFFICIAL TRAILER - NOTIFIKASI (2024).webm",
      thumbnail: "/projects/POSTER NOTIFIKASI 1;1.png",
    },
  },
  {
    id: "arc-6",
    name: "Garry's Mod Indonesia",
    category: "Chaotic Gameplay Edit",
    year: "2023",
    image: "/projects/rosblox.png",
    media: {
      id: "game-2",
      type: "youtube",
      title: "THE WORST GMOD MAP OF 2022 | Garry's Mod Indonesia",
      src: "https://www.youtube.com/watch?v=90fQ5i4pVPY&t=5s",
      thumbnail: "/projects/rosblox.png",
      warning: "Explicit Language & Loud Audio",
    },
  },
];

interface ProjectArchiveProps {
  onSelectMedia: (item: MediaItem) => void;
  onOpenCollection?: (slug: string) => void;
  works?: WorkCollection[];
}

export default function ProjectArchive({
  onSelectMedia,
  onOpenCollection,
  works = WORKS_DATA,
}: ProjectArchiveProps) {
  const [hoveredItem, setHoveredItem] = useState<ArchiveItem | null>(null);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const defaultSlug = works[0]?.slug || "short-film-videography";

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setPreviewPos({
      x: e.clientX - rect.left + 24,
      y: e.clientY - rect.top - 120,
    });
  };

  return (
    <section
      ref={sectionRef}
      className={styles.archiveSection}
      id="archive"
      onMouseMove={handleMouseMove}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Project Archive</h2>
            <span className={styles.countTag}>
              ({String(ARCHIVE_ITEMS.length).padStart(2, "0")})
            </span>
          </div>
          <p className={styles.subtitle}>
            A catalog of commercial edits, kinetic ident sequences, and
            graphic communication projects crafted for digital screens.
          </p>
        </div>

        {/* Outline Typography Table List */}
        <div className={styles.archiveList}>
          {ARCHIVE_ITEMS.map((item) => (
            <div
              key={item.id}
              className={styles.listItem}
              data-cursor="view"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => onSelectMedia(item.media)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectMedia(item.media);
                }
              }}
            >
              <div className={styles.itemLeft}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <div className={styles.itemMetaRow}>
                  <span className={styles.itemMeta}>
                    {item.category} · {item.year}
                  </span>
                  {item.media.warning && (
                    <span className={styles.itemWarningTag}>
                      <svg
                        viewBox="0 0 24 24"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      Loud &amp; Explicit
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.itemRight}>
                <span className={styles.itemYearBadge}>{item.year}</span>
                <span className={styles.itemArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compact View More Button directly below Garry's Mod Indonesia */}
        <div className={styles.viewMoreRow}>
          <button
            type="button"
            className={styles.viewMoreBtn}
            onClick={() => onOpenCollection?.(defaultSlug)}
            aria-label="View more projects in collection view"
          >
            <span>View More</span>
            <span className={styles.viewMoreArrow} aria-hidden="true">
              ↗
            </span>
          </button>
        </div>
      </div>

      {/* Floating Preview Card that tracks mouse */}
      {hoveredItem && (
        <div
          className={styles.floatingPreview}
          style={{
            transform: `translate3d(${previewPos.x}px, ${previewPos.y}px, 0)`,
          }}
          aria-hidden="true"
        >
          <div className={styles.previewImageWrap}>
            <Image
              src={hoveredItem.image}
              alt={hoveredItem.name}
              fill
              sizes="360px"
              className={styles.previewImg}
            />
          </div>
          <div className={styles.previewCaption}>
            <span className={styles.previewTitle}>{hoveredItem.name}</span>
            <span className={styles.previewCategory}>
              {hoveredItem.category}
            </span>
            {hoveredItem.media.warning && (
              <span className={styles.previewWarningBadge}>
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Explicit Language &amp; Loud Audio
              </span>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
