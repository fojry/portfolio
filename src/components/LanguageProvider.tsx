"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translate, type Language } from "@/data/translations";

const STORAGE_KEY = "portfolio-language";
const CHANGE_EVENT = "portfolio-language-change";
let sessionLanguage: Language | null = null;

function getLanguage(): Language {
  if (typeof window === "undefined") return "en";
  if (sessionLanguage) return sessionLanguage;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "id" ? "id" : "en";
  } catch {
    return "en";
  }
}

function setLanguage(language: Language) {
  if (language !== "en" && language !== "id") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
    sessionLanguage = null;
  } catch {
    // Keep the selection working when browser storage is unavailable.
    sessionLanguage = language;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      sessionLanguage = null;
      onChange();
    }
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

// The server and first hydration render use the same default.
const getServerLanguage = (): Language => "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getLanguage, getServerLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: (text: string) => translate(text, language) }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
