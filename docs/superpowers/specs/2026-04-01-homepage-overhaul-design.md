# Homepage Visual Overhaul & Cross-Page Bug Fix

**Date:** 2026-04-01
**Status:** Approved
**Scope:** Fix ghost text bug across all pages, verify homepage design, run SEO/security audits

## Problem

The homepage has a "ghost text" rendering bug where synopsis and bio text bleeds through behind the hero section as large, semi-transparent background text. This is caused by missing `position: relative`, `overflow: hidden`, and proper `z-index` isolation on `<section>` elements. The same issue may affect other pages.

## Decision: Styling Approach

Keep the current approach: CSS custom properties in `:root` + `tailwind.config.mjs` for Tailwind utility class generation. No migration to `@theme` block.

## Design Spec

### 1. Ghost Text Bug Fix (Critical)

Every `<section>` element across all 5 pages must have:
- `position: relative` (via class or inline)
- `overflow: hidden`
- Proper `z-index` layering so no content from one section renders visually in another

Pages to audit and fix:
- `src/pages/index.astro`
- `src/pages/books.astro`
- `src/pages/about.astro`
- `src/pages/blog.astro`
- `src/pages/contact.astro`

Also check `src/components/Header.astro` and `src/components/Footer.astro` for z-index conflicts.

### 2. Homepage Section Structure (index.astro)

The homepage already has the correct content and section order from the user's recent edits. The sections are:

1. **Hero** - Full-viewport, Back-Cover.jpg background (opacity ~0.2), dark gradient overlays, two-column grid with title/CTA left + book cover right
2. **Red accent strip** - Full-width red bar with marquee text
3. **Synopsis** - Centered, max-width ~800px, "A Sixty-Year Conspiracy"
4. **Newsletter** - Darker bg, centered email signup
5. **About the Author** - Two-column: photo placeholder left, bio right
6. **Series Grid** - 5-column grid, Book 1 with cover + "OUT NOW", Books 2-5 placeholders
7. **Blog Preview** - 3-column article card grid

The task is to ensure all sections have proper isolation (relative positioning, overflow hidden, z-index), not to restructure or rewrite content.

### 3. Tailwind 4 Compatibility Verification

Verify that `global.css` does NOT contain:
- `@tailwind base/components/utilities` (must use `@import "tailwindcss"`)
- `@apply` with custom theme utilities like `font-body`, `font-heading`, `bg-dark`, `text-cream` etc. that come from `tailwind.config.mjs` (these don't work in Tailwind 4's `@apply`)

Standard Tailwind utilities in HTML class attributes are fine. Only `@apply` in CSS is restricted.

### 4. Design Tokens (Already Implemented)

- Dark bg: `#0a0e1a`, darker: `#060a14`, cards: `#0f1629` / `#111827`
- Teal: `#0D9488` / `#2dd4bf` / `#0F766E`
- Red: `#DC2626` / `#ef4444` / `#991b1b`
- Cream: `#f1ece4`, body text: `#cbd5e1`, muted: `#94a3b8`
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Image paths: `/images/Front-Cover.jpg`, `/images/Back-Cover.jpg`

### 5. SEO Audit

Run SEO skills to verify:
- Structured data (JSON-LD) in SEOHead.astro is valid
- Meta tags, Open Graph, Twitter cards are correct
- Sitemap generation works
- robots.txt is properly configured
- Image alt text is present and descriptive
- Heading hierarchy is correct (single h1 per page)

### 6. Security Audit

Run security skills to verify:
- Content-Security-Policy header in SEOHead.astro is appropriate
- Form honeypot fields for spam prevention
- No hardcoded secrets or API keys
- External link attributes (noopener, noreferrer)
- No XSS vectors in form handling

### 7. Build Verification

After all fixes:
- Run `astro build` to confirm zero errors
- Run dev server and verify visually that ghost text is gone
- Confirm all 5 pages render without layout issues

## Out of Scope

- Content changes (text, copy)
- New pages or features
- Backend/API integrations
- Performance optimization beyond what's needed for the bug fix
- Migrating away from tailwind.config.mjs to @theme block

## Success Criteria

1. No ghost text / text bleeding between sections on any page
2. `astro build` completes with zero errors
3. All sections visually isolated with proper z-index stacking
4. Tailwind 4 compatibility confirmed (no deprecated @apply usage)
5. SEO audit passes with no critical issues
6. Security audit passes with no critical issues
