import React from "react";
import styles from "./CrossedRibbons.module.css";

export default function CrossedRibbons() {
  return (
    <div className={styles.ribbonContainer} aria-hidden="true">
      {/* Ribbon 1: Slanted Right */}
      <div className={`${styles.ribbon} ${styles.ribbon1}`}>
        <div className={styles.ribbonTrack}>
          <span>FIGMA</span>
          <span className={styles.redPlus}>+</span>
          <span>ILLUSTRATOR</span>
          <span className={styles.redPlus}>+</span>
          <span>FIGMA</span>
          <span className={styles.redPlus}>+</span>
          <span>ILLUSTRATOR</span>
        </div>
      </div>

      {/* Ribbon 2: Slanted Left */}
      <div className={`${styles.ribbon} ${styles.ribbon2}`}>
        <div className={styles.ribbonTrack}>
          <span>AFTER EFFECTS</span>
          <span className={styles.redPlus}>+</span>
          <span>FIGMA</span>
          <span className={styles.redPlus}>+</span>
          <span>PHOTOSHOP</span>
          <span className={styles.redPlus}>+</span>
          <span>FIGMA</span>
        </div>
      </div>
    </div>
  );
}
