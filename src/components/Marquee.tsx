import React from "react";
import styles from "./Marquee.module.css";

const MARQUEE_ITEMS = [
  "Motion Graphic",
  "Video Editing",
  "Creative Director",
  "Visual Design",
  "Live Streaming",
  "Visual Storytelling",
  "Subtitle Timing",
  "Sound Syncing",
];

export default function Marquee() {
  return (
    <div className={styles.marqueeBand} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeGroup}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`g1-${i}`} className={styles.marqueeItem}>
              <span className={styles.itemText}>{item}</span>
              <span className={styles.itemStar} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  className={styles.starSvg}
                >
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
              </span>
            </span>
          ))}
        </div>
        <div className={styles.marqueeGroup} aria-hidden="true">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`g2-${i}`} className={styles.marqueeItem}>
              <span className={styles.itemText}>{item}</span>
              <span className={styles.itemStar} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  className={styles.starSvg}
                >
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
