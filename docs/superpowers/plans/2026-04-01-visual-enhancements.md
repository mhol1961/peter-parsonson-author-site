# Visual Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add military-themed eyebrow labels, intelligence dossier sidebar, protocol-numbered series cards, sector tags on blog, scroll animations, section transitions, blog article images, and fix padding gaps.

**Architecture:** All new CSS classes go in `global.css`. Intersection Observer script goes in `BaseLayout.astro`. HTML changes are per-page. No new components — all changes are inline HTML + CSS.

**Tech Stack:** Astro 6, Tailwind CSS 4, vanilla JS (IntersectionObserver)

---

### Task 1: Add New CSS Classes to global.css

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add section-label, sector-tag, section-fade, and fade-in-up classes**

Add the following CSS before the `/* ============================================ SCROLLBAR` comment (before line 193):

```css
/* ============================================
   MILITARY-THEMED UI ELEMENTS
   ============================================ */

.section-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.sector-tag {
  display: inline-block;
  background: rgba(13, 148, 136, 0.1);
  border: 1px solid rgba(13, 148, 136, 0.3);
  color: var(--color-primary);
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.3s;
}
.sector-tag:hover {
  background: var(--color-primary);
  color: white;
}

/* ============================================
   SECTION TRANSITIONS
   ============================================ */

.section-fade-to-dark::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, var(--color-dark));
  pointer-events: none;
  z-index: 3;
}

.section-fade-to-darker::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, #060a14);
  pointer-events: none;
  z-index: 3;
}

.section-fade-to-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, var(--color-dark-card));
  pointer-events: none;
  z-index: 3;
}

/* ============================================
   SCROLL FADE-IN ANIMATION
   ============================================ */

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Verify build passes**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages built, zero errors.

---

### Task 2: Add Intersection Observer to BaseLayout.astro

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Add the Intersection Observer script before `</body>`**

Add this script between `<Footer />` and `</body>` (after line 50, before line 51):

```html
    <!-- Scroll fade-in animation -->
    <script>
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    </script>
```

---

### Task 3: Add Eyebrow Labels and Fix Padding on index.astro

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Add MISSION BRIEFING label to synopsis section**

In the synopsis section (around line 88-111), replace:
```html
      <div class="text-center mb-12">
        <div class="teal-divider mx-auto mb-8"></div>
        <h2 class="text-cream mb-6">A Sixty-Year Conspiracy</h2>
      </div>
```
with:
```html
      <div class="text-center mb-12">
        <div class="teal-divider mx-auto mb-8"></div>
        <p class="section-label">Mission Briefing</p>
        <h2 class="text-cream mb-6">A Sixty-Year Conspiracy</h2>
      </div>
```

- [ ] **Step 2: Add JOIN THE NETWORK label to newsletter section**

Replace:
```html
      <h3 class="text-2xl md:text-3xl text-cream mb-4">Get Notified About New Releases</h3>
```
with:
```html
      <p class="section-label">Join the Network</p>
      <h3 class="text-2xl md:text-3xl text-cream mb-4">Get Notified About New Releases</h3>
```

- [ ] **Step 3: Add OPERATIVE PROFILE label to about section**

Replace:
```html
          <p class="text-primary-light uppercase tracking-[0.3em] font-bold text-xs mb-4">About the Author</p>
```
with:
```html
          <p class="section-label">Operative Profile</p>
```

- [ ] **Step 4: Add OPERATIONS DOSSIER label to series section**

Replace:
```html
        <p class="text-primary-light uppercase tracking-[0.3em] font-bold text-xs mb-4">Five Books. One Mission.</p>
        <h2 class="text-cream">The John Hunter Series</h2>
```
with:
```html
        <p class="section-label">Operations Dossier</p>
        <p class="text-primary-light uppercase tracking-[0.3em] font-bold text-xs mb-4">Five Books. One Mission.</p>
        <h2 class="text-cream">The John Hunter Series</h2>
```

- [ ] **Step 5: Add FIELD DISPATCHES label to blog section**

Replace:
```html
        <h2 class="text-cream">Latest Articles</h2>
