# jingjinghan DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 9
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![jingjinghan Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a cool, approachable feel. The light background emphasizes content clarity. Typography pairs **Blinker** for display/headings with **Sulphur Point** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 8, 10, 40, 46, 48, 72px. The accent color **#90c5ff** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tw-ring-offset-color | `#ffffff` | background | Page background, darkest surface |
| color-neutral-100 | `#f5f5f5` | surface | Card and panel backgrounds |
| color-black | `#000000` | text-primary | Headings and body text |
| color-neutral-400 | `#a1a1a1` | text-muted | Captions, placeholders, secondary info |
| color-neutral-800 | `#262626` | border | Dividers, card borders, outlines |
| color-blue-300 | `#90c5ff` | accent | CTAs, links, focus rings, active states |
| accent-green | `#8cff2e` | accent | CTAs, links, focus rings, active states |
| success | `#28c840` | success | Success states, positive indicators |
| warning | `#febc2e` | warning | Warning states, caution indicators |
| color-blue-600 | `#155dfc` | info | Informational highlights |
| color-neutral-950 | `#0a0a0a` | unknown | Palette color |
| color-neutral-200 | `#e5e7eb` | unknown | Palette color |
| color-neutral-300 | `#d4d4d4` | unknown | Palette color |
| unknown | `#5eead4` | unknown | Palette color |
| color-cyan-200 | `#a2f4fd` | unknown | Palette color |
| color-blue-200 | `#bedbff` | unknown | Palette color |
| color-neutral-900 | `#171717` | unknown | Palette color |
| color-neutral-500 | `#737373` | unknown | Palette color |
| color-neutral-600 | `#525252` | unknown | Palette color |
| color-neutral-700 | `#404040` | unknown | Palette color |

### CSS Variable Tokens

```css
--tw-border-style: solid;
--radius-card: 18px;
--tw-border-style: dashed;
--background: #000;
--foreground: #fff;
--muted-ink: #ababab;
--accent-green: #8cff2e;
--accent: #fff;
--tw-border-style: solid;
--radius-card: 18px;
--tw-border-style: dashed;
--background: #000;
--foreground: #fff;
--muted-ink: #ababab;
--accent-green: #8cff2e;
--accent: #fff;
--tw-border-style: solid;
--radius-card: 18px;
--tw-border-style: dashed;
--background: #000;
```


---

## 3. Typography Rules

**Font Stack:**
- **Sulphur Point** — Heading 1, Heading 2, Heading 3
- **Blinker** — Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Blinker";
  src: url("https://www.jingjinghan.com/_next/static/media/573c913bb950f2fd-s.0xus.nw6-7u0v.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Blinker";
  src: url("https://www.jingjinghan.com/_next/static/media/ac3dc77fc933ae47-s.08~1725j0d74n.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Sulphur Point";
  src: url("https://www.jingjinghan.com/_next/static/media/40bee43913c869a9-s.0ch605cnp0i~0.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Sulphur Point";
  src: url("https://www.jingjinghan.com/_next/static/media/c68041c0728a26ea-s.115dmk~uojcsc.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "gilroy";
  src: url("https://www.jingjinghan.com/_next/static/media/Gilroy_Regular-s.p.0~yzy4cfk069~.woff2") format("woff2");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Sulphur Point | 96px | 700 |
| Heading 2 | Sulphur Point | 72px | 700 |
| Heading 3 | Sulphur Point | clamp(64px,15vw,220px) | 700 |
| Body | Blinker | 22px | 400 |
| Caption | Blinker | 20px | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Sulphur Point** for body/UI text, **Blinker** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (3)

**Card** — `html`

**Badge** — `html`

**List** — `html`

### Data Input (1)

**Button** — `html`
- Animation: 

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 8, 10, 40, 46, 48, 72
- **Border radius:** .25rem, 10px, 14px, 16px, 18px, 20px, 24px, 26px, 28px, 30px, inherit, 22px
- **Max content width:** 1400px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Overlay — full-screen overlays, top-level dialogs

- `0 34px 70px -34px #000000d9`

### Z-Index Scale

`0, 10, 20, 30, 40, 100, 120, 150, 195, 200, 300`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes smoke-drift`
- `@keyframes smoke-drift-2`
- `@keyframes subtitle-fade`
- `@keyframes scroll-cue`
- `@keyframes caret-blink`
- `@keyframes page-reveal`
- `@keyframes about-float`
- `@keyframes sw-in`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#90c5ff` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **Sulphur Point** (body) with **Blinker** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .25rem, 10px, 14px, 16px, 18px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Sulphur Point and Blinker and SFMono-Regular
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
| sm | 40rem | css |
| md | 48rem | css |
| lg | 64rem | css |
| xl | 80rem | css |
| 2xl | 96rem | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f5f5f5
Border: 1px solid #262626
Radius: 24px
Padding: 10px
Font: Sulphur Point
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #90c5ff, text white
Ghost: bg transparent, border #262626
Padding: 8px 10px
Radius: 24px
Hover: opacity 0.9 or lighter shade
Focus: ring with #90c5ff
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1400px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f5f5f5
Label: #a1a1a1 (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #262626
Focus: border-color #90c5ff
Label: #a1a1a1 12px
Spacing: 10px between fields
Radius: 24px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Sulphur Point, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
