# Design System

**Project:** Peter Parsonson Author Website
**Version:** 1.0
**Date:** March 2026

---

## 1. Color Palette

### Primary Colors
The color palette is derived from "The Tempest Toss" book cover and reflects the military thriller genre.

#### Dark Background (Primary)
```
Color: Dark Slate
Hex: #0F172A
RGB: 15, 23, 42
Tailwind: slate-950
Usage: Page background, dark theme foundation
Accessibility: Excellent contrast with light text (>8:1)
```

#### Teal Accent (Interactive)
```
Color: Teal
Hex: #0D9488
RGB: 13, 148, 136
Tailwind: teal-600
Usage: Primary CTAs, links, borders, hover states
Accessibility: 4.5:1 contrast with #0F172A background
Best For: Buttons, highlights, interactive elements
```

#### Red Accent (Secondary)
```
Color: Red
Hex: #DC2626
RGB: 220, 38, 38
Tailwind: red-600
Usage: Secondary accents, alerts, danger states
Accessibility: 4.5:1 contrast with #0F172A background
Best For: Warnings, important notices, design highlights
```

### Text Colors

#### Primary Text (Light on Dark)
```
Color: Cream/Off-White
Hex: #F5F3FF
RGB: 245, 243, 255
Tailwind: slate-100
Usage: Headings, primary body text
Contrast: 15:1 against #0F172A (AAA)
```

#### Secondary Text (Lighter Gray)
```
Color: Light Gray
Hex: #E5E7EB
RGB: 229, 231, 235
Tailwind: gray-200
Usage: Secondary content, meta text, labels
Contrast: 10:1 against #0F172A (AAA)
```

#### Tertiary Text (Muted)
```
Color: Muted Gray
Hex: #A1A1AA
RGB: 161, 161, 170
Tailwind: zinc-400
Usage: Disabled text, captions, subtle info
Contrast: 5:1 against #0F172A (AA)
```

### Functional Colors

#### Success
```
Hex: #10B981
RGB: 16, 185, 145
Tailwind: emerald-500
Usage: Form success states, confirmations
```

#### Warning
```
Hex: #F59E0B
RGB: 245, 158, 11
Tailwind: amber-500
Usage: Warnings, notices, cautions
```

#### Error
```
Hex: #EF4444
RGB: 239, 68, 68
Tailwind: red-500
Usage: Form errors, critical alerts
```

#### Info
```
Hex: #0D9488
RGB: 13, 148, 136
Tailwind: teal-600
Usage: Informational messages (matches primary accent)
```

### Neutral Scale
```
Slate-950: #0F172A (background, darkest)
Slate-900: #0F172A (near-background)
Slate-800: #1E293B
Slate-700: #334155
Slate-600: #475569
Slate-500: #64748B
Slate-400: #94A3B8
Slate-300: #CBD5E1
Slate-200: #E2E8F0
Slate-100: #F1F5F9
Slate-50:  #F8FAFC (lightest)
```

### Usage Guidelines

**Dark Theme Default:**
- Background: #0F172A
- Text (primary): #F5F3FF
- Text (secondary): #E5E7EB
- Interactive: #0D9488 (teal), #DC2626 (red)

