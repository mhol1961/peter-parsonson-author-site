# Claude.md — Project-Level Instructions

This document provides AI assistants with critical context for working on the P.S. Parsonson author website codebase.

## Project Overview

**Project Name:** P.S. Parsonson Author Website (psparsonson.com)
**Launch Window:** June/July 2026
**Author Brand:** P.S. Parsonson (military thriller author)
**Primary Work:** "The Tempest Toss" — Book 1 of the John Hunter Series

## Tech Stack

- **Framework:** Astro 5 (latest, zero-JS default philosophy)
- **Styling:** Tailwind CSS 4
- **Package Manager:** npm
- **Deployment:** Namecheap (domain registrar) → Netlify or Vercel (likely)
- **Email:** Mailchimp integration (signup forms)
- **Analytics:** TBD (SEO-focused, privacy-respectful)
- **Domain:** peterparsonson.com
- **Related (Separate):** adelphibiosciences.com (keep completely isolated)

## Design Identity

### Color Palette
- **Background:** Dark slate #0F172A (dark theme default)
- **Primary Accent:** Teal #0D9488 (book cover inspired)
- **Secondary Accent:** Red #DC2626 (book cover inspired)
- **Text:** Cream/off-white variants (#F5F3FF, #E5E7EB on dark backgrounds)
- **Borders/Dividers:** Teal-tinted dark shades

### Typography
- **Headings:** Serif font (e.g., Playfair Display, Cormorant) for prestige
- **Body:** Sans-serif (e.g., Inter, Poppins) for readability
- **Accent Text:** All-caps serif for taglines and military-style callouts

### Visual Aesthetic
- Inspired by officialjackcarr.com (military thriller positioning)
- Dark, sophisticated tone reflecting genre
- Teal/red color scheme integrated thoughtfully (not overwrought)
- High contrast for accessibility

## File Structure

```
PeterParsonson.com New Book Site/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── EmailSignup.astro
│   │   ├── BookCard.astro
│   │   └── AmazonButton.astro
│   ├── pages/
│   │   ├── index.astro (Homepage)
│   │   ├── about.astro
│   │   ├── books.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   └── content/
│       ├── blog/
│       │   └── *.md
│       └── books.json
├── public/
│   ├── images/
│   │   ├── hero-image.jpg
│   │   ├── book-cover.jpg
│   │   ├── author-photo.jpg
│   │   └── ...
│   └── ...
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
├── tsconfig.json
└── docs/
    ├── CLAUDE.md (this file)
    ├── PRD.md
    ├── SPECIFICATIONS.md
    ├── DESIGN-SYSTEM.md
    └── PLAN.md
```

## Code Conventions

### Astro
- Use Astro's file-based routing for pages
- Prefer server-side rendering (SSR) over static generation where interaction needed
- Keep components lightweight; avoid JavaScript unless necessary
- Use `client:load` directive sparingly
- Implement responsive images with `<Image />` component
- Leverage Astro slots for composition

### Styling
- Use Tailwind utilities exclusively; avoid custom CSS except in `variables.css`
- Dark theme first (default dark background, light text)
- Responsive classes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Spacing scale: Use Tailwind's default 4px increment scale
- Custom colors defined in `tailwind.config.cjs`

### Components
- Functional, stateless Astro components
- Name exports clearly (e.g., `<Button variant="primary" />`)
- Prop destructuring with TypeScript
- Document complex components with JSDoc comments
- Keep components under 150 lines when possible

### Content Management
- Blog posts as Markdown files in `src/content/blog/`
- Book data in `books.json` (single source of truth)
- Front matter for metadata (title, date, author, category)

## Key Design Decisions

1. **Zero-JavaScript Default:** All critical content renders server-side. JavaScript only for progressive enhancements (form validation, analytics, email signup).

2. **Dark Theme:** Reflects genre and author brand. Reduces eye strain; appeals to thriller audience.

3. **Teal & Red Accents:** Direct correlation to "The Tempest Toss" book cover. Used sparingly for CTAs, highlights, and visual hierarchy.

4. **No Heavy Animations:** Performance-first approach. Use subtle CSS transitions only (`transition-all duration-300`).

5. **Mobile-First Responsive Design:** All pages tested at 375px (iPhone SE), 768px (tablet), 1024px (desktop), 1440px+ (wide).

6. **SEO-Optimized Structure:** Semantic HTML, proper heading hierarchy (h1 per page), meta descriptions, Open Graph tags, structured data.

7. **Email Signup as Primary CTA:** Mailchimp integration on every page footer and strategic locations. Drive audience building.

8. **Amazon Buy Button:** Placeholder for "The Tempest Toss" purchase. Updates when book goes live on Amazon.

## Critical Context

### Author Branding
- Public name: **P.S. Parsonson** — written exactly that way everywhere (no "Peter P.", no "Peter Parsonson"). Bare surname "Parsonson" is fine in running prose.
- Website domain: **psparsonson.com** (live, served from Railway)
- Genre: Military thriller (USCG Authors Program member)
- Comparable author: Jack Carr (officialjackcarr.com style inspiration)

### Separation of Identity
- This site is **exclusively** for the author brand
- **Never mix** with adelphibiosciences.com (separate legal entity)
- No pharmaceutical content; no cross-linking unless explicitly approved

### Book Series Details
- **Book 1:** "The Tempest Toss" (John Hunter Series)
- **Books 2-5:** Placeholder content for now
- **Amazon:** Placeholder buy button; update with real ASIN when live
- **Publication Status:** TBD (site launches before/coinciding with book availability)

## Integrations & APIs

### Mailchimp
- **Audience List ID:** [TO BE FILLED]
- **API Key:** [STORE IN .env.local — NEVER in code]
- **Form:** Email signup on all pages
- **Double opt-in:** Yes (security/compliance)
- **Fields:** Email only (minimal friction)

### Amazon Associates (Optional)
- **Associates ID:** [TO BE FILLED if using affiliate links]
- **Buy Link:** Direct Amazon product link (Book 1 ASIN)

### Domain & DNS
- **Registrar:** Namecheap
- **DNS Hosting:** Namecheap or custom (TBD)
- **SSL:** Automatic (via hosting provider)
- **Email:** Consider branded email if not using third-party service

## Performance & Accessibility

### Performance Targets
- **Lighthouse Score:** 90+ (performance, accessibility, best practices, SEO)
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1
- **Uncompressed JS Bundle:** <30KB (Astro default)
- **CSS Bundle:** <15KB
- **Image Optimization:** Next-gen formats (WebP, AVIF), lazy loading

### Accessibility Standards
- **WCAG 2.1 AA compliance**
- **Color contrast:** 4.5:1 for normal text (teal/red on dark background)
- **Keyboard navigation:** All interactive elements accessible
- **Screen readers:** Semantic HTML, ARIA labels where needed
- **Alt text:** All images must have descriptive alt text
- **Form labels:** Explicit labels for all inputs (not just placeholders)

## Security Best Practices

- **Environment Variables:** All secrets in `.env.local` (never committed)
- **Form Submissions:** Server-side validation required
- **HTTPS:** Enforce redirect from HTTP
- **CSP Headers:** Content Security Policy to prevent XSS
- **CORS:** Explicit origin allowlisting for integrations
- **Input Sanitization:** Sanitize user inputs (especially in contact/blog forms)

## Development Workflow

1. **Branch Strategy:** `main` (production), `dev` (staging), feature branches from `dev`
2. **Commits:** Clear, imperative messages ("Add hero section to homepage")
3. **Pull Requests:** Require review; include screenshots/links to preview
4. **Preview Deployments:** Automatic previews on each PR (Netlify/Vercel)
5. **Testing:** Manual testing on multiple devices; consider automated visual regression testing

## Common Tasks & How To

### Add a New Blog Post
1. Create `.md` file in `src/content/blog/` with front matter
2. Use template from existing post
3. Run `npm run dev` to preview
4. Commit and push to staging/feature branch

### Update Book Information
1. Edit `src/content/books.json`
2. Update `src/pages/books.astro` if layout changes needed
3. Test responsive design at all breakpoints

### Modify Email Signup Integration
1. Update component at `src/components/EmailSignup.astro`
2. Verify Mailchimp audience ID in `.env.local`
3. Test form submission and confirmation

### Deploy to Production
1. Merge PR to `main` branch after review
2. Hosting provider auto-deploys
3. Monitor Lighthouse, error logs post-launch
4. Update status in internal docs

## Contacts & References

- **Domain Registrar:** Namecheap (peterparsonson.com)
- **Deployment:** [TBD: Netlify or Vercel account]
- **Email Service:** Mailchimp
- **Comparable Site:** officialjackcarr.com
- **Related (Do Not Mix):** adelphibiosciences.com

## When You Get Stuck

1. **Design Tokens:** Refer to `docs/DESIGN-SYSTEM.md`
2. **Technical Details:** Check `docs/SPECIFICATIONS.md`
3. **Functional Requirements:** See `docs/PRD.md`
4. **Implementation Roadmap:** Review `docs/PLAN.md`
5. **Config Files:** Check `astro.config.mjs`, `tailwind.config.cjs`, `tsconfig.json`

---

**Last Updated:** March 2026
**Maintained By:** [Project Lead]


<claude-mem-context>

</claude-mem-context>