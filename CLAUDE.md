# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with Astro - a static site generator optimized for content-focused sites with minimal JavaScript by default. The site is designed to be nice-looking and animated while remaining mostly or entirely static.

## Development Commands

All commands run from the root directory:

- `npm install` - Install dependencies
- `npm run dev` - Start dev server at localhost:4321 with hot reload
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `astro add <integration>` - Add integrations (tailwind, react, vue, etc.)

## Architecture

### File-Based Routing
- Pages live in `src/pages/` - each `.astro` or `.md` file becomes a route
- `src/pages/index.astro` maps to `/`
- `src/pages/about.astro` would map to `/about`

### Project Structure
- `src/pages/` - Page routes (file-based routing)
- `src/components/` - Reusable Astro/framework components
- `src/layouts/` - Layout components for wrapping pages
- `public/` - Static assets (images, fonts, etc.) served as-is

### Astro Components
- `.astro` files have frontmatter (between `---`) for component logic
- Template is written in HTML-like syntax below the frontmatter
- Zero JavaScript shipped by default unless explicitly needed
- Can import and use React/Vue/Svelte components if added via `astro add`

### Styling and Animation
- Scoped styles can be added in `<style>` tags within `.astro` files
- For animations, consider: CSS animations, View Transitions API (built into Astro), or libraries like GSAP
- Astro has built-in support for View Transitions for smooth page transitions
