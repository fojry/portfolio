"use client";

import { useState } from "react";
import styles from "../app/page.module.css";

interface CommandBoxProps {
  command: string;
  id?: string;
}

export default function CommandBox({ command, id }: CommandBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div className={styles.codeBox}>
      <code>{command}</code>
      <button
        id={id}
        type="button"
        onClick={handleCopy}
        className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
        title="Salin perintah"
      >
        {copied ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Tersalin!
          </span>
        ) : (
          "Salin"
        )}
      </button>
    </div>
  );
}
