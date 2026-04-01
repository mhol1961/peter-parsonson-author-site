# Technical Specifications

**Project:** Peter Parsonson Author Website
**Version:** 1.0
**Date:** March 2026

---

## 1. Architecture Overview

### High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                   Browser (User)                             │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS Request
┌────────────────────────▼────────────────────────────────────┐
│              Netlify/Vercel Edge (CDN)                       │
│              ├─ Cache static assets                          │
│              └─ Geo-distributed delivery                     │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│           Astro 5 Static/SSR Build                           │
│  ├─ Pages (SSR where needed)                                │
│  ├─ Components (Astro, no hydration by default)             │
│  ├─ Static content (Markdown blog posts)                    │
│  └─ Assets (images, CSS, minimal JS)                        │
└────────────────────────┬────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
    ┌─────────┐   ┌─────────────┐  ┌──────────┐
    │ Mailchimp│  │ Amazon APIs │  │ Analytics│
    │ (Email)  │  │ (Buy links) │  │ (Traffic)│
    └─────────┘   └─────────────┘  └──────────┘
```

### Design Philosophy
1. **Zero JavaScript by Default:** All critical content server-rendered
2. **Progressive Enhancement:** JavaScript only for enhancements (form validation, analytics)
3. **Static Generation:** Pre-render pages at build time for performance
4. **Edge Caching:** Leverage CDN for global distribution and instant page loads
5. **API-First Integrations:** Third-party services via APIs (Mailchimp, Amazon)

---

## 2. Technology Stack

### Core Framework
| Component | Technology | Version | Rationale |
|-----------|-----------|---------|-----------|
| **Framework** | Astro | 5.x | Zero-JS default, fast static generation, Markdown-native |
| **Styling** | Tailwind CSS | 4.x | Utility-first, performant, dark theme support |
| **Language** | TypeScript | 5.x | Type safety, better IDE support, fewer runtime errors |
| **Package Manager** | npm | Latest | Standard, good performance, ecosystem support |

### Build & Deployment
| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Build Tool** | Astro CLI | Native, integrated with framework |
| **Hosting** | Netlify or Vercel | Edge functions, auto-preview deployments, free tier sufficient |
| **Domain** | Namecheap | Registrar; DNS managed by hosting provider |
| **CI/CD** | GitHub Actions (optional) | Automated testing, preview deployments |
| **Version Control** | Git + GitHub | Standard, required for hosting provider integration |

### Content Management
| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Blog Posts** | Markdown (Astro Content Collections) | Simple, version-controlled, performant |
| **Book Data** | JSON (books.json) | Single source of truth, easy to update |
| **Images** | Astro Image Component | Auto-optimization, format conversion, lazy loading |

### Integrations & APIs
| Service | Purpose | Integration Method | API Endpoint |
|---------|---------|-------------------|--------------|
| **Mailchimp** | Email list signup | REST API (HTTPS POST) | api.mailchimp.com/3.0/lists/{list_id}/members |
| **Amazon** | Book purchase links | Direct URL linking (Associates ID optional) | amazon.com/dp/{ASIN} |
| **Analytics** | Site traffic tracking | Third-party script (e.g., Fathom, Plausible) | Varies by provider |

### Development Tools
| Tool | Purpose | Installation |
|------|---------|--------------|
| **Node.js** | Runtime (required for dev) | nvm or direct install |
| **npm** | Dependency management | Bundled with Node.js |
| **ESLint** | Code linting | `npm install --save-dev eslint` |
| **Prettier** | Code formatting | `npm install --save-dev prettier` |

---

## 3. Code Structure & Organization

### Directory Layout
```
peterparsonson.com/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro           # Default layout for all pages
│   │   └── BlogLayout.astro           # Blog post-specific layout
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navigation.astro       # Header nav, responsive menu
│   │   │   ├── Footer.astro           # Footer with links, email signup
│   │   │   ├── SEO.astro              # Meta tags, structured data
│   │   │   └── SkipLink.astro         # Accessibility skip link
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.astro           # CTA buttons (primary, secondary)
│   │   │   ├── Card.astro             # Content card component
│   │   │   ├── Badge.astro            # Tag/label component
│   │   │   ├── Form.astro             # Form wrapper with validation
│   │   │   └── Input.astro            # Reusable form input field
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.astro      # Hero with image, headline, CTA
│   │   │   ├── BookTeaser.astro       # Book preview + Amazon button
│   │   │   ├── AuthorBio.astro        # Author introduction section
│   │   │   ├── BlogPreview.astro      # Latest posts preview
│   │   │   ├── EmailSignup.astro      # Email capture form (Mailchimp)
│   │   │   ├── SeriesOverview.astro   # Book series cards
│   │   │   └── SocialProof.astro      # Testimonials/reviews
│   │   │
│   │   └── forms/
│   │       ├── EmailSignupForm.astro  # Reusable email form
│   │       ├── ContactForm.astro      # Contact page form
│   │       └── FormValidation.ts      # Shared validation logic
│   │
│   ├── pages/
│   │   ├── index.astro                # Homepage
│   │   ├── about.astro                # About the author
│   │   ├── books.astro                # Books / Series page
│   │   ├── blog/
│   │   │   ├── index.astro            # Blog listing
│   │   │   └── [...slug].astro        # Dynamic blog post route
│   │   ├── contact.astro              # Contact form page
│   │   ├── 404.astro                  # 404 error page
│   │   ├── sitemap.xml.ts             # Dynamic sitemap
│   │   ├── rss.xml.ts                 # RSS feed (blog)
│   │   └── robots.txt.ts              # robots.txt for crawlers
│   │
│   ├── content/
│   │   ├── blog/
│   │   │   ├── 01-military-thriller-authenticity.md
│   │   │   ├── 02-john-hunter-inspiration.md
│   │   │   └── [post].md              # Template
│   │   ├── config.ts                  # Content collection config
│   │   └── books.json                 # Book series data
│   │
│   ├── styles/
│   │   ├── globals.css                # Global styles (resets, fonts)
│   │   ├── variables.css              # CSS custom properties (colors, spacing)
│   │   └── animations.css             # Keyframe animations (optional)
│   │
│   ├── utils/
│   │   ├── constants.ts               # Site-wide constants
│   │   ├── helpers.ts                 # Utility functions
│   │   ├── api.ts                     # External API helpers (Mailchimp)
│   │   └── validation.ts              # Form validation utilities
│   │
│   ├── types/
│   │   ├── blog.ts                    # Blog post type definitions
│   │   ├── book.ts                    # Book type definitions
│   │   └── api.ts                     # API response types
│   │
│   ├── middleware.ts                  # Request middleware (auth, redirects)
│   └── env.d.ts                       # Environment variable type definitions
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-main.jpg
│   │   │   └── hero-main@2x.jpg
│   │   ├── books/
│   │   │   ├── tempest-toss-cover.jpg
│   │   │   └── tempest-toss-cover@2x.jpg
│   │   ├── author/
│   │   │   ├── author-photo.jpg
│   │   │   └── author-photo@2x.jpg
│   │   └── icons/
│   │       ├── amazon-icon.svg
│   │       ├── email-icon.svg
│   │       └── [icons].svg
│   ├── fonts/
│   │   ├── playfair-display-[weights].woff2    # Serif headings
│   │   └── inter-[weights].woff2                # Sans-serif body
│   └── robots.txt                    # Crawlers directive
│
├── .github/
│   └── workflows/
│       ├── build.yml                 # Build/test on push
│       └── deploy.yml                # Deploy on merge to main
│
├── .env.local                        # Environment variables (NOT committed)
├── .env.example                      # Template (committed)
├── .gitignore                        # Git ignore rules
├── astro.config.mjs                  # Astro configuration
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.cjs               # Tailwind CSS configuration
├── package.json                      # Dependencies & scripts
├── package-lock.json                 # Locked dependency versions
├── README.md                         # Project documentation
└── docs/
    ├── CLAUDE.md                     # AI assistant instructions
    ├── PRD.md                        # Product requirements
    ├── SPECIFICATIONS.md             # This file
    ├── DESIGN-SYSTEM.md              # Design tokens & components
    └── PLAN.md                       # Implementation roadmap
