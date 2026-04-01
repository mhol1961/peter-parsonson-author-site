# Launch Fixes — Remove All "Buy Now" / "Available Now" References

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove every "Buy Now", "Order Now", "Available Now", and Amazon link across the site. Replace the books page synopsis layout. Update contact page form and FAQ. The book targets Summer 2026 — nothing should imply it's available for purchase.

**Architecture:** HTML-only changes across index.astro, books.astro, and contact.astro. The books page synopsis section gets a complete layout replacement (cover+title top, dossier below). All Amazon links become internal links. Fixes 1, 2, 4, 8, 9 from the spec are already done from previous content updates.

**Tech Stack:** Astro 6, HTML text edits

**Already done (skip):** Fix 1 (hero CTA), Fix 2 (hero paragraph), Fix 4 (homepage meta), Fix 8 (books meta), Fix 9 (protocol numbering on series grid cards)

---

### Task 1: Homepage — "Out Now" Badge + Books Hero Amazon Link

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Change "Out Now" to "Coming 2026" on homepage series grid**

In `src/pages/index.astro`, find (around line 200):
```html
            <div class="absolute top-3 right-3 px-2 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider z-[2]">
              Out Now
            </div>
```
Change `Out Now` to `Coming 2026`.

- [ ] **Step 2: Fix books hero "Order Now" Amazon link**

In `src/pages/books.astro`, find the hero CTA buttons (around line 32-38):
```html
            <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
              Order Now
            </a>
            <a href="#synopsis" class="btn-secondary text-center">
              Read Synopsis
            </a>
```
Replace the first button with an internal link:
```html
            <a href="#synopsis" class="btn-primary">
              Read the Brief
            </a>
            <a href="/about" class="btn-secondary text-center">
              Meet the Author
            </a>
```

---

### Task 2: Books Page — Synopsis Section Complete Replacement

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Replace the entire Featured Book synopsis section**

Find the section from `<!-- Featured Book: The Tempest Toss - Full Synopsis -->` (line 72) through its closing `</section>` (line 159). Replace the ENTIRE section with:

```html
  <!-- Featured Book: The Tempest Toss - Full Synopsis -->
  <section id="synopsis" class="section-dark py-16 md:py-20">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Top: Cover + Title side by side -->
      <div class="flex flex-col md:flex-row gap-12 items-center md:items-end mb-16 fade-in-up">
        <!-- Book Cover -->
        <div class="flex-shrink-0">
          <div class="book-cover-wrapper">
            <div class="aspect-[2/3] w-64 md:w-72 lg:w-80 border-2 border-gray-700 flex items-center justify-center overflow-hidden shadow-2xl" style="box-shadow: 0 20px 60px rgba(0,0,0,0.7), -8px 8px 0 rgba(220, 38, 38, 0.2);">
              <img
                src="/images/Front-Cover.jpg"
                alt="The Tempest Toss by Peter P."
                class="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <!-- Title + Tagline -->
        <div>
          <div class="inline-block border border-gray-700 px-4 py-2 mb-6">
            <span class="text-primary uppercase tracking-widest font-bold text-xs">Book 1 — John Hunter Series</span>
          </div>
          <h2 class="text-5xl md:text-6xl font-heading font-black text-cream mb-6 uppercase tracking-tighter">
            The Tempest<br/>Toss
          </h2>
          <p class="text-cream font-heading font-black text-2xl uppercase tracking-wide">
            Some Debts Take Sixty Years to Come Due.
          </p>
        </div>
      </div>

      <!-- Classified Dossier Panel -->
      <div class="border border-gray-700 p-8 md:p-12 mb-12 fade-in-up" style="background: rgba(17,24,39,0.8); border-left: 4px solid rgba(220, 38, 38, 0.6);">
        <div class="mb-6">
          <p class="text-accent uppercase tracking-widest font-bold text-xs mb-1">Classification: Top Secret // NOFORN</p>
          <p class="text-primary uppercase tracking-widest font-bold text-xs">File: The Tempest Toss — John Hunter Series, Book 1</p>
        </div>

        <div class="space-y-6 text-gray-200 text-lg leading-relaxed">
          <p>
            July 9, 1962. A Thor missile carrying a 1.45-megaton warhead detonates 250 miles above Johnston Island in the South Pacific. The test — code-named Starfish Prime — is meant to study high-altitude nuclear effects. What it reveals is something far more dangerous: a single detonation can kill every unshielded circuit within line of sight.
          </p>
          <p>
            Sixty years later, the science perfected in secret becomes a nightmare made real. A coordinated terrorist attack erupts across the Port of Tampa during the Gasparilla festival — fuel terminals detonated, a tanker ship destroyed, a cruise liner with 3,500 passengers caught in the blast radius. Six thousand dead in minutes.
          </p>
          <p>
            Navy SEAL Commander John Hunter — fifteen years of special operations, stationed at USSOCOM headquarters, MacDill Air Force Base — is caught in the attack with his family on the Crosstown Expressway. What begins as survival becomes a hunt, as Hunter discovers the port strike was only the opening move in something far larger: a weapon system hidden not in a warhead, but in the infrastructure itself.
          </p>
          <p class="text-accent font-semibold italic">
            The Dark Territory Protocol. Pre-positioned. Patient. And already inside the wire.
          </p>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-700">
          <p class="text-gray-500 uppercase tracking-widest text-xs">Distribution: Authorized Personnel Only</p>
          <p class="text-gray-500 uppercase tracking-widest text-xs">Ref: Dark Territory Protocol — Eyes Only</p>
        </div>
      </div>

      <!-- Book metadata -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 fade-in-up">
        <div class="border border-gray-800 p-4 text-center">
          <p class="text-gray-500 uppercase tracking-widest text-[10px] mb-1">Series</p>
          <p class="text-cream font-bold text-sm">John Hunter</p>
        </div>
        <div class="border border-gray-800 p-4 text-center">
          <p class="text-gray-500 uppercase tracking-widest text-[10px] mb-1">Book</p>
          <p class="text-cream font-bold text-sm">1 of 5</p>
        </div>
        <div class="border border-gray-800 p-4 text-center">
          <p class="text-gray-500 uppercase tracking-widest text-[10px] mb-1">Chapters</p>
          <p class="text-cream font-bold text-sm">27</p>
        </div>
        <div class="border border-gray-800 p-4 text-center">
          <p class="text-gray-500 uppercase tracking-widest text-[10px] mb-1">Author</p>
          <p class="text-cream font-bold text-sm">Peter P.</p>
        </div>
        <div class="border border-gray-800 p-4 text-center">
          <p class="text-gray-500 uppercase tracking-widest text-[10px] mb-1">Status</p>
          <p class="text-accent font-bold text-sm">Coming 2026</p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="#series-overview" class="btn-primary text-center">Explore the Series</a>
        <a href="/about" class="btn-secondary text-center">About the Author</a>
      </div>
    </div>
  </section>
```

---

### Task 3: Books Page — Timeline + Where to Buy Fixes

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Fix Series Timeline — "Available Now" badge**

Find:
```html
                  <span class="inline-block border border-accent px-3 py-1 text-xs font-bold text-accent uppercase tracking-wide">Available Now</span>
```
Replace with:
```html
                  <span class="inline-block border border-accent px-3 py-1 text-xs font-bold text-accent uppercase tracking-wide">Coming 2026</span>
```

- [ ] **Step 2: Fix Series Timeline — "Buy Now" Amazon link**

Find:
```html
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-accent font-bold uppercase tracking-wide hover:text-primary transition-colors">
                  Buy Now &rarr;
                </a>
```
Replace with:
```html
                <a href="/contact" class="inline-flex items-center text-accent font-bold uppercase tracking-wide hover:text-primary transition-colors">
                  Get Notified &rarr;
                </a>
```