```
with:
```html
        <p class="section-label">Field Dispatches</p>
        <h2 class="text-cream">Latest Articles</h2>
```

- [ ] **Step 6: Reduce section padding to fix empty gaps**

Change all `py-24 md:py-32` to `py-16 md:py-24` on these sections:

1. Synopsis section (line 88): `py-24 md:py-32` → `py-16 md:py-24`
2. About section (line 131): `py-24 md:py-32` → `py-16 md:py-24`
3. Series section (line 170): `py-24 md:py-32` → `py-16 md:py-24`
4. Blog section (line 221): `py-24 md:py-32` → `py-16 md:py-24`

Also reduce `mt-16` to `mt-10` on the section CTAs (lines 107, 212, 250) and `mb-16` to `mb-12` on the section headers (lines 172, 223).

- [ ] **Step 7: Add section fade transitions**

Add `section-fade-to-card` class to the synopsis section:
```html
<section class="py-16 md:py-24 section-dark relative grain-overlay section-fade-to-card">
```

Add `section-fade-to-dark` class to the newsletter section:
```html
<section class="py-20 section-card border-y border-white/5 section-fade-to-dark">
```

Add `section-fade-to-darker` class to the about section:
```html
<section class="py-16 md:py-24 section-dark section-fade-to-darker">
```

- [ ] **Step 8: Add fade-in-up class to non-hero section content**

Add `class="fade-in-up"` to these elements (NOT to hero section elements — hero stays visible on load):
- Synopsis heading container div
- Synopsis text container div
- Newsletter heading `h3`
- About author photo container div
- About bio text container div
- Series heading container div
- Series grid container div
- Blog heading container div
- Blog cards grid container div

---

### Task 4: Add Protocol Numbers to Series Cards on index.astro

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Update Book 1 card with PROTOCOL 01**

Replace the Book 1 card (lines 180-195):
```html
        <a href="/books" class="group block">
          <div class="relative overflow-hidden mb-4">
            <img
              src="/images/Front-Cover.jpg"
              alt="The Tempest Toss"
              class="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-3 right-3 px-2 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider">
              Out Now
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h4 class="text-base font-heading font-bold text-cream group-hover:text-accent transition-colors">The Tempest Toss</h4>
          <p class="text-xs text-gray-500 mt-1">Book 1</p>
        </a>
```
with:
```html
        <a href="/books" class="group block">
          <div class="relative overflow-hidden mb-4">
            <span class="absolute top-2 right-3 text-5xl font-heading font-bold text-white/[0.07] z-0" style="font-size: 3rem;">01</span>
            <img
              src="/images/Front-Cover.jpg"
              alt="The Tempest Toss"
              class="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105 relative z-[1]"
              loading="lazy"
            />
            <div class="absolute top-3 right-3 px-2 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider z-[2]">
              Out Now
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-[2]"></div>
          </div>
          <p class="text-[10px] text-primary uppercase tracking-[0.2em] font-bold">Protocol 01</p>
          <h4 class="text-base font-heading font-bold text-cream group-hover:text-accent transition-colors">The Tempest Toss</h4>
        </a>
```

- [ ] **Step 2: Update Books 2-5 with protocol numbers and CLASSIFIED stamp**

Replace the Books 2-5 loop (lines 198-209):
```html
        {[2, 3, 4, 5].map((num) => (
          <div class="group block">
            <div class="relative overflow-hidden mb-4 aspect-[2/3] flex items-center justify-center" style="background: linear-gradient(160deg, #141b2d 0%, #0a0e1a 100%); border: 1px solid rgba(255,255,255,0.05);">
              <div class="text-center">
                <span class="text-5xl font-heading font-black text-white/5">{num}</span>
                <p class="text-[10px] text-gray-600 uppercase tracking-[0.3em] mt-2">Coming Soon</p>
              </div>
            </div>
            <h4 class="text-base font-heading font-bold text-gray-600">Book {num}</h4>
            <p class="text-xs text-gray-700 mt-1">TBA</p>
          </div>
        ))}
