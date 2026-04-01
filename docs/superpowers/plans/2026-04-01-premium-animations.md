# Premium Animations & Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add typewriter declassification effect, radar sweep, 3D book cover reveals, cinematic Books page hero, military dispatch terminal on Blog page, parallax effects, and directional scroll animations — all pure CSS + vanilla JS.

**Architecture:** All new CSS goes in `global.css`. Scripts go in `BaseLayout.astro` (global) or inline in specific pages (page-specific). HTML changes are per-page. No libraries — pure CSS animations and IntersectionObserver + scroll listener.

**Tech Stack:** Astro 6, Tailwind CSS 4, CSS animations, vanilla JS (IntersectionObserver, scroll listener)

**Already done (do NOT redo):** Eyebrow labels on all pages, sector tags on blog/homepage, protocol-numbered series cards on homepage, basic fade-in-up scroll animation, section padding reduction on homepage.

---

## File Map

| File | Changes |
|------|---------|
| `src/styles/global.css` | Add typewriter, radar-sweep, sonar-ring, scan-lines, book-3d, year-marker, dispatch-terminal, fade-in-left/right CSS |
| `src/layouts/BaseLayout.astro` | Update IntersectionObserver selectors, add parallax script |
| `src/pages/index.astro` | Typewriter on tagline, radar sweep behind book cover, 3D book cover, directional fade-in classes |
| `src/pages/books.astro` | Full hero overhaul (full-viewport, two-column, split-color title, scan lines, book cover), 3D book cover in synopsis, parallax data attribute, year-marker spans |
| `src/pages/blog.astro` | Hero overhaul (dispatch terminal, ticker, LIVE indicator, grid pattern, split-color heading) |

---

### Task 1: Add All New CSS Animation Classes

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add directional fade-in classes**

Find the existing `.fade-in-up` block (around line 269-277). AFTER `.fade-in-up.visible`, add:

```css
.fade-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in-left.visible,
.fade-in-right.visible {
  opacity: 1;
  transform: translate(0);
}
```

- [ ] **Step 2: Add typewriter CSS**

Add a new section after the SCROLL FADE-IN block:

```css
/* ============================================
   TYPEWRITER DECLASSIFICATION EFFECT
   ============================================ */

.typewriter-container {
  display: inline-block;
  max-width: 100%;
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--color-primary);
  width: 0;
  animation: typing 3s steps(45, end) 1s forwards, blink-caret 0.75s step-end 6;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--color-primary); }
}
```

- [ ] **Step 3: Add radar sweep and sonar ring CSS**

```css
/* ============================================
   RADAR SWEEP & SONAR RINGS
   ============================================ */

.radar-container {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  top: 50%;
  right: 10%;
  transform: translate(50%, -50%);
  pointer-events: none;
  z-index: 0;
}

.radar-reticle {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(13, 148, 136, 0.06);
}

.radar-reticle-inner {
  position: absolute;
  inset: 25%;
  border-radius: 50%;
  border: 1px solid rgba(13, 148, 136, 0.06);
}

.radar-sweep::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 340deg,
    rgba(13, 148, 136, 0.15) 340deg,
    rgba(13, 148, 136, 0.03) 360deg
  );
  animation: sweep 3s linear 1;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes sweep {
  0% { transform: rotate(0deg); opacity: 1; }
  80% { opacity: 1; }
  100% { transform: rotate(720deg); opacity: 0; }
}

.sonar-ring {
  position: absolute;
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: sonar-expand 3s ease-out forwards;
  pointer-events: none;
}

@keyframes sonar-expand {
  0% { width: 100px; height: 100px; opacity: 0.4; }
  100% { width: 600px; height: 600px; opacity: 0; }
}
```

- [ ] **Step 4: Add 3D book cover CSS**

```css
/* ============================================
   3D BOOK COVER REVEAL
   ============================================ */

.book-3d {
  perspective: 1000px;
  display: inline-block;
}

.book-3d img {
  transform: rotateY(-15deg) scale(0.95);
  opacity: 0.7;
  transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.8s ease-out;
  box-shadow: -20px 20px 60px rgba(0, 0, 0, 0.5);
}

.book-3d.revealed img {
  transform: rotateY(0deg) scale(1);
  opacity: 1;
  box-shadow: -10px 15px 40px rgba(0, 0, 0, 0.4);
}

.book-3d:hover img {
  transform: rotateY(-5deg) scale(1.02);
  box-shadow: -25px 25px 70px rgba(0, 0, 0, 0.5);
}
```

