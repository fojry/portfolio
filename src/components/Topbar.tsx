"use client";

import React from "react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/data/portfolioData";
import styles from "./Topbar.module.css";

interface TopbarProps {
  onBrandClick?: () => void;
}

export default function Topbar({ onBrandClick }: TopbarProps) {
  return (
    <header className={styles.topbar}>
      <Link
        href="#/"
        className={styles.brand}
        onClick={(e) => {
          if (onBrandClick) {
            e.preventDefault();
            onBrandClick();
          }
        }}
      >
        FAJRY RADIANT
      </Link>

      <nav className={styles.socialNav} aria-label="Social Links">
        <a
          href="https://www.instagram.com/fajryradiant/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@simpangbojack"
          target="_blank"
          rel="noreferrer"
        >
          TikTok
        </a>
        <a
          href="https://www.youtube.com/@fojry"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://discord.com/channels/@me/790150016642973707"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
        <a
          href="https://saweria.co/fojry"
          target="_blank"
          rel="noreferrer"
        >
          Saweria
        </a>
      </nav>
    </header>
  );
}