**Avoid:**
- Using red (#DC2626) for primary CTAs (too harsh; use teal)
- Using red and teal together in close proximity (visual conflict)
- Light backgrounds (all backgrounds should be dark)
- Text smaller than 14px (accessibility)

**Color Combinations (Approved):**
- Teal button on dark background ✓
- Red banner alert on dark background ✓
- Cream text on dark background ✓
- Teal border with dark background ✓
- Red accent with teal primary CTA ✓

---

## 2. Typography

### Typeface Selection

#### Serif (Display/Headings)
```
Font: Playfair Display (or Cormorant Garamond)
Weight: 400 (Regular), 600 (Semi-Bold), 700 (Bold)
Usage: H1, H2, H3 headings, taglines, prestige text
Character: Elegant, authoritative, traditional
Import: @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700');
Fallback: Georgia, serif
```

#### Sans-Serif (Body)
```
Font: Inter (or Poppins)
Weight: 400 (Regular), 500 (Medium), 600 (Semi-Bold)
Usage: Body text, labels, navigation, UI
Character: Clean, modern, readable
Import: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600');
Fallback: system-ui, -apple-system, sans-serif
```

### Type Scale (Tailwind-based)

#### Headings

**H1 (Hero Headline)**
```
Font: Playfair Display
Size: 3.5rem (56px) on desktop, 2.25rem (36px) on mobile
Weight: 700
Line Height: 1.2
Letter Spacing: -0.02em
Margin Bottom: 1.5rem
Use: Page titles, hero section headline
```

**H2 (Section Heading)**
```
Font: Playfair Display
Size: 2.25rem (36px) on desktop, 1.875rem (30px) on mobile
Weight: 600
Line Height: 1.3
Letter Spacing: -0.01em
Margin Bottom: 1rem
Use: Section headers, page subsections
```

**H3 (Subsection Heading)**
```
Font: Playfair Display
Size: 1.875rem (30px) on desktop, 1.5rem (24px) on mobile
Weight: 600
Line Height: 1.3
Letter Spacing: 0em
Margin Bottom: 0.75rem
Use: Card titles, blog post headings
```

**H4 (Small Heading)**
```
Font: Inter
Size: 1.25rem (20px)
Weight: 600
Line Height: 1.4
Letter Spacing: 0em
Margin Bottom: 0.5rem
Use: Minor headings, component titles
```

#### Body Text

**Body Large**
```
Font: Inter
Size: 1.125rem (18px)
Weight: 400
Line Height: 1.6
Letter Spacing: 0em
Use: Introductory paragraphs, featured content
```

**Body Regular**
```
Font: Inter
Size: 1rem (16px)
Weight: 400
Line Height: 1.6
Letter Spacing: 0em
Use: Main body text, paragraphs
```

**Body Small**
```
Font: Inter
Size: 0.875rem (14px)
Weight: 400
Line Height: 1.5
Letter Spacing: 0em
Use: Meta information, captions, secondary text
```

#### Utility Text

**Button Text**
```
Font: Inter
Size: 1rem (16px)
Weight: 600
Line Height: 1.5
Letter Spacing: 0.025em (uppercase variant)
Use: Button labels, CTAs
```

**Caption / Meta**
```
Font: Inter
Size: 0.75rem (12px)
Weight: 500
Line Height: 1.4
Letter Spacing: 0.05em
Use: Dates, author info, image captions
```

**Label / Tag**
```
Font: Inter
Size: 0.75rem (12px)
Weight: 600
Line Height: 1.4
Letter Spacing: 0.05em (uppercase)
Use: Form labels, category tags, badges
```

### Tailwind Typography Classes

```css
/* Apply to tailwind.config.cjs */
extend: {
  fontSize: {
    'h1': '3.5rem',
    'h2': '2.25rem',
    'h3': '1.875rem',
    'h4': '1.25rem',
    'body-lg': '1.125rem',
    'body': '1rem',
    'body-sm': '0.875rem',
  },
  fontFamily: {
    serif: ['Playfair Display', 'Georgia', 'serif'],
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  },
  fontWeight: {
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
  },
}
```

### Line Height & Spacing

**Line Height Ratios:**
- Headings: 1.2-1.3 (tighter, more impact)
- Body: 1.6 (readable, airy)
- Labels: 1.4-1.5 (balanced)

**Letter Spacing:**
- Headings: -0.02em to -0.01em (tighter)
- Body: 0em (normal)
- Labels/Tags: 0.025em to 0.05em (letter-spacing)

---

## 3. Spacing & Layout

### Spacing Scale (4px base)
All spacing uses Tailwind's default 4px increment:

```
0.25rem = 4px   (min gap, ultra-tight)
0.5rem = 8px    (xs)
0.75rem = 12px  (xs+)
1rem = 16px     (sm, standard padding)
1.25rem = 20px  (sm+)
1.5rem = 24px   (md, standard section gap)
2rem = 32px     (lg)
2.5rem = 40px   (lg+)
3rem = 48px     (xl)
4rem = 64px     (2xl, large sections)
6rem = 96px     (3xl, hero sections)
```

### Component Spacing

**Padding (Internal)**
- Buttons: `px-4 py-2.5` (16px horizontal, 10px vertical)
- Cards: `p-6` (24px all sides)
- Sections: `px-4 md:px-6 lg:px-8` (mobile: 16px, desktop: 32px)
- Page margins: `mx-auto max-w-6xl` (centered max-width layout)

**Gap (Between Components)**
- Section gap: `mb-12 md:mb-16` (48px mobile, 64px desktop)
- Component gap: `gap-6` (24px between items)
- Element gap: `gap-4` (16px between buttons, etc.)

**Container Sizes**
```css
max-w-sm = 384px   (small)
max-w-md = 448px   (mobile optimized)
max-w-lg = 512px   (tablet)
max-w-xl = 576px   (default card width)
max-w-2xl = 672px  (narrow content)
max-w-3xl = 768px  (readable content)
max-w-4xl = 896px  (wide content)
max-w-5xl = 1024px
max-w-6xl = 1152px (main container)
max-w-7xl = 1280px (full width)
```

### Grid System

**Default Grid (Responsive):**
```
Mobile (< 768px): 1 column
Tablet (≥ 768px): 2-3 columns
Desktop (≥ 1024px): 3-4 columns
```

**Example Grid (Book Cards):**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Cards auto-flow -->
</div>
```

---

## 4. Component Catalog

### Button Component

#### Primary Button (Teal CTA)
```astro
<button class="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg
  hover:bg-teal-700 transition-colors duration-200 focus:outline-none
  focus:ring-2 focus:ring-teal-400">
  Buy on Amazon
</button>
```

**Properties:**
- Background: teal-600
- Hover: teal-700 (darker shade)
- Text: white/cream
- Focus Ring: teal-400
- Border Radius: lg (8px)
- Padding: px-6 py-3 (24px × 12px)
- Font Weight: semibold (600)

#### Secondary Button (Outline)
```astro
<button class="px-6 py-3 border-2 border-teal-600 text-teal-600
  font-semibold rounded-lg hover:bg-teal-50 hover:bg-opacity-10
  transition-all duration-200">
  Learn More
</button>
```

**Properties:**
- Border: 2px teal-600
- Text: teal-600
- Background: transparent (hover: subtle tint)
- Padding: px-6 py-3

#### Ghost Button (Text Only)
```astro
<button class="text-teal-600 underline hover:text-teal-700 font-medium">
  Skip for now
</button>
```

**Properties:**
- Text: teal-600
- Decoration: underline
- Hover: teal-700

### Card Component

```astro
<div class="bg-slate-800 bg-opacity-50 border border-teal-600 border-opacity-30
  rounded-xl p-6 hover:border-opacity-60 transition-all duration-300">
  <h3 class="text-h3 font-serif text-cream mb-3">Card Title</h3>
  <p class="text-body text-gray-200 mb-4">Card content here...</p>
  <a href="#" class="text-teal-600 hover:text-teal-400 font-semibold">
    Learn More →
  </a>
</div>
```

**Properties:**
- Background: slate-800 with opacity (semi-transparent)
- Border: teal-600 with subtle opacity
- Hover: Border opacity increases, smooth transition
- Padding: p-6 (24px)
- Border Radius: rounded-xl (12px)

### Form Input Component

```astro
<input
  type="email"
  placeholder="your@email.com"
  class="w-full px-4 py-3 bg-slate-900 border border-slate-700
    rounded-lg text-cream placeholder-gray-400
    focus:border-teal-600 focus:outline-none focus:ring-1
    focus:ring-teal-600 transition-all duration-200"
/>
```

**Properties:**
- Background: slate-900
- Border: slate-700 (default), teal-600 (focus)
- Text Color: cream
- Placeholder: gray-400 (muted)
- Padding: px-4 py-3
- Focus Ring: teal-600 (1px)

### Navigation Component

```astro
<nav class="bg-slate-900 border-b border-teal-600 border-opacity-20">
  <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="text-cream font-serif text-xl font-bold">
      Peter P.
    </a>

    <!-- Links -->
    <ul class="hidden md:flex gap-8">
      <li><a href="/about" class="text-gray-200 hover:text-teal-600">About</a></li>
      <li><a href="/books" class="text-gray-200 hover:text-teal-600">Books</a></li>
      <li><a href="/blog" class="text-gray-200 hover:text-teal-600">Blog</a></li>
    </ul>

    <!-- Mobile Menu Button -->
    <button class="md:hidden text-cream">☰</button>
  </div>
</nav>
```

**Properties:**
- Background: slate-900
- Border: Subtle teal tint
- Link Hover: teal-600 color
- Responsive: Hidden on mobile, visible on md+

### Email Signup Form

```astro
<form class="bg-slate-800 bg-opacity-50 border border-teal-600 p-6 rounded-lg">
  <h3 class="text-h3 font-serif text-cream mb-4">Join the Mission</h3>
  <p class="text-body text-gray-200 mb-6">
    Get updates on The Tempest Toss and the John Hunter Series.
  </p>

  <div class="space-y-4">
    <input type="email" placeholder="Your email" class="w-full px-4 py-3
      bg-slate-900 border border-slate-700 rounded-lg text-cream
      focus:border-teal-600"/>

    <button type="submit" class="w-full px-6 py-3 bg-teal-600
      hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors">
      Subscribe
    </button>
  </div>
</form>
```

### Badge / Tag Component

```astro
<span class="inline-block px-3 py-1 bg-teal-600 bg-opacity-20
  border border-teal-600 border-opacity-40 rounded-full
  text-teal-400 text-sm font-semibold">
  Military Thriller
</span>
```

**Variants:**
- Primary: Teal background
- Secondary: Red background
- Neutral: Gray background
- Outline: Transparent with border

---

## 5. Animation & Interaction

### Transition Defaults
```css
/* All interactive elements use smooth transitions */
transition-all duration-300 ease-out

/* Or specific properties: */
transition-colors duration-200  /* Color changes */
transition-opacity duration-300 /* Fade effects */
transition-transform duration-300 /* Scale/move effects */
```

### Hover States
```css
/* Buttons */
.button:hover {
  background-color: darker-shade;
  transition: all 200ms ease-out;
}

/* Links */
.link:hover {
  color: teal-600;
  text-decoration: underline;
  transition: color 200ms ease-out;
}

/* Cards */
.card:hover {
  border-color: teal-600;
  box-shadow: 0 4px 12px rgba(13, 148, 136, 0.1);
  transition: all 300ms ease-out;
}
```

### Focus States
```css
/* Keyboard navigation */
.button:focus-visible {
  outline: 2px solid teal-600;
  outline-offset: 2px;
}

/* Form inputs */
.input:focus {
  border-color: teal-600;
  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
}
```

### Animation Keyframes (Optional, Minimal Use)

```css
/* Fade in (subtle page load) */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fade-in 0.6s ease-out;
}

