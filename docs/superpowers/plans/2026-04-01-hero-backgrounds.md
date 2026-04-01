# Unique Hero Backgrounds, Radar Relocation, Crest Integration

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give each page hero a unique background image, move the homepage radar to the left behind text, remove book cover from books hero, and integrate the Peter P. crest logo in footer/about page.

**Architecture:** HTML changes on 4 page files + footer component. The books-hero-cinematic CSS class needs its background-image updated to books-hero-bg.png. Blog and contact heroes get inline background-image styles. Homepage radar moves from inside book-float to a standalone absolute-positioned element on the left.

**Tech Stack:** Astro 6, Tailwind CSS 4, CSS

**Note:** Fixes 5-6 (crest logo) require `/images/peter-p-crest.png` to exist. If the file is missing, skip those tasks.

---

### Task 1: Homepage — Relocate Radar to Left, Clean Up Book Cover

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Add radar as atmospheric element behind text**

Find the hero section tag (line 15):
```html
  <section class="relative min-h-screen flex items-center overflow-hidden scan-lines hero-cinematic">
```

Right after this opening tag (before the content div at line 17), add:

```html
    <!-- Radar scope - atmospheric element behind text -->
    <div class="absolute left-0 bottom-0 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] opacity-15 z-[3] -translate-x-1/4 translate-y-1/4 pointer-events-none">
      <div class="radar-scope w-full h-full" style="top:50%;left:50%;width:100%;height:100%;">
        <div class="radar-crosshair-h"></div>
        <div class="radar-sweep"></div>
        <div class="radar-blip" style="top:25%;left:60%"></div>
        <div class="radar-blip-2" style="bottom:30%;right:25%"></div>
      </div>
    </div>
```

- [ ] **Step 2: Remove radar from the book cover area**

Find the book cover section (around lines 55-73). Replace the entire block from `<!-- Book Cover with Radar Sweep -->` through the closing `</div>` of the flex container with:

```html
        <!-- Book Cover - floating -->
        <div class="flex justify-center lg:justify-end animate-fade-in-up delay-300">
          <div class="book-float relative z-[5]">
            <div class="book-3d">
              <img
                src="/images/Front-Cover.jpg"
                alt="The Tempest Toss by Peter P."
                class="w-56 md:w-64 lg:w-72"
                loading="eager"
              />
            </div>
            <div class="book-shadow"></div>
          </div>
        </div>
```

This removes the radar-scope, radar-crosshair-h, radar-sweep, radar-blip, and radar-blip-2 elements from inside the book-float wrapper.

---

### Task 2: Books Page — Unique Background + Remove Hero Book Cover

**Files:**
- Modify: `src/pages/books.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Update books-hero-cinematic CSS to use books-hero-bg.png**

In `src/styles/global.css`, find the `.books-hero-cinematic::before` rule:
```css
  background-image: url('/images/hero-bg.png');
```
Replace with:
```css
  background-image: url('/images/books-hero-bg.png');
```

Also find `.books-hero-cinematic::after` and lighten the gradient:
```css
    linear-gradient(90deg, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0.5) 45%, rgba(10,14,26,0.2) 65%, transparent 100%),
    linear-gradient(180deg, rgba(10,14,26,0.6) 0%, transparent 20%, transparent 80%, rgba(10,14,26,0.9) 100%);
```
Replace with:
```css
    linear-gradient(90deg, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0.6) 40%, rgba(10,14,26,0.4) 70%, rgba(10,14,26,0.5) 100%),
    linear-gradient(180deg, rgba(10,14,26,0.5) 0%, transparent 20%, transparent 80%, rgba(10,14,26,0.85) 100%);
```

- [ ] **Step 2: Remove book cover from books hero, make text full-width**

In `src/pages/books.astro`, find the hero content grid (around line 15):
```html
      <div class="grid lg:grid-cols-2 gap-16 items-center">
```

Replace the entire grid (from the grid div through its closing `</div>`, which includes the text column AND the book cover column with radar) with a single-column layout:

```html
      <div class="max-w-3xl">
        <!-- Text Content -->
        <div>
          <p class="mil-text mb-3">File Ref: JH-001 // Operation Tempest</p>
          <p class="section-label mb-6">The John Hunter Series</p>

          <h1 class="font-heading font-black text-cream leading-[0.95] mb-8 text-shadow-heavy">
            <span class="block text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter">The</span>
            <span class="block text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter">Tempest</span>
            <span class="block text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-accent">Toss</span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed font-light mb-10">
            Navy SEAL Commander John Hunter. Cold War secrets. A conspiracy that reaches the highest levels of power.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#synopsis" class="btn-primary">
              Read the Brief
            </a>
            <a href="/about" class="btn-secondary text-center">
              Meet the Author
            </a>
          </div>
        </div>
      </div>
