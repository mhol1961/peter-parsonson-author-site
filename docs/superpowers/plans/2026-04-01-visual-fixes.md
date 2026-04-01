# Visual Fixes — Overlay, Radar, Cover Cutoff, Protocol Cards, Military Text, Font Swap

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix homepage overlay darkness, replace subtle radar with prominent animated radar scope, fix book cover clipping, restore protocol/classified labels on series grid, add military micro-text, swap body font to Space Grotesk.

**Architecture:** CSS changes in global.css (lighter overlay, new radar-scope classes, mil-text classes, font swap). HTML changes on index.astro (radar restructure, military text), books.astro (radar restructure, cover fix, series grid restore, military text), about.astro (military text), blog.astro (military text). Font install via npm. Fix 1 (filename) is already resolved.

**Tech Stack:** Astro 6, Tailwind CSS 4, CSS animations, @fontsource/space-grotesk

---

### Task 1: Install Space Grotesk + Update Font Config

**Files:**
- Run: `npm install @fontsource/space-grotesk`
- Modify: `src/styles/global.css` (font imports + body font-family)
- Modify: `tailwind.config.mjs` (fontFamily)

- [ ] **Step 1: Install Space Grotesk**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npm install @fontsource/space-grotesk
```

- [ ] **Step 2: Add font imports to global.css**

At the TOP of `src/styles/global.css`, after the existing `@import "@fontsource/inter/700.css";` line (line 7), add:

```css
@import "@fontsource/space-grotesk/300.css";
@import "@fontsource/space-grotesk/400.css";
@import "@fontsource/space-grotesk/500.css";
@import "@fontsource/space-grotesk/600.css";
@import "@fontsource/space-grotesk/700.css";
```

- [ ] **Step 3: Update body font-family in global.css**

Find:
```css
body {
  font-family: 'Inter', sans-serif;
```
Replace with:
```css
body {
  font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
```

- [ ] **Step 4: Update tailwind.config.mjs fontFamily**

Find the `fontFamily` object in `tailwind.config.mjs`:
```js
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif']
      },
```
Replace with:
```js
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      },
```

---

### Task 2: CSS Fixes — Overlay, Radar, Cover, Mil-text

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Lighten homepage hero overlay**

Find the `.hero-cinematic::after` rule (around line 629-637):
```css
.hero-cinematic::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0.6) 40%, rgba(10,14,26,0.3) 70%, rgba(10,14,26,0.4) 100%),
    linear-gradient(180deg, rgba(10,14,26,0.7) 0%, transparent 15%, transparent 85%, rgba(10,14,26,0.9) 100%);
  z-index: 1;
}
```
Replace the `background:` property value with:
```css
  background:
    linear-gradient(90deg, rgba(10,14,26,0.75) 0%, rgba(10,14,26,0.45) 35%, rgba(10,14,26,0.15) 60%, rgba(10,14,26,0.25) 100%),
    linear-gradient(180deg, rgba(10,14,26,0.5) 0%, transparent 15%, transparent 85%, rgba(10,14,26,0.85) 100%);
```

- [ ] **Step 2: Add new radar-scope CSS**

Find the old `/* RADAR SWEEP & SONAR RINGS */` section (around lines 321-390). Replace the ENTIRE section (from the comment through the `sonar-expand` keyframe closing brace) with:

```css
/* ============================================
   RADAR SCOPE (Animated)
   ============================================ */

.radar-scope {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
}

.radar-scope::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(13, 148, 136, 0.25);
  box-shadow:
    inset 0 0 0 45px transparent,
    inset 0 0 0 46px rgba(13, 148, 136, 0.15),
    inset 0 0 0 90px transparent,
    inset 0 0 0 91px rgba(13, 148, 136, 0.12),
    inset 0 0 0 135px transparent,
    inset 0 0 0 136px rgba(13, 148, 136, 0.08);
}

.radar-scope::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background: rgba(13, 148, 136, 0.15);
}

.radar-crosshair-h {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(13, 148, 136, 0.15);
}

.radar-sweep {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 50%;
  transform-origin: bottom left;
  animation: radar-rotate 4s linear infinite;
  z-index: 1;
}

.radar-sweep::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from 0deg at bottom left,
    transparent 0deg,
    rgba(13, 148, 136, 0.3) 15deg,
    rgba(13, 148, 136, 0.08) 40deg,
    transparent 60deg
  );
  border-radius: 0 100% 0 0;
}

@keyframes radar-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.radar-blip {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(13, 148, 136, 0.9);
  border-radius: 50%;
  top: 30%;
  left: 60%;
  box-shadow: 0 0 10px rgba(13, 148, 136, 0.6), 0 0 20px rgba(13, 148, 136, 0.3);
  animation: blip-pulse 4s ease-in-out infinite;
  z-index: 2;
}