- [ ] **Step 5: Add year-marker glow CSS**

```css
/* ============================================
   YEAR MARKER GLOW
   ============================================ */

.year-marker {
  color: var(--color-accent);
  font-weight: 700;
  text-shadow: 0 0 0px rgba(220, 38, 38, 0);
  transition: text-shadow 0.8s ease-out;
}

.year-marker.visible {
  text-shadow: 0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.1);
}
```

- [ ] **Step 6: Add scan lines CSS**

```css
/* ============================================
   SCAN LINES (Military Monitor)
   ============================================ */

.scan-lines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(13, 148, 136, 0.015) 2px,
    rgba(13, 148, 136, 0.015) 4px
  );
  pointer-events: none;
  z-index: 1;
}
```

- [ ] **Step 7: Add dispatch terminal CSS**

```css
/* ============================================
   DISPATCH TERMINAL (Blog Hero)
   ============================================ */

.dispatch-terminal {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: 4px;
  padding: 1.5rem;
  max-width: 360px;
  overflow: hidden;
  position: relative;
}

.dispatch-terminal-header {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.dispatch-ticker-wrapper {
  height: 180px;
  overflow: hidden;
}

.dispatch-ticker {
  animation: ticker-scroll 12s linear infinite;
}

@keyframes ticker-scroll {
  0%, 33% { transform: translateY(0); }
  38%, 66% { transform: translateY(-33.33%); }
  71%, 100% { transform: translateY(-66.66%); }
}

.dispatch-item {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: rgba(13, 148, 136, 0.8);
  line-height: 1.6;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(13, 148, 136, 0.1);
}

.dispatch-timestamp {
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: rgba(220, 38, 38, 0.6);
  display: block;
  margin-bottom: 0.25rem;
}

.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.live-dot {
  width: 6px;
  height: 6px;
  background: var(--color-accent);
  border-radius: 50%;
  animation: live-pulse 2s ease-in-out infinite;
}

@keyframes live-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.live-text {
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  color: var(--color-accent);
  letter-spacing: 0.15em;
  font-weight: 700;
}
```

- [ ] **Step 8: Verify build passes**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

---

### Task 2: Update BaseLayout.astro Scripts

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Replace the existing IntersectionObserver script**

Replace the entire `<script>` block (lines 52-64) with:

```html
    <!-- Scroll animations + parallax -->
    <script>
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('book-3d')) {
              entry.target.classList.add('revealed');
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .year-marker, .book-3d').forEach(el => {
        observer.observe(el);
      });

      // Lightweight parallax
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax);
            el.style.transform = `translateY(${scrollY * speed}px)`;
          });
        }, { passive: true });
      }
    </script>
```

---

### Task 3: Homepage Hero — Typewriter + Radar Sweep + 3D Book Cover

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Add typewriter effect to tagline**

Replace the tagline paragraph (line 39-41):
```html
          <p class="animate-fade-in-up delay-300 text-white/90 text-lg italic font-heading mb-10 max-w-xl">
            &ldquo;Some debts take sixty years to come due.&rdquo;
          </p>
```
with:
```html
          <div class="animate-fade-in-up delay-300 mb-10 max-w-xl">
            <div class="typewriter-container">
              <p class="typewriter text-white/90 text-lg italic font-heading">
                &ldquo;Some debts take sixty years to come due.&rdquo;
              </p>
            </div>
          </div>
```

- [ ] **Step 2: Add radar sweep behind the book cover**