```
with:
```html
        {[2, 3, 4, 5].map((num) => (
          <div class="group block">
            <div class="relative overflow-hidden mb-4 aspect-[2/3] flex items-center justify-center" style="background: linear-gradient(160deg, #141b2d 0%, #0a0e1a 100%); border: 1px solid rgba(255,255,255,0.05);">
              <span class="absolute top-2 right-3 font-heading font-bold text-white/[0.07]" style="font-size: 3rem;">0{num}</span>
              <div class="text-center relative z-[1]">
                <span class="text-5xl font-heading font-black text-white/5">{num}</span>
                <p class="text-[10px] text-gray-600 uppercase tracking-[0.3em] mt-2">{num <= 3 ? 'Coming Soon' : 'Classified'}</p>
              </div>
              {num > 3 && (
                <div class="absolute inset-0 flex items-center justify-center z-[2]">
                  <span class="text-white/[0.04] text-2xl font-bold uppercase tracking-[0.3em] -rotate-[30deg]">Classified</span>
                </div>
              )}
            </div>
            <p class="text-[10px] text-primary/60 uppercase tracking-[0.2em] font-bold">Protocol 0{num}</p>
            <h4 class="text-base font-heading font-bold text-gray-600">{num === 2 ? 'Coming 2027' : 'TBA'}</h4>
          </div>
        ))}
```

---

### Task 5: Add Blog Sector Tags and Article Images to index.astro and blog.astro

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/blog.astro`

- [ ] **Step 1: Update homepage blog preview cards with sector tags**

Replace the blog cards data array on index.astro (lines 229-233):
```html
        {[
          { cat: 'Writing Craft', title: 'Getting the Physics Right', desc: 'How twenty-two years of research and a chemistry background shaped every technical detail in The Tempest Toss.' },
          { cat: 'Behind the Scenes', title: 'The EMP Threat Is Real', desc: 'Declassified Cold War history and why electromagnetic pulse weapons remain one of the most underappreciated threats.' },
          { cat: 'USCG Authors Program', title: 'Why Fiction Says What the Record Cannot', desc: 'On the power of military fiction to tell truths that official records won\'t — and why that matters now.' }
        ].map((post) => (
```
with:
```html
        {[
          { sector: 'SECTOR: CRAFT', title: 'Getting the Physics Right', desc: 'How twenty-two years of research and a chemistry background shaped every technical detail in The Tempest Toss.' },
          { sector: 'SECTOR: RECON', title: 'The EMP Threat Is Real', desc: 'Declassified Cold War history and why electromagnetic pulse weapons remain one of the most underappreciated threats.' },
          { sector: 'SECTOR: INTEL', title: 'Why Fiction Says What the Record Cannot', desc: 'On the power of military fiction to tell truths that official records won\'t — and why that matters now.' }
        ].map((post) => (
```

Then update the category line inside the card template. Replace:
```html
              <p class="text-[11px] text-primary-light uppercase tracking-[0.3em] font-bold mb-3">{post.cat}</p>
```
with:
```html
              <span class="sector-tag mb-3">{post.sector}</span>
```

- [ ] **Step 2: Update blog.astro featured article with image and sector tag**

Replace the featured image placeholder (blog.astro lines 36-39):
```html
        <div class="md:col-span-1 relative">
          <div class="aspect-square bg-gradient-to-br from-red-600/10 to-teal-600/10 border-2 border-red-600/30 overflow-hidden flex items-center justify-center mb-4">
            <span class="text-gray-500 text-sm uppercase tracking-wider">Featured Image</span>
          </div>
        </div>
```
with:
```html
        <div class="md:col-span-1 relative">
          <div class="aspect-square border-2 border-red-600/30 overflow-hidden mb-4">
            <img src="/images/the-art-of-writing-military-fiction-article.png" alt="The Art of Writing Authentic Military Fiction" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
```

Also replace the featured article sector label (blog.astro lines 44-46):
```html
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="h-1 w-8 bg-teal-600"></div>
            <span class="text-xs uppercase tracking-widest text-teal-400 font-black">Featured</span>
          </div>
```
with:
```html
          <div class="inline-flex items-center gap-2 mb-4">
            <span class="sector-tag">SECTOR: CRAFT</span>
            <span class="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Featured</span>
          </div>
```

