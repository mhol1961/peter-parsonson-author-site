# Cinematic Hero Backgrounds & Floating Book Cover

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add cinematic background image to homepage/books heroes, floating book cover with dynamic shadow, and blurred author photo atmosphere on about page.

**Architecture:** New CSS classes in global.css handle all background layering, float animation, and shadow effects. HTML changes wrap existing book covers in the new `.book-float` structure and add cinematic classes to hero sections. The background image file is `/images/hero-bg.png`. Blog and Contact pages are NOT touched.

**Tech Stack:** Astro 6, Tailwind CSS 4, CSS animations

---

## File Map

| File | Changes |
|------|---------|
| `src/styles/global.css` | Add hero-cinematic, books-hero-cinematic, book-float, book-shadow, about-hero CSS |
| `src/pages/index.astro` | Add hero-cinematic class to hero section, wrap book cover in book-float structure |
| `src/pages/books.astro` | Add books-hero-cinematic class to hero section, wrap book cover in book-float structure |
| `src/pages/about.astro` | Add about-hero class to hero section for blurred author photo background |

---

### Task 1: Add All New CSS Classes to global.css

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add hero-cinematic, books-hero-cinematic, book-float, and about-hero CSS**

Read the file. Add the following CSS block BEFORE the `/* SCROLLBAR */` comment section:

```css
/* ============================================
   CINEMATIC HERO BACKGROUNDS
   ============================================ */

/* Homepage hero — seascape background */
.hero-cinematic::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/images/hero-bg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero-cinematic::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0.6) 40%, rgba(10,14,26,0.3) 70%, rgba(10,14,26,0.4) 100%),
    linear-gradient(180deg, rgba(10,14,26,0.7) 0%, transparent 15%, transparent 85%, rgba(10,14,26,0.9) 100%);
  z-index: 1;
}

.hero-cinematic > * {
  position: relative;
  z-index: 2;
}

/* Books hero — same image, slightly different gradient for right-side cover */
.books-hero-cinematic::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/images/hero-bg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;
}

.books-hero-cinematic::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0.5) 45%, rgba(10,14,26,0.2) 65%, transparent 100%),
    linear-gradient(180deg, rgba(10,14,26,0.6) 0%, transparent 20%, transparent 80%, rgba(10,14,26,0.9) 100%);
  z-index: 1;
}

.books-hero-cinematic > * {
  position: relative;
  z-index: 2;
}

/* About hero — blurred author photo as atmosphere */
.about-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/images/pete-author-image.png');
  background-size: cover;
  background-position: center 20%;
  filter: blur(40px) brightness(0.15);
  transform: scale(1.2);
  z-index: 0;
}

/* ============================================
   FLOATING BOOK COVER
   ============================================ */

.book-float {
  position: relative;
  display: inline-block;
}

/* Teal glow behind the book */
.book-float::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(ellipse at center, rgba(13,148,136,0.08) 0%, transparent 60%);
  pointer-events: none;
  z-index: -1;
}

/* Gentle hovering animation */
.book-float .book-3d {
  animation: book-hover 4s ease-in-out infinite;
}

@keyframes book-hover {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

/* Override book-3d img styles for floating covers */
.book-float .book-3d img {
  max-height: 500px;
  width: auto;
  border-radius: 4px;
  box-shadow: -8px 12px 30px rgba(0,0,0,0.5), -2px 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  /* Override the non-revealed state — floating covers are always visible */
  transform: rotateY(0deg) scale(1);
  opacity: 1;
}

.book-float .book-3d:hover img {
  transform: rotateY(-6deg) scale(1.02);
  box-shadow: -15px 20px 50px rgba(0,0,0,0.6), -4px 8px 20px rgba(0,0,0,0.3);
}

/* Shadow beneath the book that pulses with the float */
.book-shadow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 20px;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%);
  border-radius: 50%;
  animation: shadow-pulse 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes shadow-pulse {
  0%, 100% { width: 70%; opacity: 0.6; }
  50% { width: 60%; opacity: 0.3; }
}
```

- [ ] **Step 2: Verify build passes**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

---

### Task 2: Homepage Hero — Cinematic Background + Floating Book

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Add hero-cinematic class to hero section**

Find line 15:
```html
  <section class="relative min-h-screen flex items-center overflow-hidden section-darker grain-overlay scan-lines">
```
Replace with:
```html
  <section class="relative min-h-screen flex items-center overflow-hidden section-darker grain-overlay scan-lines hero-cinematic">
```

- [ ] **Step 2: Remove the old gradient overlay divs**

The `hero-cinematic::before` and `::after` pseudo-elements now handle the background and overlay. Remove or simplify the existing overlay divs.

Find and DELETE these three lines (approximately lines 16-19):
```html
    <!-- Dark atmospheric gradients with teal/red accents -->
    <div class="absolute inset-0 z-[1]" style="background: radial-gradient(ellipse at 70% 20%, rgba(13, 148, 136, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(220, 38, 38, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 90% 70%, rgba(13, 148, 136, 0.04) 0%, transparent 40%);"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 z-[2]"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-[2]"></div>
```