```

---

## 4. Component Hierarchy & Data Flow

### Component Tree
```
BaseLayout
├── Navigation
├── main (page-specific content)
│   ├── HeroSection
│   ├── BookTeaser
│   │   └── AmazonButton
│   ├── AuthorBio
│   ├── EmailSignup
│   │   └── EmailSignupForm
│   ├── SeriesOverview
│   │   └── BookCard[]
│   └── SocialProof
└── Footer
    ├── EmailSignupForm (secondary)
    ├── Navigation (links)
    └── SocialLinks

BlogLayout
├── Navigation
├── article
│   ├── BlogPostHeader
│   ├── BlogPostContent
│   ├── RelatedPosts[]
│   └── EmailSignup
└── Footer
```

### Data Flow Architecture
```
Static/Build-Time Data:
├── Blog Posts (Markdown → Content Collections)
├── Books Data (books.json)
└── Config (constants, site metadata)

Runtime Data:
├── Email Signup Form → Mailchimp API
├── Contact Form → Email/Database
└── Analytics Tracking → Third-party Service
```

### Astro Content Collections (Blog)
```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default("Peter P."),
    category: z.enum(["Writing", "Military", "Behind-the-Scenes", "Books"]),
    excerpt: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

### Books Data Structure
```json
{
  "series": {
    "name": "John Hunter Series",
    "description": "A military thriller series...",
    "books": [
      {
        "id": 1,
        "title": "The Tempest Toss",
        "publishDate": "2026-06-XX",
        "coverImage": "/images/books/tempest-toss-cover.jpg",
        "pitch": "...",
        "amazonASIN": "B0XXXXXXX",
        "audiobook": null,
        "status": "available"
      },
      {
        "id": 2,
        "title": "TBD",
        "publishDate": null,
        "status": "placeholder"
      }
    ]
  }
}
```