@keyframes blip-pulse {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  25% { opacity: 1; transform: scale(1.2); }
  50% { opacity: 0.6; transform: scale(1); }
}

.radar-blip-2 {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(220, 38, 38, 0.8);
  border-radius: 50%;
  top: 55%;
  left: 35%;
  box-shadow: 0 0 8px rgba(220, 38, 38, 0.5);
  animation: blip-pulse 4s ease-in-out infinite 1.5s;
  z-index: 2;
}
```

- [ ] **Step 3: Fix book cover object-fit in book-float**

Find the `.book-float .book-3d img` rule (in the FLOATING BOOK COVER section). Replace:
```css
.book-float .book-3d img {
  max-height: 500px;
  width: auto;
  border-radius: 4px;
  box-shadow: -8px 12px 30px rgba(0,0,0,0.5), -2px 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  transform: rotateY(0deg) scale(1);
  opacity: 1;
}
```
with:
```css
.book-float .book-3d img {
  max-height: 500px;
  width: auto;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: -8px 12px 30px rgba(0,0,0,0.5), -2px 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  transform: rotateY(0deg) scale(1);
  opacity: 1;
}
```

- [ ] **Step 4: Add mil-text CSS classes**

Add before the SCROLLBAR section:

```css
/* ============================================
   MILITARY MICRO-TEXT
   ============================================ */

.mil-text {
  font-family: 'Space Grotesk', 'Inter', ui-monospace, monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(13, 148, 136, 0.5);
}

.mil-text-red {
  font-family: 'Space Grotesk', 'Inter', ui-monospace, monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(220, 38, 38, 0.4);
}
```

---

### Task 3: Homepage — New Radar + Military Text

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Replace old radar HTML with new radar-scope**

Find the old radar block inside the hero (lines 55-63):
```html
          <!-- Radar sweep background -->
          <div class="radar-container hidden lg:block">
            <div class="radar-reticle"></div>
            <div class="radar-reticle-inner"></div>
            <div class="radar-sweep"></div>
            <div class="sonar-ring" style="animation-delay: 0.5s;"></div>
            <div class="sonar-ring" style="animation-delay: 1s;"></div>
            <div class="sonar-ring" style="animation-delay: 1.5s;"></div>
          </div>
```

DELETE those lines entirely. Then find the book-float div:
```html
          <div class="book-float relative z-[5]">
            <div class="book-3d">
```

Replace the entire book-float block (through the closing `</div>` for book-shadow) with:
```html
          <div class="book-float relative z-[5]">
            <!-- Radar scope behind the book -->
            <div class="radar-scope hidden lg:block">
              <div class="radar-crosshair-h"></div>
              <div class="radar-sweep"></div>
              <div class="radar-blip"></div>
              <div class="radar-blip-2"></div>
            </div>
            <!-- Floating book -->
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

- [ ] **Step 2: Add military micro-text to homepage hero**

Add this line BEFORE the "Book One" eyebrow text (before line 25):
```html
          <p class="mil-text mb-4">/// Priority Transmission — Eyes Only</p>
```

Add this line AFTER the CTA buttons div closing tag (after the `</div>` that closes the `animate-fade-in-up delay-400` flex container):
```html
          <p class="mil-text-red mt-6">Clearance: Top Secret // SCI</p>
```

---

### Task 4: Books Page — New Radar, Cover Fix, Series Grid Restore, Military Text

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Replace old radar HTML with new radar-scope in hero**

Find the old radar block in the hero (lines 42-48):
```html
          <div class="radar-container hidden lg:block" style="width: 450px; height: 450px; right: 5%; top: 50%; transform: translate(50%, -50%);">
            <div class="radar-reticle"></div>
            <div class="radar-reticle-inner"></div>
            <div class="radar-sweep"></div>
            <div class="sonar-ring" style="animation-delay: 0.5s;"></div>
            <div class="sonar-ring" style="animation-delay: 1s;"></div>
          </div>
```

DELETE those lines. Then replace the book-float block with:
```html
          <div class="book-float relative z-[5]">
            <div class="radar-scope hidden lg:block">
              <div class="radar-crosshair-h"></div>
              <div class="radar-sweep"></div>
              <div class="radar-blip"></div>
              <div class="radar-blip-2"></div>
            </div>
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

- [ ] **Step 2: Add military text to books hero**

Add before the "The John Hunter Series" section-label:
```html
          <p class="mil-text mb-3">File Ref: JH-001 // Operation Tempest</p>
