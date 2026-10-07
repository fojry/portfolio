# Copilot instructions for this repository

## Repository overview

This repo is a Next.js 16 portfolio site built with the App Router, TypeScript, and CSS Modules. The app is a single-page portfolio landing experience for a creative studio/portfolio, with multiple themed work collections, a modal lightbox, and interactive motion-heavy UI.

Key project structure:
- `src/app/page.tsx`: top-level homepage composition and state for collection modal / media modal
- `src/data/portfolioData.ts`: source of truth for section content, media items, contact details, and terms
- `src/components/*.tsx`: each section/component owns its own display logic and styling
- `src/app/globals.css`: global resets and shared theme tokens
- `public/projects`: media assets referenced by the portfolio data (`/projects/...`)

## Build, test, and lint commands

Run these from the repository root:

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Production build: `npm run build`
- Lint: `npm run lint`
- Type check (available via TypeScript, no dedicated script): `npx tsc --noEmit`
- Single-file lint example: `npx eslint src/app/page.tsx`

There is no dedicated test runner configured in this repo right now. Validation is primarily via `npm run lint` and `npm run build`.

## Architecture and data flow

- The homepage is assembled in `src/app/page.tsx` by composing section components such as `Hero`, `FeaturedStage`, `ProjectArchive`, `TermsSection`, and `Footer`.
- The main portfolio content is not hardcoded across the UI; it is centralized in `WORKS_DATA` inside `src/data/portfolioData.ts`.
- Collection view state is managed in the page component using slugs and `window.history` hash handling (`#collection-...`) for a pseudo-deep-link experience.
- Media previews and modal episodes are driven by `MediaItem` entries, with thumbnail/media sources stored along with metadata such as type, warning, and external links.
- Styling follows a component-local CSS Modules pattern (`*.module.css`), so most new UI styling should live beside the related component instead of in a shared global stylesheet unless it is truly app-wide.

## Repo-specific conventions and guardrails

- This repo includes a local `AGENTS.md` warning that the Next.js version here may differ from the generic framework assumptions in training data. Before changing framework behavior, check the local Next.js docs under `node_modules/next/dist/docs/` if you need version-specific API guidance.
- Keep portfolio content centralized. When adding work items, update `src/data/portfolioData.ts` first and keep the structure consistent with existing `WorkCollection` and `MediaItem` interfaces.
- Asset references are usually absolute public paths (`/projects/...`) rather than relative imports; keep paths consistent with the files under `public/`.
- Many UI pieces are interactive and client-rendered (`"use client"`), so keep browser-only logic inside components that actually need it.
- For collection and modal navigation, preserve the existing slug/hash pattern because the page intentionally syncs section selection with browser history.

## Key implementation patterns

- Use CSS Modules for component-level layout and visuals instead of ad hoc inline styles.
- Prefer small, reusable section components over embedding large blocks of JSX directly in `page.tsx`.
- Keep strings, contact info, terms, and media metadata in `src/data/portfolioData.ts` rather than duplicating them across components.
- Maintain the existing `WORKS_DATA` schema (`slug`, `label`, `title`, `summary`, `accent`, `description`, `media`) when adding new portfolio collections.
- Treat external links and previews as content, not logic: the app presents media sources as data rather than hardcoded per component.

## Notes for future Copilot sessions

- Most editing work will be in `src/components`, `src/data/portfolioData.ts`, and the App Router files under `src/app/`.
- If a change affects the homepage’s narrative structure or media browsing flow, check both `src/app/page.tsx` and the relevant collection/component file together; the page state and UI are tightly coupled.
- This project is design-driven and content-heavy, so changes are often data-first: update the data object and then verify the matching component renders the new content cleanly.
