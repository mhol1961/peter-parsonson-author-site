# Peter P. Author Website

A professional military thriller author website built with Astro 5, Tailwind CSS 4, and optimized for SEO and mobile devices.

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro    # Navigation with mobile menu
│   ├── Footer.astro    # Footer with links and newsletter
│   ├── SEOHead.astro   # SEO meta tags and structured data
│   ├── BookCard.astro  # Book display component
│   ├── ContactForm.astro # Contact form with validation
│   └── NewsletterSignup.astro # Email signup form
├── layouts/            # Layout templates
│   └── BaseLayout.astro # Main site layout
├── pages/              # Site pages (routes)
│   ├── index.astro     # Home page
│   ├── about.astro     # About author
│   ├── books.astro     # Books catalog
│   ├── blog.astro      # Blog listings
│   └── contact.astro   # Contact page
├── styles/             # Global styles
│   └── global.css      # Tailwind + custom CSS
└── env.d.ts           # TypeScript definitions

public/
├── robots.txt         # SEO robots directive
└── _headers           # Netlify security headers

```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Dark Theme Design**: Slate-900 background with teal and red accents
- **Mobile Responsive**: Mobile-first design approach
- **SEO Optimized**:
  - Meta tags and structured data (JSON-LD)
  - Open Graph and Twitter Card support
  - Sitemap generation
  - robots.txt
- **Accessible**: WCAG compliance with semantic HTML
- **Email Integration**:
  - Mailchimp newsletter signup (configured with placeholder)
  - Contact form with Formspree integration
- **Performance**: Optimized images, lazy loading, minified CSS
- **Security Headers**: CSP, X-Frame-Options, referrer policy

## Color Palette

- **Primary (Teal)**:
  - Default: `#0D9488`
  - Light: `#14B8A6`
  - Dark: `#0F766E`

- **Accent (Red)**:
  - Default: `#DC2626`
  - Light: `#EF4444`
  - Dark: `#B91C1C`

- **Dark Theme**:
  - Default: `#0F172A`
  - Lighter: `#1E293B`
  - Card: `#162032`

- **Cream**: `#F5F0E8`

## Typography

- **Headings**: Playfair Display (serif) - professional, elegant
- **Body**: Inter (sans-serif) - clean, readable

## Configuration

### Site URL
Update `astro.config.mjs` with your domain:
```javascript
site: 'https://peterparsonson.com'
```

### Mailchimp
1. Update `src/components/NewsletterSignup.astro`:
   - Replace `YOUR_LIST_ID` and `YOUR_FORM_ID` with actual values
   - Update form action URL

### Formspree
1. Update `src/components/ContactForm.astro`:
   - Replace `YOUR_FORM_ID` with actual Formspree ID
   - Update form action URL

### Analytics
Add your analytics script to `src/layouts/BaseLayout.astro`

## Development Notes

- Components use Astro's file-based routing
- CSS is scoped to components where applicable
- JavaScript islands are used for interactive components
- No external UI frameworks required (pure Tailwind)

## Deployment

### Netlify
The project includes `_headers` file for Netlify. Deployment is straightforward:

```bash
# Build
npm run build

# The dist/ folder is ready to deploy
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Hosts
Standard static site hosting works. Ensure the `dist/` folder is served as root.

## SEO Checklist

- [x] Meta descriptions on all pages
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] JSON-LD structured data
- [x] Sitemap generation
- [x] robots.txt
- [x] Security headers
- [x] Mobile responsive
- [x] Fast load times
- [ ] Google Search Console setup
- [ ] Google Analytics setup
- [ ] Bing Webmaster Tools

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This website template is custom-built for Peter P. Modify as needed for your use case.

## Support

For issues or questions, refer to the Astro documentation:
- https://docs.astro.build/
- https://tailwindcss.com/