- [ ] **Step 3: Update blog.astro Article 1 image and sector tag**

Replace Article 1's image placeholder (blog.astro lines 83-85):
```html
          <div class="aspect-video bg-gradient-to-br from-red-600/10 to-teal-600/10 flex items-center justify-center overflow-hidden relative border-b border-red-600/20">
            <span class="text-gray-500 text-sm">Article Image</span>
          </div>
```
with:
```html
          <div class="aspect-video overflow-hidden relative border-b border-red-600/20">
            <img src="/images/behind-the-research-creating-authentic-operations-article.png" alt="Behind the Research: Creating Authentic Operations" class="w-full h-full object-cover" loading="lazy" />
          </div>
```

Replace Article 1's category label (blog.astro line 88):
```html
              <span class="text-xs uppercase tracking-widest text-red-500 font-black">WRITING CRAFT</span>
```
with:
```html
              <span class="sector-tag">SECTOR: CRAFT</span>
```

- [ ] **Step 4: Update blog.astro Article 2 image and sector tag**

Replace Article 2's image placeholder (blog.astro lines 106-108):
```html
          <div class="aspect-video bg-gradient-to-br from-red-600/10 to-teal-600/10 flex items-center justify-center overflow-hidden relative border-b border-teal-600/20">
            <span class="text-gray-500 text-sm">Article Image</span>
          </div>
```
with:
```html
          <div class="aspect-video overflow-hidden relative border-b border-teal-600/20">
            <img src="/images/character-developme%20nt-in-high-stakes-situations-article.png" alt="Character Development in High-Stakes Situations" class="w-full h-full object-cover" loading="lazy" />
          </div>
```

Note: The filename has a space (`character-developme nt`) which must be URL-encoded as `%20`.

Replace Article 2's category label (blog.astro line 111):
```html
              <span class="text-xs uppercase tracking-widest text-teal-400 font-black">CHARACTER</span>
```
with:
```html
              <span class="sector-tag">SECTOR: OPS</span>
```

- [ ] **Step 5: Update blog.astro Article 3 image and sector tag**

Replace Article 3's image placeholder (blog.astro lines 129-131):
```html
          <div class="aspect-video bg-gradient-to-br from-red-600/10 to-teal-600/10 flex items-center justify-center overflow-hidden relative border-b border-red-600/20">
            <span class="text-gray-500 text-sm">Article Image</span>
          </div>
```
with:
```html
          <div class="aspect-video overflow-hidden relative border-b border-red-600/20">
            <img src="/images/pacing-your-thriller-creating-tension-without-exhaustion-article.png" alt="Pacing Your Thriller: Creating Tension Without Exhaustion" class="w-full h-full object-cover" loading="lazy" />
          </div>
```

Replace Article 3's category label (blog.astro line 134):
```html
              <span class="text-xs uppercase tracking-widest text-red-500 font-black">CRAFT</span>
```
with:
```html
              <span class="sector-tag">SECTOR: CRAFT</span>
```

- [ ] **Step 6: Update blog.astro Article 4 image and sector tag**

Replace Article 4's image placeholder (blog.astro lines 152-154):
```html
          <div class="aspect-video bg-gradient-to-br from-red-600/10 to-teal-600/10 flex items-center justify-center overflow-hidden relative border-b border-teal-600/20">
            <span class="text-gray-500 text-sm">Article Image</span>
          </div>
```
with:
```html
          <div class="aspect-video overflow-hidden relative border-b border-teal-600/20">
            <img src="/images/the-responsibility-of-writing-about-service-article.png" alt="The Responsibility of Writing About Service" class="w-full h-full object-cover" loading="lazy" />
          </div>
```

Replace Article 4's category label (blog.astro line 157):
```html
              <span class="text-xs uppercase tracking-widest text-teal-400 font-black">RESPONSIBILITY</span>
```
with:
```html
              <span class="sector-tag">SECTOR: INTEL</span>
```

---

### Task 6: Add Intelligence Dossier Sidebar to books.astro

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Convert the synopsis section to include dossier sidebar**

The Featured Book section (lines 38-100) currently has a 2-column grid: book cover left, details right. Add the dossier sidebar below the synopsis text, inside the details column.

