---
name: billynabil-design
description: Design system skill for billynabil. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# billynabil Design System

You are building UI for **billynabil**. Light-themed, warm palette, sans-serif typography (Manrope), compact density on a 4px grid, flat elevation (no shadows), expressive motion.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![billynabil Homepage](screenshots/homepage.png)

> Read `references/DESIGN.md` for full token details.

## Design Philosophy

- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — Manrope for body/UI text, Syne for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **warm palette** — the color temperature runs warm, matching the sans-serif typography.
- **Restrained accent** — `#2a0a0a` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Surface | `--surface` | `#000000` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#ffffff` | Headings, body text |
| Text Muted | `--text-muted` | `#99a1af` | Captions, placeholders |
| Accent | `--accent` | `#2a0a0a` | CTAs, links, focus rings |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Danger | `#e40014` | Errors, destructive actions |

### Extended Palette

- **color-neutral-950:** `#0a0a0a` — Deep background layer or shadow color
- **color-red-500:** `#fb2c36` — Warm accent — hover glow or decorative highlight
- **ring:** `#660a0a`
- **color-blue-500:** `#3080ff`
- **color-purple-400:** `#c07eff`
- **color-pink-500:** `#f6339a`
- **color-slate-700:** `#314158`
- **color-slate-800:** `#1d293d`

### CSS Variable Tokens

```css
--background: #020000;
--foreground: #fff;
--card: #0a0000;
--card-foreground: #fff;
--popover: #0a0000;
--popover-foreground: #fff;
--primary: #e60022;
--primary-foreground: #fff;
--secondary: #1a0505;
--secondary-foreground: #fff;
--muted: #1a0505;
--muted-foreground: #888;
--accent: #2a0a0a;
--accent-foreground: #fff;
--destructive: #900;
--destructive-foreground: #fff;
--border: #330a0a;
--sidebar-foreground: #fff;
--sidebar-primary: #e60022;
--sidebar-primary-foreground: #fff;
```

## Typography

### Font Stack

- **Manrope** — Heading 1, Heading 2, Heading 3
- **Syne** — Body, Caption
- **SFMono-Regular** — Code

### Font Sources

