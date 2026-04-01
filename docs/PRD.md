# Product Requirements Document (PRD)

**Project:** Peter Parsonson Author Website
**Version:** 1.0
**Date:** March 2026
**Status:** In Development
**Target Launch:** June/July 2026

---

## 1. Vision & Objectives

### Primary Vision
Establish **peterparsonson.com** as the authoritative digital home for Peter P., a military thriller author. The site will serve as a hub for reader engagement, book discovery, and audience building for "The Tempest Toss" (Book 1 of the John Hunter Series) and subsequent works.

### Key Objectives
1. **Drive Book Discovery:** Present "The Tempest Toss" prominently with direct purchase links to Amazon
2. **Build Email Audience:** Capture readers' emails for mailing list (Mailchimp integration)
3. **Establish Author Credibility:** Showcase author bio, USCG Authors Program membership, comparable positioning to Jack Carr
4. **Create Content Hub:** Blog platform for author insights, behind-the-scenes writing content, military fiction commentary
5. **Professional Brand:** Dark, sophisticated aesthetic reflecting military thriller genre
6. **Mobile-First Experience:** Fully responsive design optimized for on-the-go discovery

### Success Metrics
- Email subscribers: 500+ by EOY 2026
- Monthly unique visitors: 2,000+ by month 3 post-launch
- Book purchase conversion rate: 5%+ of site visitors click Amazon buy link
- Lighthouse Score: 90+ (performance, accessibility, SEO, best practices)
- Mobile traffic: 65%+ of total
- Blog engagement: 3+ posts/month, 100+ monthly views per post

---

## 2. Target Audience & User Personas

### Primary Audience
**Military Thriller Readers** — Adults age 25-65 who enjoy:
- Fast-paced military fiction (comparable: Jack Carr, Brad Thor)
- Authentic technical detail and tactical accuracy
- Complex protagonists with moral ambiguity
- Contemporary geopolitical themes

### Secondary Audiences
1. **Military/Veteran Community:** Current and former service members (including USCG)
2. **Book Club Members:** Reading groups discovering new authors
3. **Genre Enthusiasts:** Readers following military thriller space closely
4. **Literary Media:** Reviewers, podcasters, book bloggers

### User Personas

#### Persona 1: "Tactical Tom"
- **Age:** 38, former Navy SEAL
- **Motivation:** Seeks authentic military fiction from authors who "get it"
- **Pain Point:** Frustrated with inaccurate military portrayals in mainstream thrillers
- **Needs:** Author credibility, technical authenticity, community connection
- **Journey:** Lands on site via Jack Carr comparison → reads About page → emails signup → purchases book

#### Persona 2: "Reader Rachel"
- **Age:** 42, corporate professional, avid reader
- **Motivation:** Discovers new thriller authors; prefers authentic military fiction
- **Pain Point:** Too many generic thrillers; wants discovery of emerging authors
- **Needs:** Clear book description, reader reviews/testimonials, easy purchase path
- **Journey:** Finds site via Google → browses Books page → reads blog post → signs up for newsletter

#### Persona 3: "Community Chris"
- **Age:** 55, retired military, runs local book club
- **Motivation:** Wants to support emerging military authors
- **Pain Point:** Limited info on where to find military thriller debuts
- **Needs:** Author bio, book series info, blog content to discuss
- **Journey:** Lands on site → reads About & Books → shares with book club members

---

## 3. Functional Requirements

### 3.1 Homepage
**Purpose:** First impression. Showcase book and author brand. Drive engagement.

**Content:**
- Hero section: Eye-catching headline ("Military Thriller from Peter P."), book cover image, CTA ("Discover The Tempest Toss")
- Book teaser: Brief pitch of "The Tempest Toss" (100-150 words), cover image, Amazon buy button
- Author intro: Short author bio (150 words), author photo, USCG Authors Program badge
- Latest blog post: Auto-pull most recent post with teaser
- Email signup CTA: "Join the mission" form with compelling copy
- Social proof: Testimonial or review snippet (if available)
- Series overview: Cards for Books 1-5 (Books 2-5 as "Coming soon")
- Footer: Navigation, email signup (secondary), social links, copyright

**Visual Hierarchy:**
1. Hero + Book Cover (largest, most prominent)
2. Amazon CTA (high-contrast teal/red button)
3. Email Signup (secondary button, cream/white)
4. Blog preview
5. Author bio

### 3.2 About Page
**Purpose:** Establish author credibility and connection with readers.

