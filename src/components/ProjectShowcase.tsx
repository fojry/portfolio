"use client";

import React, { useState } from "react";
import Image from "next/image";
import { KineticCrosshair } from "./KineticWidgets";
import styles from "./ProjectShowcase.module.css";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  client: string;
  deliverables: string[];
  tools: string[];
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: "synergy-motion",
    title: "SYNERGY CYBER REEL",
    category: "Motion Graphics",
    year: "2026",
    image: "/projects/motion-reel.jpg",
    client: "Hyperlink Studio",
    deliverables: ["Opening Title Sequence", "Kinetic Lettering", "Sound Design"],
    tools: ["After Effects", "Premiere Pro", "Figma"],
    description:
      "A dynamic kinetic typography exploration with neon crimson emission lines and spring physics animation.",
  },
  {
    id: "aeterna-identity",
    title: "AETERNA VISUAL SYSTEM",
    category: "Brand Motion Identity",
    year: "2025",
    image: "/projects/rosblox.png",
    client: "Aeterna Luxury Lab",
    deliverables: ["Dynamic Brand Guidelines", "Interactive Visuals", "Promo Teaser"],
    tools: ["Illustrator", "After Effects", "Photoshop"],
    description:
      "Minimalist wireframe aesthetics crafted for a forward-thinking luxury fashion house. Clean mathematical geometry and stark obsidian contrasts.",
  },
  {
    id: "audio-synthesizer",
    title: "CRIMSX AUDIO WORKSTATION",
    category: "Audio-Visual Interface",
    year: "2025",
    image: "/projects/phe.jpg",
    client: "Grimsx Audio Engine",
    deliverables: ["Synthesizer UI", "Real-Time Spectrum Visualizer", "Motion Guide"],
    tools: ["After Effects", "Figma", "Illustrator"],
    description:
      "Tactile retro-futuristic audio interface designed with functional procedural waveform oscillations and live spectrum monitoring.",
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const categories = ["ALL", "3D Motion Graphics", "Brand Motion Identity", "AV Interface & 3D Web"];

  const filteredProjects =
    activeFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className={styles.section}>
      <div className={styles.sectionHeader}>
        <div>
          <div className={styles.tagline}>
            <KineticCrosshair />
            <span>SELECTED ARCHIVE / 2025 - 2026</span>
          </div>
          <h2 className={styles.sectionTitle}>FEATURED WORKS</h2>
        </div>

        {/* Filter Pills */}
        <div className={styles.filterGroup}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={styles.card}
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles.imageWrap}>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className={styles.projectImage}
                priority
              />
              <div className={styles.overlayScanline} />
              <div className={styles.cardTag}>{project.category}</div>
              <div className={styles.cardYear}>{project.year}</div>
            </div>

            <div className={styles.cardMeta}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
              </div>

              <div className={styles.toolsRow}>
                {project.tools.map((tool) => (
                  <span key={tool} className={styles.toolBadge}>
                    {tool}
                  </span>
                ))}
                <span className={styles.viewLink}>
                  <span>VIEW CASE</span>
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
                    style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "5px" }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedProject && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageWrap}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={900}
                height={500}
                className={styles.modalImage}
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className={styles.modalClose}
                aria-label="Close Modal"
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
                  <span className={styles.modalCategory}>{selectedProject.category} • {selectedProject.year}</span>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                </div>
                <div className={styles.modalClient}>
                  <span className={styles.metaLabel}>CLIENT</span>
                  <span className={styles.metaValue}>{selectedProject.client}</span>
                </div>
              </div>

              <p className={styles.modalDescription}>
                {selectedProject.description}
              </p>

              <div className={styles.modalGrid}>
                <div>
                  <span className={styles.metaLabel}>DELIVERABLES</span>
                  <ul className={styles.deliverablesList}>
                    {selectedProject.deliverables.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className={styles.metaLabel}>SOFTWARE & TECH</span>
                  <div className={styles.toolsRow}>
                    {selectedProject.tools.map((tool) => (
                      <span key={tool} className={styles.toolBadge}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