```css
@font-face {
  font-family: "Syne";
  src: url("fonts/Syne-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Syne";
  src: url("fonts/Syne-Regular.ttf") format("truetype");
  font-weight: 400;
}
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
  font-family: "Oswald";
  src: url("fonts/Oswald-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Oswald";
  src: url("fonts/Oswald-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Manrope | 6rem | 700 |
| Heading 2 | Manrope | 10px | 700 |
| Heading 3 | Manrope | 9px | 700 |
| Body | Syne | inherit | 400 |
| Caption | Syne | 1em | 400 |
| Code | SFMono-Regular | 14px | 400 |

### Typography Rules

- Body/UI: **Manrope**, Headings: **Syne** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `.25rem, 3px, 4px`
Default: `3px`

### Container

Max-width: `1024px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| sm | 40rem |
| md | 48rem |
| lg | 64rem |
| xl | 80rem |
| 2xl | 96rem |
| md | 768px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #000000;
  border-radius: 3px;
  padding: 16px;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #2a0a0a;
  color: #ffffff;
  border-radius: 3px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #cccccc;
  color: #ffffff;
  border-radius: 3px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #cccccc;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 8px 12px;
  color: #ffffff;
  font-size: 14px;
}
.input:focus { border-color: #2a0a0a; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #000000;
  color: #99a1af;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #000000;
  border-radius: 4px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #99a1af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #cccccc;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #cccccc;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
}
.nav-link {
  color: #99a1af;
  padding: 8px 12px;
  border-radius: 3px;
  transition: color 150ms;
}
.nav-link:hover { color: #ffffff; }
.nav-link.active { color: #2a0a0a; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `shimmer`
- `shimmer-firefox`
- `spin`
- `fadeIn`
- `scrollUp`

### Motion Tokens

- **Duration scale:** `.01ms`, `.1s`, `.2s`, `.3s`, `.5s`, `.7s`, `300ms`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (.01ms) for micro-interactions, long (300ms) for page transitions
- **Easing:** `ease-out` for enters, `ease-in` for exits
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

This design uses **flat elevation** — no box-shadows anywhere.

### Elevation Strategy

| Level | Technique | Use |
|-------|-----------|-----|
| 0 — Base | Background color | Page background |
| 1 — Raised | Lighter surface + subtle border | Cards, panels |
| 2 — Floating | Even lighter surface + stronger border | Dropdowns, popovers |
| 3 — Overlay | Backdrop + modal surface | Modals, dialogs |

### Z-Index Scale

`0, 1, 2, 10, 20, 50, 9998, 9999, 10000, 99999`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No box-shadow** on any element — use borders and surface colors for depth
- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Manrope and Syne and SFMono-Regular are allowed
- **No arbitrary border-radius** — use the scale: .25rem, 3px, 4px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Manrope, Syne, SFMono-Regular only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — flat, surface color shifts only
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `/favicon.ico`
- **Site URL:** `https://www.billynabil.my.id/`
- **Brand color:** `#2a0a0a`
- **Brand typeface:** Manrope

## Quick Reference

```
Background:     (not extracted)
Surface:        #000000
Text:           #ffffff / #99a1af
Accent:         #2a0a0a
Border:         (not extracted)
Font:           Manrope
Spacing:        4px grid
Radius:         3px
Components:     0 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for billynabil
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "billynabil" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# billynabil DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 0
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![billynabil Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a warm, approachable feel. The light background emphasizes content clarity. Typography pairs **Syne** for display/headings with **Manrope** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 4, 8, 12, 16, 20, 24, 28, 32px. The accent color **#2a0a0a** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| color-black | `#000000` | surface | Card and panel backgrounds |
| tw-ring-offset-color | `#ffffff` | text-primary | Headings and body text |
| secondary | `#1a0505` | text-primary | Headings and body text |
| color-gray-400 | `#99a1af` | text-muted | Captions, placeholders, secondary info |
| accent | `#2a0a0a` | accent | CTAs, links, focus rings, active states |
| color-purple-500 | `#ac4bff` | accent | CTAs, links, focus rings, active states |
| color-red-600 | `#e40014` | danger | Error states, destructive actions |
| color-blue-500 | `#3080ff` | info | Informational highlights |
| color-neutral-950 | `#0a0a0a` | unknown | Palette color |
| color-red-500 | `#fb2c36` | unknown | Palette color |
| ring | `#660a0a` | unknown | Palette color |
| color-purple-400 | `#c07eff` | unknown | Palette color |
| color-pink-500 | `#f6339a` | unknown | Palette color |
| color-slate-700 | `#314158` | unknown | Palette color |
| color-slate-800 | `#1d293d` | unknown | Palette color |
| color-slate-900 | `#0f172b` | unknown | Palette color |
| color-gray-300 | `#d1d5dc` | unknown | Palette color |
| color-neutral-900 | `#171717` | unknown | Palette color |
| unknown | `#1da1f2` | unknown | Palette color |
| unknown | `#5865f2` | unknown | Palette color |

### CSS Variable Tokens

```css
--tw-border-style: solid;
--tw-border-style: dashed;
--tw-border-style: none;
--background: #020000;
--foreground: #fff;
--card: #0a0000;
--card-foreground: #fff;
--popover: #0a0000;
--popover-foreground: #fff;
--primary: #e60022;
--primary-foreground: #fff;
--secondary: #1a0505;
--secondary-foreground: #fff;
--muted: #1a0505;
--muted-foreground: #888;
--accent: #2a0a0a;
--accent-foreground: #fff;
--destructive: #900;
--destructive-foreground: #fff;
--border: #330a0a;
```


---

## 3. Typography Rules

**Font Stack:**
- **Manrope** — Heading 1, Heading 2, Heading 3
- **Syne** — Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Syne";
  src: url("fonts/Syne-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Syne";
  src: url("fonts/Syne-Regular.ttf") format("truetype");
  font-weight: 400;
}
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
  font-family: "Oswald";
  src: url("fonts/Oswald-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Oswald";
  src: url("fonts/Oswald-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Manrope | 6rem | 700 |
| Heading 2 | Manrope | 10px | 700 |
| Heading 3 | Manrope | 9px | 700 |
| Body | Syne | inherit | 400 |
| Caption | Syne | 1em | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Manrope** for body/UI text, **Syne** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

No components detected. Scan `src/components/` or `components/` to populate this section.

---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48
- **Border radius:** .25rem, 3px, 4px
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

No box-shadow values detected. The design appears to use a flat visual style.

**Z-Index Scale:** `0, 1, 2, 10, 20, 50, 9998, 9999, 10000, 99999`


---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes shimmer`
- `@keyframes shimmer-firefox`
- `@keyframes spin`
- `@keyframes fadeIn`
- `@keyframes scrollUp`
- `@keyframes scrollDown`
- `@keyframes scrollLeft`
- `@keyframes scrollRight`

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#2a0a0a` for interactive elements (buttons, links, focus rings)
- Pair **Manrope** (body) with **Syne** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use border and background shifts for elevation — not shadows
- Use border-radius from the scale: .25rem, 3px, 4px

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Manrope and Syne and SFMono-Regular
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't add box-shadow — this design system uses flat elevation
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No box-shadow on any element
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
| md | 768px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #000000
Border: 1px solid var(--border)
Radius: 3px
Padding: 16px
Font: Manrope
No shadows — use borders and surface colors for depth.
```

### Build a Button

```
Primary: bg #2a0a0a, text white
Ghost: bg transparent, border var(--border)
Padding: 8px 16px
Radius: 3px
Hover: opacity 0.9 or lighter shade
Focus: ring with #2a0a0a
```

### Build a Page Layout

```
Background: var(--background)
Max-width: 1024px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #000000
Label: #99a1af (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: var(--background)
Input border: 1px solid var(--border)
Focus: border-color #2a0a0a
Label: #99a1af 12px
Spacing: 16px between fields
Radius: 3px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Manrope, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: flat, surface shifts
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/Manrope-Bold.ttf`
- `fonts/Manrope-ExtraBold.ttf`
- `fonts/Manrope-ExtraLight.ttf`
- `fonts/Manrope-Light.ttf`
- `fonts/Manrope-Medium.ttf`
- `fonts/Manrope-Regular.ttf`
- `fonts/Manrope-SemiBold.ttf`
- `fonts/Oswald-Bold.ttf`
- `fonts/Oswald-ExtraLight.ttf`
- `fonts/Oswald-Light.ttf`
- `fonts/Oswald-Medium.ttf`
- `fonts/Oswald-Regular.ttf`
- `fonts/Oswald-SemiBold.ttf`
- `fonts/Syne-Bold.ttf`
- `fonts/Syne-ExtraBold.ttf`
- `fonts/Syne-Medium.ttf`
- `fonts/Syne-Regular.ttf`
- `fonts/Syne-SemiBold.ttf`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

