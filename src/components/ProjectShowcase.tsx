"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { MediaItem, NOTIFIKASI_MEDIA } from "@/data/portfolioData";
import styles from "./ProjectShowcase.module.css";

export interface ShowcaseProject {
  id: string;
  title: string;
  category:
    | "Short Film"
    | "Motion Graphics"
    | "Commercial"
    | "Gaming Edits"
    | "Clips & Shorts"
    | "Visual Design"
    | "Livestreaming";
  year: string;
  image: string;
  client: string;
  deliverables: string[];
  tools: string[];
  description: string;
  badge?: {
    text: string;
    type?: "award" | "featured" | "format";
  };
  collectionSlug?: string;
  mediaItem?: MediaItem;
  externalLink?: string;
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "notifikasi-film",
    title: "NOTIFIKASI (2024) - Short Film",
    category: "Short Film",
    year: "2024",
    image: "/projects/POSTER NOTIFIKASI 1;1.png",
    client: "Klub Gawesiki / Telkom University",
    badge: { text: "4x Award Winner", type: "award" },
    deliverables: [
      "Director, Co-Writer & Co-Editor",
      "Best Film — Festival Film Banyumas 2024",
      "Best Director — Festival Film Banyumas 2024",
      "Best Cinematography & Best Male Actor",
    ],
    tools: ["Directing", "Premiere Pro", "DaVinci Resolve", "Storyboarding"],
    description:
      "Award-winning psychological drama short film produced by Klub Gawesiki. Directed, co-written, and co-edited by Fajry Radiant Adithya, claiming 4 major awards at Festival Film Banyumas 2024.",
    collectionSlug: "short-film-videography",
    mediaItem: NOTIFIKASI_MEDIA,
    externalLink: "https://www.behance.net/gallery/217899999/Portofolio",
  },
  {
    id: "bukaruang-hajatan",
    title: "Buka Ruang : HajaTan",
    category: "Motion Graphics",
    year: "2024",
    image: "/projects/bukaruangg.png",
    client: "Buka Ruang",
    badge: { text: "Kinetic Motion", type: "featured" },
    deliverables: [
      "Kinetic Typography Sequence",
      "Dynamic Beat Pacing & Glitch Cuts",
      "Event Title Motion Branding",
    ],
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    description:
      "High-energy kinetic typography and title identity designed for Buka Ruang : HajaTan, synchronizing experimental typography with driving rhythmic soundscapes.",
    collectionSlug: "motion-graphic",
    mediaItem: {
      id: "mg-1",
      type: "video",
      title: "Kinetic Typography Buka Ruang : HajaTan",
      src: "/projects/hajatan.webm",
      thumbnail: "/projects/bukaruangg.png",
    },
  },
  {
    id: "sarinah-commercial",
    title: "SARINAH (Commercial Sequence)",
    category: "Commercial",
    year: "2024",
    image: "/projects/sarinah.png",
    client: "Sarinah",
    badge: { text: "15s Commercial", type: "format" },
    deliverables: [
      "15s Commercial Bumper Sequence",
      "Brand Color Grading & Pacing",
      "Product Motion Identity",
    ],
    tools: ["Premiere Pro", "After Effects", "Color Grading"],
    description:
      "Fast-paced commercial spot and bumper sequence created for Sarinah, balancing modern retail promotion, crisp frame pacing, and elegant visual identity.",
    collectionSlug: "short-film-videography",
    mediaItem: {
      id: "edit-2",
      type: "video",
      title: "SARINAH (Bumper Video)",
      src: "/projects/sarinah15sec.webm",
      thumbnail: "/projects/sarinah.png",
    },
  },
  {
    id: "backroom-gaming",
    title: "Keluar Dari Semua Level Backroom",
    category: "Gaming Edits",
    year: "2024",
    image: "/projects/tamnelbekrum2.png",
    client: "Simpang Bojack",
    badge: { text: "Viral Gameplay", type: "featured" },
    deliverables: [
      "Dynamic Animated Subtitles",
      "Comedic Timing & Meme Cutaways",
      "Sound Design & Audio Pacing",
    ],
    tools: ["Premiere Pro", "Photoshop", "Audition"],
    description:
      "High-retention gameplay edit packed with animated colored subtitles, comic meme timing, and rhythmic audio cuts that keep audiences engaged from start to finish.",
    collectionSlug: "edited-gaming-moments",
    mediaItem: {
      id: "game-1",
      type: "youtube",
      title: "Keluar Dari Semua Level Backroom",
      src: "https://youtu.be/fn83zqydST8?si=GCaCcf5554nKuZir",
      thumbnail: "/projects/tamnelbekrum2.png",
      warning: "Explicit Language & Loud Audio",
    },
  },
  {
    id: "kusnandar-kopi-abc",
    title: "Niko x Kopi ABC - Podcast Raditya Dika",
    category: "Clips & Shorts",
    year: "2025",
    image: "/projects/KOPIABC.png",
    client: "Kusnandar Clips",
    badge: { text: "9:16 Vertical", type: "format" },
    deliverables: [
      "9:16 Vertical Short-Form Cut",
      "Dynamic Word-by-Word Subtitles",
      "Viral Hook Pacing & Zooms",
    ],
    tools: ["Premiere Pro", "CapCut", "After Effects"],
    description:
      "Vertical short-form clip edited for TikTok featuring expressive highlighted subtitles, audio leveling, and tight pacing crafted for maximum viewer retention.",
    collectionSlug: "clips-shorts",
    mediaItem: {
      id: "kusnandar-7677103336830684437",
      type: "tiktok",
      title: "Niko x Kopi ABC - Podcast Raditya Dika",
      author: "@kusnandar.clips",
      src: "https://www.tiktok.com/@kusnandar.clips/video/7677103336830684437",
      thumbnail: "/projects/KOPIABC.png",
    },
  },
  {
    id: "post-human-exhibition",
    title: "Eye-Witnesses — Post Human Exhibition",
    category: "Visual Design",
    year: "2024",
    image: "/projects/Eye-witnesses Fajry Radiant.png",
    client: "Post Human Exhibition #5",
    badge: { text: "Key Visual", type: "featured" },
    deliverables: [
      "Key Visual Poster Design",
      "Surreal Experimental Typography",
      "Exhibition Print Identity",
    ],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    description:
      "Conceptual key visual and exhibition poster design blending experimental typography, surrealist iconography, and balanced negative space.",
    collectionSlug: "design",
    mediaItem: {
      id: "ds-4",
      type: "image",
      title: "Post Human Exhibition Poster",
      src: "/projects/Eye-witnesses Fajry Radiant.png",
      thumbnail: "/projects/Eye-witnesses Fajry Radiant.png",
    },
  },
  {
    id: "robokop-film",
    title: "ROBOKOP : Every Table Has a Story",
    category: "Short Film",
    year: "2024",
    image: "/projects/robokop.jpg",
    client: "Creative Short Project",
    deliverables: [
      "Director of Photography & Editing",
      "Table Conversation Sequence Pacing",
      "Atmospheric Mood & Color Grade",
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "Camera Rigging"],
    description:
      "Atmospheric short narrative piece revolving around human interaction, subtle glances, and character tension across an everyday table.",
    collectionSlug: "short-film-videography",
    mediaItem: {
      id: "robokop-film",
      type: "behance",
      title: "ROBOKOP : Every Table Has a Story",
      src: "https://www.behance.net/gallery/213382551/ROBOKOP-Every-Table-Has-a-Story",
      thumbnail: "/projects/robokop.jpg",
      sourceHref: "https://www.behance.net/gallery/213382551/ROBOKOP-Every-Table-Has-a-Story",
    },
    externalLink: "https://www.behance.net/gallery/213382551/ROBOKOP-Every-Table-Has-a-Story",
  },
  {
    id: "phe-live-ceremony",
    title: "PHE #5 PARADISITY (Opening Ceremony)",
    category: "Livestreaming",
    year: "2024",
    image: "/projects/phe.jpg",
    client: "Post Human Exhibition #5",
    badge: { text: "Live Multi-Cam", type: "featured" },
    deliverables: [
      "Multi-Camera Stream Switching",
      "Live On-Screen Overlay Graphics",
      "Audio & Stream Protocol Management",
    ],
    tools: ["OBS Studio", "vMix", "After Effects"],
    description:
      "Comprehensive live streaming broadcast production for the opening ceremony of Post Human Exhibition #5 PARADISITY, featuring seamless switching and real-time motion overlays.",
    collectionSlug: "livestreaming-event",
    mediaItem: {
      id: "live-1",
      type: "youtube",
      title: "Opening Ceremony Post Human Exhibition #5 PARADISITY",
      src: "https://www.youtube.com/watch?v=CXvFmTJrQg0",
      thumbnail: "/projects/phe.jpg",
    },
  },
];