Replace the book cover column (lines 53-66):
```html
        <!-- Book Cover - Large, dramatic -->
        <div class="flex justify-center lg:justify-end animate-fade-in-up delay-300">
          <div class="book-cover-wrapper relative">
            <img
              src="/images/Front-Cover.jpg"
              alt="The Tempest Toss by Peter P."
              class="w-72 md:w-80 lg:w-96 shadow-2xl"
              loading="eager"
              style="box-shadow: 0 25px 80px rgba(0,0,0,0.7), 0 0 60px rgba(220, 38, 38, 0.1);"
            />
            <!-- Reflection effect -->
            <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-gradient-to-t from-transparent to-white/5 blur-xl"></div>
          </div>
        </div>
```
with:
```html
        <!-- Book Cover with Radar Sweep -->
        <div class="flex justify-center lg:justify-end animate-fade-in-up delay-300 relative">
          <!-- Radar sweep background -->
          <div class="radar-container hidden lg:block">
            <div class="radar-reticle"></div>
            <div class="radar-reticle-inner"></div>
            <div class="radar-sweep"></div>
            <div class="sonar-ring" style="animation-delay: 0.5s;"></div>
            <div class="sonar-ring" style="animation-delay: 1s;"></div>
            <div class="sonar-ring" style="animation-delay: 1.5s;"></div>
          </div>
          <!-- 3D Book Cover -->
          <div class="book-3d revealed relative z-[5]">
            <img
              src="/images/Front-Cover.jpg"
              alt="The Tempest Toss by Peter P."
              class="w-72 md:w-80 lg:w-96"
              loading="eager"
            />
          </div>
        </div>
```

Note: Homepage hero book starts with `revealed` class since it's above the fold and should be visible immediately.

- [ ] **Step 3: Add directional fade-in to about section**

Replace the author photo container:
```html
        <div class="md:col-span-2 fade-in-up">
```
with:
```html
        <div class="md:col-span-2 fade-in-left">
```

Replace the bio text container:
```html
        <div class="md:col-span-3 fade-in-up">
```
with:
```html
        <div class="md:col-span-3 fade-in-right">
```

- [ ] **Step 4: Add stagger delays to blog preview cards**

On the blog cards grid, add inline `style` transition delays to each card. Replace the opening `<article` tag pattern. Since the cards use `.map()`, we need to add the index. Replace:
```html
        {[
          { sector: 'SECTOR: CRAFT', title: 'Getting the Physics Right', desc: 'How twenty-two years of research and a chemistry background shaped every technical detail in The Tempest Toss.' },
          { sector: 'SECTOR: RECON', title: 'The EMP Threat Is Real', desc: 'Declassified Cold War history and why electromagnetic pulse weapons remain one of the most underappreciated threats.' },
          { sector: 'SECTOR: INTEL', title: 'Why Fiction Says What the Record Cannot', desc: 'On the power of military fiction to tell truths that official records won\'t — and why that matters now.' }
        ].map((post) => (
          <article class="group border border-white/5 hover:border-primary/30 transition-all duration-300 bg-dark-card/50">
```
with:
```html
        {[
          { sector: 'SECTOR: CRAFT', title: 'Getting the Physics Right', desc: 'How twenty-two years of research and a chemistry background shaped every technical detail in The Tempest Toss.' },
          { sector: 'SECTOR: RECON', title: 'The EMP Threat Is Real', desc: 'Declassified Cold War history and why electromagnetic pulse weapons remain one of the most underappreciated threats.' },
          { sector: 'SECTOR: INTEL', title: 'Why Fiction Says What the Record Cannot', desc: 'On the power of military fiction to tell truths that official records won\'t — and why that matters now.' }
        ].map((post, i) => (
          <article class="group border border-white/5 hover:border-primary/30 transition-all duration-300 bg-dark-card/50 fade-in-up" style={`transition-delay: ${i * 0.1}s`}>
```

Also remove the `fade-in-up` from the wrapping grid div since we're staggering individual cards:
```html
      <div class="grid md:grid-cols-3 gap-8 fade-in-up">
```
→
```html
      <div class="grid md:grid-cols-3 gap-8">
```

---

### Task 4: Books Page Hero Overhaul

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Replace the entire hero section (lines 11-36)**

Replace everything from `<!-- Page Hero` through the closing `</section>` of the hero with:

```html
  <!-- Page Hero - Full-viewport cinematic mission file -->
  <section class="section-darker relative min-h-screen flex items-center overflow-hidden scan-lines">
    <!-- Background effects -->
    <div class="absolute inset-0 z-0" style="background: radial-gradient(circle at 70% 50%, rgba(13, 148, 136, 0.05) 0%, transparent 60%), linear-gradient(180deg, #0a0e1a 0%, #0d1117 100%);"></div>
    <!-- Atmospheric accents -->
    <div class="absolute inset-0 z-0" style="background: radial-gradient(ellipse at 80% 30%, rgba(220, 38, 38, 0.04) 0%, transparent 50%), radial-gradient(ellipse at 10% 70%, rgba(13, 148, 136, 0.03) 0%, transparent 50%);"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 py-24">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div>
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
            <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
              Order Now
            </a>
            <a href="#synopsis" class="btn-secondary text-center">
              Read Synopsis
            </a>
          </div>
        </div>

        <!-- Book Cover with 3D reveal -->
        <div class="flex justify-center lg:justify-end">
          <div class="book-3d relative z-[5]">
            <img
              src="/images/Front-Cover.jpg"
              alt="The Tempest Toss by Peter P."
              class="w-72 md:w-80 lg:w-96"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <svg class="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
```