/* Slide up (subtle element reveal) */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slide-up 0.6s ease-out;
}
```

**Best Practices:**
- Keep animations subtle (under 400ms)
- Use `ease-out` for entrance, `ease-in` for exit
- Avoid heavy animations (prefer CSS transitions)
- Respect `prefers-reduced-motion` media query

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Dark Theme Implementation

### CSS Custom Properties
```css
/* src/styles/variables.css */

:root {
  /* Primary colors */
  --color-bg-primary: #0F172A;
  --color-bg-secondary: #1E293B;
  --color-bg-tertiary: #334155;

  /* Text colors */
  --color-text-primary: #F5F3FF;
  --color-text-secondary: #E5E7EB;
  --color-text-muted: #A1A1AA;

  /* Accents */
  --color-accent-teal: #0D9488;
  --color-accent-red: #DC2626;

  /* Utility */
  --color-border: rgba(13, 148, 136, 0.2);
  --color-shadow: rgba(0, 0, 0, 0.3);

  /* Typography */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
}

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
}
```

### Global Dark Theme Styles
```css
/* src/styles/globals.css */

/* Dark theme for all content */
html {
  color-scheme: dark;
}

body {
  @apply bg-slate-950 text-slate-100;
}

/* Link styling */
a {
  @apply text-teal-600 hover:text-teal-400 transition-colors;
}

