"use client";

import React from "react";
import styles from "./RotatingBadge.module.css";

export default function RotatingBadge() {
  return (
    <div className={styles.badgeWrap} title="Open for Commissions">
      <svg
        viewBox="0 0 100 100"
        className={styles.rotatingSvg}
      >
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className={styles.badgeText}>
          <textPath xlinkHref="#circlePath" href="#circlePath">
            • EST 2025 • OPEN FOR COMMISSIONS •
          </textPath>
        </text>
      </svg>

      {/* Center Icon */}
      <div className={styles.centerIcon}>
        <span className={styles.centerDot} />
      </div>
    </div>
  );
}
