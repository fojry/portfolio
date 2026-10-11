"use client";

import { useLanguage } from "./LanguageProvider";

import Image from "next/image";
import styles from "./Hero.module.css";

interface HeroProps {
  onScrollDown?: () => void;
}

const TITLES = ["Fajry Radiant", "Video Editor", "Content Creator", "Graphic Designer"];

export default function Hero({ onScrollDown }: HeroProps) {
  const { t } = useLanguage();
  return (
    <section className={styles.heroSection} id="top">
      <div className={styles.ambientBackground} aria-hidden="true">
        <div className={styles.ambientVignette} />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.logoStage} aria-hidden="true">
          <Image
            className={styles.heroLogo}
            src="/logo-white.svg"
            alt=""
            width={538}
            height={753}
            sizes="(max-width: 700px) 140px, 220px"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle} aria-label={TITLES.map(t).join(", ")}>
            <span className={styles.titleViewport} aria-hidden="true">
              <span className={styles.titleTrack}>
                {[...TITLES, TITLES[0]].map((title, index) => (
                  <span className={styles.titleLine} key={title + index}>{t(title)}</span>
                ))}
              </span>
            </span>
          </h1>
          <p className={styles.heroSubtitle}>{t("Visual Communication Designer & Creative Video Editor who loves beautiful things and blends creativity, rhythm, and kinetic motion into every build.")}</p>
        </div>
      </div>

      <button
        className={styles.scrollCue}
        type="button"
        onClick={onScrollDown}
        aria-label={t("Scroll to content")}
      >
        <span className={styles.scrollText}>{t("SCROLL")}</span>
        <span className={styles.scrollTrack} aria-hidden="true">
          <span className={styles.scrollBar} />
        </span>
      </button>
    </section>
  );
}
