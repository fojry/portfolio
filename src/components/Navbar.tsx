"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onNavClick?: (targetId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    setMobileOpen(false);
    if (onNavClick) {
      e.preventDefault();
      onNavClick(targetId);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navPill}>
        {/* Brand / Avatar */}
        <Link
          href="#top"
          className={styles.brand}
          onClick={(e) => handleLinkClick(e, "top")}
          aria-label="Home"
        >
          <div className={styles.avatarWrap}>
            <Image
              src="/fajry-avatar.jpg"
              alt="Fajry Radiant"
              width={44}
              height={44}
              className={styles.avatarImg}
              priority
            />
            <span className={styles.statusDot} aria-label="Available for work" />
          </div>
          <span className={styles.brandName}>
            Fajry Radiant<span className={styles.brandDot}>.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={styles.desktopNavWrap}>
          <nav className={styles.navLinks} aria-label="Main Navigation">
            <a
              href="#works"
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, "works")}
            >
              Works
              <span className={styles.linkLine} />
            </a>
            <a
              href="#about"
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, "about")}
            >
              About
              <span className={styles.linkLine} />
            </a>
            <a
              href="#playground"
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, "playground")}
            >
              Playground
              <span className={styles.linkLine} />
            </a>
            <a
              href="#archive"
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, "archive")}
            >
              Archive
              <span className={styles.linkLine} />
            </a>
            <a
              href="#terms"
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, "terms")}
            >
              TOS<span className={styles.navArrow}>↗</span>
              <span className={styles.linkLine} />
            </a>
          </nav>

          <span className={styles.divider} aria-hidden="true" />

          {/* Social Icons */}
          <div className={styles.socialGroup}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialIcon}
              title="LinkedIn"
            >
              <svg viewBox="0 0 48 48" width="22" height="22">
                <rect width="48" height="48" rx="12" fill="#2867B2" />
                <path
                  fill="#ffffff"
                  d="M14 19h5v15h-5V19zm2.5-8a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8zM22 19h4.8v2.05h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.2 6 7.36V34h-5v-6.6c0-1.57-.03-3.6-2.3-3.6-2.3 0-2.66 1.72-2.66 3.49V34h-5V19z"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:fajry.radiant@gmail.com"
              aria-label="Email"
              className={styles.socialIcon}
              title="Email me"
            >
              <svg viewBox="0 0 48 48" width="22" height="22">
                <path
                  fill="#4caf50"
                  d="M45 16.2l-5 2.75-5 4.75L35 40h7a3 3 0 0 0 3-3V16.2z"
                />
                <path
                  fill="#1e88e5"
                  d="M3 16.2l3.614 1.71L13 23.7V40H6a3 3 0 0 1-3-3V16.2z"
                />
                <path
                  fill="#e53935"
                  d="M35 11.2L24 19.45 13 11.2 12 17l1 6.7 11 8.25 11-8.25 1-6.7z"
                />
                <path
                  fill="#c62828"
                  d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 0 0 3 12.298z"
                />
                <path
                  fill="#fbc02d"
                  d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0 1 45 12.298z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/fajryradiant/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialIcon}
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.igSvg}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
          className={styles.mobileBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`${styles.menuBar} ${mobileOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.menuBar} ${mobileOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.menuBar} ${mobileOpen ? styles.barOpen3 : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      <div
        className={`${styles.mobilePanel} ${
          mobileOpen ? styles.mobilePanelActive : ""
        }`}
      >
        <nav className={styles.mobileNavLinks}>
          <a
            href="#works"
            className={styles.mobileLink}
            onClick={(e) => handleLinkClick(e, "works")}
          >
            Works
          </a>
          <a
            href="#about"
            className={styles.mobileLink}
            onClick={(e) => handleLinkClick(e, "about")}
          >
            About
          </a>
          <a
            href="#playground"
            className={styles.mobileLink}
            onClick={(e) => handleLinkClick(e, "playground")}
          >
            Playground
          </a>
          <a
            href="#archive"
            className={styles.mobileLink}
            onClick={(e) => handleLinkClick(e, "archive")}
          >
            Archive
          </a>
          <a
            href="#terms"
            className={styles.mobileLink}
            onClick={(e) => handleLinkClick(e, "terms")}
          >
            TOS ↗
          </a>
        </nav>
        <div className={styles.mobileSocials}>
          <a
            href="https://www.instagram.com/fajryradiant/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@prwdences"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
          >
            TikTok
          </a>
          <a href="mailto:fajry.radiant@gmail.com" className={styles.mobileSocialLink}>
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
