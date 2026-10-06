"use client";

import React, { useState, useEffect } from "react";
import styles from "./TopStatusBar.module.css";

const NAV_ITEMS = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "WORKS", href: "#works" },
  { name: "TERMS", href: "#terms" },
  { name: "CONTACT", href: "#contact" },
];

export default function TopStatusBar() {
  const [activeTab, setActiveTab] = useState("HOME");
  const [timeString, setTimeString] = useState("17:29:26:45");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      const cs = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, "0");
      setTimeString(`${h}:${m}:${s}:${cs}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      {/* Top Left Status */}
      <div className={styles.leftStatus}>
        <div className={styles.statusRow}>
          <span className={styles.statusDot} />
          <span>SYS STATUS: ONLINE</span>
        </div>
        <div className={styles.versionRow}>V 2.0.25</div>
      </div>

      {/* Floating Center Navbar */}
      <div className={styles.navContainer}>
        {/* Terminal / Code Icon Button */}
        <a
          href="#stack"
          className={styles.codeIconBtn}
          title="View Tech Arsenal"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </a>

        {/* Pill Nav Items */}
        <nav className={styles.pillNav}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`${styles.navLink} ${isActive ? styles.activeNavLink : ""}`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Top Right Clock */}
      <div className={styles.rightClock}>
        <div className={styles.clockLabel}>LOCAL TIME</div>
        <div className={styles.clockValue}>{timeString}</div>
      </div>
    </header>
  );
}
