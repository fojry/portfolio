"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "fajry.radiant@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        {/* Main CTA Block */}
        <div className={styles.ctaBlock}>
          <div className={styles.statusPill}>
            <span className={styles.statusDot} />
            <span>Available for freelance commissions &amp; creative roles</span>
          </div>

          <h2 className={styles.ctaTitle}>
            Let&apos;s create something memorable together.
          </h2>

          <div className={styles.ctaActions}>
            <a
              href={`mailto:${email}`}
              className={styles.emailBtn}
              data-cursor="explore"
            >
              <span>Say Hello</span>
              <span className={styles.btnArrow}>↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={styles.copyBtn}
              aria-label="Copy email address"
            >
              <span>{copied ? "Copied to clipboard!" : email}</span>
            </button>
          </div>
        </div>

        {/* Social Links Row */}
        <div className={styles.socialRow}>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/fajryradiant/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@prwdences"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@fajryradiant"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              YouTube
            </a>
            <a
              href="https://discord.com/channels/@me/790150016642973707"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Discord
            </a>
            <a
              href="https://saweria.co"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Saweria
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.topBtn}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>

        {/* Bottom Credits */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Fajry Radiant Adithya. Crafted with
            care &amp; inspired by Jingjing Han Design System.
          </p>
          <p className={styles.timezone}>Jakarta, ID (GMT+7)</p>
        </div>
      </div>
    </footer>
  );
}