```

---

### Task 3: Blog Page — Add Background Image

**Files:**
- Modify: `src/pages/blog.astro`

- [ ] **Step 1: Add background image to blog hero section**

Find the blog hero section tag (line 12):
```html
  <section class="section-darker relative overflow-hidden" style="min-height: 60vh; display: flex; align-items: center;">
```
Replace with:
```html
  <section class="section-darker relative overflow-hidden" style="min-height: 60vh; display: flex; align-items: center; background-image: linear-gradient(135deg, rgba(10, 14, 26, 0.88) 0%, rgba(6, 10, 20, 0.85) 100%), url('/images/blog-hero-bg.png'); background-size: cover; background-position: center; background-attachment: fixed;">
```

- [ ] **Step 2: Add grid overlay to blog hero**

Find the existing grid pattern div inside the hero (the one with `background: linear-gradient(rgba(13, 148, 136, 0.03)`). AFTER it, add:

```html
    <!-- Red grid overlay -->
    <div class="absolute inset-0 opacity-10 z-0" style="background-image: linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.05) 25%, rgba(220, 38, 38, 0.05) 26%, transparent 27%, transparent 74%, rgba(220, 38, 38, 0.05) 75%, rgba(220, 38, 38, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(220, 38, 38, 0.05) 25%, rgba(220, 38, 38, 0.05) 26%, transparent 27%, transparent 74%, rgba(220, 38, 38, 0.05) 75%, rgba(220, 38, 38, 0.05) 76%, transparent 77%, transparent); background-size: 80px 80px;"></div>
```

---

### Task 4: Contact Page — Add Background Image

**Files:**
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Add background image to contact hero section**

Find the contact hero section tag (line 13):
```html
  <section class="section-darker py-24 md:py-40 relative overflow-hidden scan-lines">
```
Replace with:
```html
  <section class="section-darker py-24 md:py-40 relative overflow-hidden scan-lines" style="background-image: linear-gradient(135deg, rgba(10, 14, 26, 0.88) 0%, rgba(6, 10, 20, 0.82) 100%), url('/images/contact-hero-bg.png'); background-size: cover; background-position: center; background-attachment: fixed;">
```

- [ ] **Step 2: Remove old atmospheric blurs (they conflict with the bg image)**

Find and DELETE these lines inside the contact hero:
```html
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/3 w-96 h-96 bg-red-600 blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600 blur-3xl"></div>
    </div>
```

---

### Task 5: Footer — Crest Logo (CONDITIONAL)

**Files:**
- Modify: `src/components/Footer.astro`

**PREREQUISITE:** Only do this if `/images/peter-p-crest.png` exists. If it doesn't, skip this task.

- [ ] **Step 1: Add crest above footer columns**

Find the footer's main grid div (the `<div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16...`). Add BEFORE it:

```html
    <!-- Brand crest -->
    <div class="flex justify-center mb-8">
      <img
        src="/images/peter-p-crest.png"
        alt="Peter P. — Military Thriller Author"
        class="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80"
        loading="lazy"
      />
    </div>
```

---

### Task 6: About Page — Crest Divider (CONDITIONAL)

**Files:**
- Modify: `src/pages/about.astro`

**PREREQUISITE:** Only do this if `/images/peter-p-crest.png` exists. If it doesn't, skip this task.

- [ ] **Step 1: Add crest divider between hero and bio section**

Find the `<!-- Divider Strip -->` / `<div class="accent-strip">` between the hero and bio sections. Add AFTER the accent-strip div:

```html
  <!-- Brand crest divider -->
  <div class="py-12 section-darker flex justify-center">
    <img
      src="/images/peter-p-crest.png"
      alt="Peter P. crest"
      class="w-20 h-20 md:w-28 md:h-28 object-contain opacity-50"
      loading="lazy"
    />
  </div>
```

---

### Task 7: Build Verification

- [ ] **Step 1: Build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages, zero errors.

- [ ] **Step 2: Screenshot all hero sections**

Verify each hero has a unique background and the radar is correctly positioned on the homepage.