(The hero-cinematic CSS handles all the overlays now. The scan-lines and grain-overlay pseudo-elements still work since they use different pseudo-element selectors or classes.)

- [ ] **Step 3: Wrap the book cover in book-float structure**

Find the book cover block (around line 68-76 after deletions):
```html
          <!-- 3D Book Cover -->
          <div class="book-3d revealed relative z-[5]">
            <img
              src="/images/Front-Cover.jpg"
              alt="The Tempest Toss by Peter P."
              class="w-72 md:w-80 lg:w-96"
              loading="eager"
            />
          </div>
```

Replace with:
```html
          <!-- Floating 3D Book Cover -->
          <div class="book-float relative z-[5]">
            <div class="book-3d">
              <img
                src="/images/Front-Cover.jpg"
                alt="The Tempest Toss by Peter P."
                class="w-72 md:w-80 lg:w-96"
                loading="eager"
              />
            </div>
            <div class="book-shadow"></div>
          </div>
```

Note: Removed the `revealed` class since `.book-float .book-3d img` overrides opacity/transform to always be visible.

---

### Task 3: Books Hero — Cinematic Background + Floating Book

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Add books-hero-cinematic class to hero section**

Find line 12:
```html
  <section class="section-darker relative min-h-screen flex items-center overflow-hidden scan-lines">
```
Replace with:
```html
  <section class="section-darker relative min-h-screen flex items-center overflow-hidden scan-lines books-hero-cinematic">
```

- [ ] **Step 2: Remove old gradient overlay divs from hero**

Find and DELETE these lines (approximately lines 13-16):
```html
    <!-- Background effects -->
    <div class="absolute inset-0 z-0" style="background: radial-gradient(circle at 70% 50%, rgba(13, 148, 136, 0.05) 0%, transparent 60%), linear-gradient(180deg, #0a0e1a 0%, #0d1117 100%);"></div>
    <!-- Atmospheric accents -->
    <div class="absolute inset-0 z-0" style="background: radial-gradient(ellipse at 80% 30%, rgba(220, 38, 38, 0.04) 0%, transparent 50%), radial-gradient(ellipse at 10% 70%, rgba(13, 148, 136, 0.03) 0%, transparent 50%);"></div>
```

- [ ] **Step 3: Wrap the hero book cover in book-float structure**

Find the hero book cover block (around lines 52-60 after deletions):
```html
          <div class="book-3d relative z-[5]">
            <img
              src="/images/Front-Cover.jpg"
              alt="The Tempest Toss by Peter P."
              class="w-72 md:w-80 lg:w-96"
              loading="eager"
            />
          </div>
```

Replace with:
```html
          <div class="book-float relative z-[5]">
            <div class="book-3d">
              <img
                src="/images/Front-Cover.jpg"
                alt="The Tempest Toss by Peter P."
                class="w-72 md:w-80 lg:w-96"
                loading="eager"
              />
            </div>
            <div class="book-shadow"></div>
          </div>
```

IMPORTANT: Do NOT add book-float to the synopsis section book cover further down the page. That cover should stay as static `.book-3d` with the reveal animation (no floating).

---

### Task 4: About Hero — Blurred Author Photo Atmosphere

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Add about-hero class to hero section**

Find line 12:
```html
  <section class="section-darker relative overflow-hidden scan-lines grid-overlay" style="min-height: 80vh; display: flex; align-items: center;">
```
Replace with:
```html
  <section class="section-darker relative overflow-hidden scan-lines grid-overlay about-hero" style="min-height: 80vh; display: flex; align-items: center;">
```

- [ ] **Step 2: Remove old gradient overlay div**

Find and DELETE lines 13-14:
```html
    <!-- Atmospheric gradients -->
    <div class="absolute inset-0 z-0" style="background: radial-gradient(ellipse at 30% 50%, rgba(13, 148, 136, 0.06) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(220, 38, 38, 0.04) 0%, transparent 50%), linear-gradient(180deg, #0a0e1a 0%, #060a14 100%);"></div>
```

The `.about-hero::before` pseudo-element now provides the blurred author photo background. The scan-lines and grid-overlay pseudo-elements still work on their own.

---

### Task 5: Build Verification and Screenshots

- [ ] **Step 1: Run full build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages built, zero errors.

- [ ] **Step 2: Screenshot homepage, books, and about heroes**

Verify:
- Homepage hero: seascape background visible through dark overlay, floating book cover gently bobbing with dynamic shadow, teal glow behind cover, radar effects still visible, text fully readable
- Books hero: same seascape background with right-side-friendly gradient, floating book cover with shadow, scan lines overlay
- About hero: faintly visible blurred author photo behind the hero (very subtle, just adding warmth/identity), sharp author photo still prominently displayed on the left
- Blog and Contact heroes: unchanged (no background images)
- Book cover in books synopsis section: NOT floating, uses static 3D reveal