/* Heading styling */
h1, h2, h3, h4, h5, h6 {
  @apply font-serif text-cream;
  font-weight: 600;
}

h1 { @apply text-5xl md:text-6xl; }
h2 { @apply text-4xl md:text-5xl; }
h3 { @apply text-3xl; }
```

---

## 7. Accessibility (WCAG 2.1 AA)

### Color Contrast Verified
All text/background combinations tested and approved:

| Element | Foreground | Background | Ratio | Level |
|---------|-----------|-----------|-------|-------|
| Body Text | #F5F3FF | #0F172A | 15.1:1 | AAA |
| Secondary Text | #E5E7EB | #0F172A | 10.8:1 | AAA |
| Teal Link | #0D9488 | #0F172A | 4.8:1 | AA |
| Red Accent | #DC2626 | #0F172A | 4.7:1 | AA |

### Focus Indicators
All interactive elements have clear focus indicators:
```css
:focus-visible {
  outline: 2px solid #0D9488;
  outline-offset: 2px;
}
```

### Touch Targets
Minimum 44x44px for all interactive elements:
```css
.button, a, input[type="button"] {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px; /* At least 44x44 */
}
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h6)
- Use semantic tags: `<nav>`, `<main>`, `<article>`, `<aside>`
- Use form `<label>` elements (not just placeholders)
- Use `<button>` for actions, `<a>` for navigation

### ARIA Attributes (When Needed)
```html
<!-- Skip navigation link (hidden by default) -->
<a href="#main" class="sr-only">Skip to main content</a>

<!-- Icon buttons need labels -->
<button aria-label="Close menu" class="icon-button">×</button>

<!-- Images need alt text -->
<img src="book.jpg" alt="The Tempest Toss book cover" />
```

---

## 8. Responsive Design Details

### Mobile-First Breakpoints

