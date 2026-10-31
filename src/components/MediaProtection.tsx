"use client";

import { useEffect } from "react";

export default function MediaProtection() {
  useEffect(() => {
    // 1. Prevent right-click context menu on video elements & media wrappers
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isVideo =
        target.tagName === "VIDEO" ||
        target.closest("video") !== null ||
        target.closest("[data-protected-media]") !== null ||
        target.closest("div[class*='previewWrap']") !== null ||
        target.closest("div[class*='modalMediaWrap']") !== null;

      if (isVideo) {
        e.preventDefault();
      }
    };

    // 2. Prevent dragging videos or media thumbnails to save them
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (
        target.tagName === "VIDEO" ||
        target.closest("video") !== null ||
        target.closest("[data-protected-media]") !== null
      ) {
        e.preventDefault();
      }
    };

    // 3. Prevent Ctrl+S / Cmd+S save action when viewing media
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        const active = document.activeElement as HTMLElement | null;
        if (
          active?.tagName === "VIDEO" ||
          document.body.classList.contains("modal-open")
        ) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
