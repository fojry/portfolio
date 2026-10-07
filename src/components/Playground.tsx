"use client";

import React from "react";
import Image from "next/image";
import { MediaItem } from "@/data/portfolioData";
import LazyVideo from "@/components/LazyVideo";
import styles from "./Playground.module.css";

interface PlaygroundItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  videoPreview?: string;
  media: MediaItem;
}

const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  {
    id: "pg-1",
    title: "Latisan Videography",
    description:
      "Narrative storytelling, cinematic camera work, and short film videography featured on Behance.",
    tags: ["Videography", "Short Film", "Behance"],
    image: "/projects/latisancover.png",
    media: {
      id: "latisan-video",
      type: "behance",
      title: "Latisan Videography",
      src: "https://www.behance.net/gallery/213304253/Latisan",
      thumbnail: "/projects/latisancover.png",
      sourceHref: "https://www.behance.net/gallery/213304253/Latisan",
    },
  },
  {
    id: "pg-2",
    title: "Sarinah Bumper Video",
    description:
      "15-second commercial bumper video and motion identity sequence crafted for Sarinah.",
    tags: ["Bumper Video", "Commercial Motion"],
    videoPreview: "/projects/sarinah15sec.webm",
    media: {
      id: "edit-2",
      type: "video",
      title: "Sarinah Bumper Video",
      src: "/projects/sarinah15sec.webm",
      thumbnail: "/projects/sarinah.png",
    },
  },
  {
    id: "pg-3",
    title: "Opening Ceremony Post Human Exhibition #5 PARADISITY",
    description:
      "Live Streaming broadcast and opening ceremony visual production for Post Human Exhibition #5 PARADISITY.",
    tags: ["Live Streaming", "Opening Ceremony", "Exhibition"],
    image: "/projects/phe.jpg",
    media: {
      id: "phe-1",
      type: "youtube",
      title: "Opening Ceremony Post Human Exhibition #5 PARADISITY",
      src: "https://www.youtube.com/watch?v=CXvFmTJrQg0",
      thumbnail: "/projects/phe.jpg",
    },
  },
  {
    id: "pg-4",
    title: "Kinetic Typography Buka Ruang : HajaTan",
    description:
      "Kinetic typography sequence and motion design exploring expressive type animation and rhythm.",
    tags: ["Kinetic Typography", "Motion Design"],
    videoPreview: "/projects/hajatan.webm",
    media: {
      id: "ds-1",
      type: "video",
      title: "Kinetic Typography Buka Ruang : HajaTan",
      src: "/projects/hajatan.webm",
      thumbnail: "/projects/hajatan.webm",
    },
  },
  {
    id: "pg-5",
    title: "Keluar Dari Semua Level Backroom",
    description:
      "A fast-paced gameplay edit featuring dynamic kinetic subtitles, sound meme timing, and chaotic comedic cuts.",
    tags: ["Gaming Edit", "YouTube"],
    image: "/projects/tamnelbekrum2.png",
    media: {
      id: "game-1",
      type: "youtube",
      title: "Keluar Dari Semua Level Backroom",
      src: "https://youtu.be/fn83zqydST8?si=GCaCcf5554nKuZir",
      thumbnail: "/projects/tamnelbekrum2.png",
      warning: "Explicit Language & Loud Audio",
    },
  },
  {
    id: "pg-6",
    title: "Cooking Chaos",
    description:
      "A fast-paced and chaotic cooking video edit with sound timing, visual punchlines, and comedic pacing.",
    tags: ["Roblox", "Funny Moment", "TikTok Reel"],
    image: "/projects/rosblox.png",
    media: {
      id: "game-5",
      type: "tiktok",
      title: "Cooking Chaos",
      src: "https://www.tiktok.com/@simpangbojack/video/7588870093765922056",
      thumbnail: "/projects/rosblox.png",
      warning: "Explicit Language & Loud Audio",
    },
  },
];

interface PlaygroundProps {
  onSelectMedia: (item: MediaItem) => void;
}

export default function Playground({ onSelectMedia }: PlaygroundProps) {
  return (
    <section className={styles.playgroundSection} id="playground">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Since 2024
          </p>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Playground</h2>
            <span className={styles.countTag}>({PLAYGROUND_ITEMS.length})</span>
          </div>
          <p className={styles.subtitle}>
            A space for self-initiated edits, meme timing, sound syncs, and
            creative reels shaped by curiosity, rhythm, and fast iteration.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={styles.grid}>
          {PLAYGROUND_ITEMS.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              data-cursor="play"
              onClick={() => onSelectMedia(item.media)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectMedia(item.media);
                }
              }}
            >
              {/* Media Thumbnail Container with Zoom */}
              <div className={styles.imageContainer}>
                {item.videoPreview ? (
                  <LazyVideo
                    src={item.videoPreview}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.cardVideo}
                    title={item.title}
                  />
                ) : item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                  />
                ) : null}
                <div className={styles.imageOverlay} />
                {item.media.warning && (
                  <span
                    className={styles.warningTagBadge}
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
                <span className={styles.playIcon} aria-hidden="true">
                  {item.media.type === "behance" ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  )}
                </span>
              </div>

              {/* Card Meta */}
              <div className={styles.cardMeta}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>

              {/* Category Pills */}
              <div className={styles.cardTags}>
                {item.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
