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
        {copied ? "✓ Tersalin!" : "Salin"}
      </button>
    </div>
  );
}
