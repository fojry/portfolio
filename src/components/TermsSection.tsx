import React from "react";
import { TERMS_OF_SERVICE } from "@/data/portfolioData";
import styles from "./TermsSection.module.css";

export default function TermsSection() {
  return (
    <section className={styles.termsSection} id="terms">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Guidelines &amp; Policy
          </p>
          <h2 className={styles.title}>Terms of Service</h2>
          <p className={styles.subtitle}>
            Clear collaboration guidelines and expectations to ensure every
            project moves forward smoothly from initial concept to master export.
          </p>
        </div>

        <div className={styles.termsGrid}>
          {TERMS_OF_SERVICE.map((term, index) => (
            <div key={index} className={styles.termCard}>
              <span className={styles.cardIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className={styles.cardText}>{term}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
