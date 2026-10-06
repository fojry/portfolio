# penyuunsada DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 12 · Fonts: 2 · Components: 4
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: subtle

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![penyuunsada Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a warm, approachable feel. The light background emphasizes content clarity. Typography pairs **Sora** for display/headings with **Manrope** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 4, 6, 10, 12, 14, 16, 18, 22px. The accent color **#ff6f91** anchors interactive elements (buttons, links, focus rings). Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| border | `#ffffff` | background | Page background, darkest surface |
| text | `#f5f2ea` | surface | Card and panel backgrounds |
| text-primary | `#080808` | text-primary | Headings and body text |
| muted | `#b6b0a5` | text-muted | Captions, placeholders, secondary info |
| border | `#252525` | border | Dividers, card borders, outlines |
| accent | `#ff6f91` | accent | CTAs, links, focus rings, active states |
| accent | `#ffb1c2` | accent | CTAs, links, focus rings, active states |
| danger | `#ff819c` | danger | Error states, destructive actions |
| info | `#2a4a74` | info | Informational highlights |
| unknown | `#6d1b32` | unknown | Palette color |
| unknown | `#664eff` | unknown | Palette color |
| unknown | `#111111` | unknown | Palette color |

### CSS Variable Tokens

```css
--border: rgba(255,255,255,0.1);
--muted: #b6b0a5;
--accent: #ff6f91;
--accent-soft: rgba(255,111,145,0.25);
```


---

## 3. Typography Rules

**Font Stack:**
- **Manrope** — Heading 1, Heading 2, Heading 3
- **Sora** — Body, Caption

**Font Sources:**

```css
@font-face {
  font-family: "Manrope";
  src: url("fonts/Manrope-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Manrope";
  src: url("fonts/Manrope-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Sora";
  src: url("fonts/Sora-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Sora";
  src: url("fonts/Sora-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Manrope | clamp(2rem,4vw,3rem) | 700 |
| Heading 2 | Manrope | clamp(2rem,4vw,2.8rem) | 700 |
| Heading 3 | Manrope | clamp(1.7rem,4vw,2.3rem) | 700 |
| Body | Sora | 0.8rem | 400 |
| Caption | Sora | 0.85rem | 400 |

**Typographic Rules:**
- Limit to 2 font families max per screen
- Use **Manrope** for body/UI text, **Sora** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Navigation (1)

**Navigation** — `html`

### Data Display (1)

**List** — `html`

### Data Input (1)

**Button** — `html`
- Animation: 

### Overlay (1)

**Modal** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 4, 6, 10, 12, 14, 16, 18, 22, 24, 26, 32, 38
- **Border radius:** 1rem, 1.1rem, 1.2rem, 1.5rem, 1.7rem, 1.8rem, 2rem, 999px
- **Max content width:** 1024px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised — cards, buttons, interactive elements

- `var(--shadow)`

### Overlay — full-screen overlays, top-level dialogs

- `0 0 45px rgba(255,111,145,0.25)`

### Z-Index Scale

`1, 40`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#ff6f91` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **Manrope** (body) with **Sora** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 1rem, 1.1rem, 1.2rem, 1.5rem, 1.7rem
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Manrope and Sora
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 560px | css |
| lg | 820px | css |
| lg | 1024px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f5f2ea
Border: 1px solid #252525
Radius: 1.7rem
Padding: 16px
Font: Manrope
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #ff6f91, text white
Ghost: bg transparent, border #252525
Padding: 6px 16px
Radius: 1.7rem
Hover: opacity 0.9 or lighter shade
Focus: ring with #ff6f91
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1024px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f5f2ea
Label: #b6b0a5 (muted, 12px, uppercase)
Value: #080808 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #252525
Focus: border-color #ff6f91
Label: #b6b0a5 12px
Spacing: 16px between fields
Radius: 1.7rem
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Manrope, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
