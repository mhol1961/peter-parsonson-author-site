# Homepage Visual Overhaul & Ghost Text Fix — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the ghost text rendering bug across all pages and verify the site builds cleanly, passes SEO and security audits.

**Architecture:** The ghost text bug is caused by `<section>` elements missing `position: relative` and `overflow: hidden`, allowing content (especially absolutely-positioned pseudo-elements like `.grain-overlay::before` and stacked z-index content) to bleed between sections. The fix is to add a global CSS rule for section isolation and then verify each page. One exception: the about page's main bio section uses `position: sticky` on a child, so it must NOT have `overflow: hidden`.

**Tech Stack:** Astro 6, Tailwind CSS 4, HTML/CSS

---

### Task 1: Add Global Section Isolation Rule to CSS

**Files:**
- Modify: `src/styles/global.css` (after the `/* SECTIONS */` comment block, around line 120)

- [ ] **Step 1: Add section isolation CSS rule**

Add this rule after the existing section utility classes (`.section-dark`, `.section-darker`, `.section-card`) in `global.css`:

```css
/* Section isolation — prevents ghost text bleed between sections */
section {
  position: relative;
  overflow: hidden;
}
```

- [ ] **Step 2: Add an override class for sections that need visible overflow**

The about page has a sticky sidebar that requires `overflow: visible`. Add this immediately after:

```css
/* Override for sections containing sticky elements */
section.overflow-visible {
  overflow: visible;
}
```

- [ ] **Step 3: Verify no `@apply` uses custom theme utilities**

Scan `global.css` for any `@apply` that references custom utilities from `tailwind.config.mjs` (like `font-body`, `font-heading`, `bg-dark`, `text-cream`, `bg-dark-card`, `border-dark-lighter`). These don't work in Tailwind 4's `@apply`. The current file uses direct CSS properties for these — confirm no regressions have been introduced.

Expected: All `@apply` directives use only standard Tailwind utilities (`text-5xl`, `font-black`, `px-8`, `py-4`, etc.). Custom colors/fonts are applied via CSS custom properties or direct `font-family` declarations.

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git commit -m "fix: add global section isolation to prevent ghost text bleed"
```

---

### Task 2: Fix Section Isolation on index.astro

**Files:**
- Modify: `src/pages/index.astro`

The current `index.astro` has 7 sections. Some already have `relative overflow-hidden`, others don't. With the global CSS rule from Task 1, all sections now get `position: relative; overflow: hidden` automatically. But we should verify the z-index layering is correct on sections with absolute-positioned children.

- [ ] **Step 1: Verify hero section z-index layering**

The hero section has multiple absolute-positioned layers (background image, gradient overlays) and content at `z-10`. With the global `overflow: hidden` now in place, verify these layers are properly contained:

- Background image div: `z-[1]` — correct
- Gradient overlays: `z-[2]` — correct
- Content div: `z-10` — correct
- Scroll indicator: `z-10` — correct

No changes needed if these are already set.

- [ ] **Step 2: Verify synopsis section grain overlay is contained**

The synopsis section uses `grain-overlay` class which adds a `::before` pseudo-element with `position: absolute; inset: 0`. The global `section { position: relative; overflow: hidden; }` rule will now contain this properly. Verify the inner content div has `relative z-10` to sit above the grain:

Check that the content wrapper `<div class="relative max-w-4xl mx-auto px-6 z-10">` exists.

- [ ] **Step 3: Verify all remaining sections have proper inner z-indexing**

For sections 4-7 (newsletter, about preview, series grid, blog preview), check that no absolute-positioned elements exist that could cause overlap. These sections use standard flow layout so should be fine with just the global rule.

- [ ] **Step 4: Run `astro build` to verify no errors**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: `✓ Completed` with 5 pages built, zero errors.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "fix: verify section isolation on homepage"
```

(Only commit if changes were made in steps 1-3.)

---

### Task 3: Fix Section Isolation on books.astro

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Audit all sections for z-index conflicts**

The books page has these sections:
1. Page Hero — has `relative overflow-hidden` inline, plus a complex background-image style. The global rule reinforces this.
2. Featured Book — uses `section-dark`, no absolute children that could escape.
3. Key Themes — uses `section-darker`, no absolute children.
4. Upcoming Books — uses standard grid layout.
5. Series Overview — uses standard layout.
6. Where to Buy — uses standard grid layout.

With the global CSS rule, all sections are now isolated. Verify no section has inline `overflow: visible` that would override the global rule.

- [ ] **Step 2: Verify the hero background-image section**

The hero section uses inline `style="background-image: ..."` with overlay divs. The global rule adds `overflow: hidden` which will clip the grid overlay. Verify the overlay div uses `absolute inset-0` and doesn't extend beyond the section bounds.

- [ ] **Step 3: Commit if changes were made**

```bash
git add src/pages/books.astro
git commit -m "fix: verify section isolation on books page"
```

---

### Task 4: Fix Section Isolation on about.astro

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Add `overflow-visible` class to main bio section**

The Main Bio Section (`<section class="section-dark py-20 md:py-32">`) at line 33 contains a sticky sidebar (`<div class="sticky top-24">`). The global `overflow: hidden` rule will break `position: sticky`. Add the override class:

Change:
```html
<section class="section-dark py-20 md:py-32">
```
To:
```html
<section class="section-dark py-20 md:py-32 overflow-visible">
```

- [ ] **Step 2: Verify other sections are fine with global isolation**

The remaining sections (Hero, Writing Approach, USCG Authors Program, Press & Speaking) use standard flow layout with no sticky elements. The global rule handles them.

