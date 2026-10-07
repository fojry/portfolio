"use client";

import React, { useState, useEffect } from "react";
import ProgressBar from "@/components/ProgressBar";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import IntroSection from "@/components/IntroSection";
import FeaturedStage from "@/components/FeaturedStage";
import Playground from "@/components/Playground";
import ProjectArchive from "@/components/ProjectArchive";
import TermsSection from "@/components/TermsSection";
import Footer from "@/components/Footer";
import MediaModal from "@/components/MediaModal";
import CollectionDetail from "@/components/CollectionDetail";
import { WORKS_DATA, MediaItem } from "@/data/portfolioData";
import styles from "./page.module.css";

export default function Home() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeCollectionSlug, setActiveCollectionSlug] = useState<string | null>(null);

  const activeCollection =
    WORKS_DATA.find((w) => w.slug === activeCollectionSlug) || null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Force browser not to restore previous scroll position on reload
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // 2. Clear any anchor hash (except collection) so browser doesn't jump down to #about or #works
      if (window.location.hash && !window.location.hash.startsWith("#collection-")) {
        try {
          window.history.replaceState(null, "", window.location.pathname);
        } catch {
          // ignore
        }
      }

      // 3. Immediately scroll to the very top (0, 0)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      const resetTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      };

      const timer = setTimeout(resetTop, 10);
      window.addEventListener("load", resetTop);
      window.addEventListener("beforeunload", resetTop);

      const handlePopState = () => {
        const hash = window.location.hash;
        if (hash.startsWith("#collection-")) {
          const slug = hash.replace("#collection-", "");
          setActiveCollectionSlug(slug);
        } else {
          setActiveCollectionSlug(null);
        }
      };
      window.addEventListener("popstate", handlePopState);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", resetTop);
        window.removeEventListener("beforeunload", resetTop);
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, []);

  const handleScrollTo = (targetId: string) => {
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCollection = (slug: string) => {
    setActiveCollectionSlug(slug);
    try {
      window.history.pushState({ collection: slug }, "", `#collection-${slug}`);
    } catch {
      // fallback in case pushState is restricted
    }
  };

  const handleCloseCollection = () => {
    setActiveCollectionSlug(null);
    try {
      if (window.location.hash.startsWith("#collection-")) {
        window.history.pushState(null, "", window.location.pathname);
      }
    } catch {
      // fallback
    }
  };

  return (
    <div className={styles.pageShell}>
      {/* Scroll progress line */}
      <ProgressBar />

      {/* Custom magnetic interactive cursor */}
      <CustomCursor />

      {/* Floating pill navigation */}
      <Navbar onNavClick={handleScrollTo} />

      <main className={styles.main}>
        {/* 1. Hero Section with Blinking Caret */}
        <Hero onScrollDown={() => handleScrollTo("works")} />

        {/* 2. High-Contrast White Marquee Band */}
        <Marquee />

        {/* 3. Featured Work 3:2 Interactive Stage */}
        <FeaturedStage
          works={WORKS_DATA}
          onSelectMedia={(item) => setSelectedMedia(item)}
          onOpenCollection={handleOpenCollection}
        />

        {/* 4. Interactive Intro Notepad Section */}
        <IntroSection />

        {/* 5. Playground Experiments & Reels */}
        <Playground onSelectMedia={(item) => setSelectedMedia(item)} />

        {/* 6. Outline Typography Project Archive */}
        <ProjectArchive
          onSelectMedia={(item) => setSelectedMedia(item)}
          onOpenCollection={handleOpenCollection}
          works={WORKS_DATA}
        />

        {/* 7. Collaboration Terms of Service */}
        <TermsSection />
      </main>

      {/* 8. Footer & Contact CTA */}
      <Footer />

      {/* Dedicated Collection View Tab (SECONDSLIDE) */}
      {activeCollection && (
        <CollectionDetail
          collection={activeCollection}
          allCollections={WORKS_DATA}
          onBack={handleCloseCollection}
          onSelectMedia={(item) => setSelectedMedia(item)}
          onSelectCollection={(slug) => handleOpenCollection(slug)}
        />
      )}

      {/* Lightbox / Video Modal */}
      <MediaModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  );
}