- [ ] **Step 2: Add id="synopsis" to the Featured Book section**

Change:
```html
  <!-- Featured Book: The Tempest Toss - Full Synopsis -->
  <section class="section-dark py-24 md:py-36">
```
to:
```html
  <!-- Featured Book: The Tempest Toss - Full Synopsis -->
  <section id="synopsis" class="section-dark py-16 md:py-24">
```

---

### Task 5: Books Page — 3D Cover in Synopsis + Year Marker Glow + Parallax

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Wrap the synopsis book cover in book-3d class**

Find the book cover wrapper in the synopsis section:
```html
        <div class="flex justify-center md:justify-start order-2 md:order-1">
          <div class="book-cover-wrapper">
```
Replace with:
```html
        <div class="flex justify-center md:justify-start order-2 md:order-1">
          <div class="book-3d" data-parallax="-0.05">
```

Also update the inner div — remove the `bg-section-card border-2 border-gray-700` and inline box-shadow since `.book-3d` handles shadows. Replace:
```html
            <div class="aspect-[2/3] w-72 md:w-80 bg-section-card border-2 border-gray-700 flex items-center justify-center overflow-hidden shadow-2xl" style="box-shadow: 0 20px 60px rgba(0,0,0,0.7), -8px 8px 0 rgba(220, 38, 38, 0.2);">
```
with:
```html
            <div class="aspect-[2/3] w-72 md:w-80 flex items-center justify-center overflow-hidden">
```

- [ ] **Step 2: Add year-marker class to the year spans**

Find:
```html
              <span class="text-accent font-bold">1962.</span>
```
Replace with:
```html
              <span class="year-marker">1962.</span>
```

Find:
```html
              <span class="text-accent font-bold">2022.</span>
```
Replace with:
```html
              <span class="year-marker">2022.</span>
```

- [ ] **Step 3: Add fade-in classes to synopsis columns**

Add `fade-in-left` to the book cover column:
```html
        <div class="flex justify-center md:justify-start order-2 md:order-1">
```
→
```html
        <div class="flex justify-center md:justify-start order-2 md:order-1 fade-in-left">
```

Add `fade-in-right` to the book details column:
```html
        <div class="order-1 md:order-2">
```
→
```html
        <div class="order-1 md:order-2 fade-in-right">
```

---

### Task 6: Blog Page Hero Overhaul

**Files:**
- Modify: `src/pages/blog.astro`

- [ ] **Step 1: Replace the entire hero section (lines 11-27)**

Replace everything from `<!-- Hero Section` through the closing `</section>` of the hero with:

