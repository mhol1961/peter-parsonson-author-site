# Complete Site Overhaul — Final Polish

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform every page from flat/underwhelming to premium cinematic — fix padding gaps, redesign About hero, add marquee strip, add missing CSS classes, apply scroll animations to all remaining pages, and ensure visual consistency.

**Architecture:** Most animation CSS already exists. This plan adds missing CSS classes, tightens all section padding to `py-16 md:py-20`, completely redesigns the About page hero with author photo showcase, adds marquee scrolling to the red accent strip, and applies scroll animation classes to about/contact pages that currently lack them.

**Tech Stack:** Astro 6, Tailwind CSS 4, CSS animations, vanilla JS

---

## File Map

| File | Changes |
|------|---------|
| `src/styles/global.css` | Add grid-overlay, classified-stamp, marquee, author-hero-img CSS classes |
| `src/pages/index.astro` | Tighten padding to py-16 md:py-20, add marquee animation to red strip, add scan-lines to hero |
| `src/pages/about.astro` | Complete hero redesign with author photo showcase, add scroll animations, tighten padding |
| `src/pages/books.astro` | Tighten padding, add radar container behind hero book cover, add fade-in to remaining sections |
| `src/pages/blog.astro` | Tighten remaining padding |
| `src/pages/contact.astro` | Add scan-lines to hero, add fade-in to form/sidebar, tighten padding |

---

### Task 1: Add Missing CSS Classes to global.css

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add grid-overlay, classified-stamp, marquee, and author-hero-img CSS**

Add the following block BEFORE the `/* SCROLLBAR */` comment (before line 540):

```css
/* ============================================
   GRID OVERLAY (Military Aesthetic)
   ============================================ */

.grid-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(13,148,136,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.025) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 1;
}

/* ============================================
   CLASSIFIED STAMP
   ============================================ */

.classified-stamp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg);
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.3em;
  color: rgba(220, 38, 38, 0.12);
  text-transform: uppercase;
  pointer-events: none;
  white-space: nowrap;
}

/* ============================================
   MARQUEE SCROLL (Red Strip)
   ============================================ */

.marquee-wrapper {
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
  animation: marquee-scroll 25s linear infinite;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ============================================
   AUTHOR HERO IMAGE
   ============================================ */

.author-hero-img {
  border: 2px solid rgba(13,148,136,0.3);
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 0 40px rgba(13,148,136,0.1);
}

.author-hero-img:hover {
  border-color: var(--color-primary);
  box-shadow: 0 0 60px rgba(13,148,136,0.2);
}

/* Stagger delays for card grids */
.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }
.stagger-5 { transition-delay: 0.5s; }
```

- [ ] **Step 2: Verify build passes**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

---

### Task 2: Homepage — Tighten Padding, Marquee Strip, Scan Lines

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Add scan-lines to hero section**

Change line 15:
```html
  <section class="relative min-h-screen flex items-center overflow-hidden section-darker grain-overlay">
```
to:
```html
  <section class="relative min-h-screen flex items-center overflow-hidden section-darker grain-overlay scan-lines">
```

- [ ] **Step 2: Add marquee animation to red accent strip**

Replace the red accent strip (lines 92-94):
```html
  <div class="accent-strip">
    <span>USCG Authors Program &bull; Navy SEAL Commander John Hunter &bull; The EMP Threat Is Real</span>
  </div>
```
with:
```html
  <div class="accent-strip marquee-wrapper">
    <span class="marquee-content">USCG Authors Program &nbsp;&bull;&nbsp; Navy SEAL Commander John Hunter &nbsp;&bull;&nbsp; The EMP Threat Is Real &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; USCG Authors Program &nbsp;&bull;&nbsp; Navy SEAL Commander John Hunter &nbsp;&bull;&nbsp; The EMP Threat Is Real &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;</span>
  </div>
```

(Text is duplicated so the marquee loops seamlessly.)

- [ ] **Step 3: Tighten ALL section padding from py-16 md:py-24 to py-16 md:py-20**