- [ ] **Step 3: Fix Series Timeline — enlarge Book 1 thumbnail**

Find:
```html
              <div class="w-24 h-32 flex-shrink-0 flex-grow-0">
```
Replace with:
```html
              <div class="w-32 h-44 flex-shrink-0 flex-grow-0">
```

Also find the thumbnail image's class and change `object-cover` to `object-contain`:
```html
                  class="w-full h-full object-cover border border-gray-700"
```
→
```html
                  class="w-full h-full object-contain border border-gray-700"
```

- [ ] **Step 4: Replace "Where to Buy" section with "Coming Summer 2026"**

Find the entire `<!-- Where to Buy` section (starts with the section comment, ends with closing `</section>`). Replace it with:

```html
  <!-- Pre-Release — Coming Soon -->
  <section class="section-dark py-16 md:py-20">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <p class="section-label">Acquire Target</p>
        <h2 class="text-4xl md:text-5xl font-heading font-black text-cream uppercase tracking-tighter mb-4">
          Coming Summer 2026
        </h2>
        <p class="text-gray-400 text-lg">
          The Tempest Toss will be available in paperback, hardcover, Kindle, and audiobook across all major platforms.
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-6 mb-12">
        <div class="border-2 border-gray-800 p-6 text-center opacity-60" style="background: rgba(17,24,39,0.5);">
          <h3 class="text-lg font-heading font-black text-cream uppercase tracking-wide mb-2">Amazon</h3>
          <p class="text-sm text-gray-500">Paperback & Kindle</p>
        </div>
        <div class="border-2 border-gray-800 p-6 text-center opacity-60" style="background: rgba(17,24,39,0.5);">
          <h3 class="text-lg font-heading font-black text-cream uppercase tracking-wide mb-2">Barnes & Noble</h3>
          <p class="text-sm text-gray-500">Hardcover & Nook</p>
        </div>
        <div class="border-2 border-gray-800 p-6 text-center opacity-60" style="background: rgba(17,24,39,0.5);">
          <h3 class="text-lg font-heading font-black text-cream uppercase tracking-wide mb-2">Apple Books</h3>
          <p class="text-sm text-gray-500">Digital Edition</p>
        </div>
        <div class="border-2 border-gray-800 p-6 text-center opacity-60" style="background: rgba(17,24,39,0.5);">
          <h3 class="text-lg font-heading font-black text-cream uppercase tracking-wide mb-2">Local Bookstore</h3>
          <p class="text-sm text-gray-500">Support Independent</p>
        </div>
      </div>

      <div class="text-center">
        <p class="text-gray-400 mb-6">Be the first to know when pre-orders open.</p>
        <a href="/contact" class="btn-primary">Get on the List</a>
      </div>
    </div>
  </section>
```

---

### Task 4: Contact Page — Form Button + FAQ

**Files:**
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Find the FAQ question "Where can I buy your books?"**

Find the `<details>` element containing "Where can I buy your books?" and update:

Change the summary text from:
```
Where can I buy your books?
```
to:
```
When will the book be available?
```

Change the answer text inside the `<div>` to:
```
The Tempest Toss is targeting a Summer 2026 release. It will be available in paperback, hardcover, Kindle, and audiobook across all major platforms including Amazon, Barnes & Noble, and Apple Books. Subscribe to the newsletter to be notified when pre-orders open.
```

- [ ] **Step 2: Update form submit button text (if applicable)**

Search for any submit button in the contact form. If it says "Send Message", the ContactForm component handles this. Check `src/components/ContactForm.astro` for the submit button text and change it to "Transmit Message" if it currently says "Send Message".

---

### Task 5: Build Verification

- [ ] **Step 1: Build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages, zero errors.

- [ ] **Step 2: Verify no Amazon links remain**

```bash
grep -r "amazon.com" dist/ | head -20
```

Expected: No matches (or only in structured data that references retailers generically).
