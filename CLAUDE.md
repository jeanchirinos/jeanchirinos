# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server
pnpm build     # Production build
pnpm preview   # Preview production build
pnpm upd       # Interactive dependency upgrade (pnpm up --i --L)
```

No test runner is configured.

## Architecture

Personal portfolio site built with **Astro 5** + **React 19** + **Tailwind CSS v4**.

- Single page (`src/pages/index.astro`) composed of section components: `Header`, `About`, `Experience`, `Projects`, `GoogleTranslate`
- Components live in `src/components/sections/` — pure `.astro` files except for interactive islands (`.tsx`), e.g. `CopyEmailButton.tsx` uses React only where client-side interactivity is needed
- Static data is sourced from `src/data/`: `projects.ts` (typed, imports from `technologies.json`), `personalInfo.json`, `technologies.json`
- Icons via `astro-icon` with the `@iconify-json/mdi` icon set; custom SVGs go in `src/icons/`
- Global styles in `src/globals.css`; Tailwind v4 is configured as a Vite plugin (no `tailwind.config.*`)
- Path aliases: `@/*` → `src/*`, `@components/*` → `src/components/*`, `@assets/*` → `src/assets/*`
- Deployed to Vercel at `https://jeanchirinos.vercel.app`
