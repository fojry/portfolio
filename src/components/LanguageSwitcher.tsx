"use client";

import { useLanguage } from "./LanguageProvider";
import styles from "./LanguageSwitcher.module.css";

interface LanguageSwitcherProps {
  disabled?: boolean;
}

export default function LanguageSwitcher({ disabled = false }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <select
      className={styles.select}
      aria-label={t("Language")}
      value={language}
      disabled={disabled}
      onChange={(event) => {
        const value = event.target.value;
        if (value === "en" || value === "id") setLanguage(value);
      }}
    >
      <option value="en" lang="en">English</option>
      <option value="id" lang="id">Indonesia</option>
    </select>
  );
}