Find and replace on these sections:
- Synopsis: `py-16 md:py-24` to `py-16 md:py-20`
- About preview: `py-16 md:py-24` to `py-16 md:py-20`
- Series preview: `py-16 md:py-24` to `py-16 md:py-20`
- Blog preview: `py-16 md:py-24` to `py-16 md:py-20`

Change `py-20` on newsletter section to `py-14`.

Also reduce internal margins:
- Change `mb-12` on section heading containers to `mb-8`
- Change `mb-8` after teal-dividers to `mb-6`

---

### Task 3: About Page — Complete Hero Redesign

**Files:**
- Modify: `src/pages/about.astro`

This is the biggest change. The About hero must showcase the author photo prominently.

- [ ] **Step 1: Replace the entire hero section (lines 11-28)**

Replace from the hero section comment through the closing section tag with:

```html
  <!-- Hero Section - Author Showcase -->
  <section class="section-darker relative overflow-hidden scan-lines grid-overlay" style="min-height: 80vh; display: flex; align-items: center;">
    <!-- Atmospheric gradients -->
    <div class="absolute inset-0 z-0" style="background: radial-gradient(ellipse at 30% 50%, rgba(13, 148, 136, 0.06) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(220, 38, 38, 0.04) 0%, transparent 50%), linear-gradient(180deg, #0a0e1a 0%, #060a14 100%);"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 py-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Author Photo -->
        <div class="flex justify-center lg:justify-start">
          <div class="w-full max-w-md">
            <img
              src="/images/pete-author-image.png"
              alt="Peter P. — military thriller author"
              class="w-full aspect-[3/4] object-cover author-hero-img"
              loading="eager"
            />
          </div>
        </div>

        <!-- Right: Heading + CTA -->
        <div>
          <div class="teal-divider mb-6"></div>
          <p class="section-label">Operative Profile</p>
          <h1 class="font-heading font-black text-cream leading-[0.95] mb-8 text-shadow-heavy">
            <span class="block text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter">The Writer</span>
            <span class="block text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter">Behind the</span>
            <span class="block text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-accent">Threat</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
            A scientist who spent twenty-two years turning declassified history into fiction that says what the official record cannot.
          </p>
          <a href="#bio" class="btn-secondary">
            Read Full Bio
          </a>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Replace author photo in sidebar with pull quote**

Find the author photo block in the bio section sidebar (the div with border-2 border-red-600/30 containing the img). Replace it with:

```html
            <!-- Pull Quote -->
            <div class="mb-8 p-6 border-l-[3px]" style="border-color: #0D9488; background: rgba(13, 148, 136, 0.05);">
              <p class="text-lg italic text-cream leading-relaxed font-heading">
                &ldquo;Some truths are too dangerous for official reports. Fiction can go where the record cannot.&rdquo;
              </p>
              <p class="text-sm mt-4 uppercase tracking-widest font-bold" style="color: #0D9488;">— Peter P.</p>
            </div>
```

- [ ] **Step 3: Add id="bio" and tighten padding on bio section**

Change:
```html
  <section class="section-dark py-16 md:py-24 overflow-visible">
```
to:
```html
  <section id="bio" class="section-dark py-16 md:py-20 overflow-visible">
```

- [ ] **Step 4: Add "BACKGROUND DOSSIER" eyebrow above bio text heading**

Find:
```html
          <h2 class="text-5xl md:text-5xl font-black uppercase tracking-tighter text-cream mb-8">
            Twenty-Two Years of Research
          </h2>
```
Add before it:
```html
          <p class="section-label">Background Dossier</p>
```

- [ ] **Step 5: Add fade-in-up to writing approach cards**

Add `fade-in-up` class to each of the 4 approach card divs. Each div starts with:
```html
        <div class="section-card border-t-4 border-red-600 p-8 pl-8">
