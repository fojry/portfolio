"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const reqId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setEnabled(true);
    } else {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const targetEl = e.target as HTMLElement | null;
      if (!targetEl) return;

      const cursorTarget = targetEl.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "view") setCursorText("View\nProject");
        else if (type === "play") setCursorText("Play\nVideo");
        else if (type === "explore") setCursorText("Explore");
        else setCursorText(type || "");
        setIsHovering(true);
      } else {
        const interactive = targetEl.closest("a, button, input, textarea, [role='button']");
        if (interactive) {
          setCursorText("");
          setIsHovering(true);
        } else {
          setCursorText("");
          setIsHovering(false);
        }
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      reqId.current = requestAnimationFrame(render);
    };

    reqId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (reqId.current) cancelAnimationFrame(reqId.current);
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`${styles.cursorWrap} ${visible ? styles.visible : ""} ${
        isHovering ? styles.hovering : ""
      } ${cursorText ? styles.withText : ""}`}
      aria-hidden="true"
    >
      <div className={styles.cursorDot}>
        {cursorText && (
          <span className={styles.cursorLabel}>
            {cursorText.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 && cursorText.includes("\n") && <br />}
              </React.Fragment>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
