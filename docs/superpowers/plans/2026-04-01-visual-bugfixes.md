# Visual Bug Fixes — Hero Background, Radar Composition, Thumbnails, Banner

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix 5 visual bugs: invisible hero background image, radar hidden behind book, footer "Navy veteran" text, Book 1 thumbnail cutoff, and "AVAILABLE NOW" banner.

**Architecture:** CSS fixes in global.css (hero-cinematic opacity, radar sizing/positioning, blip positions). HTML class fixes in index.astro (remove grain-overlay + section-darker from hero). Text fix in Header.astro (banner). Image fix in books.astro (object-contain). Fix 3 (footer) is already resolved from previous content update — verify only.

**Tech Stack:** Astro 6, Tailwind CSS 4, CSS

---

### Task 1: Fix Hero Background + Radar CSS in global.css

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add opacity: 1 to hero-cinematic::before**

Find the `.hero-cinematic::before` rule. Add `opacity: 1;` before the closing brace. The full rule should be:

```css
.hero-cinematic::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/images/hero-bg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;
  opacity: 1;
}
```

- [ ] **Step 2: Enlarge radar scope to 520px and reposition**

Find the `.radar-scope` rule. Replace it with:

```css
.radar-scope {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
}
```

- [ ] **Step 3: Update radar ring spacing for 520px size**

Find the `.radar-scope::before` rule. Replace its `box-shadow` with:

```css
.radar-scope::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(13, 148, 136, 0.3);
  box-shadow:
    inset 0 0 0 65px transparent,
    inset 0 0 0 66px rgba(13, 148, 136, 0.18),
    inset 0 0 0 130px transparent,
    inset 0 0 0 131px rgba(13, 148, 136, 0.14),
    inset 0 0 0 195px transparent,
    inset 0 0 0 196px rgba(13, 148, 136, 0.10);
}
```

- [ ] **Step 4: Reposition blips to visible lower-right area**

Find the `.radar-blip` rule. Replace it with:

```css
.radar-blip {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(220, 38, 38, 0.9);
  border-radius: 50%;
  bottom: 25%;
  right: 20%;
  box-shadow: 0 0 10px rgba(220, 38, 38, 0.6), 0 0 20px rgba(220, 38, 38, 0.3);
  animation: blip-pulse 2s ease-in-out infinite;
  z-index: 2;
}
```

Find the `.radar-blip-2` rule. Replace it with:

```css
.radar-blip-2 {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(13, 148, 136, 0.8);
  border-radius: 50%;
  bottom: 40%;
  right: 30%;
  box-shadow: 0 0 8px rgba(13, 148, 136, 0.5);
  animation: blip-pulse 2.5s ease-in-out infinite 0.8s;
  z-index: 2;
}
```

---

### Task 2: Fix Homepage Hero Classes + Book Cover Size

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Remove grain-overlay and section-darker from hero section**

Find line 15:
```html
  <section class="relative min-h-screen flex items-center overflow-hidden section-darker grain-overlay scan-lines hero-cinematic">
```
Replace with:
```html
  <section class="relative min-h-screen flex items-center overflow-hidden scan-lines hero-cinematic">
```

- [ ] **Step 2: Shrink hero book cover image**

Find the book cover img inside the hero:
```html
              <img
                src="/images/Front-Cover.jpg"
                alt="The Tempest Toss by Peter P."
                class="w-72 md:w-80 lg:w-96"
                loading="eager"
```
Change the class to:
```html
                class="w-56 md:w-64 lg:w-72"
```

---

### Task 3: Fix Banner Text + Book 1 Thumbnail

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Change "AVAILABLE NOW" to "COMING SUMMER 2026"**

In `src/components/Header.astro`, find:
```
    THE TEMPEST TOSS — AVAILABLE NOW
```
Replace with:
```
    THE TEMPEST TOSS — COMING SUMMER 2026
```

- [ ] **Step 2: Fix Book 1 thumbnail in books.astro synopsis section**

In `src/pages/books.astro`, find the synopsis section book cover image (the one with `object-cover` class, around line 83):
```html
                class="w-full h-full object-cover"
```
Replace with:
```html
                class="w-full h-full object-contain"
```

- [ ] **Step 3: Verify footer text is correct**

In `src/components/Footer.astro`, confirm the text reads:
```
Military thriller author. Stories grounded in declassified history, real EMP science, and twenty-two years of research.
```
(This was already fixed in the content update. No change needed unless it still says "Navy veteran".)

---

### Task 4: Build Verification

- [ ] **Step 1: Build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages, zero errors.

- [ ] **Step 2: Screenshot homepage hero to verify background + radar**

Verify:
- Stormy seascape background clearly visible through gradient overlay
- Radar scope (520px) clearly visible around the book — sweep arm rotating, blips pulsing in lower-right
- Book cover smaller, overlapping upper-left portion of radar (~40-50%)
- Banner says "COMING SUMMER 2026"
- Footer has no "Navy veteran" text
