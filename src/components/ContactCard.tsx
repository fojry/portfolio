"use client";

import React, { useState } from "react";
import styles from "../app/page.module.css";
import { PulsingSignal } from "./KineticWidgets";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);
  const email = "hello@billynabil.my.id";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contactCard}>
        <PulsingSignal label="NOW ACCEPTING COMMISSIONS" />

        <h2 className={styles.contactTitle}>
          HAVE A VISION IN MIND?<br />
          <span className={styles.accentRed}>LET&apos;S BRING IT TO LIFE.</span>
        </h2>

        <p className={styles.contactSubtitle}>
          Specializing in premium motion graphics, 3D brand identity systems, and high-performance interactive digital experiences.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href={`mailto:${email}`}
            className={styles.primaryBtn}
            id="cta-send-email"
          >
            SEND AN INQUIRY →
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className={styles.ghostBtn}
            id="cta-copy-email"
          >
            {copied ? "✓ EMAIL COPIED!" : "COPY EMAIL"}
          </button>
        </div>

        <div className={styles.socialRow}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            Twitter / X
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            Instagram
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            LinkedIn
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