After the tagline and before the CTA buttons (between lines 85 and 87), insert:

```html
          <!-- Intelligence Dossier -->
          <div class="mb-10 p-6 border-l-[3px]" style="border-color: #0D9488; background: rgba(13, 148, 136, 0.05);">
            <p class="text-[10px] uppercase tracking-[0.2em] font-bold mb-4" style="color: #0D9488;">Classified Brief</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">Designation</span>
                <span class="text-cream font-semibold">The Tempest Toss</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">Series</span>
                <span class="text-cream font-semibold">John Hunter #1</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">Status</span>
                <span class="text-cream font-semibold">Pre-Release</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">Operative</span>
                <span class="text-cream font-semibold">CDR John Hunter, USN</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">Theater</span>
                <span class="text-cream font-semibold">Global</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">Threat Level</span>
                <span class="flex items-center gap-0.5">
                  <span class="w-3 h-3 bg-red-600 inline-block"></span>
                  <span class="w-3 h-3 bg-red-600 inline-block"></span>
                  <span class="w-3 h-3 bg-red-600 inline-block"></span>
                  <span class="w-3 h-3 bg-red-600 inline-block"></span>
                  <span class="w-3 h-3 bg-gray-700 inline-block"></span>
                  <span class="text-accent font-bold ml-2 text-xs">HIGH</span>
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">Pages</span>
                <span class="text-cream font-semibold">~350</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">Release</span>
                <span class="text-cream font-semibold">Summer 2026</span>
              </div>
            </div>
          </div>
```

- [ ] **Step 2: Add MISSION BRIEFING label to synopsis section**

Add eyebrow label before the h2 on the book details (line 63). Replace:
```html
          <h2 class="text-5xl md:text-6xl font-heading font-black text-cream mb-8 uppercase tracking-tighter">
```
with:
```html
          <p class="section-label">Mission Briefing</p>
          <h2 class="text-5xl md:text-6xl font-heading font-black text-cream mb-8 uppercase tracking-tighter">
```

- [ ] **Step 3: Add ACQUIRE TARGET label to Where to Buy section**

Replace (line 272):
```html
        <h2 class="text-4xl md:text-5xl font-heading font-black text-cream uppercase tracking-tighter mb-4">
          Where to Buy
        </h2>
```
with:
```html
        <p class="section-label">Acquire Target</p>
        <h2 class="text-4xl md:text-5xl font-heading font-black text-cream uppercase tracking-tighter mb-4">
          Where to Buy
        </h2>
```

- [ ] **Step 4: Add OPERATIONS DOSSIER label to series sections**

Add `<p class="section-label">Operations Dossier</p>` before the heading in:
- The "Complete John Hunter Series" section (before line 162)
- The "Series Timeline" section (before line 199)

---

### Task 7: Add Eyebrow Labels to about.astro, blog.astro, contact.astro

**Files:**
- Modify: `src/pages/about.astro`
- Modify: `src/pages/blog.astro`
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: about.astro labels**

Add `<p class="section-label">Operative Profile</p>` before the h1 on about.astro line 20.

- [ ] **Step 2: blog.astro labels**

Add `<p class="section-label">Field Dispatches</p>` before the h1 on blog.astro line 19.

Add `<p class="section-label">Field Dispatches</p>` before the "All Articles" h2 on blog.astro line 74.

- [ ] **Step 3: contact.astro labels**

Add `<p class="section-label">Secure Channel</p>` before the h1 on contact.astro line 21.

---

### Task 8: Build Verification and Screenshot

**Files:**
- None (verification only)

- [ ] **Step 1: Run full build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages built, zero errors.

- [ ] **Step 2: Visual verification**

Serve the built site and take screenshots of all 5 pages to confirm:
- Eyebrow labels appear above section headings
- Dossier sidebar renders correctly on books page
- Protocol numbers appear on series cards
- Sector tags appear on blog articles
- Blog article images load
- Scroll fade-in animations work (elements appear as you scroll)
- Section transitions are smooth (no hard color cuts)
- No excessive vertical gaps between sections on homepage