**Content:**
- Full author bio (500-750 words): Background, writing journey, military/USCG connection, comparable authors (Jack Carr, Brad Thor)
- Professional photo: High-quality author headshot
- USCG Authors Program mention: Logo/badge with link, brief description of membership
- Writing philosophy: Approach to military fiction, commitment to authenticity
- Personal connection: Relatable details about why the author writes in this genre
- Current project: "The Tempest Toss" details (publication status, inspiration, research)
- Future plans: Book series roadmap (Books 2-5 teasers)
- Contact info: Pointer to contact page for interview/speaking requests

**Optional:**
- Timeline or milestones (writing journey visualization)
- Testimonials from military consultants or beta readers

### 3.3 Books Page
**Purpose:** Comprehensive book discovery and purchase hub.

**Content:**
- Series overview: "John Hunter Series" header with concept (2-3 sentences)
- Book cards (expandable/modal):
  - **Book 1: "The Tempest Toss"**
    - Cover image (high-res)
    - Tagline and pitch (150-200 words)
    - Key themes: Military thriller, tactical accuracy, geopolitical intrigue
    - Publication date (TBD if not live)
    - Genres: Military Thriller, Fiction, Espionage
    - Amazon buy button (ASIN-linked)
    - "Read More" / "Buy Now" CTA
  - **Books 2-5:** Placeholder cards ("Coming Soon 2026/2027/2028/2029")
    - Show commitment to series continuation
    - Teasers if available (optional)
- Email signup: "Be first to know" about future releases
- "Behind the scenes" link to blog posts about writing process (if available)

**Optional:**
- Reader reviews/ratings (aggregated from Amazon if available)
- Comparison to similar authors/series
- Audiobook availability (if applicable)

### 3.4 Blog Page
**Purpose:** Content marketing hub. Establish author voice, engage readers, improve SEO.

**Content:**
- Blog listing page:
  - All posts in reverse-chronological order
  - Post cards: Title, date, excerpt, category/tags, "Read More" link
  - Search/filter by category (e.g., Writing, Military, Behind-the-Scenes)
  - Pagination (12 posts per page)
  - Email signup sidebar

- Individual blog post template:
  - Full post content (Markdown)
  - Author byline, publish date, reading time estimate
  - Category/tags
  - Related posts (2-3 similar posts)
  - Email signup CTA
  - Social share buttons (optional)

**Initial Blog Content Topics:**
- "Why Military Thriller Writers Must Get the Tactics Right"
- "The John Hunter Character: Inspiration and Research"
- "Writing About the USCG: Authenticity in Fiction"
- "Influence of Jack Carr: What Emerging Military Authors Can Learn"
- "Behind the Scenes: The Writing Process for The Tempest Toss"

### 3.5 Contact Page
**Purpose:** Enable reader engagement, interview/speaking requests, feedback.

**Content:**
- Contact form:
  - Name, Email, Subject, Message (all required)
  - "Reason for contact" dropdown: General Inquiry, Interview/Speaking Request, Reader Feedback, Media Request
  - Submission confirmation message
  - Form validation (client-side & server-side)
- Contact info (optional): Email address (general inbox)
- Social links: Twitter/X, LinkedIn, Instagram (if maintained)
- Privacy statement: How contact info is used
- Office hours / response time expectation

**Integrations:**
- Form submissions sent to author's email (Mailchimp or direct email service)
- Optional: Store submissions in database for CRM tracking

### 3.6 Technical Pages
- **404 Page:** Custom design matching site aesthetic. Links back to homepage and sitemap.
- **Sitemap:** XML sitemap for SEO (auto-generated by Astro)
- **robots.txt:** Standard search engine crawling directives
- **RSS Feed (Blog):** Auto-generated feed for subscribers

---

## 4. Non-Functional Requirements

### 4.1 Performance
- **Core Web Vitals:**
  - Largest Contentful Paint (LCP): < 2.5 seconds
  - First Input Delay (FID): < 100 milliseconds
  - Cumulative Layout Shift (CLS): < 0.1

- **Lighthouse Targets:**
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 90+
  - SEO: 95+

- **Bundle Sizes:**
  - JavaScript: < 30KB (uncompressed)
  - CSS: < 15KB (uncompressed)
  - Images: Optimized with next-gen formats (WebP, AVIF)
  - Total page weight: < 200KB (gzipped)

### 4.2 SEO & Discoverability
- **On-Page SEO:**
  - Unique, descriptive meta titles (50-60 chars) per page
  - Meta descriptions (150-160 chars) for all pages
  - Proper heading hierarchy (one H1 per page)
  - Semantic HTML5 structure
  - Alt text for all images
  - Open Graph tags (og:title, og:description, og:image, og:url)
  - Twitter Card tags

- **Technical SEO:**
  - XML sitemap (auto-generated)
  - robots.txt optimization
  - Canonical URLs
  - Internal linking strategy (footer nav, blog post links)
  - Mobile-first indexing ready
  - Page speed optimized (Core Web Vitals)