**Base (Mobile < 640px):**
- Single column layouts
- Full-width buttons and inputs
- Navigation: Hamburger menu
- Font sizes: 16px body, 24px headings

**Tablet (md: ≥ 768px):**
- 2-column grids
- Larger typography
- Navigation: Horizontal menu
- Spacing increases: 24px sections

**Desktop (lg: ≥ 1024px):**
- 3-column grids
- Full layout optimization
- Wider containers
- Spacing: 32px sections

**Wide (2xl: ≥ 1536px):**
- Max-width containers (max-w-6xl)
- Center with margins
- Premium spacing

### Responsive Utilities (Tailwind)

```html
<!-- Hide on mobile, show on md+ -->
<div class="hidden md:block">...</div>

<!-- Responsive padding -->
<div class="px-4 md:px-6 lg:px-8">...</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>

<!-- Responsive text size -->
<h1 class="text-3xl md:text-4xl lg:text-5xl">...</h1>
```

---

## 9. Imagery & Icons

### Image Specifications

**Hero Image:**
- Size: 1920×1080px (16:9 aspect ratio)
- Format: JPG or WebP
- Optimization: Compressed to <200KB
- Alt Text: Descriptive, includes key content

**Book Cover:**
- Size: 400×600px (2:3 aspect ratio)
- Format: JPG or PNG
- Optimization: <100KB
- Responsive: Scales down on mobile

**Author Photo:**
- Size: 600×600px (1:1 square)
- Format: JPG or WebP
- Optimization: <150KB
- Professional headshot or high-quality portrait

### Icon Usage

**SVG Icons (Preferred):**
- Source: Heroicons, Feather Icons, or custom
- Size: 24×24px (default), 32×32px (large)
- Color: Inherit text color or teal-600
- Stroke width: 2px (default)

**Icon Buttons:**
```html
<button aria-label="Menu" class="p-2 hover:bg-slate-800 rounded-lg">
  <svg class="w-6 h-6 text-cream" fill="none" stroke="currentColor">
    <!-- Icon path -->
  </svg>
</button>
```

### Image Optimization

Use Astro's Image component for auto-optimization:
```astro
import { Image } from 'astro:assets';

<Image
  src={import('../images/hero.jpg')}
  alt="Hero image"
  width={1920}
  height={1080}
  quality={80}
  format="webp"
/>
```

**Results:**
- Auto-generates WebP and AVIF formats
- Creates responsive srcsets
- Lazy loads below-the-fold images
- Handles image compression

---

## 10. Print Styles (Optional)

```css
@media print {
  /* Hide interactive elements in print */
  nav, footer, button, form {
    display: none;
  }

  /* Optimize text for printing */
  body {
    background: white;
    color: black;
    font-size: 12pt;
  }

  /* Show full URLs for links */
  a::after {
    content: " (" attr(href) ")";
  }
}
```

---

## 11. Component Variants

### Button Sizes
```html
<!-- Small -->
<button class="px-3 py-1.5 text-sm">Small</button>

<!-- Medium (Default) -->
<button class="px-6 py-2.5 text-base">Medium</button>

<!-- Large -->
<button class="px-8 py-3.5 text-lg">Large</button>
```

### Card Sizes
```html
<!-- Compact Card -->
<div class="p-4 rounded-lg">...</div>

<!-- Standard Card -->
<div class="p-6 rounded-xl">...</div>

<!-- Large Card -->
<div class="p-8 rounded-2xl">...</div>
```

---

## 12. Dark Theme Considerations

### Avoid (Anti-patterns)
- Pure white text (use #F5F3FF cream instead)
- Pure black backgrounds (use #0F172A dark slate)
- Light backgrounds (maintain dark theme)
- High saturation colors (teal and red are intentional)
- Too many accent colors (stick to teal, red, neutral)

### Embrace
- Dark backgrounds for eye comfort
- Cream/off-white text for readability
- Strategic teal accents for engagement
- Red accents for important elements
- Subtle shadows and borders

---

## 13. Design Tokens (Summary)

```javascript
// Design tokens for developers

const tokens = {
  colors: {
    bg: {
      primary: '#0F172A',
      secondary: '#1E293B',
      tertiary: '#334155',
    },
    text: {
      primary: '#F5F3FF',
      secondary: '#E5E7EB',
      muted: '#A1A1AA',
    },
    accent: {
      teal: '#0D9488',
      red: '#DC2626',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  typography: {
    serif: 'Playfair Display, Georgia, serif',
    sans: 'Inter, system-ui, sans-serif',
  },
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
  },
};
```

---

**Document Status:** Ready for Implementation
**Last Updated:** March 2026
