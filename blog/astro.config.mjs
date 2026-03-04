import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://keyboardwarrior.cc',
  base: '/blog',
  integrations: [sitemap()],
});