---

## 5. Integration Specifications

### 5.1 Mailchimp Email Signup Integration

**Endpoint:** `https://api.mailchimp.com/3.0/lists/{AUDIENCE_ID}/members`

**Request Body:**
```json
{
  "email_address": "subscriber@example.com",
  "status": "pending",
  "merge_fields": {
    "FNAME": "John",
    "LNAME": "Doe"
  }
}
```

**Implementation Details:**
- **Double Opt-In:** Status = "pending" (user confirms via email)
- **HTTPS Only:** Never send API key over unencrypted connection
- **API Key Storage:** Environment variable `MAILCHIMP_API_KEY` in `.env.local`
- **Audience ID:** Environment variable `MAILCHIMP_AUDIENCE_ID`
- **Error Handling:** Return user-friendly error if submission fails

**Endpoint Handler (Astro):**
```typescript
// src/pages/api/subscribe.ts
export async function POST({ request }) {
  const { email, firstName, lastName } = await request.json();

  const response = await fetch(
    `https://api.mailchimp.com/3.0/lists/${import.meta.env.MAILCHIMP_AUDIENCE_ID}/members`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(`anystring:${import.meta.env.MAILCHIMP_API_KEY}`)}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "pending",
        merge_fields: { FNAME: firstName, LNAME: lastName },
      }),
    }
  );

  if (!response.ok) {
    return new Response("Signup failed", { status: 400 });
  }

  return new Response("Signup successful", { status: 200 });
}
```

### 5.2 Amazon Book Purchase Links

**Format:** Direct Amazon product links (no affiliate redirect needed initially)

**Implementation:**
```html
<!-- Simple direct link -->
<a href="https://amazon.com/dp/B0XXXXXXX" target="_blank" rel="noopener noreferrer">
  Buy on Amazon
</a>

<!-- Optional: Affiliate tracking (if Associates ID available) -->
<a href="https://amazon.com/dp/B0XXXXXXX?tag=peterparson01-20" target="_blank">
  Buy on Amazon
