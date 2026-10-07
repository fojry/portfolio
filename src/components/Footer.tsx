"use client";

import React, { useState } from "react";
import { CONTACT_EMAIL } from "@/data/portfolioData";
import styles from "./Footer.module.css";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = CONTACT_EMAIL;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    "Say Hello — Project Inquiry"
  )}&body=${encodeURIComponent(
    "Hi Fajry,\n\nI came across your portfolio and would like to talk about a project:\n\n"
  )}`;

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
              href={mailtoHref}
              className={styles.emailBtn}
              data-cursor="explore"
            >
              <span>Say Hello</span>
              <span className={styles.btnArrow} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
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
              href="https://www.tiktok.com/@simpangbojack"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@fojry"
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
              href="https://saweria.co/fojry"
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
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
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
