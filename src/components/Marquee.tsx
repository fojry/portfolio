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
              <span className={styles.itemStar}>✳</span>
            </span>
          ))}
        </div>
        <div className={styles.marqueeGroup} aria-hidden="true">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`g2-${i}`} className={styles.marqueeItem}>
              <span className={styles.itemText}>{item}</span>
              <span className={styles.itemStar}>✳</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
