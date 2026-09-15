// Single source of truth for Book 1's publication state.
// Change `status` (and `amazonUrl` / `releaseDate`) here and every CTA,
// banner, badge, meta description and JSON-LD offer follows. No component
// may hardcode these strings.

export type BookStatus = 'coming_soon' | 'preorder' | 'available';

export const book = {
  title: 'The Tempest Toss',
  series: 'The John Hunter Series',
  seriesPosition: 1,
  status: 'available' as BookStatus,
  releaseDate: '2026-09-01',
  // Verified 2026-09-15: resolves to https://www.amazon.com/dp/B0HG3R6FMJ
  amazonUrl: 'https://a.co/d/016gqVly',
  launchListEnabled: true,
} as const;

type BookCopy = {
  ctaLabel: string;
  ctaHref: string;
  bannerText: string;
  statusLabel: string;
  availability: string;
  availabilitySentence: string;
};

const COPY: Record<BookStatus, BookCopy> = {
  available: {
    ctaLabel: 'Buy on Amazon',
    ctaHref: book.amazonUrl,
    bannerText: `${book.title} is available now on Amazon`,
    statusLabel: 'Out Now',
    availability: 'https://schema.org/InStock',
    availabilitySentence: `${book.title} is available now on Amazon in paperback and Kindle.`,
  },
  preorder: {
    ctaLabel: 'Pre-order on Amazon',
    ctaHref: book.amazonUrl,
    bannerText: `${book.title} is available to pre-order on Amazon`,
    statusLabel: 'Pre-Order',
    availability: 'https://schema.org/PreOrder',
    availabilitySentence: `${book.title} is available to pre-order on Amazon.`,
  },
  coming_soon: {
    ctaLabel: 'Get Launch Updates',
    ctaHref: '#join',
    bannerText: `${book.title} is coming soon`,
    statusLabel: 'Coming Soon',
    availability: 'https://schema.org/PreSale',
    availabilitySentence: `${book.title} is coming soon.`,
  },
};

/** Copy + schema values derived from `book.status`. */
export const bookCopy: BookCopy = COPY[book.status];

/** True when the primary CTA points off-site to Amazon. */
export const ctaIsExternal = bookCopy.ctaHref.startsWith('http');