```
or `border-teal-600`. Add `fade-in-up` to each.

- [ ] **Step 6: Add fade-in-up to USCG and Press section content**

Add `fade-in-up` to:
- The USCG card: `<div class="section-card border-l-8 border-red-600 p-10 md:p-16">` add `fade-in-up`
- Each of the 2 press/speaking cards: add `fade-in-up`

- [ ] **Step 7: Tighten padding on all remaining sections**

Change `py-16 md:py-24` to `py-16 md:py-20` on:
- Writing Approach section
- USCG section
- Press and Speaking section

---

### Task 4: Books Page — Radar Behind Hero Cover, Fade-ins, Padding

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Add radar container behind the hero book cover**

Find:
```html
        <!-- Book Cover with 3D reveal -->
        <div class="flex justify-center lg:justify-end">
          <div class="book-3d relative z-[5]">
```
Replace with:
```html
        <!-- Book Cover with 3D reveal + Radar -->
        <div class="flex justify-center lg:justify-end relative">
          <div class="radar-container hidden lg:block" style="width: 450px; height: 450px; right: 5%; top: 50%; transform: translate(50%, -50%);">
            <div class="radar-reticle"></div>
            <div class="radar-reticle-inner"></div>
            <div class="radar-sweep"></div>
            <div class="sonar-ring" style="animation-delay: 0.5s;"></div>
            <div class="sonar-ring" style="animation-delay: 1s;"></div>
          </div>
          <div class="book-3d relative z-[5]">
```

- [ ] **Step 2: Tighten padding on remaining sections**

Change all remaining `py-16 md:py-24` to `py-16 md:py-20`:
- Key Themes section
- Upcoming Books section
- Series Timeline section
- Where to Buy section

- [ ] **Step 3: Add fade-in to Key Themes columns**

Add `fade-in-left` to the outer div wrapping "What Readers Expect".
Add `fade-in-right` to the outer div wrapping "Core Themes".

- [ ] **Step 4: Add stagger fade-in to series cards**

Change the upcoming books map:
```html
        {[2, 3, 4, 5].map((num) => (
          <div class="group relative">
```
to:
```html
        {[2, 3, 4, 5].map((num, i) => (
          <div class="group relative fade-in-up" style={`transition-delay: ${i * 0.1}s`}>
```

---

### Task 5: Contact Page — Scan Lines, Fade-ins, Padding

**Files:**
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Add scan-lines to hero**

Change:
```html
  <section class="section-darker py-24 md:py-40 relative overflow-hidden">
```
to:
```html
  <section class="section-darker py-24 md:py-40 relative overflow-hidden scan-lines">
```

- [ ] **Step 2: Add fade-in to contact sidebar and form**

Add `fade-in-left` to sidebar column: `<div class="md:col-span-1">` becomes `<div class="md:col-span-1 fade-in-left">`

Add `fade-in-right` to form column: `<div class="md:col-span-2">` becomes `<div class="md:col-span-2 fade-in-right">`

- [ ] **Step 3: Add fade-in to FAQ items**

Add `fade-in-up` class to each of the 6 `<details>` elements.

- [ ] **Step 4: Add fade-in to social cards**

Add `fade-in-up stagger-1` through `stagger-4` to the 4 social link `<a>` tags.

- [ ] **Step 5: Tighten padding**

Change `py-16 md:py-24` to `py-16 md:py-20` on:
- Main contact section
- FAQ section

---

### Task 6: Blog Page — Final Padding

**Files:**
- Modify: `src/pages/blog.astro`

- [ ] **Step 1: Tighten remaining padding**

Change all `py-16 md:py-24` to `py-16 md:py-20`:
- Featured Article section
- Article Grid section
- Categories section

Change `mt-16` on "Load More" button to `mt-10`.

---

### Task 7: Build Verification and Screenshots

- [ ] **Step 1: Run full build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages, zero errors.

- [ ] **Step 2: Screenshot all 5 pages**

Serve and screenshot homepage hero, about hero, books hero, blog hero, contact hero, and full-page shots of all pages. Verify:
- Homepage: scan lines, marquee scrolling red strip, tight spacing
- About: author photo in hero with teal border glow, split-color heading, pull quote in sidebar
- Books: radar behind hero cover, staggered series cards, directional fade-in on themes
- Blog: tight padding
- Contact: scan lines, directional fade-in on form/sidebar, staggered FAQs
- All pages: no dead space gaps, consistent py-16 md:py-20 padding
