# Text Content Update — Manuscript-Accurate Copy

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace placeholder/generic text across all pages with manuscript-accurate content — hero copy, synopsis, bio, metadata, footer, and atmospheric chapter titles.

**Architecture:** Text-only changes. NO CSS, layout, or animation changes. Each task targets one page. Keep all existing military micro-text (/// PRIORITY TRANSMISSION, CLEARANCE: TOP SECRET, etc.) — add to them, don't replace. Do NOT change "Peter P." to "Peter Parsonson" in user-facing content except where the full name is used formally.

**Tech Stack:** Astro 6, HTML text edits only

---

### Task 1: Homepage Hero Text + Endorsement Section + Meta

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Update hero subtitle paragraph**

Find (around line 32-34):
```html
          <p class="animate-fade-in-up delay-200 text-xl md:text-2xl text-white/80 mb-6 max-w-xl font-light leading-relaxed">
            A military thriller by <strong class="text-white font-semibold">Peter P.</strong>
          </p>
```
Replace with:
```html
          <p class="animate-fade-in-up delay-200 text-lg md:text-xl text-white/70 mb-6 max-w-xl leading-relaxed">
            A 1962 nuclear detonation above the Pacific. A weapon perfected in silence for sixty years. And a single day that changes everything &mdash; when the Port of Tampa erupts and a Navy SEAL Commander must hunt a threat that was hiding in plain sight.
          </p>
```

- [ ] **Step 2: Update CTA button text and links**

Find:
```html
            <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" class="btn-primary animate-pulse-glow">
              Order Now
            </a>
            <a href="/books" class="btn-secondary">
              Explore the Series
            </a>
```
Replace with:
```html
            <a href="/books" class="btn-primary animate-pulse-glow">
              Enter the Dark Territory
            </a>
            <a href="/about" class="btn-secondary">
              Meet the Author
            </a>
```

- [ ] **Step 3: Add endorsement quotes section**

Find the Blog Preview section comment (`<!-- ========== BLOG PREVIEW`). Add this NEW section BEFORE it:

```html
  <!-- ==========================================
       ENDORSEMENTS / ATMOSPHERIC QUOTES
       ========================================== -->
  <section class="py-16 md:py-20 section-card border-y border-white/5">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12">
        <div class="fade-in-up">
          <p class="text-xl md:text-2xl italic font-heading text-cream leading-relaxed mb-6">
            &ldquo;For those rough men and women &mdash; past, present, and future &mdash; who stand the watch so the rest of us never have to.&rdquo;
          </p>
          <p class="text-sm text-gray-400 uppercase tracking-widest font-bold">&mdash; Peter Parsonson, Dedication</p>
        </div>
        <div class="fade-in-up stagger-2">
          <p class="text-xl md:text-2xl italic font-heading text-cream leading-relaxed mb-6">
            &ldquo;People sleep peaceably in their beds at night only because rough men stand ready to do violence on their behalf.&rdquo;
          </p>
          <p class="text-sm text-gray-400 uppercase tracking-widest font-bold">&mdash; George Orwell (attributed)</p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 4: Update page title and description**

Find:
```html
  title="Peter P. | Military Thriller Author — The Tempest Toss"
  description="Peter P. is a military thriller author and USCG Authors Program member. Read The Tempest Toss, Book 1 of the John Hunter Series."
```
Replace with:
```html
  title="Peter P. — The Tempest Toss | Military Thriller"
  description="The Tempest Toss by Peter P. — A military thriller built on real EMP science, Cold War history, and twenty-two years of research. Book 1 of the John Hunter Series."
```

---

### Task 2: Books Page — Synopsis, Dossier, Series Cards, Chapter Marquee, Meta

**Files:**
- Modify: `src/pages/books.astro`

- [ ] **Step 1: Update the Classified Brief dossier synopsis**

Read the file. Find the Classified Brief dossier panel (the div with `border-l-[3px]` and `background: rgba(13, 148, 136, 0.05)`). Replace the ENTIRE dossier content (everything inside the dossier wrapper div, from the CLASSIFICATION text through the DISTRIBUTION text) with:

```html
            <p class="mil-text-red mb-2">Classification: Top Secret // NOFORN</p>
            <p class="text-[10px] uppercase tracking-[0.2em] font-bold mb-4" style="color: #0D9488;">File: The Tempest Toss — John Hunter Series, Book 1</p>
            <div class="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                July 9, 1962. A Thor missile carrying a 1.45-megaton warhead detonates 250 miles above Johnston Island in the South Pacific. The test &mdash; code-named Starfish Prime &mdash; is meant to study high-altitude nuclear effects. What it reveals is something far more dangerous: a single detonation can kill every unshielded circuit within line of sight.
              </p>
              <p>
                Sixty years later, the science perfected in secret becomes a nightmare made real. A coordinated terrorist attack erupts across the Port of Tampa during the Gasparilla festival &mdash; fuel terminals detonated, a tanker ship destroyed, a cruise liner with 3,500 passengers caught in the blast radius. Six thousand dead in minutes.
              </p>
              <p>
                Navy SEAL Commander John Hunter &mdash; fifteen years of special operations, stationed at USSOCOM headquarters, MacDill Air Force Base &mdash; is caught in the attack with his family on the Crosstown Expressway. What begins as survival becomes a hunt, as Hunter discovers the port strike was only the opening move in something far larger: a weapon system hidden not in a warhead, but in the infrastructure itself.
              </p>
              <p class="text-cream font-semibold">
                The Dark Territory Protocol. Pre-positioned. Patient. And already inside the wire.
              </p>
            </div>
            <div class="mt-4 pt-4 border-t border-white/10">
              <p class="mil-text-red">Distribution: Authorized Personnel Only</p>
              <p class="mil-text mt-1">Ref: Dark Territory Protocol — Eyes Only</p>
            </div>
```

- [ ] **Step 2: Update book metadata in the dossier sidebar**

Find the existing metadata rows in the dossier (Designation, Series, Status, Operative, etc.). Replace the content of each row:

- Designation → The Tempest Toss
- Series → John Hunter #1 (5 Planned)
- Status → Available 2026
- Operative → CDR John Hunter, USN
- Theater → Global
- Threat Level → (keep as-is with the 4 red blocks + HIGH)
- Pages → 27 Chapters
- Release → 2026

- [ ] **Step 3: Update series grid card titles**

Find the Book 1 card in the homepage-style series grid (the one with the cover image). Update its text:
- Protocol label: keep "Protocol 01"
- Title: "The Tempest Toss"
- Subtitle: Add "Available 2026" below the title

Find the Books 2-5 loop. Update the text logic:
- Book 2: title should say "Title TBA" (not "Coming 2027")
- Book 3: title should say "Classified" (not "TBA")
- Books 4-5: keep "TBA" or "Classified"

Specifically, change:
```html
              <h3 class="text-sm font-heading font-black text-cream uppercase tracking-wide mb-1">{num === 2 ? 'Coming 2027' : 'TBA'}</h3>
```
to:
```html
              <h3 class="text-sm font-heading font-black text-cream uppercase tracking-wide mb-1">{num === 2 ? 'Title TBA — 2027' : 'Classified'}</h3>
```

- [ ] **Step 4: Add chapter titles marquee**

Find the "Where to Buy" section. Add this NEW section BEFORE it:

```html
  <!-- Chapter Titles — Atmospheric Texture -->
  <section class="section-card py-6 border-y border-white/5">
    <div class="marquee-wrapper">
      <span class="marquee-content mil-text" style="animation-duration: 40s;">ECHOES OF JOHNSTON &nbsp;&bull;&nbsp; WARNING ORDER &nbsp;&bull;&nbsp; MEASURED RESPONSE &nbsp;&bull;&nbsp; THE SHADOW ARCHITECTS &nbsp;&bull;&nbsp; PANDORA'S BOX &nbsp;&bull;&nbsp; CONVERGENCE &nbsp;&bull;&nbsp; THE GUAM GAMBIT &nbsp;&bull;&nbsp; DECEPTION'S VEIL &nbsp;&bull;&nbsp; BREACH AND FURY &nbsp;&bull;&nbsp; EXTRACTION PROTOCOL &nbsp;&bull;&nbsp; SKYFIRE &nbsp;&bull;&nbsp; THE DRAGON'S TEETH &nbsp;&bull;&nbsp; STRAIT OF RECKONING &nbsp;&bull;&nbsp; SUN TZU'S SHADOW &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; ECHOES OF JOHNSTON &nbsp;&bull;&nbsp; WARNING ORDER &nbsp;&bull;&nbsp; MEASURED RESPONSE &nbsp;&bull;&nbsp; THE SHADOW ARCHITECTS &nbsp;&bull;&nbsp; PANDORA'S BOX &nbsp;&bull;&nbsp; CONVERGENCE &nbsp;&bull;&nbsp; THE GUAM GAMBIT &nbsp;&bull;&nbsp; DECEPTION'S VEIL &nbsp;&bull;&nbsp; BREACH AND FURY &nbsp;&bull;&nbsp; EXTRACTION PROTOCOL &nbsp;&bull;&nbsp; SKYFIRE &nbsp;&bull;&nbsp; THE DRAGON'S TEETH &nbsp;&bull;&nbsp; STRAIT OF RECKONING &nbsp;&bull;&nbsp; SUN TZU'S SHADOW &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;</span>
    </div>
  </section>
```

- [ ] **Step 5: Update page meta**

Find the title/description props:
```html
  title="Books by Peter P. | The John Hunter Series"
  description="Explore The Tempest Toss and the John Hunter Series — gripping military thrillers by Peter P. Available on Amazon."
```
Replace with:
```html
  title="The Tempest Toss — Book Details | Peter P."
  description="Navy SEAL Commander John Hunter faces a coordinated terror attack on Tampa and discovers a weapon hidden in America's own infrastructure. The Dark Territory Protocol."
```

---

### Task 3: About Page — Bio Rewrite + Credential Cards + Meta

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Update hero subtitle**

Find the subtitle paragraph in the hero:
```html
          <p class="text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
            A scientist who spent twenty-two years turning declassified history into fiction that says what the official record cannot.
          </p>
```
Replace with:
```html
          <p class="section-label mb-2">Scientist. Researcher. Thriller Writer.</p>
          <p class="text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
            Twenty-two years of research. Real science. Real operations. A thriller that took that long because the truth it tells needed that long to uncover.
          </p>
```

- [ ] **Step 2: Rewrite the bio paragraphs**

Find the main bio text in the bio section (the `md:col-span-2` column with the heading "Twenty-Two Years of Research"). Replace the heading and ALL bio paragraphs (everything from the h2 through the last `</p>` before the research deep dive card) with:

```html
          <p class="section-label">Background Dossier</p>
          <h2 class="text-5xl md:text-5xl font-black uppercase tracking-tighter text-cream mb-8">
            The Full Story
          </h2>

          <div class="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Peter Parsonson spent twenty-two years writing The Tempest Toss. It survived 9/11, career changes, cross-country moves, and enough rewrites to fill a classified archive. The result is a thriller built on real science, real operations, and the kind of research that sometimes makes people uncomfortable.
            </p>
            <p>
              A chemist by training &mdash; Master of Science, Georgia Institute of Technology &mdash; Pete spent thirty years applying scientific rigor to complex technical problems. When he turned that same discipline to fiction, he didn't guess at the details. He went to the sources. He wrote to a former senior KGB general to ask about nuclear weapons pre-positioned in Washington, D.C. He emailed Tom Clancy for research advice &mdash; and Clancy wrote back personally, pointing him toward the U.S. Coast Guard Authors Program, which became a cornerstone of the book's authenticity.
            </p>
            <p>
              The Tempest Toss is grounded in declassified Cold War history, the real science of electromagnetic pulse weapons, and findings from the Congressional EMP Commission &mdash; whose 2018 report concluded that a high-altitude nuclear EMP could kill up to 90% of the American population within twelve months. Pete didn't invent the threat. He gave it a story.
            </p>
            <p>
              He lives in Texas, close to the border. Close enough to the truth to know what fiction can say that the official record cannot.
            </p>
          </div>
```

- [ ] **Step 3: Update credential cards**

Find the Quick Facts Cards section (the `<div class="space-y-4">` containing 4 cards with Education, Recognition, Experience, Location). Replace the ENTIRE space-y-4 div with:

```html
            <div class="space-y-4">
              <div class="section-card p-5 border-l-4 border-red-600 fade-in-up">
                <p class="text-xs uppercase tracking-widest text-red-500 font-black mb-2">Education</p>
                <p class="text-cream text-sm leading-tight">M.S. Chemistry<br/>Georgia Institute of Technology</p>
                <p class="text-gray-500 text-xs mt-2 italic">Three decades of scientific rigor applied to the page</p>
              </div>
              <div class="section-card p-5 border-l-4 border-teal-600 fade-in-up stagger-1">
                <p class="text-xs uppercase tracking-widest text-teal-400 font-black mb-2">22 Years of Research</p>
                <p class="text-cream text-sm leading-tight">From declassified Cold War archives to modern EMP threat assessments</p>
              </div>
              <div class="section-card p-5 border-l-4 border-red-600 fade-in-up stagger-2">
                <p class="text-xs uppercase tracking-widest text-red-500 font-black mb-2">Tom Clancy Connection</p>
                <p class="text-cream text-sm leading-tight">Clancy personally replied and directed Pete to the USCG Authors Program</p>
              </div>
              <div class="section-card p-5 border-l-4 border-teal-600 fade-in-up stagger-3">
                <p class="text-xs uppercase tracking-widest text-teal-400 font-black mb-2">USCG Authors Program</p>
                <p class="text-cream text-sm leading-tight">Embedded research program for operational authenticity</p>
              </div>
              <div class="section-card p-5 border-l-4 border-red-600 fade-in-up stagger-4">
                <p class="text-xs uppercase tracking-widest text-red-500 font-black mb-2">Congressional EMP Commission</p>
                <p class="text-cream text-sm leading-tight">The real-world science behind the fiction</p>
              </div>
            </div>
```

- [ ] **Step 4: Update page meta**

Find:
```html
  title="About Peter P. | Military Thriller Author"
  description="Peter P. is a chemist, Georgia Tech graduate, and USCG Authors Program member who spent twenty-two years writing The Tempest Toss."
```
Replace with:
```html
  title="About Peter P. — Scientist, Researcher, Thriller Writer"
  description="Peter Parsonson spent 22 years researching The Tempest Toss. A Georgia Tech chemist who wrote to Tom Clancy, a former KGB general, and the USCG Authors Program to get the details right."
```

---

### Task 4: Blog + Contact Pages — Copy + Meta Updates

**Files:**
- Modify: `src/pages/blog.astro`
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Update blog page meta**

Find:
```html
  title="Blog | Peter P. - Military Thriller Author"
  description="Read articles and essays on military fiction, writing craft, and storytelling from author Peter P."
```
Replace with:
```html
  title="Field Dispatches — Peter P. Author Blog"
  description="Research notes, behind-the-scenes intel, and updates on the John Hunter Series from military thriller author Peter P."
```

- [ ] **Step 2: Update blog hero subtitle**

Find:
```html
          <p class="text-xl text-gray-300 max-w-xl leading-relaxed">
            Insights on military fiction, writing craft, character development, and the truth that fiction can tell.
          </p>
```
Replace with:
```html
          <p class="text-xl text-gray-300 max-w-xl leading-relaxed">
            Transmissions from the author's desk &mdash; research notes, behind-the-scenes intel, and updates on the John Hunter Series.
          </p>
```

- [ ] **Step 3: Update contact page title and heading**

Find the title/description:
```html
  title="Contact Peter P. | Get in Touch"
  description="Reach out to Peter P. for speaking engagements, interviews, press inquiries, or just to say hello."
```
Replace with:
```html
  title="Contact Peter P. — Establish Comms"
  description="Reach Peter P. for press inquiries, events, or questions about The Tempest Toss and the John Hunter Series."
```

Find the hero h1:
```html
      <h1 class="text-6xl md:text-7xl font-black uppercase tracking-tighter text-cream mb-6">
        Get in Touch
      </h1>
```
Replace with:
```html
      <h1 class="text-6xl md:text-7xl font-black uppercase tracking-tighter text-cream mb-6">
        Establish Contact
      </h1>
```

Find the hero subtitle:
```html
      <p class="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
        Have a question, speaking invitation, or just want to discuss the manuscript? Reach out. I read every message and respond within 3-5 business days.
      </p>
```
Replace with:
```html
      <p class="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
        Got a question about the book? Interested in press, events, or collaboration? Open a secure channel below.
      </p>
```

Find the section-label "Secure Channel" — keep it as-is.

---

### Task 5: Footer Content Update

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Update footer brand description**

Find:
```html
        <p class="text-gray-300 text-sm leading-relaxed mb-6 font-light">
          Military thriller author. Navy veteran. Stories grounded in declassified history and operational reality.
        </p>
```
Replace with:
```html
        <p class="text-gray-300 text-sm leading-relaxed mb-6 font-light">
          Military thriller author. Stories grounded in declassified history, real EMP science, and twenty-two years of research.
        </p>
```

- [ ] **Step 2: Update newsletter heading in footer**

Find the footer newsletter section heading:
```html
          Newsletter
```
Replace with:
```html
          Intel Updates
```

- [ ] **Step 3: Update footer nav links**

Find the navigation links. Update the labels:
- "Home" stays "Home"
- "About" becomes "About Peter P."
- "Books" becomes "The Book"
- "Blog" becomes "Dispatches"
- "Contact" stays "Contact"

- [ ] **Step 4: Update copyright line**

Find the copyright text. Replace with:
```html
        &copy; {new Date().getFullYear()} Peter P. &mdash; The John Hunter Series. All rights reserved.
```

- [ ] **Step 5: Add atmospheric footer text**

After the copyright line (inside the same flex container), add:
```html
      <p class="mil-text mt-4 text-center">Dark Territory Protocol — All Channels Monitored</p>
```

---

### Task 6: Build Verification

- [ ] **Step 1: Build**

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use default && npx astro build
```

Expected: 5 pages, zero errors.