</a>
```

**Storage:**
- Book ASIN stored in `src/content/books.json`
- Dynamically rendered in templates
- Update one source, propagate everywhere

### 5.3 Analytics Integration (Placeholder)

**Recommended Services:**
- Fathom Analytics (privacy-focused, GDPR-compliant)
- Plausible Analytics (simple, no cookies)
- Cloudflare Analytics Engine (if hosting on Cloudflare)

**Tracking Events:**
```typescript
// Example: Fathom Analytics
window.fathom?.trackEvent("email_signup", { category: "engagement" });
window.fathom?.trackEvent("amazon_click", { category: "conversion" });
window.fathom?.trackEvent("contact_form_submit", { category: "engagement" });
```

---

## 6. Database & Content Management

### Content Model: Blog Posts
**Storage:** Markdown files in `src/content/blog/`

**Front Matter:**
```yaml
---
title: "Why Military Thriller Writers Must Get the Tactics Right"
date: 2026-03-15
author: Peter P.
category: Writing
excerpt: "An exploration of authenticity in military fiction..."
image: /images/blog/tactics.jpg
tags: ["writing", "military", "authenticity"]
---
```

**Rendering:** Astro converts Markdown → HTML at build time

### Content Model: Books
**Storage:** `src/content/books.json`

**Schema:**
```json
{
  "series": "John Hunter Series",
  "books": [
    {
      "id": 1,
      "title": "The Tempest Toss",
      "tagline": "Book 1 of the John Hunter Series",
      "pitch": "...",
      "publishDate": "2026-06-15",
      "coverImage": "/images/books/tempest-toss.jpg",
      "amazonASIN": "B0XXXXXXX",
      "status": "available"
    }
  ]
}
```

**Querying:** Astro uses `getCollection("blog")` for type-safe content access

---

## 7. Routing & URL Structure

### Page Routes
| Page | Route | File |
|------|-------|------|
| Homepage | `/` | `src/pages/index.astro` |
| About | `/about/` | `src/pages/about.astro` |
| Books | `/books/` | `src/pages/books.astro` |
| Blog (listing) | `/blog/` | `src/pages/blog/index.astro` |
| Blog (post) | `/blog/[slug]/` | `src/pages/blog/[...slug].astro` |
| Contact | `/contact/` | `src/pages/contact.astro` |
| 404 | `/404/` | `src/pages/404.astro` |
| Sitemap | `/sitemap.xml` | `src/pages/sitemap.xml.ts` |
| RSS Feed | `/blog/rss.xml` | `src/pages/rss.xml.ts` |

### API Routes
| Endpoint | Method | Purpose | File |
|----------|--------|---------|------|
| `/api/subscribe` | POST | Mailchimp email signup | `src/pages/api/subscribe.ts` |
| `/api/contact` | POST | Contact form submission | `src/pages/api/contact.ts` |

### URL Naming Conventions
- Blog posts: `/blog/title-slug/` (lowercase, hyphens)
- Categories: `/blog/category/writing/` (optional, future)
- Archives: `/blog/2026/06/` (optional, future)

---

## 8. Responsive Design & Breakpoints

### Breakpoint Strategy (Mobile-First)
```css
/* Base styles (mobile, < 640px) */
.container { width: 100%; }

/* Tablet and above (≥ 768px) */
@media (min-width: 768px) {
  .container { max-width: 768px; }
}

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

/* Wide desktop (≥ 1440px) */
@media (min-width: 1440px) {
  .container { max-width: 1320px; }
}
```

### Tailwind Breakpoint Prefixes
| Prefix | Min-Width | Device |
|--------|-----------|--------|
| None (base) | 0px | Mobile first |
| `sm:` | 640px | Small devices |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktops |
| `xl:` | 1280px | Large desktops |
| `2xl:` | 1536px | Extra-wide |

### Responsive Testing Checklist
- [ ] 375px (iPhone SE) — single column, touch-friendly
- [ ] 768px (iPad) — 2-3 column layouts start
- [ ] 1024px (Desktop) — full multi-column experience
- [ ] 1440px+ (Wide) — max-width container, centered

---

## 9. Performance Optimization Strategy

### Image Optimization
```astro
<!-- Astro Image Component -->
<Image
  src={import("../images/hero.jpg")}
  alt="Hero image"
  width={1200}
  height={600}
  loading="lazy"
  quality={80}
/>
```

**Optimizations:**
- Auto-generation of WebP and AVIF formats
- Responsive srcset generation
- Lazy loading (intersection observer)
- Automatic quality compression
- Next-gen format fallbacks

### CSS Optimization
- **Tailwind Purge:** Remove unused styles (automatic)
- **Critical CSS:** Inline critical styles above-the-fold
- **CSS Extraction:** Separate CSS file (not inline)
- **Minification:** Enabled in production builds

### JavaScript Optimization
- **Zero-JS Default:** No hydration for static content
- **Selective Enhancement:** `client:load` only where needed
  ```astro
  <!-- Form validation example -->
  <form client:load>
    <!-- Form inputs -->
  </form>
  ```
- **Bundle Splitting:** Code split per-page
- **Tree Shaking:** Unused code removed

### Caching Strategy
```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [
    // Cache static assets for 1 year
    {
      headers: {
        "/*.{woff2,woff,ttf}": {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
        "/images/**/*": {
          "Cache-Control": "public, max-age=2592000", // 30 days
        },
        "/**/*.html": {
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      },
    },
  ],
});
```

---

## 10. Browser Support & Compatibility

### Target Browsers
| Browser | Desktop | Mobile |
|---------|---------|--------|
| **Chrome** | Latest 2 versions | Latest 2 versions |
| **Firefox** | Latest 2 versions | Latest 2 versions |
| **Safari** | Latest 2 versions | iOS 14+ |
| **Edge** | Latest 2 versions | Latest 2 versions |

### Feature Support Fallbacks
- **CSS Grid:** Fallback to Flexbox for older browsers
- **Custom Properties:** Fallback values for CSS variables
- **Fetch API:** Polyfill if required (unlikely for this stack)
- **Intersection Observer:** Polyfill for image lazy loading (if needed)

### Testing Approach
- Cross-browser testing: BrowserStack (free tier) or manual testing
- Mobile testing: Physical devices + Chrome DevTools emulation
- Automated: Lighthouse CI (via GitHub Actions)

---

## 11. Deployment & Hosting

### Deployment Pipeline

**Environment:** Production (peterparsonson.com)

```
Local Git Repo
    ↓