- Hero section already has `relative overflow-hidden` inline — the global rule is redundant but harmless.

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "fix: preserve sticky sidebar on about page with overflow-visible"
```

---

### Task 5: Fix Section Isolation on blog.astro and contact.astro

**Files:**
- Modify: `src/pages/blog.astro`
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Audit blog.astro sections**

Blog page sections:
1. Hero — already has `relative overflow-hidden` ✓
2. Featured Article — standard grid, no sticky/absolute issues
3. Article Grid — standard grid
4. Categories & Tags — standard grid

All sections are covered by the global rule. No changes needed unless there are inline `overflow: visible` overrides.

- [ ] **Step 2: Audit contact.astro sections**

Contact page sections:
1. Hero — already has `relative overflow-hidden` ✓
2. Main Contact — standard grid with form, no sticky elements
3. FAQ — standard layout with `<details>` elements

All sections are covered by the global rule. No changes needed.

- [ ] **Step 3: Commit if changes were made**

```bash
git add src/pages/blog.astro src/pages/contact.astro
git commit -m "fix: verify section isolation on blog and contact pages"
```

---

### Task 6: Verify Header and Footer Z-Index Stacking

**Files:**
- Verify: `src/components/Header.astro`
- Verify: `src/components/Footer.astro`

- [ ] **Step 1: Verify header z-index**

The header uses `class="sticky top-0 z-50"` — this puts it above all sections (which max at `z-10` for content). The accent strip above the header has no z-index. Verify the header's z-50 is sufficient to stay above all page content.

Expected: Header stays on top during scroll. No changes needed.

- [ ] **Step 2: Verify footer stacking**

The footer uses `class="section-darker ... relative"`. With the global section rule, it inherits `overflow: hidden`. The footer is not a `<section>` element — it's a `<footer>`, so the global rule does NOT apply. No changes needed.

- [ ] **Step 3: Verify the accent strip in Header.astro**

The top accent strip (`<div class="accent-strip hidden md:block">`) sits above the sticky header. The header's `top-0` positions it at the top of the viewport when stuck. The accent strip scrolls away. This is correct behavior.

No commit needed unless changes were made.

---

### Task 7: Full Build Verification

**Files:**
- None (verification only)

- [ ] **Step 1: Run full build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected output:
```
generating static routes
  ├─ /about/index.html
  ├─ /blog/index.html
  ├─ /books/index.html
  ├─ /contact/index.html
  ├─ /index.html
✓ Completed
[build] Complete!
```

Zero errors, zero Tailwind 4 compatibility warnings.

- [ ] **Step 2: Start dev server and verify in browser**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro dev
```

Open http://localhost:4321 and verify:
- No ghost text behind hero section
- All sections visually isolated — no text bleeding between sections
- Book cover images load correctly
- Hover effects work on book covers
- Mobile menu works
- All 5 pages render without layout issues

---

### Task 8: SEO Audit

**Files:**
- Verify: `src/components/SEOHead.astro`
- Verify: all page files for heading hierarchy

Run SEO audit skills to check:

- [ ] **Step 1: Validate structured data (JSON-LD)**

Check `SEOHead.astro` JSON-LD for:
- Valid `@context` and `@type` usage
- Correct `Person`, `WebSite`, `BlogPosting`, `Book` schemas per page type
- All required properties present

- [ ] **Step 2: Validate meta tags**

Check each page renders with:
- Unique `<title>` tag
- `<meta name="description">` present and under 160 characters
- `<link rel="canonical">` with correct URL
- Open Graph tags: `og:type`, `og:title`, `og:description`, `og:image`, `og:url`
- Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

- [ ] **Step 3: Validate heading hierarchy**

Each page should have exactly one `<h1>`, with `<h2>` and `<h3>` properly nested. Check all 5 pages.

- [ ] **Step 4: Validate image alt text**

All `<img>` tags should have descriptive `alt` attributes. Decorative images (like the background Back-Cover.jpg in the hero) should have `alt=""` and `aria-hidden="true"`.

- [ ] **Step 5: Validate sitemap and robots.txt**

Run `astro build` and check:
- `dist/sitemap-index.xml` is generated
- `public/robots.txt` exists and allows crawling

- [ ] **Step 6: Fix any issues found and commit**

```bash
git add -A
git commit -m "fix: address SEO audit findings"
```

---

### Task 9: Security Audit

**Files:**
- Verify: `src/components/SEOHead.astro` (CSP header)
- Verify: `src/components/ContactForm.astro` (form handling)
- Verify: `src/components/NewsletterSignup.astro` (form handling)
- Verify: all pages for external link safety

- [ ] **Step 1: Audit Content-Security-Policy**

Check the CSP meta tag in `SEOHead.astro` line 114:
```
default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://ecommerce.example.com;
```

Issues to check:
- `connect-src` references `https://ecommerce.example.com` — is this a real endpoint or placeholder?
- `script-src` allows `https://cdn.jsdelivr.net` — is this needed?
- `'unsafe-inline'` for scripts — necessary for Astro's inline scripts

- [ ] **Step 2: Audit form security**

Check `ContactForm.astro` and `NewsletterSignup.astro` for:
- Honeypot fields present (spam prevention)
- No hardcoded API keys or secrets
- Form action URLs are placeholders or secure endpoints
- Client-side validation doesn't replace server-side validation

- [ ] **Step 3: Audit external links**

All external links (`target="_blank"`) should have `rel="noopener noreferrer"` to prevent tabnabbing. Check all pages.

- [ ] **Step 4: Check for hardcoded secrets**

Scan all files for patterns like API keys, tokens, passwords. Check:
- No secrets in component files
- No secrets in config files
- `.gitignore` excludes `.env` files

- [ ] **Step 5: Fix any issues found and commit**

```bash
git add -A
git commit -m "fix: address security audit findings"
```