interface ProjectShowcaseProps {
  onSelectMedia?: (item: MediaItem) => void;
  onOpenCollection?: (slug: string) => void;
}

export default function ProjectShowcase({
  onSelectMedia,
  onOpenCollection,
}: ProjectShowcaseProps) {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "ALL",
    "Short Film",
    "Motion Graphics",
    "Commercial",
    "Gaming Edits",
    "Clips & Shorts",
    "Visual Design",
    "Livestreaming",
  ];

  const getCategoryCount = (cat: string) => {
    if (cat === "ALL") return SHOWCASE_PROJECTS.length;
    return SHOWCASE_PROJECTS.filter((p) => p.category === cat).length;
  };

  const filteredProjects = SHOWCASE_PROJECTS.filter((project) => {
    const matchesCategory =
      activeFilter === "ALL" || project.category === activeFilter;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.client.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      project.tools.some((tool) => tool.toLowerCase().includes(q)) ||
      project.deliverables.some((d) => d.toLowerCase().includes(q))
    );
  });

  // Close modal on Escape key press & prevent background scroll
  useEffect(() => {
    if (!selectedProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const handleMediaClick = (project: ShowcaseProject) => {
    if (project.mediaItem && onSelectMedia) {
      setSelectedProject(null);
      onSelectMedia(project.mediaItem);
    }
  };

  const handleCollectionClick = (project: ShowcaseProject) => {
    if (project.collectionSlug && onOpenCollection) {
      setSelectedProject(null);
      onOpenCollection(project.collectionSlug);
    }
  };

  const handleResetFilters = () => {
    setActiveFilter("ALL");
    setSearchQuery("");
  };

  return (
    <section id="showcase" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleGroup}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span>{t("Case Studies")}</span>
            </div>
            <h2 className={styles.sectionTitle}>{t("Spotlight Projects")}</h2>
            <p className={styles.subtitle}>
              {t(
                "Deep-dive breakdowns of standout films, rhythm gaming cuts, motion pieces, and brand identity projects."
              )}
            </p>
          </div>

          {/* Search Bar */}
          <div className={styles.searchWrapper}>
            <svg
              className={styles.searchIcon}
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Search case studies, tools, or clients...")}
              className={styles.searchInput}
              aria-label={t("Search")}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className={styles.clearSearchBtn}
                aria-label={t("Clear search")}
              >
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills with Counters */}
        <div className={styles.filterBar}>
          <div className={styles.filterGroup} role="tablist" aria-label="Project Categories">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(cat)}
                  className={`${styles.filterBtn} ${
                    isActive ? styles.filterActive : ""
                  }`}
                >
                  <span>{t(cat)}</span>
                  <span className={styles.filterCount}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIconWrap}>
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>{t("No case studies match your search")}</h3>
            <p className={styles.emptyDesc}>
              Try searching with different keywords like &ldquo;Premiere&rdquo;, &ldquo;Short Film&rdquo;, &ldquo;Roblox&rdquo;, or reset your filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className={styles.resetBtn}
            >
              {t("Reset filters")}
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={styles.card}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                data-cursor="view"
              >
                {/* Glow border spotlight */}
                <div className={styles.cardGlowOverlay} />

                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlayScanline} />

                  {/* Top-left Category Tag with Kinetic Audio Equalizer */}
                  <div className={styles.cardTag}>
                    <div className={styles.equalizer} aria-hidden="true">
                      <span className={styles.eqBar} />
                      <span className={styles.eqBar} />
                      <span className={styles.eqBar} />
                      <span className={styles.eqBar} />
                    </div>
                    <span>{t(project.category)}</span>
                  </div>

                  {/* Top-right Year & Special Badge */}
                  <div className={styles.topRightTags}>
                    {project.badge && (
                      <span
                        className={`${styles.projectBadge} ${
                          project.badge.type === "award"
                            ? styles.badgeAward
                            : project.badge.type === "format"
                            ? styles.badgeFormat
                            : styles.badgeFeatured
                        }`}
                      >
                        {project.badge.type === "award" && (
                          <span className={styles.trophyIcon}>★</span>
                        )}
                        <span>{t(project.badge.text)}</span>
                      </span>
                    )}
                    <span className={styles.cardYear}>{project.year}</span>
                  </div>
                </div>

                <div className={styles.cardMeta}>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>
                  </div>

                  <div className={styles.cardBottom}>
                    <div className={styles.toolsRow}>
                      {project.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className={styles.toolBadge}>
                          {tool}
                        </span>
                      ))}
                    </div>

                    <span className={styles.viewLink}>
                      <span>{t("VIEW CASE")}</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={styles.arrowIcon}
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Modal Dialog */}
        {selectedProject && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalImageWrap}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className={styles.modalImage}
                  sizes="(max-width: 900px) 100vw, 820px"
                  priority
                />
                <div className={styles.modalScanline} />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className={styles.modalClose}
                  aria-label={t("Close Case Study")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalHead}>
                  <div>
                    <div className={styles.modalBadgesRow}>
                      <span className={styles.modalCategory}>
                        {t(selectedProject.category)} • {selectedProject.year}
                      </span>
                      {selectedProject.badge && (
                        <span
                          className={`${styles.modalProjectBadge} ${
                            selectedProject.badge.type === "award"
                              ? styles.badgeAward
                              : styles.badgeFeatured
                          }`}
                        >
                          {selectedProject.badge.type === "award" && "★ "}
                          {t(selectedProject.badge.text)}
                        </span>
                      )}
                    </div>
                    <h3 id="modal-title" className={styles.modalTitle}>
                      {selectedProject.title}
                    </h3>
                  </div>
                  <div className={styles.modalClient}>
                    <span className={styles.metaLabel}>{t("CLIENT")}</span>
                    <span className={styles.metaValue}>{selectedProject.client}</span>
                  </div>
                </div>

                <p className={styles.modalDescription}>
                  {selectedProject.description}
                </p>

                <div className={styles.modalGrid}>
                  <div>
                    <span className={styles.metaLabel}>{t("DELIVERABLES")}</span>
                    <ul className={styles.deliverablesList}>
                      {selectedProject.deliverables.map((item) => (
                        <li key={item}>
                          <span className={styles.checkIcon}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className={styles.metaLabel}>{t("SOFTWARE & TOOLS")}</span>
                    <div className={styles.toolsRow}>
                      {selectedProject.tools.map((tool) => (
                        <span key={tool} className={styles.toolBadge}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Action CTA Buttons */}
                <div className={styles.modalActions}>
                  {selectedProject.mediaItem && onSelectMedia && (
                    <button
                      type="button"
                      className={styles.primaryActionBtn}
                      onClick={() => handleMediaClick(selectedProject)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span>
                        {selectedProject.category === "Short Film"
                          ? t("Play Trailer")
                          : t("Watch Media")}
                      </span>
                    </button>
                  )}

                  {selectedProject.collectionSlug && onOpenCollection && (
                    <button
                      type="button"
                      className={styles.secondaryActionBtn}
                      onClick={() => handleCollectionClick(selectedProject)}
                    >
                      <span>{t("Explore Full Collection")}</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </button>
                  )}

                  {selectedProject.externalLink && (
                    <a
                      href={selectedProject.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalActionBtn}
                    >
                      <span>{t("View on Behance")}</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