GitHub/GitLab Push
    ↓
Hosting Provider Webhook
    ↓
Build Server
  - Run: npm install
  - Run: npm run build
  - Run: npm run test (optional)
    ↓
Deploy Artifacts to CDN
    ↓
Cache Invalidation
    ↓
DNS Routing
    ↓
Live at peterparsonson.com
```

### Build & Deploy Commands
```bash
# Development
npm run dev          # Local server (localhost:3000)

# Production Build
npm run build        # Output: dist/

# Preview Build
npm run preview      # Preview build locally

# Testing
npm run test         # Run test suite (if implemented)

# Linting
npm run lint         # Check code quality
npm run format       # Format code with Prettier
```

### Hosting Provider Configuration

**Netlify (Recommended):**
```toml
# netlify.toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = "dist"

[context.production]
  environment = { NODE_ENV = "production" }

[[redirects]]
  from = "/blog/category/:category"
  to = "/blog/?category=:category"
  status = 200
```

**Vercel:**
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Environment Variables
```bash
# .env.local (never commit)
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_AUDIENCE_ID=list_id_here
PUBLIC_ANALYTICS_ID=analytics_tracking_id  # Public, safe to commit
```

---

## 12. Security Headers & Hardening

### Content Security Policy (CSP)
```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'wasm-unsafe-eval' cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' api.mailchimp.com;
  frame-ancestors 'none';
```

### Security Headers
```http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### HTTPS & SSL
- **Enforcement:** Automatic HTTP → HTTPS redirect
- **Certificate:** Auto-renewed via Let's Encrypt (via hosting provider)
- **HSTS:** Enable `Strict-Transport-Security` header

### Form Security
- **CSRF Protection:** Token validation on POST requests
- **Input Validation:** Server-side validation (client-side is for UX only)
- **Rate Limiting:** 5 form submissions per hour per IP
- **Sanitization:** Escape user input to prevent XSS

---

## 13. Monitoring & Maintenance

### Performance Monitoring
- **Lighthouse CI:** Automated score tracking on every deploy
- **Web Vitals:** Google's Core Web Vitals monitoring
- **Uptime Monitoring:** Pingdom or UptimeRobot
- **Error Tracking:** Sentry (optional, for JavaScript errors)

### Analytics & Insights
- **Page Views:** Track by source (organic, direct, referral, social)
- **Conversion Events:** Email signups, Amazon clicks
- **User Behavior:** Scroll depth, time on page, bounce rate
- **Device/Browser:** Breakdown by device type, browser version

### Maintenance Checklist (Monthly)
- [ ] Check Lighthouse scores across all pages
- [ ] Review analytics for anomalies
- [ ] Verify email signup form functionality
- [ ] Test contact form submissions
- [ ] Check external links (Amazon, Mailchimp)
- [ ] Review security headers
- [ ] Update dependencies (npm audit)

---

## 14. API Specifications

### POST /api/subscribe (Email Signup)
**Request:**
```json
{
  "email": "reader@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (Success):**
```json
{
  "status": "success",
  "message": "Check your email to confirm subscription"
}
```

**Response (Error):**
```json
{
  "status": "error",
  "message": "This email is already subscribed"
}
```

**Status Codes:**
- `200`: Success
- `400`: Invalid request or duplicate email
- `500`: Server error

### POST /api/contact (Contact Form)
**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Interview Request",
  "category": "interview_request",
  "message": "I'd like to interview you for..."
}
```

**Response (Success):**
```json
{
  "status": "success",
  "message": "Message received. We'll be in touch soon."
}
```

---

## 15. Appendix: Configuration Files

### astro.config.mjs
```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  output: "static", // or "hybrid" if using SSR
  vite: {
    ssr: {
      external: ["mailchimp"],
    },
  },
});
```

### tsconfig.json
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsxImportSource": "astro",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

### tailwind.config.cjs
```javascript
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",
          teal: "#0D9488",
          red: "#DC2626",
          cream: "#F5F3FF",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

**Document Status:** Ready for Development
**Last Updated:** March 2026
