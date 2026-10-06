"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { MediaItem } from "@/data/portfolioData";
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
    },
  },
  {
    id: "arc-2",
    name: "Mizone Style Short",
    category: "Cinematic Visual Storytelling",
    year: "2023",
    image: "/character-banner.jpg",
    media: {
      id: "edit-1",
      type: "youtube",
      title: "Agung Hapsah - Mizone Style",
      src: "https://www.youtube.com/watch?v=mhpzUPpWD8g",
      thumbnail: "/character-banner.jpg",
    },
  },
  {
    id: "arc-3",
    name: "KliKFilm Digital Ad",
    category: "Commercial Banner Design",
    year: "2024",
    image: "/projects/rosblox.png",
    media: {
      id: "ds-2",
      type: "image",
      title: "Banner - Digital Advertising KliKFilm",
      src: "/projects/rosblox.png",
      thumbnail: "/projects/rosblox.png",
    },
  },
  {
    id: "arc-4",
    name: "Miami Baby Rhythm",
    category: "Fast Paced Montage",
    year: "2024",
    image: "/projects/motion-reel.jpg",
    media: {
      id: "edit-3",
      type: "youtube",
      title: "Miami Baby - Fast Paced",
      src: "https://www.youtube.com/shorts/ndhI6YIC3d8",
      thumbnail: "/projects/rosblox.png",
    },
  },
  {
    id: "arc-5",
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
    id: "arc-6",
    name: "Don't Be Shy AMV",
    category: "Beat Matched Transition Reel",
    year: "2022",
    image: "/character-banner.jpg",
    media: {
      id: "edit-5",
      type: "instagram",
      title: "Don't Be Shy - AMV Edit",
      src: "https://www.instagram.com/axchiil/reel/CLOoN_aAyqU/",
      thumbnail: "/character-banner.jpg",
    },
  },
];

interface ProjectArchiveProps {
  onSelectMedia: (item: MediaItem) => void;
}

export default function ProjectArchive({
  onSelectMedia,
}: ProjectArchiveProps) {
  const [hoveredItem, setHoveredItem] = useState<ArchiveItem | null>(null);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

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
                <span className={styles.itemMeta}>
                  {item.category} · {item.year}
                </span>
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
          </div>
        </div>
      )}
    </section>
  );
}