```html
  <!-- Hero Section - Military Communications Terminal -->
  <section class="section-darker relative overflow-hidden" style="min-height: 60vh; display: flex; align-items: center;">
    <!-- Grid pattern background -->
    <div class="absolute inset-0 z-0" style="background: linear-gradient(rgba(13, 148, 136, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 148, 136, 0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
    <!-- Scan lines -->
    <div class="scan-lines absolute inset-0 z-0"></div>
    <!-- Gradient overlay -->
    <div class="absolute inset-0 z-0" style="background: linear-gradient(180deg, rgba(6, 10, 20, 0.8) 0%, rgba(10, 14, 26, 0.95) 100%);"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Heading -->
        <div>
          <div class="teal-divider mb-6"></div>
          <p class="section-label">Field Dispatches</p>
          <h1 class="font-heading font-black text-cream leading-[0.95] mb-6 text-shadow-heavy">
            <span class="block text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter">Latest</span>
            <span class="block text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-accent">Articles</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-xl leading-relaxed">
            Insights on military fiction, writing craft, character development, and the truth that fiction can tell.
          </p>
        </div>

        <!-- Right: Dispatch Terminal -->
        <div class="flex justify-center lg:justify-end">
          <div class="dispatch-terminal w-full lg:max-w-[360px]">
            <div class="live-indicator">
              <span class="live-dot"></span>
              <span class="live-text">LIVE</span>
            </div>
            <div class="dispatch-terminal-header">/// Incoming Transmissions</div>
            <div class="dispatch-ticker-wrapper">
              <div class="dispatch-ticker">
                <div class="dispatch-item">
                  <span class="dispatch-timestamp">2026.03.15 — 0800Z</span>
                  The Art of Writing Authentic Military Fiction
                </div>
                <div class="dispatch-item">
                  <span class="dispatch-timestamp">2026.02.28 — 1200Z</span>
                  Behind the Research: Creating Authentic Operations
                </div>
                <div class="dispatch-item">
                  <span class="dispatch-timestamp">2026.02.10 — 0600Z</span>
                  Character Development in High-Stakes Situations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Add fade-in-up to article cards**

In the article grid section, add `fade-in-up` to each `<article>` tag with staggered delays. For each of the 4 articles, add `fade-in-up` class and inline style:

Article 1: add `fade-in-up` to the `<article>` class and `style="transition-delay: 0s"`
Article 2: add `fade-in-up` and `style="transition-delay: 0.1s"`
Article 3: add `fade-in-up` and `style="transition-delay: 0.2s"`
Article 4: add `fade-in-up` and `style="transition-delay: 0.3s"`

- [ ] **Step 3: Reduce excessive padding on blog page sections**

Change the article grid section:
```html
  <section class="section-darker py-20 md:py-32">
```
→
```html
  <section class="section-darker py-16 md:py-24">
```

Change the categories section:
```html
  <section class="section-dark py-20 md:py-32">
```
→
```html
  <section class="section-dark py-16 md:py-24">
```

Change the featured article section:
```html
  <section class="section-dark py-20 md:py-32">
```
→
```html
  <section class="section-dark py-16 md:py-24">
```

---

### Task 7: Audit — Padding, Labels, Tags Across All Pages

**Files:**
- Modify: `src/pages/books.astro`
- Modify: `src/pages/about.astro`
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Reduce excessive padding on books.astro**

Change these sections from `py-24 md:py-32` to `py-16 md:py-24`:
- Key Themes section: `<section class="section-darker py-24 md:py-32">`
- Upcoming Books section: `<section class="section-dark py-24 md:py-32">`
- Series Timeline section: `<section id="series-overview" class="section-darker py-24 md:py-32">`
- Where to Buy section: `<section class="section-dark py-24 md:py-32">`

- [ ] **Step 2: Reduce excessive padding on about.astro**

Read about.astro and change any `py-20 md:py-32` or `py-24 md:py-40` (except the hero) to `py-16 md:py-24`.

- [ ] **Step 3: Reduce excessive padding on contact.astro**

Read contact.astro and change any `py-20 md:py-32` (except the hero) to `py-16 md:py-24`.

- [ ] **Step 4: Verify all eyebrow labels are present**

Audit all pages and confirm every section has the correct `.section-label`:
- index.astro: Mission Briefing, Join the Network, Operative Profile, Operations Dossier, Field Dispatches (all done)
- books.astro: Mission Briefing, Operations Dossier (x2), Acquire Target (all done)
- about.astro: Operative Profile (done)
- blog.astro: Field Dispatches (x2) (done)
- contact.astro: Secure Channel (done)

If any are missing, add them. If all present, no changes needed.

---

### Task 8: Build Verification and Screenshots

**Files:**
- None (verification only)

- [ ] **Step 1: Run full build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages built, zero errors.

- [ ] **Step 2: Visual verification**

Serve the built site and take screenshots of:
1. Homepage hero (typewriter + radar sweep + 3D book cover)
2. Homepage full page (directional fades, staggered cards)
3. Books page hero (full-viewport, split-color title, 3D cover, scan lines)
4. Books page synopsis (year markers, 3D cover)
5. Blog page hero (dispatch terminal with ticker, LIVE indicator, grid background)
6. Blog page article grid (staggered fade-in, images)

Verify:
- Typewriter animation plays once and caret blinks then stops
- Radar sweep plays once on load
- Sonar rings expand and fade
- 3D book covers tilt and reveal on scroll
- Year markers glow on scroll-into-view
- Dispatch terminal ticker scrolls through 3 articles
- LIVE indicator pulses
- No infinite animations except: dispatch ticker, LIVE dot pulse
- No excessive vertical gaps between sections
- All section labels present