- **Content SEO:**
  - Blog posts target long-tail keywords (e.g., "best military thriller authors 2026")
  - Keyword density: 1-2% (natural writing)
  - Outbound links to authoritative sources (Jack Carr, military publications)

- **Local/Author SEO (Optional):**
  - Google Business Profile (if applicable)
  - Author structured data (schema.org markup)

### 4.3 Security
- **HTTPS/SSL:** Enforced on all pages
- **Form Security:**
  - CSRF token on contact forms
  - Server-side validation (no client-only validation)
  - Input sanitization (XSS prevention)
  - Rate limiting on contact form (e.g., 5 submissions per hour per IP)

- **Email Security:**
  - Mailchimp API key in environment variables only
  - Double opt-in for email signups
  - SPF/DKIM/DMARC records configured for any sender domain

- **Infrastructure:**
  - Security headers: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options
  - Regular dependency updates
  - No sensitive data in client-side code

### 4.4 Accessibility (WCAG 2.1 AA)
- **Color Contrast:**
  - Text on background: 4.5:1 minimum (normal text)
  - 3:1 minimum (large text, UI components)
  - Teal (#0D9488) and red (#DC2626) tested against dark background (#0F172A)

- **Keyboard Navigation:**
  - All interactive elements focusable (buttons, links, form inputs)
  - Focus indicator visible (no `outline: none` without replacement)
  - Tab order logical and sensible
  - No keyboard traps

- **Screen Reader Support:**
  - Semantic HTML (proper use of h1-h6, nav, main, article)
  - ARIA labels where needed (icon buttons, hidden skip links)
  - Form labels explicitly associated with inputs
  - Alt text for images (descriptive, not "image of…")
  - Skip navigation link (optional but recommended)

- **Mobile Accessibility:**
  - Touch targets: 44x44 pixels minimum
  - Readable text: 16px+ default
  - Zoom support: User can zoom to 200%

### 4.5 Mobile Responsiveness
**Breakpoints:**
- 375px (iPhone SE)
- 768px (Tablet)
- 1024px (Desktop)
- 1440px+ (Wide desktop)

**Requirements:**
- All pages fully functional at each breakpoint
- Navigation responsive (hamburger menu on mobile)
- Images scale appropriately
- Touch-friendly interactive elements on mobile
- Horizontal scroll prevented at all breakpoints
- Form inputs readable without zooming

### 4.6 Browser Support
- **Desktop:** Chrome (latest 2 versions), Firefox (latest 2), Safari (latest 2), Edge (latest)
- **Mobile:** iOS Safari (iOS 14+), Chrome (latest), Samsung Internet (latest)
- **Graceful Degradation:** Older browsers can still access core content (fallbacks for CSS Grid, Flexbox)

### 4.7 Integrations
- **Mailchimp Email Service:**
  - Double opt-in enabled
  - Audience list creation and management
  - Form API integration (HTTPS POST)
  - Confirmation email template

- **Amazon Associates (Optional):**
  - Associates ID for affiliate tracking
  - Book link to current ASIN
  - Direct purchase intent (no affiliate cookie blocking)

- **Analytics (TBD):**
  - Privacy-respecting analytics (e.g., Fathom, Plausible, or Cloudflare Analytics)
  - No third-party tracking (Google Analytics if GDPR/privacy concerns minimal)
  - Conversion tracking for email signups and book purchases

---

## 5. Design Constraints

### Brand Colors (Non-negotiable)
- **Dark Background:** #0F172A (Slate-900 equivalent)
- **Teal Accent:** #0D9488 (Primary interactive color)
- **Red Accent:** #DC2626 (Secondary highlight)
- **Text:** Cream/off-white (#F5F3FF, #E5E7EB)

### Design Inspiration
- **Reference:** officialjackcarr.com (military thriller aesthetic)
- **Unique Differentiation:** NOT a copy; inspired positioning only
- **Aesthetic Direction:** Dark, sophisticated, high-contrast, minimal
- **Animation:** Subtle, performance-first (no heavy 3D effects)

### Content Tone & Voice
- **Professional yet Approachable:** Author is credible but relatable
- **Military Authenticity:** Use accurate terminology; avoid clichés
- **Genre-Specific Language:** Thriller/military fiction conventions
- **Call-to-Action Copy:** Direct, compelling ("Discover," "Buy Now," "Join the Mission")

---

## 6. Success Metrics & KPIs

### Engagement Metrics
| Metric | Target (3 months post-launch) | Target (12 months post-launch) |
|--------|------|------|
| Monthly Unique Visitors | 1,000+ | 5,000+ |
| Email Subscribers | 200+ | 500+ |
| Blog Post Views | 50+ per post | 200+ per post |
| Contact Form Submissions | 5+ per month | 15+ per month |
| Social Media Referrals | 10% of traffic | 15% of traffic |

### Conversion Metrics
| Metric | Target |
|--------|--------|
| Email Signup Conversion Rate | 3-5% of visitors |
| Amazon Buy Click-Through Rate | 5-8% of visitors |
| Blog Post Click-Through (related links) | 10%+ |
| Contact Form Completion Rate | 80%+ |

### Technical Metrics
| Metric | Target |
|--------|--------|
| Lighthouse Performance Score | 90+ |
| Core Web Vitals (all green) | 100% |
| Mobile Traffic | 65%+ |
| Bounce Rate | < 50% |
| Avg Session Duration | 2+ minutes |

### SEO Metrics
| Metric | Target |
|--------|--------|
| Organic Search Traffic | 30%+ of total traffic (6 months post-launch) |
| Indexed Pages | 50+ (homepage + blog + static pages) |
| Keyword Rankings | Top 10 for "Peter P military thriller" and related |

---

## 7. Constraints & Assumptions

### Technical Constraints
- **Budget:** Limited (DIY hosting, no enterprise services initially)
- **Team Size:** Solo or small team (not enterprise development resources)
- **Timeline:** 3-4 months to launch (March to June 2026)
- **Hosting:** Namecheap domain; likely Netlify/Vercel deployment

### Content Constraints
- **Book Availability:** Publication status TBD (site may launch before book is live on Amazon)
- **Author Photo:** High-quality headshot required (professional or semi-professional)
- **Blog Cadence:** Minimum 1 post/month; goal is 3 posts/month
- **Book Series Roadmap:** Books 2-5 are placeholders; no firm dates yet

### Legal/Compliance Constraints
- **Privacy Policy:** Required (data collection, Mailchimp integration, analytics)
- **Terms of Service:** Optional but recommended
- **GDPR Compliance:** If targeting EU readers, explicit consent mechanisms required
- **Copyright:** All content must be original or properly licensed/attributed

### Design Constraints
- **Brand Colors:** Non-negotiable (teal, red, dark background)
- **Mobile-First:** All designs must be mobile-optimized first, desktop second
- **Accessibility:** WCAG 2.1 AA minimum (non-negotiable for professional site)
- **No Heavy JavaScript:** Astro's zero-JS philosophy maintained

### Separation of Identity
- **No Cross-Promotion:** peterparsonson.com is strictly for author brand
- **No Link to adelphibiosciences.com:** Completely separate entities
- **Distinct Content:** Military thriller focus only (no pharmaceutical or business content)

---

## 8. Timeline & Milestones

### Phase 1: Foundation (March 2026)
- Week 1-2: Setup (Astro, Tailwind, Git repo, design system)
- Week 3-4: Core pages and layout (Homepage, About, Books, Contact, Blog)

### Phase 2: Content & Design (April 2026)
- Week 1-2: Author bio, book descriptions, initial blog posts
- Week 3-4: Design refinement, testing, feedback

### Phase 3: Integrations (May 2026)
- Week 1-2: Mailchimp email signup integration
- Week 3: Amazon buy button, analytics setup
- Week 4: Security hardening, form validation

### Phase 4: Optimization & Testing (Early June 2026)
- Week 1-2: SEO optimization, Lighthouse score improvements
- Week 3: Security audit, accessibility testing
- Week 4: Mobile testing, cross-browser testing

### Phase 5: Launch & Monitoring (June/July 2026)
- Week 1: Production deployment
- Week 2-4: Monitoring, bug fixes, performance optimization

---

## 9. Open Questions & Decisions

- [ ] Will "The Tempest Toss" be available on Amazon at launch, or will site go live before book?
- [ ] Should the site include an audiobook option? (If planned)
- [ ] Will author maintain active blog? (Commitment level for 3+ posts/month)
- [ ] Should Amazon Associates affiliate links be used, or direct purchase links?
- [ ] Will Mailchimp list have pre-existing subscribers, or start from zero?
- [ ] Should contact form submissions be stored in a database, or emailed only?
- [ ] Are there beta readers or testimonials to feature on the site?
- [ ] Will social media accounts be maintained alongside the website?
- [ ] Should the site include a newsletter archive or preview?
- [ ] Is there a planned media kit or press page for journalists/reviewers?

---

## 10. Appendix: Comparable Sites & Inspiration

- **officialjackcarr.com:** Military thriller author; dark aesthetic; strong brand presence
- **bradthorbooks.com:** Similar genre; professional author site; book discovery focus
- **Publishing Best Practices:** Clear CTAs, email capture, blog integration

---

**Document Status:** Ready for Development
**Last Updated:** March 2026
**Next Review:** Post-launch (July 2026)