```

- [ ] **Step 3: Add military text to Classified Brief dossier**

Find the dossier panel heading:
```html
            <p class="text-[10px] uppercase tracking-[0.2em] font-bold mb-4" style="color: #0D9488;">Classified Brief</p>
```
Add BEFORE it:
```html
            <p class="mil-text-red mb-2">Classification: Top Secret // NOFORN</p>
```

Find the closing `</div>` of the dossier's `space-y-2` div. Add AFTER it (but still inside the dossier wrapper):
```html
            <p class="mil-text-red mt-4">Distribution: Authorized Personnel Only</p>
```

- [ ] **Step 4: Restore protocol labels on series grid**

Find the Upcoming Books series grid loop (around line 253):
```html
        {[2, 3, 4, 5].map((num, i) => (
          <div class="group relative fade-in-up" style={`transition-delay: ${i * 0.1}s`}>
            <div class="aspect-[2/3] bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 group-hover:border-accent/50 transition-all flex flex-col items-center justify-center relative overflow-hidden">
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <!-- Book Number -->
              <span class="text-8xl font-heading font-black text-gray-700 group-hover:text-accent/30 transition-colors relative z-10">
                {num}
              </span>
              <p class="text-gray-600 text-sm mt-4 uppercase tracking-widest font-bold relative z-10">
                {num === 2 ? 'In Development' : 'Planned'}
              </p>
            </div>
            <div class="mt-4 p-4 border border-gray-800">
              <h3 class="text-sm font-heading font-black text-cream uppercase tracking-wide mb-1">Book {num}</h3>
              <p class="text-xs text-gray-500 uppercase tracking-wider">John Hunter Series</p>
            </div>
          </div>
        ))}
```

Replace the ENTIRE loop with:
```html
        {[2, 3, 4, 5].map((num, i) => (
          <div class="group relative fade-in-up" style={`transition-delay: ${i * 0.1}s`}>
            <div class="aspect-[2/3] bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 group-hover:border-accent/50 transition-all flex flex-col items-center justify-center relative overflow-visible">
              <span class="absolute top-2 right-3 font-heading font-bold text-white/[0.07]" style="font-size: 3rem;">0{num}</span>
              <span class="text-8xl font-heading font-black text-gray-700 group-hover:text-accent/30 transition-colors relative z-10">
                {num}
              </span>
              <p class="text-gray-600 text-sm mt-4 uppercase tracking-widest font-bold relative z-10">
                {num <= 3 ? 'Coming Soon' : 'Classified'}
              </p>
              {num > 3 && (
                <span class="classified-stamp">Classified</span>
              )}
            </div>
            <div class="mt-4 p-4 border border-gray-800">
              <p class="text-[10px] text-primary/60 uppercase tracking-[0.2em] font-bold">Protocol 0{num}</p>
              <h3 class="text-sm font-heading font-black text-cream uppercase tracking-wide mb-1">{num === 2 ? 'Coming 2027' : 'TBA'}</h3>
            </div>
          </div>
        ))}
```

---

### Task 5: About + Blog Military Text

**Files:**
- Modify: `src/pages/about.astro`
- Modify: `src/pages/blog.astro`

- [ ] **Step 1: Add military text to about page credentials sidebar**

In `src/pages/about.astro`, find the Quick Facts sidebar area. Right before `<!-- Pull Quote -->` (or the first card in the sidebar), add:
```html
            <p class="mil-text mb-4">Personnel Dossier — Eyes Only</p>
```

- [ ] **Step 2: Add military text below blog dispatch terminal**

In `src/pages/blog.astro`, find the closing `</div>` of the dispatch terminal widget (the div with class `dispatch-terminal`). Right AFTER that closing div, add:
```html
          <p class="mil-text mt-3 text-center lg:text-right">Comms Protocol: Secure // Encrypted</p>
```

---

### Task 6: Build Verification + Screenshots

- [ ] **Step 1: Build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages, zero errors.

- [ ] **Step 2: Screenshot and verify**

Check:
- Homepage hero: seascape clearly visible through lighter overlay, radar scope with rotating sweep and pulsing blips behind book cover, military micro-text visible
- Books hero: radar scope behind cover, "FILE REF" text, full book cover visible (no title cutoff)
- Books series grid: Protocol 02-05 labels, CLASSIFIED stamps on books 4-5
- Books dossier: "CLASSIFICATION: TOP SECRET" and "DISTRIBUTION" text
- About sidebar: "PERSONNEL DOSSIER" text
- Blog: "COMMS PROTOCOL" text below terminal
- All pages: Space Grotesk body font rendering
