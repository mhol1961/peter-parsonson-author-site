import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://psparsonson.com',
  integrations: [
    sitemap(),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['svgo']
    }
  }
});
